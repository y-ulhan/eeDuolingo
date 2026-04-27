const lessons = [
  {
    id: "signals",
    title: "Signals Sprint",
    company: "Apple + Meta style",
    topic: "DSP and sampling",
    color: "#00a86b",
    questions: [
      {
        type: "choice",
        prompt: "A sensor output is band-limited to 18 kHz. What minimum ADC sample rate avoids aliasing in an ideal system?",
        hint: "Nyquist says the sampling rate must be at least twice the highest frequency component.",
        options: ["18 kS/s", "24 kS/s", "36 kS/s", "72 kS/s"],
        answer: "36 kS/s",
        explain: "The Nyquist limit is 2 x 18 kHz, so an ideal anti-aliasing setup needs at least 36 kS/s."
      },
      {
        type: "fill",
        prompt: "An RC low-pass has R = 10 kOhm and C = 1 nF. Estimate the cutoff frequency in kHz.",
        hint: "Use fc = 1 / (2*pi*R*C). The answer is near 16.",
        answer: "15.9",
        tolerance: 1.1,
        suffix: "kHz",
        explain: "fc = 1 / (2*pi*10,000*1e-9), which is about 15.9 kHz."
      },
      {
        type: "scope",
        prompt: "Which trace shows a signal after an ideal low-pass filter removes high-frequency ripple?",
        hint: "A low-pass keeps the slow trend and attenuates the fast wiggles.",
        options: ["A", "B", "C"],
        answer: "B",
        explain: "Trace B preserves the slow sine-like shape while removing the dense ripple."
      },
      {
        type: "choice",
        prompt: "A 12-bit ADC measures 0 to 3.3 V. What is the closest voltage size of one LSB?",
        hint: "Divide the full-scale range by 2^12.",
        options: ["0.08 mV", "0.81 mV", "8.1 mV", "81 mV"],
        answer: "0.81 mV",
        explain: "3.3 V / 4096 is about 0.000805 V, or 0.81 mV per count."
      },
      {
        type: "fill",
        prompt: "A sine wave has period 250 microseconds. What is its frequency in kHz?",
        hint: "Frequency is 1 / period. 250 microseconds is 0.00025 seconds.",
        answer: "4",
        tolerance: 0.2,
        suffix: "kHz",
        explain: "1 / 0.00025 s = 4000 Hz, which is 4 kHz."
      },
      {
        type: "order",
        prompt: "Order a clean signal-chain debug flow for a noisy ADC reading.",
        hint: "Start at the analog input, then move through reference, sampling, and firmware math.",
        answer: ["Probe sensor output", "Check ADC reference", "Verify sampling rate", "Inspect digital filtering"],
        explain: "A noisy reading can be analog, reference-related, timing-related, or introduced by processing."
      }
    ]
  },
  {
    id: "circuits",
    title: "Circuit Climb",
    company: "Google + Amazon style",
    topic: "Analog fundamentals",
    color: "#2266cc",
    questions: [
      {
        type: "choice",
        prompt: "A 5 V source drives a 1 kOhm resistor in series with a 4 kOhm resistor. What voltage appears across the 4 kOhm resistor?",
        hint: "A voltage divider gives Vout = Vin * Rbottom / (Rtop + Rbottom).",
        options: ["1 V", "2.5 V", "4 V", "5 V"],
        answer: "4 V",
        explain: "The 4 kOhm resistor gets 5 V * 4 / 5, so the drop is 4 V."
      },
      {
        type: "order",
        prompt: "Put these op-amp debugging checks in the best first-pass order.",
        hint: "Start with power and obvious limits before chasing small-signal behavior.",
        answer: ["Check supply rails", "Confirm input common-mode range", "Inspect feedback path", "Measure output swing"],
        explain: "Rail issues and input range violations can make feedback measurements misleading."
      },
      {
        type: "fill",
        prompt: "A 2 mA current through a 2.2 kOhm resistor dissipates how many mW?",
        hint: "Use P = I^2 R. Convert milliamps to amps first.",
        answer: "8.8",
        tolerance: 0.6,
        suffix: "mW",
        explain: "P = (0.002 A)^2 * 2200 Ohm = 0.0088 W, or 8.8 mW."
      },
      {
        type: "choice",
        prompt: "An inverting op-amp has Rin = 10 kOhm and Rf = 47 kOhm. What is the small-signal gain?",
        hint: "For an inverting amplifier, gain is -Rf / Rin.",
        options: ["-0.21", "-4.7", "+4.7", "+47"],
        answer: "-4.7",
        explain: "The gain is -47 kOhm / 10 kOhm, so the output is inverted with gain 4.7."
      },
      {
        type: "fill",
        prompt: "A 3.3 V rail supplies 120 mA to a load. How much power does the load consume in mW?",
        hint: "Use P = V * I, with current in amps.",
        answer: "396",
        tolerance: 8,
        suffix: "mW",
        explain: "3.3 V * 0.12 A = 0.396 W, which is 396 mW."
      },
      {
        type: "choice",
        prompt: "A bypass capacitor should usually be placed closest to which pins?",
        hint: "The loop area should be small where current demand changes quickly.",
        options: ["Power and ground pins", "Reset and boot pins", "UART TX and RX", "Crystal pins"],
        answer: "Power and ground pins",
        explain: "Local decoupling works best when the capacitor sits close to the IC power and ground pins."
      }
    ]
  },
  {
    id: "digital",
    title: "Logic League",
    company: "NVIDIA + Microsoft style",
    topic: "Digital design",
    color: "#7c3aed",
    questions: [
      {
        type: "choice",
        prompt: "A flip-flop has 80 ps clock-to-Q, 40 ps setup time, and the combinational path delay is 620 ps. What is the fastest ideal clock period?",
        hint: "Add clock-to-Q, logic delay, and setup time.",
        options: ["620 ps", "660 ps", "740 ps", "820 ps"],
        answer: "740 ps",
        explain: "The minimum period is 80 + 620 + 40 = 740 ps before adding skew or margin."
      },
      {
        type: "order",
        prompt: "Order the path of a simple SoC interrupt from pin event to software handler.",
        hint: "Hardware detects the edge before the CPU jumps into the handler.",
        answer: ["GPIO edge detect", "Interrupt controller", "CPU vector lookup", "ISR executes"],
        explain: "The pin event is latched by GPIO logic, routed by the interrupt controller, then handled by CPU firmware."
      },
      {
        type: "choice",
        prompt: "Which design reduces metastability risk when a one-bit async signal enters a new clock domain?",
        hint: "The common first tool is a small chain of flip-flops clocked by the destination domain.",
        options: ["Combinational decoder", "Two-flop synchronizer", "Tri-state bus", "Ripple counter"],
        answer: "Two-flop synchronizer",
        explain: "A two-flop synchronizer gives the first flop time to settle before the signal is consumed."
      },
      {
        type: "fill",
        prompt: "A clock runs at 250 MHz. What is its period in ns?",
        hint: "Period is 1 / frequency. 250 MHz is 250 million cycles per second.",
        answer: "4",
        tolerance: 0.2,
        suffix: "ns",
        explain: "1 / 250 MHz = 4 ns."
      },
      {
        type: "choice",
        prompt: "Which Verilog assignment type is preferred for sequential logic inside a clocked always block?",
        hint: "Sequential logic should update registers together at the clock edge.",
        options: ["Blocking =", "Nonblocking <=", "Continuous assign", "Tri-state assign"],
        answer: "Nonblocking <=",
        explain: "Nonblocking assignments model clocked register updates without accidental ordering dependencies."
      },
      {
        type: "order",
        prompt: "Order the steps for closing timing on a failing setup path.",
        hint: "Find the path first, then reduce delay or add timing budget.",
        answer: ["Identify worst path", "Inspect logic depth", "Pipeline or optimize logic", "Rerun static timing"],
        explain: "Timing closure starts from the reported path, then shortens combinational delay or changes the architecture."
      }
    ]
  },
  {
    id: "embedded",
    title: "Firmware Flight",
    company: "Tesla + SpaceX style",
    topic: "Embedded systems",
    color: "#d97706",
    questions: [
      {
        type: "choice",
        prompt: "An SPI sensor returns corrupt bytes only when the cable is long. Which fix is most directly relevant?",
        hint: "Long wires make edge rate, ringing, and signal integrity matter.",
        options: ["Increase heap size", "Lower SPI clock rate", "Use a larger enum", "Enable compiler warnings"],
        answer: "Lower SPI clock rate",
        explain: "Slowing the bus gives edges more time to settle and reduces signal-integrity pressure."
      },
      {
        type: "fill",
        prompt: "A 48 MHz MCU timer uses a prescaler of 48. How many timer ticks occur per millisecond?",
        hint: "48 MHz / 48 = 1 MHz, then convert one millisecond.",
        answer: "1000",
        tolerance: 0,
        suffix: "ticks",
        explain: "The timer runs at 1 MHz, so 1 ms contains 1000 ticks."
      },
      {
        type: "order",
        prompt: "Arrange the fastest path to isolate an intermittent I2C lockup.",
        hint: "Observe the bus before changing code, then test recovery.",
        answer: ["Capture SDA/SCL", "Check pull-up values", "Find stuck-low device", "Add bus recovery pulses"],
        explain: "A logic capture shows whether the problem is electrical, a stuck peripheral, or missing recovery behavior."
      },
      {
        type: "choice",
        prompt: "A watchdog timer is most useful for handling which failure mode?",
        hint: "Think about firmware that stops making forward progress.",
        options: ["Stack overflow detection only", "CPU stuck in a dead loop", "ADC quantization noise", "Lowering RF emissions"],
        answer: "CPU stuck in a dead loop",
        explain: "A watchdog resets the system if firmware stops periodically proving it is alive."
      },
      {
        type: "fill",
        prompt: "A UART runs at 115200 baud with 10 bits per byte on the wire. Roughly how many bytes per second can it carry?",
        hint: "Divide baud by bits per byte.",
        answer: "11520",
        tolerance: 250,
        suffix: "B/s",
        explain: "115200 bits per second / 10 bits per byte is about 11,520 bytes per second."
      },
      {
        type: "choice",
        prompt: "Which symptom best suggests stack growth is colliding with heap or global data?",
        hint: "Memory corruption often appears unrelated to the code that caused it.",
        options: ["Only faster boot time", "Random crashes after deeper call chains", "Perfectly repeatable ADC offset", "Lower current draw"],
        answer: "Random crashes after deeper call chains",
        explain: "Deep calls and interrupts can grow the stack until it corrupts nearby memory, causing strange crashes."
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
  const key = localStorage.getItem("circuitSession");
  const account = getAccounts()[key];
  if (account) {
    showApp(account);
    return;
  }
  showAuth();
}

function render() {
  const lesson = currentLesson();
  const question = currentQuestion();
  state.selected = null;
  state.order = question.type === "order" ? shuffle([...question.answer]) : [];

  lessonTitle.textContent = lesson.title;
  lessonIntro.textContent = `${lesson.topic} drills that feel quick, scored, and interview practical.`;
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
