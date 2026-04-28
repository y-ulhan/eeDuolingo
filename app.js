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
  notes: []
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

function currentLesson() {
  return lessons[state.lessonIndex];
}

function currentQuestion() {
  return currentLesson().questions[state.questionIndex];
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
    notes: state.notes.slice(-5)
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
  if (!lessons[state.lessonIndex]) state.lessonIndex = 0;
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
  lessons.forEach((lesson, index) => {
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
    const value = Number(document.querySelector("#fillInput")?.value);
    const expected = Number(question.answer);
    return Number.isFinite(value) && Math.abs(value - expected) <= question.tolerance;
  }

  if (question.type === "order") {
    return question.answer.every((item, index) => state.order[index] === item);
  }

  return false;
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
      state.lessonIndex = (state.lessonIndex + 1) % lessons.length;
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
  lessons.forEach((lesson) => {
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
window.handleGoogleCredential = handleGoogleCredential;
window.addEventListener("load", renderGoogleSignIn);

setAuthMode("login");
restoreSession();
