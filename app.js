const lessons = [
  {
    id: "ee2",
    title: "EE 2: Physics for EEs",
    company: "UCLA lower-division core",
    topic: "Fields, waves, and devices",
    color: "#00a86b",
    questions: [
      {
        type: "choice",
        prompt: "EE 2 warmup: a uniform electric field of 200 V/m points in +x. How much potential change occurs moving 3 cm in +x?",
        hint: "Use delta V = -E dot delta x. Convert centimeters to meters.",
        options: ["-6 V", "-0.06 V", "+0.06 V", "+6 V"],
        answer: "-6 V",
        explain: "Moving 0.03 m along the field gives delta V = -200 * 0.03 = -6 V."
      },
      {
        type: "fill",
        prompt: "A photon has wavelength 500 nm. Estimate its energy in eV.",
        hint: "Use E(eV) = 1240 / wavelength(nm).",
        answer: "2.48",
        tolerance: 0.15,
        suffix: "eV",
        explain: "1240 / 500 nm is 2.48 eV, a useful physics-for-EEs conversion."
      },
      {
        type: "choice",
        prompt: "For a plane electromagnetic wave in free space, which fields are perpendicular to the direction of travel?",
        hint: "A propagating free-space wave is transverse.",
        options: ["Only E", "Only B", "Both E and B", "Neither field"],
        answer: "Both E and B",
        explain: "In a transverse electromagnetic wave, E and B are both perpendicular to propagation and to each other."
      },
      {
        type: "order",
        prompt: "Order a quick semiconductor intuition path for an illuminated photodiode.",
        hint: "Light creates carriers before the external circuit can measure current.",
        answer: ["Photon absorption", "Electron-hole pair generation", "Carrier separation by junction field", "Photocurrent in external circuit"],
        explain: "Photodiode current starts with absorption, then carrier generation, field-driven separation, and current flow."
      },
      {
        type: "fill",
        prompt: "A capacitor stores 2.0 microcoulombs at 5 V. What is its capacitance in microfarads?",
        hint: "Use Q = C V.",
        answer: "0.4",
        tolerance: 0.05,
        suffix: "uF",
        explain: "C = Q / V = 2.0 uC / 5 V = 0.4 uF."
      },
      {
        type: "choice",
        prompt: "Which physical effect most directly explains current flow in a metal wire under an applied electric field?",
        hint: "Think of mobile charge carriers responding to a field.",
        options: ["Electron drift", "Nuclear fusion", "Photon emission", "Magnetic hysteresis"],
        answer: "Electron drift",
        explain: "The field causes conduction electrons to drift, producing macroscopic current."
      }
    ]
  },
  {
    id: "ee3",
    title: "EE 3: Intro to EE",
    company: "UCLA sophomore foundation",
    topic: "Circuits and EE systems",
    color: "#2266cc",
    questions: [
      {
        type: "choice",
        prompt: "EE 3 intro: which invention is most directly tied to automatic computation and control?",
        hint: "Think of the digital switching element behind modern computers.",
        options: ["Transistor", "Steam turbine", "Transformer oil", "Mercury thermometer"],
        answer: "Transistor",
        explain: "Transistors enabled compact switching and amplification, making automatic computation practical."
      },
      {
        type: "order",
        prompt: "Order the EE 3 design flow for a simple light-sensing alarm.",
        hint: "Define behavior before wiring and measuring.",
        answer: ["Define threshold behavior", "Choose sensor and divider", "Build comparator circuit", "Test alarm output"],
        explain: "A clean design flow starts with requirements, then sensing, circuitry, and verification."
      },
      {
        type: "fill",
        prompt: "A 9 V battery drives a 3 kOhm resistor. What current flows in mA?",
        hint: "Use Ohm's law I = V / R.",
        answer: "3",
        tolerance: 0.2,
        suffix: "mA",
        explain: "9 V / 3000 ohms = 0.003 A, or 3 mA."
      },
      {
        type: "choice",
        prompt: "A lab DMM in voltage mode should usually be connected how?",
        hint: "Voltage is measured across an element.",
        options: ["In parallel", "In series", "As an open switch", "Only to ground"],
        answer: "In parallel",
        explain: "A voltmeter measures potential difference across two nodes, so it is placed in parallel."
      },
      {
        type: "fill",
        prompt: "A 5 V supply delivers 40 mA to a small module. How much power is this in mW?",
        hint: "Use P = V I, with current in amps.",
        answer: "200",
        tolerance: 8,
        suffix: "mW",
        explain: "5 V * 0.040 A = 0.20 W, or 200 mW."
      },
      {
        type: "choice",
        prompt: "Which system is a classic EE 3 example of telecommunication?",
        hint: "It moves information over electromagnetic links.",
        options: ["Wireless phone link", "Hydraulic jack", "Ball bearing", "Heat sink fin"],
        answer: "Wireless phone link",
        explain: "Telecommunication systems encode and transmit information through electrical or electromagnetic signals."
      }
    ]
  },
  {
    id: "ee10",
    title: "EE 10: Circuit Theory I",
    company: "UCLA circuits core",
    topic: "Resistive circuits and transients",
    color: "#7c3aed",
    questions: [
      {
        type: "choice",
        prompt: "EE 10 node-voltage setup: what law is usually written at each unknown node?",
        hint: "Currents entering and leaving a node must balance.",
        options: ["KCL", "Snell's law", "Faraday rotation", "Nyquist theorem"],
        answer: "KCL",
        explain: "Nodal analysis applies Kirchhoff's Current Law at each unknown node."
      },
      {
        type: "order",
        prompt: "Order the steps to find a Thevenin equivalent seen by a load.",
        hint: "Find open-circuit voltage, then equivalent resistance with independent sources deactivated.",
        answer: ["Remove the load", "Find open-circuit voltage", "Deactivate independent sources", "Find equivalent resistance"],
        explain: "Thevenin form is Vth in series with Rth as seen from the load terminals."
      },
      {
        type: "choice",
        prompt: "A 10 V source feeds 2 kOhm and 3 kOhm in series. What is the current?",
        hint: "Series resistances add.",
        options: ["1 mA", "2 mA", "3.3 mA", "5 mA"],
        answer: "2 mA",
        explain: "The total resistance is 5 kOhm, so I = 10 V / 5 kOhm = 2 mA."
      },
      {
        type: "fill",
        prompt: "A 1 kOhm resistor carries 5 mA. What voltage is across it?",
        hint: "Use V = I R.",
        answer: "5",
        tolerance: 0.2,
        suffix: "V",
        explain: "0.005 A * 1000 ohms = 5 V."
      },
      {
        type: "choice",
        prompt: "For an RC circuit with R = 2 kOhm and C = 10 uF, what is the time constant?",
        hint: "tau = R C.",
        options: ["0.2 ms", "2 ms", "20 ms", "200 ms"],
        answer: "20 ms",
        explain: "2000 ohms * 10 microfarads = 0.02 s, or 20 ms."
      },
      {
        type: "order",
        prompt: "Order a clean EE 10 circuit-solving workflow.",
        hint: "Model first, then write equations, solve, and sanity-check units.",
        answer: ["Label nodes and reference", "Write KCL or KVL equations", "Solve unknowns", "Check power and units"],
        explain: "Good circuit analysis is mostly disciplined setup, then algebra and physical checks."
      }
    ]
  },
  {
    id: "ee102",
    title: "EE 102: Systems and Signals",
    company: "UCLA signals core",
    topic: "LTI systems, convolution, transforms",
    color: "#d97706",
    questions: [
      {
        type: "choice",
        prompt: "EE 102: which operation gives the output of an LTI system from input x(t) and impulse response h(t)?",
        hint: "LTI systems are characterized by impulse response.",
        options: ["Convolution", "Modulo addition", "Matrix transpose", "Quantization only"],
        answer: "Convolution",
        explain: "For an LTI system, y(t) = x(t) * h(t), the convolution of input with impulse response."
      },
      {
        type: "fill",
        prompt: "A sinusoid has angular frequency 100*pi rad/s. What is its frequency in Hz?",
        hint: "f = omega / (2*pi).",
        answer: "50",
        tolerance: 1,
        suffix: "Hz",
        explain: "100*pi / (2*pi) = 50 Hz."
      },
      {
        type: "order",
        prompt: "Order the steps to analyze a stable LTI filter from a block diagram.",
        hint: "Get the model, then frequency behavior, then time-domain implication.",
        answer: ["Find impulse response", "Take Fourier or Laplace transform", "Identify magnitude response", "Predict output behavior"],
        explain: "Systems and signals connects time-domain impulse response with transform-domain filtering behavior."
      },
      {
        type: "choice",
        prompt: "Which signal is periodic?",
        hint: "Periodic means x(t + T) = x(t) for some positive T.",
        options: ["cos(20*pi*t)", "e^(-t)u(t)", "single rectangular pulse", "random thermal noise sample"],
        answer: "cos(20*pi*t)",
        explain: "A cosine repeats with period T = 2*pi / omega, so cos(20*pi*t) is periodic."
      },
      {
        type: "fill",
        prompt: "A first-order low-pass has cutoff frequency 200 Hz. Estimate its time constant in ms.",
        hint: "tau = 1 / (2*pi*fc).",
        answer: "0.8",
        tolerance: 0.15,
        suffix: "ms",
        explain: "1 / (2*pi*200) is about 0.000796 s, or 0.8 ms."
      },
      {
        type: "scope",
        prompt: "Which trace best represents a low-pass filtered version of a signal with high-frequency ripple?",
        hint: "The filtered trace should keep the slow trend and suppress fast oscillations.",
        options: ["A", "B", "C"],
        answer: "B",
        explain: "Trace B is the smoothed version, matching the low-pass intuition taught in systems and signals."
      }
    ]
  }
];

const defaultProgress = {
  lessonIndex: 0,
  questionIndex: 0,
  xp: 0,
  streak: 0,
  hearts: 5,
  solvedToday: 0,
  completed: {},
  notes: [],
  uploadedQuestions: [],
  uploadSources: []
};

const debugNoLogin = true;

const state = {
  lessonIndex: 0,
  questionIndex: 0,
  selected: null,
  order: [],
  account: null,
  authMode: "login",
  googleClientId: localStorage.getItem("circuitGoogleClientId") || "",
  googleHostedDomain: localStorage.getItem("circuitGoogleHostedDomain") || "",
  ...defaultProgress
};

const authShell = document.querySelector("#authShell");
const appShell = document.querySelector("#appShell");
const authForm = document.querySelector("#authForm");
const loginTab = document.querySelector("#loginTab");
const signupTab = document.querySelector("#signupTab");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const confirmPasswordLabel = document.querySelector("#confirmPasswordLabel");
const confirmPasswordInput = document.querySelector("#confirmPasswordInput");
const passwordRules = document.querySelector("#passwordRules");
const authSubmit = document.querySelector("#authSubmit");
const authMessage = document.querySelector("#authMessage");
const googleSignIn = document.querySelector("#googleSignIn");
const googleStatus = document.querySelector("#googleStatus");
const googleClientId = document.querySelector("#googleClientId");
const googleHostedDomain = document.querySelector("#googleHostedDomain");
const saveGoogleConfig = document.querySelector("#saveGoogleConfig");
const lessonList = document.querySelector("#lessonList");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonIntro = document.querySelector("#lessonIntro");
const companyTag = document.querySelector("#companyTag");
const questionType = document.querySelector("#questionType");
const questionCounter = document.querySelector("#questionCounter");
const progressBar = document.querySelector("#progressBar");
const topicLabel = document.querySelector("#topicLabel");
const promptText = document.querySelector("#promptText");
const visualArea = document.querySelector("#visualArea");
const answerArea = document.querySelector("#answerArea");
const feedback = document.querySelector("#feedback");
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackText = document.querySelector("#feedbackText");
const checkButton = document.querySelector("#checkButton");
const skipButton = document.querySelector("#skipButton");
const hintButton = document.querySelector("#hintButton");
const xpCount = document.querySelector("#xpCount");
const streakCount = document.querySelector("#streakCount");
const hearts = document.querySelector("#hearts");
const dailyRing = document.querySelector("#dailyRing");
const dailyCopy = document.querySelector("#dailyCopy");
const skillMap = document.querySelector("#skillMap");
const notebook = document.querySelector("#notebook");
const userInitial = document.querySelector("#userInitial");
const userName = document.querySelector("#userName");
const logoutButton = document.querySelector("#logoutButton");
const sourceFiles = document.querySelector("#sourceFiles");
const sourceText = document.querySelector("#sourceText");
const generateUploadQuestions = document.querySelector("#generateUploadQuestions");
const clearUploadQuestions = document.querySelector("#clearUploadQuestions");
const uploadStatus = document.querySelector("#uploadStatus");

function currentLesson() {
  return getLessons()[state.lessonIndex];
}

function currentQuestion() {
  return currentLesson().questions[state.questionIndex];
}

function getLessons() {
  if (!state.uploadedQuestions.length) return lessons;
  return [
    ...lessons,
    {
      id: "uploads",
      title: "Uploaded Tests/HW",
      company: "Generated locally",
      topic: "Student-uploaded practice",
      color: "#0f766e",
      questions: state.uploadedQuestions
    }
  ];
}

function getAccounts() {
  return JSON.parse(localStorage.getItem("circuitAccounts") || "{}");
}

function setAccounts(accounts) {
  localStorage.setItem("circuitAccounts", JSON.stringify(accounts));
}

function accountKeyFor(account) {
  return account.key || account.email;
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function passwordChecks(password, confirmation = confirmPasswordInput.value) {
  return {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
    match: password.length > 0 && password === confirmation
  };
}

function isStrongPassword(password) {
  return Object.values(passwordChecks(password)).every(Boolean);
}

function updatePasswordRules() {
  const checks = passwordChecks(passwordInput.value);
  passwordRules.querySelectorAll("[data-rule]").forEach((item) => {
    const rule = item.dataset.rule;
    item.classList.toggle("met", Boolean(checks[rule]));
  });
}

function updateAuthValidity() {
  const email = normalizeEmail(emailInput.value);
  const hasEmail = isValidEmail(email);
  const hasPassword = passwordInput.value.length > 0;
  const passwordReady = state.authMode === "login" || isStrongPassword(passwordInput.value);
  authSubmit.disabled = !(hasEmail && hasPassword && passwordReady);
  updatePasswordRules();
}

function getProgressSnapshot() {
  return {
    lessonIndex: state.lessonIndex,
    questionIndex: state.questionIndex,
    xp: state.xp,
    streak: state.streak,
    hearts: state.hearts,
    solvedToday: state.solvedToday,
    completed: state.completed,
    notes: state.notes.slice(-5),
    uploadedQuestions: state.uploadedQuestions,
    uploadSources: state.uploadSources
  };
}

function loadProgress(progress = {}) {
  state.lessonIndex = Number(progress.lessonIndex || 0);
  state.questionIndex = Number(progress.questionIndex || 0);
  state.xp = Number(progress.xp || 0);
  state.streak = Number(progress.streak || 0);
  state.hearts = Number(progress.hearts || 5);
  state.solvedToday = Number(progress.solvedToday || 0);
  state.completed = progress.completed || {};
  state.notes = progress.notes || [];
  state.uploadedQuestions = progress.uploadedQuestions || [];
  state.uploadSources = progress.uploadSources || [];
  if (!getLessons()[state.lessonIndex]) state.lessonIndex = 0;
  if (!currentLesson().questions[state.questionIndex]) state.questionIndex = 0;
}

function saveProgress() {
  if (!state.account) return;
  const accounts = getAccounts();
  const key = accountKeyFor(state.account);
  accounts[key] = {
    ...accounts[key],
    progress: getProgressSnapshot()
  };
  setAccounts(accounts);
}

function setAuthMode(mode) {
  state.authMode = mode;
  loginTab.classList.toggle("active", mode === "login");
  signupTab.classList.toggle("active", mode === "signup");
  nameInput.parentElement.hidden = mode === "login";
  confirmPasswordLabel.hidden = mode === "login";
  passwordRules.hidden = mode === "login";
  passwordInput.autocomplete = mode === "login" ? "current-password" : "new-password";
  confirmPasswordInput.required = mode === "signup";
  authSubmit.textContent = mode === "login" ? "Log in" : "Create account";
  authMessage.textContent = "";
  renderGoogleSignIn();
  updateAuthValidity();
}

function showApp(account) {
  state.account = {
    key: accountKeyFor(account),
    email: account.email,
    name: account.name || account.email.split("@")[0],
    provider: account.provider || "email"
  };
  loadProgress(account.progress);
  localStorage.setItem("circuitSession", state.account.key);
  authShell.hidden = true;
  appShell.hidden = false;
  render();
}

function showAuth(message = "") {
  state.account = null;
  localStorage.removeItem("circuitSession");
  appShell.hidden = true;
  authShell.hidden = false;
  authMessage.textContent = message;
  renderGoogleSignIn();
  updateAuthValidity();
  emailInput.focus();
}

function handleAuth(event) {
  event.preventDefault();
  const email = normalizeEmail(emailInput.value);
  const password = passwordInput.value;
  const confirmation = confirmPasswordInput.value;
  const name = nameInput.value.trim();
  const accounts = getAccounts();

  if (!isValidEmail(email)) {
    authMessage.textContent = "Enter a valid email address.";
    emailInput.focus();
    return;
  }

  if (state.authMode === "signup") {
    if (!isStrongPassword(password)) {
      authMessage.textContent = "Password must meet every requirement.";
      passwordInput.focus();
      return;
    }

    if (password !== confirmation) {
      authMessage.textContent = "Confirm password must match.";
      confirmPasswordInput.focus();
      return;
    }

    if (accounts[email]) {
      authMessage.textContent = "That account already exists. Try logging in.";
      return;
    }

    const account = {
      key: email,
      email,
      name: name || email.split("@")[0],
      password,
      provider: "email",
      progress: { ...defaultProgress, ...legacyProgress() }
    };
    accounts[account.key] = account;
    setAccounts(accounts);
    authForm.reset();
    showApp(account);
    return;
  }

  const account = accounts[email];
  if (!account || account.password !== password) {
    authMessage.textContent = "Email or password did not match a local account.";
    return;
  }

  authForm.reset();
  showApp(account);
}

function legacyProgress() {
  if (!localStorage.getItem("circuitXp")) return {};
  return {
    xp: Number(localStorage.getItem("circuitXp") || 0),
    streak: Number(localStorage.getItem("circuitStreak") || 0),
    solvedToday: Number(localStorage.getItem("circuitSolvedToday") || 0),
    completed: JSON.parse(localStorage.getItem("circuitCompleted") || "{}"),
    notes: JSON.parse(localStorage.getItem("circuitNotes") || "[]")
  };
}

function renderGoogleSignIn() {
  googleClientId.value = state.googleClientId;
  googleHostedDomain.value = state.googleHostedDomain;
  googleSignIn.replaceChildren();

  if (!state.googleClientId) {
    googleStatus.textContent = "Add a Google OAuth client ID below to enable Google sign-in.";
    return;
  }

  if (!window.google?.accounts?.id) {
    googleStatus.textContent = "Google sign-in is loading. Refresh if the button does not appear.";
    return;
  }

  window.google.accounts.id.initialize({
    client_id: state.googleClientId,
    callback: handleGoogleCredential,
    hd: state.googleHostedDomain || undefined,
    auto_select: false
  });

  window.google.accounts.id.renderButton(googleSignIn, {
    theme: "outline",
    size: "large",
    type: "standard",
    shape: "rectangular",
    text: state.authMode === "signup" ? "signup_with" : "signin_with",
    width: Math.min(400, googleSignIn.clientWidth || 360)
  });

  googleStatus.textContent = state.googleHostedDomain
    ? `Google sign-in limited to ${state.googleHostedDomain}.`
    : "Google sign-in enabled.";
}

function handleGoogleCredential(response) {
  const profile = decodeGoogleCredential(response.credential);
  if (!profile?.sub || !profile.email) {
    authMessage.textContent = "Google did not return a usable profile.";
    return;
  }

  const expectedDomain = state.googleHostedDomain.trim().toLowerCase();
  const actualDomain = String(profile.hd || profile.email.split("@").at(-1) || "").toLowerCase();
  if (expectedDomain && actualDomain !== expectedDomain) {
    authMessage.textContent = `Use a Google account from ${expectedDomain}.`;
    return;
  }

  const accounts = getAccounts();
  const key = `google:${profile.sub}`;
  const account = accounts[key] || {
    key,
    email: profile.email,
    name: profile.name || profile.email.split("@")[0],
    provider: "google",
    progress: { ...defaultProgress }
  };

  account.email = profile.email;
  account.name = profile.name || account.name;
  account.provider = "google";
  accounts[key] = account;
  setAccounts(accounts);
  showApp(account);
}

function decodeGoogleCredential(credential) {
  try {
    const payload = credential.split(".")[1];
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(
      atob(normalized)
        .split("")
        .map((char) => `%${char.charCodeAt(0).toString(16).padStart(2, "0")}`)
        .join("")
    );
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
}

function saveGoogleSettings() {
  state.googleClientId = googleClientId.value.trim();
  state.googleHostedDomain = googleHostedDomain.value.trim().toLowerCase();
  localStorage.setItem("circuitGoogleClientId", state.googleClientId);
  localStorage.setItem("circuitGoogleHostedDomain", state.googleHostedDomain);
  renderGoogleSignIn();
}

function restoreSession() {
  if (debugNoLogin && isLocalDebugHost()) {
    showApp(getDebugAccount());
    return;
  }

  const key = localStorage.getItem("circuitSession");
  const account = getAccounts()[key];
  if (account) {
    showApp(account);
    return;
  }
  showAuth();
}

function isLocalDebugHost() {
  return ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
}

function getDebugAccount() {
  const accounts = getAccounts();
  const key = "debug:localhost";
  const account = accounts[key] || {
    key,
    email: "debug@localhost",
    name: "Debug Mode",
    provider: "debug",
    progress: { ...defaultProgress }
  };
  accounts[key] = account;
  setAccounts(accounts);
  return account;
}

function render() {
  const lesson = currentLesson();
  const question = currentQuestion();
  state.selected = null;
  state.order = question.type === "order" ? shuffle([...question.answer]) : [];

  lessonTitle.textContent = lesson.title;
  lessonIntro.textContent = `${lesson.topic} drills mapped to UCLA's EE course sequence.`;
  companyTag.textContent = lesson.company;
  topicLabel.textContent = lesson.topic;
  promptText.textContent = question.prompt;
  questionType.textContent = typeLabel(question.type);
  questionCounter.textContent = `${state.questionIndex + 1} of ${lesson.questions.length}`;
  progressBar.style.width = `${((state.questionIndex + 1) / lesson.questions.length) * 100}%`;
  feedback.hidden = true;
  checkButton.textContent = "Check";
  checkButton.disabled = false;

  renderStats();
  renderLessons();
  renderVisual(question);
  renderAnswer(question);
  renderSkillMap();
  renderNotebook();
  renderUploadStatus();
}

function typeLabel(type) {
  return {
    choice: "Multiple choice",
    fill: "Type answer",
    order: "Sequence",
    scope: "Scope trace"
  }[type];
}

function renderStats() {
  xpCount.textContent = state.xp;
  streakCount.textContent = state.streak;
  userName.textContent = state.account?.name || "Engineer";
  userInitial.textContent = (state.account?.name || "E").slice(0, 1).toUpperCase();
  hearts.replaceChildren();
  for (let index = 0; index < 5; index += 1) {
    const heart = document.createElement("span");
    heart.className = index < state.hearts ? "heart full" : "heart";
    heart.setAttribute("aria-hidden", "true");
    hearts.append(heart);
  }

  const dailyPercent = Math.min(100, Math.round((state.solvedToday / 3) * 100));
  dailyRing.textContent = `${dailyPercent}%`;
  dailyRing.style.setProperty("--goal", `${dailyPercent}%`);
  dailyCopy.textContent = state.solvedToday >= 3
    ? "Goal complete. Keep going for stronger recall."
    : `${3 - state.solvedToday} challenge${3 - state.solvedToday === 1 ? "" : "s"} left today.`;
}

function renderLessons() {
  lessonList.replaceChildren();
  getLessons().forEach((lesson, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === state.lessonIndex ? "lesson-button active" : "lesson-button";
    button.style.setProperty("--lesson", lesson.color);
    button.innerHTML = `
      <span class="lesson-node">${completedCount(lesson.id)}/${lesson.questions.length}</span>
      <span><strong>${lesson.title}</strong><small>${lesson.topic}</small></span>
    `;
    button.addEventListener("click", () => {
      state.lessonIndex = index;
      state.questionIndex = 0;
      saveProgress();
      render();
    });
    lessonList.append(button);
  });
}

function renderVisual(question) {
  visualArea.replaceChildren();
  if (question.type === "scope") {
    visualArea.innerHTML = `
      <div class="scope-grid">
        ${["A", "B", "C"].map((label) => `
          <button class="trace-card" type="button" data-value="${label}">
            <svg viewBox="0 0 220 90" role="img" aria-label="Trace ${label}">
              <path d="${tracePath(label)}"></path>
            </svg>
            <strong>Trace ${label}</strong>
          </button>
        `).join("")}
      </div>
    `;
    visualArea.querySelectorAll(".trace-card").forEach((button) => {
      button.addEventListener("click", () => selectOption(button, question));
    });
    return;
  }

  visualArea.innerHTML = `
    <div class="circuit-asset" aria-hidden="true">
      <span class="node n1"></span><span class="node n2"></span><span class="node n3"></span>
      <span class="wire w1"></span><span class="wire w2"></span><span class="wire w3"></span>
      <span class="component resistor">R</span>
      <span class="component cap">C</span>
      <span class="component cpu">MCU</span>
    </div>
  `;
}

function tracePath(label) {
  if (label === "A") return "M4 48 C18 5 34 85 50 46 S82 8 98 50 S130 84 146 46 S178 7 216 50";
  if (label === "B") return "M4 62 C34 58 43 31 70 31 S107 61 134 57 S176 22 216 28";
  return "M4 52 C18 20 28 72 39 45 C48 15 60 82 70 46 C82 12 94 76 105 48 C116 18 128 78 140 46 C154 13 168 74 181 48 C194 23 204 68 216 46";
}

function renderAnswer(question) {
  answerArea.replaceChildren();

  if (question.type === "choice") {
    question.options.forEach((option) => answerArea.append(optionButton(option, question)));
    return;
  }

  if (question.type === "scope") {
    answerArea.innerHTML = "<p class=\"helper-copy\">Select the cleanest filtered trace above.</p>";
    return;
  }

  if (question.type === "fill") {
    const label = document.createElement("label");
    label.className = "answer-input";
    label.innerHTML = `
      <span>Your answer</span>
      <div><input id="fillInput" inputmode="decimal" autocomplete="off" /><em>${question.suffix}</em></div>
    `;
    answerArea.append(label);
    label.querySelector("input").focus();
    return;
  }

  if (question.type === "order") {
    const wrap = document.createElement("div");
    wrap.className = "order-list";
    state.order.forEach((item, index) => wrap.append(orderButton(item, index)));
    answerArea.append(wrap);
  }
}

function optionButton(option, question) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "answer-button";
  button.textContent = option;
  button.dataset.value = option;
  button.addEventListener("click", () => selectOption(button, question));
  return button;
}

function selectOption(button) {
  state.selected = button.dataset.value;
  document.querySelectorAll(".answer-button, .trace-card").forEach((item) => item.classList.remove("selected"));
  button.classList.add("selected");
}

function orderButton(item, index) {
  const row = document.createElement("div");
  row.className = "order-row";
  row.innerHTML = `
    <span>${index + 1}</span>
    <strong>${item}</strong>
    <div>
      <button type="button" title="Move up" aria-label="Move ${item} up">Up</button>
      <button type="button" title="Move down" aria-label="Move ${item} down">Down</button>
    </div>
  `;
  const [up, down] = row.querySelectorAll("button");
  up.addEventListener("click", () => moveOrder(index, -1));
  down.addEventListener("click", () => moveOrder(index, 1));
  return row;
}

function moveOrder(index, direction) {
  const target = index + direction;
  if (target < 0 || target >= state.order.length) return;
  [state.order[index], state.order[target]] = [state.order[target], state.order[index]];
  renderAnswer(currentQuestion());
}

function checkAnswer() {
  const question = currentQuestion();
  const correct = isCorrect(question);
  showFeedback(correct, question);

  if (correct) {
    const key = `${currentLesson().id}-${state.questionIndex}`;
    if (!state.completed[key]) {
      state.xp += 12;
      state.solvedToday += 1;
      state.completed[key] = true;
      addNote(currentLesson().topic, question.explain);
    }
    state.streak += 1;
    checkButton.textContent = isLastQuestion() ? "Finish" : "Continue";
  } else {
    state.hearts = Math.max(0, state.hearts - 1);
    checkButton.textContent = state.hearts === 0 ? "Refill hearts" : "Try again";
  }

  saveProgress();
  renderStats();
  renderLessons();
}

function isCorrect(question) {
  if (question.type === "choice" || question.type === "scope") {
    return state.selected === question.answer;
  }

  if (question.type === "fill") {
    const rawValue = String(document.querySelector("#fillInput")?.value || "").trim();
    const value = Number(rawValue);
    const expected = Number(question.answer);
    if (Number.isFinite(expected)) {
      return Number.isFinite(value) && Math.abs(value - expected) <= question.tolerance;
    }
    const expectedScalar = Number.parseFloat(question.answer);
    if (Number.isFinite(expectedScalar) && Number.isFinite(value)) {
      return Math.abs(value - expectedScalar) <= (question.tolerance || 0.001);
    }
    return normalizeAnswer(rawValue) === normalizeAnswer(question.answer);
  }

  if (question.type === "order") {
    return question.answer.every((item, index) => state.order[index] === item);
  }

  return false;
}

function normalizeAnswer(value) {
  return String(value).toLowerCase().replace(/\s+/g, "");
}

function showFeedback(correct, question) {
  feedback.hidden = false;
  feedback.className = correct ? "feedback correct" : "feedback wrong";
  feedbackTitle.textContent = correct ? "Nice work" : "Almost";
  feedbackText.textContent = correct ? question.explain : question.hint;
}

function continueFlow() {
  if (state.hearts === 0) {
    state.hearts = 5;
    state.streak = 0;
    saveProgress();
    render();
    return;
  }

  if (!feedback.hidden && feedback.classList.contains("correct")) {
    if (isLastQuestion()) {
      state.questionIndex = 0;
      state.lessonIndex = (state.lessonIndex + 1) % getLessons().length;
    } else {
      state.questionIndex += 1;
    }
    saveProgress();
    render();
    return;
  }

  checkAnswer();
}

function isLastQuestion() {
  return state.questionIndex === currentLesson().questions.length - 1;
}

function skipQuestion() {
  state.questionIndex = isLastQuestion() ? 0 : state.questionIndex + 1;
  saveProgress();
  render();
}

function showHint() {
  const question = currentQuestion();
  feedback.hidden = false;
  feedback.className = "feedback hint";
  feedbackTitle.textContent = "Hint";
  feedbackText.textContent = question.hint;
}

function renderSkillMap() {
  skillMap.replaceChildren();
  getLessons().forEach((lesson) => {
    const percent = Math.round((completedCount(lesson.id) / lesson.questions.length) * 100);
    const row = document.createElement("div");
    row.className = "skill-row";
    row.innerHTML = `
      <span>${lesson.topic}</span>
      <div><i style="width: ${percent}%; background: ${lesson.color}"></i></div>
      <strong>${percent}%</strong>
    `;
    skillMap.append(row);
  });
}

function renderNotebook() {
  notebook.replaceChildren();
  const notes = state.notes.length ? [...state.notes].reverse() : ["Correct answers add short review notes here."];
  notes.forEach((note) => {
    const item = document.createElement("li");
    item.textContent = typeof note === "string" ? note : `${note.topic}: ${note.text}`;
    notebook.append(item);
  });
}

async function extractUploadedText(files) {
  const chunks = [];
  const names = [];

  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
  }

  for (const file of files) {
    names.push(file.name);
    uploadStatus.textContent = `Reading ${file.name}...`;

    if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
      chunks.push(await extractPdfText(file));
      continue;
    }

    if (file.type.startsWith("image/")) {
      chunks.push(await extractImageText(file));
    }
  }

  return { text: chunks.join("\n\n"), names };
}

async function extractPdfText(file) {
  if (!window.pdfjsLib) {
    return "";
  }

  const buffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: buffer }).promise;
  const pages = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const textLayer = content.items.map((item) => item.str).join(" ").trim();
    if (textLayer.length > 30) {
      pages.push(textLayer);
      continue;
    }

    if (window.Tesseract) {
      uploadStatus.textContent = `OCR scanned PDF page ${pageNumber} of ${pdf.numPages}...`;
      pages.push(await ocrPdfPage(page, pageNumber));
    }
  }

  return pages.join("\n");
}

async function ocrPdfPage(page, pageNumber) {
  const viewport = page.getViewport({ scale: 1.6 });
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({ canvasContext: context, viewport }).promise;
  const result = await window.Tesseract.recognize(canvas, "eng", {
    logger: (event) => {
      if (event.status) {
        const percent = event.progress ? ` ${Math.round(event.progress * 100)}%` : "";
        uploadStatus.textContent = `OCR PDF page ${pageNumber}: ${event.status}${percent}`;
      }
    }
  });

  return result.data.text || "";
}

async function extractImageText(file) {
  if (!window.Tesseract) {
    return "";
  }

  const result = await window.Tesseract.recognize(file, "eng", {
    logger: (event) => {
      if (event.status) {
        const percent = event.progress ? ` ${Math.round(event.progress * 100)}%` : "";
        uploadStatus.textContent = `OCR ${file.name}: ${event.status}${percent}`;
      }
    }
  });

  return result.data.text || "";
}

async function handleGenerateFromUpload() {
  generateUploadQuestions.disabled = true;
  uploadStatus.textContent = "Preparing sources...";

  try {
    const uploaded = await extractUploadedText([...sourceFiles.files]);
    const combinedText = `${uploaded.text}\n\n${sourceText.value}`.trim();
    uploadStatus.textContent = `Extracted ${combinedText.length} characters. Asking AI backend...`;
    const aiResult = await generateQuestionsWithAi(combinedText);
    const questions = aiResult.questions.length ? aiResult.questions : generateQuestionsFromText(combinedText);

    if (!questions.length) {
      uploadStatus.textContent = "No readable course text found. Try a clearer scan, image upload, or paste the problem text.";
      return;
    }

    state.uploadedQuestions = questions;
    state.uploadSources = uploaded.names;
    state.lessonIndex = getLessons().length - 1;
    state.questionIndex = 0;
    saveProgress();
    render();
    uploadStatus.textContent = aiResult.questions.length
      ? `${questions.length} AI-generated questions saved from ${uploaded.names.length || "pasted"} source${uploaded.names.length === 1 ? "" : "s"}.`
      : `${questions.length} local fallback questions saved. Add OPENAI_API_KEY on the server for smarter generation.`;
  } catch (error) {
    uploadStatus.textContent = `Could not process upload: ${error.message}`;
  } finally {
    generateUploadQuestions.disabled = false;
  }
}

async function generateQuestionsWithAi(text) {
  if (text.trim().length < 20) {
    return { questions: [], source: "none" };
  }

  try {
    const response = await fetch("/api/generate-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        course: currentLesson()?.title || "UCLA ECE"
      })
    });

    if (!response.ok) return { questions: [], source: "fallback" };
    const payload = await response.json();
    return {
      source: payload.source || "ai",
      questions: normalizeAiQuestions(payload.questions || [])
    };
  } catch (error) {
    return { questions: [], source: "fallback" };
  }
}

function normalizeAiQuestions(questions) {
  return questions
    .filter((question) => question.prompt && question.answer && ["choice", "fill"].includes(question.type))
    .map((question) => ({
      type: question.type,
      prompt: question.prompt,
      hint: question.hint || "Use the uploaded source material.",
      options: question.type === "choice" ? question.options.slice(0, 4) : [],
      answer: question.answer,
      suffix: question.suffix || "",
      tolerance: Number(question.tolerance || 0),
      explain: question.explain || "This answer follows from the uploaded material."
    }))
    .filter((question) => question.type === "fill" || question.options.length === 4)
    .slice(0, 8);
}

function generateQuestionsFromText(rawText) {
  const clean = rawText
    .replace(/\s+/g, " ")
    .replace(/[^\x20-\x7E]/g, " ")
    .trim();

  if (clean.length < 12) return [];

  const sentences = clean
    .split(/(?<=[.!?])\s+|\n+|(?:\s{2,})/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 12 && sentence.length <= 260);
  const candidates = sentences.length ? sentences : chunkText(clean);
  const questions = [...formulaQuestions(clean)];

  for (const sentence of candidates) {
    if (questions.length >= 8) break;
    const generated = questionFromSentence(sentence, questions.length);
    if (generated) questions.push(generated);
  }

  if (questions.length < 4) {
    questions.push(...fallbackConceptQuestions(clean).slice(0, 4 - questions.length));
  }

  if (questions.length < 4) {
    questions.push(...genericQuestions(clean).slice(0, 4 - questions.length));
  }

  return questions.slice(0, 8);
}

function chunkText(text) {
  const chunks = [];
  for (let index = 0; index < text.length; index += 180) {
    chunks.push(text.slice(index, index + 180));
  }
  return chunks;
}

function questionFromSentence(sentence, index) {
  const numeric = sentence.match(/(?:\d+(?:\.\d+)?\s?(?:k?ohm|ohm|v|ma|a|uf|nf|pf|hz|khz|mhz|rad\/s|s|ms|us|ns|w|mw|db|ev)\b)/i);
  if (numeric) {
    return {
      type: "fill",
      prompt: `From the uploaded material: what value appears in this statement? "${sentence.replace(numeric[0], "_____")}"`,
      hint: "Look for the missing numeric value and unit from the uploaded source text.",
      answer: numeric[0].replace(/\s+/g, ""),
      tolerance: 0,
      suffix: "",
      explain: `The uploaded statement included ${numeric[0]}.`
    };
  }

  const keyword = bestKeyword(sentence);
  if (!keyword) return null;

  if (index % 3 === 1) {
    return {
      type: "choice",
      prompt: `Which term best completes this uploaded course note? "${sentence.replace(new RegExp(keyword, "i"), "_____")}"`,
      hint: "Use the surrounding words as context.",
      options: shuffle([keyword, ...distractorsFor(keyword)]).slice(0, 4),
      answer: keyword,
      explain: `The source sentence used "${keyword}" in that context.`
    };
  }

  return {
    type: "choice",
    prompt: `Which concept from the uploaded material is most associated with this statement? "${sentence}"`,
    hint: "Pick the strongest technical noun or method named by the statement.",
    options: shuffle([keyword, ...distractorsFor(keyword)]).slice(0, 4),
    answer: keyword,
    explain: `The key concept in the statement is "${keyword}".`
  };
}

function bestKeyword(sentence) {
  const stopWords = new Set(["the", "and", "for", "with", "from", "this", "that", "which", "when", "where", "into", "using", "about", "problem", "figure", "given", "find"]);
  const words = sentence.match(/[A-Za-z][A-Za-z0-9-]{3,}/g) || [];
  const technical = words
    .map((word) => word.replace(/[.,;:()]/g, ""))
    .filter((word) => !stopWords.has(word.toLowerCase()))
    .sort((a, b) => scoreKeyword(b) - scoreKeyword(a));
  return technical[0] || "";
}

function scoreKeyword(word) {
  const lower = word.toLowerCase();
  const boosts = ["voltage", "current", "circuit", "signal", "system", "frequency", "convolution", "thevenin", "norton", "capacitor", "inductor", "diode", "transistor", "laplace", "fourier", "impulse", "response"];
  return word.length + (boosts.includes(lower) ? 20 : 0);
}

function distractorsFor(answer) {
  const pool = ["voltage", "current", "resistance", "capacitance", "inductance", "frequency", "convolution", "impulse response", "Thevenin equivalent", "Fourier transform", "KCL", "KVL", "low-pass filter", "diode", "transistor"];
  return pool.filter((item) => item.toLowerCase() !== answer.toLowerCase());
}

function fallbackConceptQuestions(text) {
  const lower = text.toLowerCase();
  const questions = [];

  if (lower.includes("thevenin") || lower.includes("norton")) {
    questions.push({
      type: "order",
      prompt: "Based on the uploaded circuit material, order a Thevenin-equivalent workflow.",
      hint: "Find the terminal behavior before replacing the network.",
      answer: ["Remove the load", "Find open-circuit voltage", "Find equivalent resistance", "Replace with Vth and Rth"],
      explain: "A Thevenin equivalent preserves the terminal voltage-current behavior of the original network."
    });
  }

  if (lower.includes("convolution") || lower.includes("impulse")) {
    questions.push({
      type: "choice",
      prompt: "Based on the uploaded systems material, what combines an input with an impulse response for an LTI system?",
      hint: "This is the central time-domain operation in systems and signals.",
      options: ["Convolution", "Quantization", "Superposition only", "Binary encoding"],
      answer: "Convolution",
      explain: "For an LTI system, output is the convolution of input and impulse response."
    });
  }

  if (lower.includes("capacitor") || lower.includes("rc")) {
    questions.push({
      type: "choice",
      prompt: "Which parameter sets the natural time scale of a first-order RC circuit?",
      hint: "It is the product of resistance and capacitance.",
      options: ["RC time constant", "Nyquist rate", "Forward voltage", "Clock period"],
      answer: "RC time constant",
      explain: "The time constant tau = RC controls charging and discharging speed."
    });
  }

  if (lower.includes("kcl") || lower.includes("node") || lower.includes("nodal")) {
    questions.push({
      type: "choice",
      prompt: "Based on the uploaded circuit material, which law is used to write equations at circuit nodes?",
      hint: "At a node, currents must sum consistently.",
      options: ["KCL", "KVL", "Snell's law", "Bayes rule"],
      answer: "KCL",
      explain: "Kirchhoff's Current Law is the standard node-equation tool."
    });
  }

  if (lower.includes("fourier") || lower.includes("frequency")) {
    questions.push({
      type: "choice",
      prompt: "Based on the uploaded signals material, which transform moves a signal into frequency-domain form?",
      hint: "It decomposes signals into sinusoidal components.",
      options: ["Fourier transform", "Boolean minimization", "Mesh transform", "Carrier drift"],
      answer: "Fourier transform",
      explain: "The Fourier transform represents signal content versus frequency."
    });
  }

  return questions;
}

function formulaQuestions(text) {
  const lower = text.toLowerCase();
  const questions = [];

  if (/(v\s*=\s*i\s*r|ohm'?s law)/i.test(text)) {
    questions.push({
      type: "fill",
      prompt: "Uploaded-material drill: if I = 2 mA and R = 5 kOhm, what voltage does Ohm's law predict?",
      hint: "Use V = I R.",
      answer: "10",
      tolerance: 0.1,
      suffix: "V",
      explain: "2 mA times 5 kOhm equals 10 V."
    });
  }

  if (/(tau|time constant|rc)/i.test(text)) {
    questions.push({
      type: "choice",
      prompt: "Uploaded-material drill: what expression gives the time constant of a first-order RC circuit?",
      hint: "Multiply the resistance and capacitance.",
      options: ["tau = RC", "tau = R/C", "tau = C/R", "tau = 1/RC"],
      answer: "tau = RC",
      explain: "The first-order RC time constant is tau = R C."
    });
  }

  if (lower.includes("sampling") || lower.includes("nyquist")) {
    questions.push({
      type: "choice",
      prompt: "Uploaded-material drill: what sampling rate is required to avoid aliasing for a signal band-limited to B Hz?",
      hint: "Use the Nyquist criterion.",
      options: ["At least 2B", "At least B/2", "Exactly B", "Any nonzero rate"],
      answer: "At least 2B",
      explain: "Nyquist sampling requires a sampling rate at least twice the highest frequency."
    });
  }

  return questions;
}

function genericQuestions(text) {
  const keywords = [...new Set((text.match(/[A-Za-z][A-Za-z0-9-]{3,}/g) || [])
    .map((word) => word.replace(/[.,;:()]/g, ""))
    .filter(Boolean)
    .sort((a, b) => scoreKeyword(b) - scoreKeyword(a)))]
    .slice(0, 4);

  if (!keywords.length) return [];

  const lead = text.slice(0, 220);
  return [
    {
      type: "choice",
      prompt: `From the uploaded material, which term is most central to this excerpt? "${lead}"`,
      hint: "Choose the strongest technical term.",
      options: shuffle([keywords[0], ...distractorsFor(keywords[0])]).slice(0, 4),
      answer: keywords[0],
      explain: `"${keywords[0]}" appears to be the strongest technical anchor in the uploaded excerpt.`
    },
    {
      type: "order",
      prompt: "Use the uploaded material as a study workflow. What should you do first when converting it into practice?",
      hint: "Start by identifying what the problem gives you.",
      answer: ["Identify givens", "Choose governing equation", "Solve for unknown", "Check units"],
      explain: "Most EE homework problems become manageable when givens, equations, unknowns, and units are separated."
    },
    {
      type: "choice",
      prompt: "What is the best next study action for a difficult uploaded homework problem?",
      hint: "Do not start by memorizing the final answer.",
      options: ["List givens and unknowns", "Ignore units", "Skip diagrams", "Memorize without solving"],
      answer: "List givens and unknowns",
      explain: "Listing givens and unknowns turns vague problem text into an analyzable model."
    }
  ];
}

function clearGeneratedQuestions() {
  state.uploadedQuestions = [];
  state.uploadSources = [];
  state.completed = Object.fromEntries(
    Object.entries(state.completed).filter(([key]) => !key.startsWith("uploads-"))
  );
  if (currentLesson()?.id === "uploads") {
    state.lessonIndex = 0;
    state.questionIndex = 0;
  }
  sourceFiles.value = "";
  sourceText.value = "";
  saveProgress();
  render();
}

function renderUploadStatus() {
  if (!uploadStatus) return;
  if (!state.uploadedQuestions.length) {
    uploadStatus.textContent = "No uploaded problem set yet.";
    return;
  }

  const sourceCount = state.uploadSources.length;
  uploadStatus.textContent = `${state.uploadedQuestions.length} generated questions from ${sourceCount || "pasted"} source${sourceCount === 1 ? "" : "s"}.`;
}

function addNote(topic, text) {
  state.notes.push({ topic, text });
}

function completedCount(lessonId) {
  return Object.keys(state.completed).filter((key) => key.startsWith(`${lessonId}-`)).length;
}

function shuffle(items) {
  return items
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

loginTab.addEventListener("click", () => setAuthMode("login"));
signupTab.addEventListener("click", () => setAuthMode("signup"));
authForm.addEventListener("submit", handleAuth);
emailInput.addEventListener("input", updateAuthValidity);
passwordInput.addEventListener("input", updateAuthValidity);
confirmPasswordInput.addEventListener("input", updateAuthValidity);
nameInput.addEventListener("input", updateAuthValidity);
logoutButton.addEventListener("click", () => {
  saveProgress();
  window.google?.accounts?.id?.disableAutoSelect();
  showAuth("Logged out. Pick an account to continue.");
});
checkButton.addEventListener("click", continueFlow);
skipButton.addEventListener("click", skipQuestion);
hintButton.addEventListener("click", showHint);
saveGoogleConfig.addEventListener("click", saveGoogleSettings);
generateUploadQuestions.addEventListener("click", handleGenerateFromUpload);
clearUploadQuestions.addEventListener("click", clearGeneratedQuestions);
window.handleGoogleCredential = handleGoogleCredential;
window.addEventListener("load", renderGoogleSignIn);

setAuthMode("login");
restoreSession();
