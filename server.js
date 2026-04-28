const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const port = Number(process.env.PORT || 8787);
const root = __dirname;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);

    if (request.method === "POST" && requestUrl.pathname === "/api/generate-questions") {
      await handleGenerateQuestions(request, response);
      return;
    }

    serveStatic(requestUrl, response);
  } catch (error) {
    sendJson(response, 500, { error: "server_error", message: error.message });
  }
});

server.listen(port, () => {
  console.log(`CircuitSprout is running at http://localhost:${port}`);
});

function serveStatic(requestUrl, response) {
  const pathname = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const filePath = path.normalize(path.join(root, pathname));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream"
    });
    response.end(data);
  });
}

async function handleGenerateQuestions(request, response) {
  const provider = getAiProvider();
  if (!provider) {
    sendJson(response, 503, {
      error: "missing_api_key",
      message: "No AI provider key is configured. Falling back to local generation."
    });
    return;
  }

  const body = await readJsonBody(request);
  const sourceText = String(body.text || "").trim().slice(0, 12000);
  const course = String(body.course || "UCLA ECE").slice(0, 80);

  if (sourceText.length < 20) {
    sendJson(response, 400, { error: "not_enough_text", message: "Need more extracted text to generate questions." });
    return;
  }

  const payload = await callQuestionGenerator(provider, sourceText, course);
  sendJson(response, 200, payload);
}

function getAiProvider() {
  const requested = String(process.env.AI_PROVIDER || "").toLowerCase();
  if (requested === "openrouter") return process.env.OPENROUTER_API_KEY ? "openrouter" : null;
  if (requested === "gemini") return process.env.GEMINI_API_KEY ? "gemini" : null;
  if (requested === "openai") return process.env.OPENAI_API_KEY ? "openai" : null;
  if (process.env.OPENROUTER_API_KEY) return "openrouter";
  if (process.env.GEMINI_API_KEY) return "gemini";
  if (process.env.OPENAI_API_KEY) return "openai";
  return null;
}

async function callQuestionGenerator(provider, sourceText, course) {
  if (provider === "openrouter") return callOpenRouterQuestionGenerator(sourceText, course);
  if (provider === "gemini") return callGeminiQuestionGenerator(sourceText, course);
  return callOpenAIQuestionGenerator(sourceText, course);
}

async function callOpenAIQuestionGenerator(sourceText, course) {
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  const apiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: "You create concise electrical engineering practice questions for a Duolingo-style app. Use only the provided source text. Do not mention copyrighted source names unless present in the text. Prefer UCLA ECE course language when relevant."
            }
          ]
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Course context: ${course}\n\nSource text:\n${sourceText}\n\nCreate 5 to 8 practice questions. Use only types \"choice\" and \"fill\". For choice, provide exactly four options and make answer exactly match one option. For fill, use a short numeric or technical-term answer and set options to an empty array. Include helpful hints and explanations.`
            }
          ]
        }
      ],
      text: {
        format: {
          type: "json_schema",
          name: "question_set",
          strict: true,
          schema: questionSchema()
        }
      }
    })
  });

  const data = await apiResponse.json().catch(() => ({}));
  if (!apiResponse.ok) {
    throw new Error(data.error?.message || `OpenAI request failed with ${apiResponse.status}`);
  }

  const parsed = parseOpenAIJson(data);
  return {
    source: "openai",
    model,
    questions: normalizeGeneratedQuestions(parsed.questions || [])
  };
}

async function callOpenRouterQuestionGenerator(sourceText, course) {
  const model = process.env.OPENROUTER_MODEL || "google/gemini-2.0-flash-exp:free";
  const apiResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.APP_URL || `http://localhost:${port}`,
      "X-Title": "CircuitSprout"
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: questionSystemPrompt() },
        { role: "user", content: questionUserPrompt(sourceText, course) }
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "question_set",
          strict: true,
          schema: questionSchema()
        }
      }
    })
  });

  const data = await apiResponse.json().catch(() => ({}));
  if (!apiResponse.ok) {
    throw new Error(data.error?.message || `OpenRouter request failed with ${apiResponse.status}`);
  }

  const parsed = parseJsonText(data.choices?.[0]?.message?.content);
  return {
    source: "openrouter",
    model,
    questions: normalizeGeneratedQuestions(parsed.questions || [])
  };
}

async function callGeminiQuestionGenerator(sourceText, course) {
  const model = process.env.GEMINI_MODEL || "gemini-1.5-flash";
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(process.env.GEMINI_API_KEY)}`;
  const apiResponse = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: `${questionSystemPrompt()}\n\n${questionUserPrompt(sourceText, course)}` }]
        }
      ],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: questionSchema()
      }
    })
  });

  const data = await apiResponse.json().catch(() => ({}));
  if (!apiResponse.ok) {
    throw new Error(data.error?.message || `Gemini request failed with ${apiResponse.status}`);
  }

  const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("");
  const parsed = parseJsonText(text);
  return {
    source: "gemini",
    model,
    questions: normalizeGeneratedQuestions(parsed.questions || [])
  };
}

function questionSystemPrompt() {
  return "You create concise electrical engineering practice questions for a Duolingo-style app. Use only the provided source text. Do not mention copyrighted source names unless present in the text. Prefer UCLA ECE course language when relevant.";
}

function questionUserPrompt(sourceText, course) {
  return `Course context: ${course}\n\nSource text:\n${sourceText}\n\nCreate 5 to 8 practice questions. Use only types \"choice\" and \"fill\". For choice, provide exactly four options and make answer exactly match one option. For fill, use a short numeric or technical-term answer and set options to an empty array. Include helpful hints and explanations. Return only JSON matching the schema.`;
}

function parseOpenAIJson(data) {
  const text = data.output_text || data.output?.flatMap((item) => item.content || [])
    .find((content) => content.type === "output_text")?.text;

  return parseJsonText(text);
}

function parseJsonText(text) {
  if (!text) {
    throw new Error("AI response did not include generated JSON.");
  }

  const cleaned = String(text).trim().replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
  return JSON.parse(cleaned);
}

function questionSchema() {
  return {
    type: "object",
    additionalProperties: false,
    properties: {
      questions: {
        type: "array",
        minItems: 4,
        maxItems: 8,
        items: {
          type: "object",
          additionalProperties: false,
          properties: {
            type: { type: "string", enum: ["choice", "fill"] },
            prompt: { type: "string" },
            hint: { type: "string" },
            options: {
              type: "array",
              items: { type: "string" },
              minItems: 0,
              maxItems: 4
            },
            answer: { type: "string" },
            suffix: { type: "string" },
            tolerance: { type: "number" },
            explain: { type: "string" }
          },
          required: ["type", "prompt", "hint", "options", "answer", "suffix", "tolerance", "explain"]
        }
      }
    },
    required: ["questions"]
  };
}

function normalizeGeneratedQuestions(questions) {
  return questions
    .filter((question) => question.prompt && question.answer && ["choice", "fill"].includes(question.type))
    .map((question) => ({
      type: question.type,
      prompt: String(question.prompt).slice(0, 360),
      hint: String(question.hint || "Use the uploaded source material.").slice(0, 220),
      options: question.type === "choice" ? question.options.slice(0, 4).map(String) : [],
      answer: String(question.answer),
      suffix: String(question.suffix || ""),
      tolerance: Number(question.tolerance || 0),
      explain: String(question.explain || "This answer follows from the uploaded material.").slice(0, 260)
    }))
    .slice(0, 8);
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 200000) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error("Invalid JSON body"));
      }
    });
    request.on("error", reject);
  });
}

function sendJson(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}
