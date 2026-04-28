const lessons = [
  {
    id: "signals",
    title: "Signals and Sampling",
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
      },
      {
        type: "choice",
        prompt: "A signal contains energy up to 9 kHz. Which sampling rate gives a clean Nyquist margin?",
        hint: "The sampling rate should exceed twice the highest frequency component.",
        options: ["9 kS/s", "12 kS/s", "18 kS/s", "24 kS/s"],
        answer: "24 kS/s",
        explain: "Twice 9 kHz is 18 kS/s. A 24 kS/s rate is above the Nyquist limit and leaves transition-band room for filtering.",
        source: "MIT OCW 6.003 Lecture 21: Sampling"
      },
      {
        type: "choice",
        prompt: "Why is an anti-aliasing filter placed before an ADC?",
        hint: "Think about what happens to input frequency content above half the sampling rate.",
        options: ["To remove DC offsets only", "To attenuate frequencies that would fold into baseband", "To make quantization steps smaller", "To convert binary data to analog voltage"],
        answer: "To attenuate frequencies that would fold into baseband",
        explain: "The filter limits out-of-band content before sampling so high-frequency components do not alias into the measured band.",
        source: "MIT OCW 6.003 Lecture 21: Sampling"
      },
      {
        type: "fill",
        prompt: "An 8-bit ADC spans 0 to 5 V. Estimate one LSB in mV.",
        hint: "Divide the full-scale voltage by 2^8, then convert volts to millivolts.",
        answer: "19.5",
        tolerance: 0.8,
        suffix: "mV",
        explain: "5 V / 256 is 0.0195 V, or about 19.5 mV per code.",
        source: "MIT OCW 6.003 Lecture 22: Sampling and quantization"
      },
      {
        type: "choice",
        prompt: "What does quantization primarily discretize in a sampled signal?",
        hint: "Sampling picks time instants; quantization chooses allowed output levels.",
        options: ["Amplitude", "Frequency axis labels", "Probe ground reference", "Cable impedance"],
        answer: "Amplitude",
        explain: "Sampling discretizes time, while quantization maps continuous amplitudes to a finite set of levels.",
        source: "MIT OCW 6.003 Lecture 22: Sampling and quantization"
      },
      {
        type: "fill",
        prompt: "A digital audio stream has 2 channels, 16 bits/sample, and 44.1 kS/s. What is the raw bit rate in Mbit/s?",
        hint: "Multiply channels by bits per sample by samples per second.",
        answer: "1.411",
        tolerance: 0.04,
        suffix: "Mbit/s",
        explain: "2 x 16 x 44,100 = 1,411,200 bits/s, or about 1.41 Mbit/s.",
        source: "MIT OCW 6.003 Lecture 22: Sampling and quantization"
      },
      {
        type: "order",
        prompt: "Order the stages in a basic sampled measurement chain.",
        hint: "The physical signal must be conditioned before it becomes stored digital data.",
        answer: ["Sense physical signal", "Filter analog input", "Sample and quantize", "Store digital codes"],
        explain: "A measurement chain senses the phenomenon, limits bandwidth, converts to samples, then stores or processes the resulting codes.",
        source: "MIT OCW 6.003 Lecture 21 and Lecture 22"
      }
    ]
  },
  {
    id: "circuits",
    title: "Circuit Analysis",
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
        hint: "Use P = V I, with current in amps.",
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
      },
      {
        type: "choice",
        prompt: "Which statement best matches Kirchhoff's Current Law at a node?",
        hint: "A node cannot store net charge in normal lumped circuit analysis.",
        options: ["Voltage is equal across all branches", "Currents entering equal currents leaving", "Power is always zero", "Resistance must be the same in each branch"],
        answer: "Currents entering equal currents leaving",
        explain: "KCL says the algebraic sum of currents at a node is zero, so current entering balances current leaving.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "choice",
        prompt: "Which statement best matches Kirchhoff's Voltage Law for a closed loop?",
        hint: "Walk around the loop and account for voltage rises and drops.",
        options: ["All branch currents are equal", "The algebraic sum of loop voltages is zero", "Only resistors can appear in the loop", "The largest resistor has zero voltage"],
        answer: "The algebraic sum of loop voltages is zero",
        explain: "KVL constrains the sum of voltage rises and drops around any closed path to zero.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "fill",
        prompt: "An electric iron is rated 1000 W at 240 V. Estimate the current drawn in A.",
        hint: "Use P = VI.",
        answer: "4.17",
        tolerance: 0.12,
        suffix: "A",
        explain: "I = P / V = 1000 W / 240 V = 4.17 A.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "fill",
        prompt: "The same 1000 W, 240 V heating element has what resistance in ohms?",
        hint: "Use R = V^2 / P.",
        answer: "57.6",
        tolerance: 1.2,
        suffix: "ohm",
        explain: "R = 240^2 / 1000 = 57.6 ohm.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "order",
        prompt: "Order the standard nodal-analysis workflow.",
        hint: "Choose the reference first, then write equations.",
        answer: ["Select reference node", "Assign unknown node voltages", "Apply KCL at unknown nodes", "Solve simultaneous equations"],
        explain: "Nodal analysis starts by fixing a ground/reference, assigning voltages, writing KCL, and solving the resulting system.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "order",
        prompt: "Order the standard Thevenin-equivalent workflow for a load resistor.",
        hint: "Remove the load before finding the open-circuit behavior.",
        answer: ["Remove the load", "Find open-circuit voltage", "Find equivalent source resistance", "Reconnect the load to the equivalent circuit"],
        explain: "Thevenin reduction replaces the source-side network with an open-circuit voltage in series with an equivalent resistance.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      }
    ]
  },
  {
    id: "digital",
    title: "Digital Logic",
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
      },
      {
        type: "choice",
        prompt: "A synchronous timing path is checked from a source register to what kind of endpoint?",
        hint: "Static timing analysis usually checks register-to-register paths.",
        options: ["Destination register", "Ground node", "Bypass capacitor", "UART stop bit"],
        answer: "Destination register",
        explain: "Setup and hold timing are evaluated between a launching source register and a capturing destination register.",
        source: "WPI ECE574 timing analysis notes"
      },
      {
        type: "choice",
        prompt: "Which timing requirement says data must be stable before the active clock edge?",
        hint: "This check protects the capturing register before it samples.",
        options: ["Setup time", "Hold time", "Clock-to-Q delay", "Fanout count"],
        answer: "Setup time",
        explain: "Setup time is the interval before the capturing clock edge during which input data must remain valid.",
        source: "WPI ECE574 timing analysis notes"
      },
      {
        type: "choice",
        prompt: "Which timing requirement says data must remain stable briefly after the active clock edge?",
        hint: "This protects the sample immediately after the clock event.",
        options: ["Hold time", "Rise time", "Propagation fanout", "Reset polarity"],
        answer: "Hold time",
        explain: "Hold time is the interval after the clock edge during which the input must not change.",
        source: "WPI ECE574 timing analysis notes"
      },
      {
        type: "fill",
        prompt: "A path has clock-to-Q = 90 ps, logic delay = 1.15 ns, and setup = 160 ps. What minimum clock period is needed in ns?",
        hint: "Convert ps to ns and add all three pieces.",
        answer: "1.4",
        tolerance: 0.04,
        suffix: "ns",
        explain: "0.09 ns + 1.15 ns + 0.16 ns = 1.40 ns.",
        source: "WPI ECE574 timing analysis notes"
      },
      {
        type: "choice",
        prompt: "Why do synchronizer chains reduce metastability failures?",
        hint: "They do not eliminate metastability; they provide more time before the signal is used.",
        options: ["They add settling time before downstream logic observes the signal", "They make the async signal synchronous at its source", "They remove the need for setup and hold time", "They convert all logic to analog"],
        answer: "They add settling time before downstream logic observes the signal",
        explain: "Extra flip-flop stages give a metastable output more time to resolve before it drives wider logic.",
        source: "UMBC Lecture 11: Metastability"
      },
      {
        type: "order",
        prompt: "Order a clock-domain crossing review for a one-bit status flag.",
        hint: "Find the crossing, then add or verify the destination-domain protection.",
        answer: ["Identify async source", "Find destination clock domain", "Insert two-flop synchronizer", "Check downstream fanout"],
        explain: "A one-bit CDC review tracks the source and destination clocks, then ensures synchronized fanout in the receiving domain.",
        source: "UMBC Lecture 11: Metastability"
      }
    ]
  },
  {
    id: "embedded",
    title: "Embedded Systems",
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
      },
      {
        type: "choice",
        prompt: "Which event is a common hardware interrupt source in a microcontroller?",
        hint: "Think of a peripheral condition that hardware can detect without polling.",
        options: ["Timer overflow", "Source-code comment", "Variable rename", "HTML render"],
        answer: "Timer overflow",
        explain: "Timer overflow and compare-match events are typical hardware interrupt sources.",
        source: "UMBC Lecture: Interrupts"
      },
      {
        type: "choice",
        prompt: "What is the main advantage of interrupts over a tight polling loop?",
        hint: "Polling often burns CPU time waiting for a flag.",
        options: ["They let hardware request service when an event occurs", "They remove all race conditions", "They make SPI full duplex", "They increase ADC resolution"],
        answer: "They let hardware request service when an event occurs",
        explain: "Interrupts avoid busy-waiting by letting peripherals signal the CPU when service is needed.",
        source: "UMBC Lecture: Interrupts"
      },
      {
        type: "order",
        prompt: "Order the basic interrupt handling sequence.",
        hint: "The event occurs before the CPU enters the handler.",
        answer: ["Interrupt event occurs", "Interrupt request is raised", "CPU vectors to ISR", "ISR returns to interrupted code"],
        explain: "A peripheral or software event raises an IRQ, the CPU runs the interrupt service routine, then returns to prior execution.",
        source: "UMBC Lecture: Interrupts"
      },
      {
        type: "choice",
        prompt: "Which keyword is commonly needed for a C variable shared between main code and an ISR?",
        hint: "The compiler must know the value can change outside the current code path.",
        options: ["volatile", "static_assert", "typedef", "extern inline"],
        answer: "volatile",
        explain: "A shared ISR variable is often declared volatile so compiler optimizations do not assume it is unchanged.",
        source: "UMBC Lecture: Interrupts"
      },
      {
        type: "choice",
        prompt: "Which peripheral list best matches a typical embedded-systems course lab sequence?",
        hint: "Think serial interfaces plus analog conversion and timers.",
        options: ["UART, SPI, I2C, ADC, timers", "Only HDMI and PCIe", "Only DRAM refresh", "Only AC transformer tests"],
        answer: "UART, SPI, I2C, ADC, timers",
        explain: "Embedded courses commonly cover GPIO, timers, UART, SPI, I2C, ADCs, and interrupts.",
        source: "University of Oklahoma embedded systems lecture notes and UT Dallas embedded systems catalog"
      },
      {
        type: "fill",
        prompt: "A 16 MHz timer with a prescaler of 64 ticks at what frequency in kHz?",
        hint: "Divide the clock by the prescaler, then convert Hz to kHz.",
        answer: "250",
        tolerance: 2,
        suffix: "kHz",
        explain: "16 MHz / 64 = 250,000 Hz, or 250 kHz.",
        source: "University of Oklahoma embedded systems lecture notes"
      }
    ]
  },
  {
    id: "ac-power",
    title: "AC Power",
    company: "Power systems style",
    topic: "AC circuits and power",
    color: "#c2410c",
    questions: [
      {
        type: "choice",
        prompt: "In an AC circuit, what does impedance represent?",
        hint: "It generalizes resistance for sinusoidal steady state.",
        options: ["Opposition to alternating current", "Stored charge only", "Magnetic flux density only", "The number of circuit nodes"],
        answer: "Opposition to alternating current",
        explain: "Impedance is the opposition a circuit presents to AC, combining resistance and reactance.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "choice",
        prompt: "At series resonance in an ideal RLC circuit, what is true about inductive and capacitive reactance?",
        hint: "The reactive effects cancel at resonance.",
        options: ["XL equals XC", "XL is zero and XC is infinite", "Both reactances become negative", "Reactance is unrelated to frequency"],
        answer: "XL equals XC",
        explain: "Series resonance occurs when inductive and capacitive reactances are equal in magnitude and opposite in sign.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "choice",
        prompt: "A load has voltage and current in phase. What is its power factor?",
        hint: "Power factor is cos(phi), where phi is the phase angle.",
        options: ["0", "0.5 lagging", "1", "-1"],
        answer: "1",
        explain: "When voltage and current are in phase, phi = 0 and cos(phi) = 1.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "fill",
        prompt: "A single-phase AC load has 120 Vrms and 2.5 Arms at unity power factor. What real power is consumed in W?",
        hint: "Use P = Vrms Irms cos(phi).",
        answer: "300",
        tolerance: 5,
        suffix: "W",
        explain: "At unity power factor, P = 120 x 2.5 x 1 = 300 W.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "choice",
        prompt: "In a balanced three-phase star connection, how is phase voltage related to line voltage?",
        hint: "Star and delta have different line-to-phase relationships.",
        options: ["Vph = VL / sqrt(3)", "Vph = VL", "Vph = sqrt(3) VL", "Vph = 3 VL"],
        answer: "Vph = VL / sqrt(3)",
        explain: "For a balanced star connection, phase voltage is line voltage divided by sqrt(3).",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "order",
        prompt: "Order the power triangle terms from directly dissipated to total supplied magnitude.",
        hint: "Reactive power is the quadrature component; apparent power is the vector magnitude.",
        answer: ["Real power P", "Reactive power Q", "Apparent power S"],
        explain: "Real power does useful work, reactive power oscillates with fields, and apparent power is the RMS voltage-current product magnitude.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      }
    ]
  },
  {
    id: "electronics",
    title: "Electronics Devices",
    company: "Electronics fundamentals style",
    topic: "Electronics devices",
    color: "#be185d",
    questions: [
      {
        type: "choice",
        prompt: "Which device most directly allows current mainly in one direction?",
        hint: "Think about rectifier behavior.",
        options: ["Diode", "Transformer core", "Inductor only", "Fuse holder"],
        answer: "Diode",
        explain: "A diode conducts primarily when forward biased and blocks current in reverse bias, within device limits.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "choice",
        prompt: "What is the primary purpose of a rectifier circuit?",
        hint: "It changes the form of the supply waveform.",
        options: ["Convert AC to pulsating DC", "Convert DC to a higher-frequency clock", "Measure strain directly", "Store firmware"],
        answer: "Convert AC to pulsating DC",
        explain: "Rectifier circuits use diodes to convert alternating voltage into a one-direction waveform.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "choice",
        prompt: "A Zener diode is commonly used in reverse breakdown for which purpose?",
        hint: "Its breakdown voltage is designed to be useful.",
        options: ["Voltage regulation", "Mechanical speed sensing", "Magnetic storage", "Optical zoom"],
        answer: "Voltage regulation",
        explain: "A Zener diode can hold an approximately constant voltage when operated in its breakdown region with proper current limiting.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "fill",
        prompt: "A silicon diode has about 0.7 V forward drop at the operating point. With a 5 V source and 1 kOhm series resistor, estimate current in mA.",
        hint: "Subtract the diode drop, then use Ohm's law.",
        answer: "4.3",
        tolerance: 0.3,
        suffix: "mA",
        explain: "The resistor sees about 5 - 0.7 = 4.3 V, so I = 4.3 V / 1 kOhm = 4.3 mA.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "order",
        prompt: "Order a basic regulated DC supply chain.",
        hint: "Start with AC conversion, then smooth and regulate.",
        answer: ["Step down transformer", "Rectifier", "Filter capacitor", "Voltage regulator"],
        explain: "A basic supply scales AC, rectifies it, filters ripple, and regulates the DC output.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "choice",
        prompt: "In a BJT used as a switch, which operating region corresponds to a strongly ON switch?",
        hint: "The transistor is driven so both junctions support heavy conduction.",
        options: ["Saturation", "Cutoff", "Avalanche-only", "Open-circuit region"],
        answer: "Saturation",
        explain: "A BJT switch is typically driven into saturation for the ON state and cutoff for the OFF state.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      }
    ]
  },
  {
    id: "instrumentation",
    title: "Instrumentation",
    company: "Instrumentation style",
    topic: "Instrumentation and sensors",
    color: "#0f766e",
    questions: [
      {
        type: "choice",
        prompt: "What is the function of a transducer in an instrumentation system?",
        hint: "It bridges physical quantities and electrical measurement.",
        options: ["Convert one form of energy into another", "Erase quantization noise", "Force AC current to lag", "Store all node voltages"],
        answer: "Convert one form of energy into another",
        explain: "A transducer converts a physical quantity into a corresponding electrical signal, or in inverse form converts electrical energy to another form.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "choice",
        prompt: "Which parameter describes output change per unit input change for a sensor?",
        hint: "A more sensitive sensor gives more output for the same input change.",
        options: ["Sensitivity", "Line voltage", "Mesh count", "Carrier frequency only"],
        answer: "Sensitivity",
        explain: "Sensitivity is the ratio of output response to the measured input change.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "choice",
        prompt: "A strain gauge commonly senses force-induced strain by changing which electrical property?",
        hint: "The wire or film changes as it stretches.",
        options: ["Resistance", "Line frequency", "Program counter", "Clock phase sequence"],
        answer: "Resistance",
        explain: "A strain gauge is a passive transducer that uses resistance variation caused by strain.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "choice",
        prompt: "A sample-and-hold circuit before an ADC is best described as what?",
        hint: "It keeps the input steady during conversion.",
        options: ["A voltage memory", "A Norton source", "A flip-flop synchronizer", "A three-phase load"],
        answer: "A voltage memory",
        explain: "A sample-and-hold acquires an input voltage and stores it on a capacitor so the ADC sees a stable value.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "order",
        prompt: "Order a practical sensor selection workflow.",
        hint: "Define what you need before choosing the device.",
        answer: ["Define measurand and range", "Check sensor principle", "Verify output compatibility", "Evaluate environment and error"],
        explain: "Transducer selection starts with the measured quantity and range, then checks sensing principle, interface needs, environment, and error limits.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      },
      {
        type: "fill",
        prompt: "A 10-bit ADC has how many distinct output codes?",
        hint: "Use 2^bits.",
        answer: "1024",
        tolerance: 0,
        suffix: "codes",
        explain: "A 10-bit converter has 2^10 = 1024 possible output codes.",
        source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
      }
    ]
  }
];

const supplementalQuestionBank = {
  signals: [
    ...[
      [6, "12 kS/s", ["6 kS/s", "9 kS/s", "12 kS/s", "48 kS/s"]],
      [7.5, "15 kS/s", ["7.5 kS/s", "10 kS/s", "15 kS/s", "30 kS/s"]],
      [12, "24 kS/s", ["12 kS/s", "18 kS/s", "24 kS/s", "96 kS/s"]],
      [22, "44 kS/s", ["22 kS/s", "30 kS/s", "44 kS/s", "88 kS/s"]]
    ].map(([bandwidth, answer, options]) => ({
      type: "choice",
      prompt: `A measurement signal is band-limited to ${bandwidth} kHz. What ideal minimum sampling rate avoids aliasing?`,
      hint: "Use the Nyquist condition: sample at least twice the highest frequency.",
      options,
      answer,
      explain: `The ideal minimum is 2 x ${bandwidth} kHz = ${answer}.`,
      source: "MIT OCW 6.003 Lecture 21: Sampling"
    })),
    ...[
      [10, 3.3, "3.22"],
      [12, 2.5, "0.61"],
      [14, 5, "0.305"],
      [16, 3.3, "0.050"]
    ].map(([bits, span, answer]) => ({
      type: "fill",
      prompt: `An ${bits}-bit ADC spans 0 to ${span} V. Estimate one LSB in mV.`,
      hint: `Divide ${span} V by 2^${bits}, then convert to mV.`,
      answer,
      tolerance: Math.max(Number(answer) * 0.06, 0.02),
      suffix: "mV",
      explain: `${span} V / ${2 ** bits} gives about ${answer} mV per code.`,
      source: "MIT OCW 6.003 Lecture 22: Sampling and quantization"
    })),
    ...[
      [500, "2", "ms"],
      [2, "0.5", "ms"],
      [25, "40", "microseconds"],
      [100, "10", "microseconds"]
    ].map(([frequency, answer, suffix]) => ({
      type: "fill",
      prompt: `A periodic signal has frequency ${frequency} ${frequency >= 25 ? "kHz" : "Hz"}. What is its period?`,
      hint: "Period is the reciprocal of frequency.",
      answer,
      tolerance: Number(answer) * 0.08,
      suffix,
      explain: `T = 1 / f, so this signal's period is about ${answer} ${suffix}.`,
      source: "MIT OCW 6.003 Signals and Systems notes"
    })),
    ...[
      ["Sampling", "Time"],
      ["Quantization", "Amplitude"],
      ["Anti-alias filtering", "Input bandwidth"],
      ["Reconstruction filtering", "Output smoothing"]
    ].map(([operation, answer]) => ({
      type: "choice",
      prompt: `In a sampled-data system, ${operation} most directly controls which quantity?`,
      hint: "Separate time discretization, amplitude discretization, and filtering roles.",
      options: ["Time", "Amplitude", "Input bandwidth", "Output smoothing"],
      answer,
      explain: `${operation} is associated with ${answer.toLowerCase()} in the signal chain.`,
      source: "MIT OCW 6.003 Lecture 21 and Lecture 22"
    })),
    {
      type: "choice",
      prompt: "What happens when a 13 kHz tone is sampled at 20 kS/s without adequate anti-alias filtering?",
      hint: "The tone is above half the sample rate.",
      options: ["It aliases to a lower apparent frequency", "It disappears from all samples", "It becomes exactly DC", "It doubles to 26 kHz"],
      answer: "It aliases to a lower apparent frequency",
      explain: "Frequencies above fs/2 fold back into the sampled spectrum.",
      source: "MIT OCW 6.003 Lecture 21: Sampling"
    },
    {
      type: "fill",
      prompt: "A 13 kHz tone is sampled at 20 kS/s. What alias frequency appears in kHz?",
      hint: "For this case, compute |fs - f|.",
      answer: "7",
      tolerance: 0.2,
      suffix: "kHz",
      explain: "|20 - 13| = 7 kHz.",
      source: "MIT OCW 6.003 Lecture 21: Sampling"
    },
    {
      type: "choice",
      prompt: "Which change reduces quantization step size for the same input voltage range?",
      hint: "More available codes means smaller intervals.",
      options: ["Increase ADC bit depth", "Lower the sample clock only", "Remove the anti-alias filter", "Use a longer cable"],
      answer: "Increase ADC bit depth",
      explain: "Increasing bit depth increases the number of codes, reducing each code width.",
      source: "MIT OCW 6.003 Lecture 22: Sampling and quantization"
    },
    {
      type: "choice",
      prompt: "Which signal is most likely to need anti-alias filtering before digitization?",
      hint: "Look for energy beyond the ADC's usable Nyquist band.",
      options: ["A sensor with high-frequency vibration noise", "A constant battery voltage", "A firmware enum", "A static resistor color code"],
      answer: "A sensor with high-frequency vibration noise",
      explain: "High-frequency components can fold into the sampled band unless attenuated first.",
      source: "MIT OCW 6.003 Lecture 21: Sampling"
    },
    {
      type: "order",
      prompt: "Order the steps to diagnose aliasing in a sampled sensor trace.",
      hint: "Measure the analog signal before changing digital filters.",
      answer: ["Inspect sample rate", "Probe analog spectrum", "Check anti-alias filter cutoff", "Retest sampled data"],
      explain: "Aliasing debug starts with sample-rate and analog bandwidth, then verifies filtering and retests.",
      source: "MIT OCW 6.003 Lecture 21: Sampling"
    },
    {
      type: "choice",
      prompt: "A zero-order hold output from a DAC most directly does what between sample updates?",
      hint: "It holds the last converted value.",
      options: ["Maintains a constant output level", "Computes an FFT", "Changes the ADC reference", "Cancels all quantization noise"],
      answer: "Maintains a constant output level",
      explain: "A sample-and-hold or zero-order hold keeps one output level until the next update.",
      source: "MIT OCW 6.003 Sampling and quantization topics"
    },
    {
      type: "fill",
      prompt: "A mono 12-bit stream sampled at 8 kS/s has what raw bit rate in kbit/s?",
      hint: "bits/sample times samples/second.",
      answer: "96",
      tolerance: 2,
      suffix: "kbit/s",
      explain: "12 x 8000 = 96,000 bits/s.",
      source: "MIT OCW 6.003 Lecture 22: Sampling and quantization"
    },
    {
      type: "choice",
      prompt: "Which representation is usually most useful for seeing filter attenuation versus frequency?",
      hint: "The x-axis is frequency.",
      options: ["Frequency response", "Truth table", "Interrupt vector table", "Node-voltage matrix only"],
      answer: "Frequency response",
      explain: "Frequency response shows gain and phase as functions of frequency.",
      source: "MIT OCW 6.003 Signals and Systems"
    },
    {
      type: "choice",
      prompt: "A moving-average filter mainly behaves like which simple filter type?",
      hint: "It smooths quick variation.",
      options: ["Low-pass", "High-pass only", "Ideal differentiator only", "Voltage regulator"],
      answer: "Low-pass",
      explain: "A moving average smooths fast changes, so it attenuates higher-frequency content.",
      source: "MIT OCW 6.003 Signals and Systems"
    },
    {
      type: "order",
      prompt: "Order the common DSP path after ADC conversion.",
      hint: "Raw samples are usually conditioned before a decision is made.",
      answer: ["Acquire samples", "Remove offset", "Filter noise", "Estimate feature"],
      explain: "DSP pipelines commonly acquire data, correct baseline error, filter, then calculate features.",
      source: "MIT OCW 6.003 Signals and Systems"
    },
    {
      type: "choice",
      prompt: "Which issue is caused by using too few ADC bits?",
      hint: "The output levels are too coarse.",
      options: ["Large quantization error", "Clock-domain metastability", "Kirchhoff law violation", "I2C address conflict only"],
      answer: "Large quantization error",
      explain: "Fewer bits make larger code intervals, increasing quantization error.",
      source: "MIT OCW 6.003 Lecture 22: Sampling and quantization"
    },
    {
      type: "fill",
      prompt: "A 1 kHz sine is sampled 20 times per cycle. What sample rate is used in kS/s?",
      hint: "Multiply cycles per second by samples per cycle.",
      answer: "20",
      tolerance: 0.3,
      suffix: "kS/s",
      explain: "1 kHz x 20 samples/cycle = 20 kS/s.",
      source: "MIT OCW 6.003 Lecture 21: Sampling"
    },
    {
      type: "choice",
      prompt: "Which filter should be used before downsampling a signal?",
      hint: "Downsampling lowers the new Nyquist frequency.",
      options: ["Low-pass anti-alias filter", "Unbounded differentiator", "Random code remapper", "Open-circuit test"],
      answer: "Low-pass anti-alias filter",
      explain: "Before downsampling, high-frequency content must be reduced to avoid folding into the lower-rate signal.",
      source: "MIT OCW 6.003 Sampling topics"
    },
    {
      type: "fill",
      prompt: "A 5 V signal uses a 10-bit converter. What full-scale code count is closest, excluding zero-based wording?",
      hint: "Use 2^bits possible codes.",
      answer: "1024",
      tolerance: 0,
      suffix: "codes",
      explain: "A 10-bit converter has 2^10 = 1024 distinct codes.",
      source: "MIT OCW 6.003 Lecture 22: Sampling and quantization"
    },
    {
      type: "choice",
      prompt: "Why can oversampling help a practical measurement chain?",
      hint: "More samples can create processing margin.",
      options: ["It gives room for digital filtering and averaging", "It breaks Ohm's law", "It removes the need for an analog front-end", "It makes every sensor self-powered"],
      answer: "It gives room for digital filtering and averaging",
      explain: "Oversampling can support averaging, digital filtering, and easier analog filter design.",
      source: "MIT OCW 6.003 Sampling topics"
    },
    {
      type: "order",
      prompt: "Order the design checks for selecting an ADC sample rate.",
      hint: "Start with the signal and end with implementation margin.",
      answer: ["Find signal bandwidth", "Choose anti-alias cutoff", "Pick sample rate", "Verify processing load"],
      explain: "Sample-rate choice starts from bandwidth, includes analog filtering, then checks whether firmware can keep up.",
      source: "MIT OCW 6.003 Lecture 21: Sampling"
    },
    {
      type: "choice",
      prompt: "Which situation most clearly indicates clipping rather than quantization noise?",
      hint: "The waveform hits the converter limits.",
      options: ["Repeated flat tops at full scale", "Small random code-to-code variation", "A valid Nyquist-rate choice", "A lower source impedance"],
      answer: "Repeated flat tops at full scale",
      explain: "Clipping occurs when the signal exceeds the measurable range and saturates at the rail or code limit.",
      source: "MIT OCW 6.003 Sampling and quantization topics"
    },
    {
      type: "fill",
      prompt: "A sensor sampled at 2 kS/s has a Nyquist frequency of what Hz?",
      hint: "Nyquist frequency is half the sample rate.",
      answer: "1000",
      tolerance: 10,
      suffix: "Hz",
      explain: "Half of 2 kS/s is 1 kHz.",
      source: "MIT OCW 6.003 Lecture 21: Sampling"
    }
  ],
  circuits: [
    ...[
      [2, 3, "5"],
      [4.7, 10, "14.7"],
      [1.2, 2.2, "3.4"],
      [5.6, 3.3, "8.9"]
    ].map(([r1, r2, answer]) => ({
      type: "fill",
      prompt: `Two resistors, ${r1} kOhm and ${r2} kOhm, are in series. What is the equivalent resistance in kOhm?`,
      hint: "Series resistances add directly.",
      answer,
      tolerance: 0.05,
      suffix: "kOhm",
      explain: `Req = ${r1} + ${r2} = ${answer} kOhm.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    ...[
      [1000, 1000, "500"],
      [2000, 2000, "1000"],
      [3000, 6000, "2000"],
      [1000, 3000, "750"]
    ].map(([r1, r2, answer]) => ({
      type: "fill",
      prompt: `${r1} ohm and ${r2} ohm resistors are in parallel. What is the equivalent resistance?`,
      hint: "For two resistors, Req = R1 R2 / (R1 + R2).",
      answer,
      tolerance: Math.max(Number(answer) * 0.03, 1),
      suffix: "ohm",
      explain: `Req = (${r1} x ${r2}) / (${r1} + ${r2}) = ${answer} ohm.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    ...[
      [12, 3, "4"],
      [9, 2.2, "4.09"],
      [5, 0.25, "20"],
      [24, 6, "4"]
    ].map(([voltage, current, answer]) => ({
      type: "fill",
      prompt: `A resistor has ${voltage} V across it and ${current} A through it. What is its resistance?`,
      hint: "Use Ohm's law, R = V / I.",
      answer,
      tolerance: Number(answer) * 0.05,
      suffix: "ohm",
      explain: `R = ${voltage} / ${current} = ${answer} ohm.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    ...[
      ["KCL", "Node-current equations"],
      ["KVL", "Loop-voltage equations"],
      ["Nodal analysis", "Unknown node voltages"],
      ["Mesh analysis", "Unknown loop currents"]
    ].map(([method, answer]) => ({
      type: "choice",
      prompt: `${method} is most directly associated with which analysis idea?`,
      hint: "Match node methods with current balance and mesh methods with loop voltage.",
      options: ["Node-current equations", "Loop-voltage equations", "Unknown node voltages", "Unknown loop currents"],
      answer,
      explain: `${method} is commonly used with ${answer.toLowerCase()}.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    {
      type: "choice",
      prompt: "Which condition is required for maximum power transfer in a DC resistive Thevenin circuit?",
      hint: "Compare the load resistance to the source-side equivalent resistance.",
      options: ["RL = Rth", "RL = 0", "RL is infinite", "RL must be negative"],
      answer: "RL = Rth",
      explain: "For a DC resistive Thevenin source, maximum load power occurs when RL equals Rth.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "In superposition, what do you do with an ideal voltage source while considering another independent source?",
      hint: "Deactivate it using its internal resistance.",
      options: ["Replace it with a short circuit", "Replace it with an open circuit", "Double its voltage", "Convert it to a capacitor"],
      answer: "Replace it with a short circuit",
      explain: "An ideal voltage source has zero internal resistance, so deactivating it shorts it.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "In superposition, what do you do with an ideal current source while considering another independent source?",
      hint: "Deactivate it using its internal resistance.",
      options: ["Replace it with an open circuit", "Replace it with a short circuit", "Set it to a voltage divider", "Turn it into a diode"],
      answer: "Replace it with an open circuit",
      explain: "An ideal current source has infinite internal resistance, so deactivating it opens the branch.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "order",
      prompt: "Order the Norton-equivalent workflow.",
      hint: "Norton uses short-circuit current and equivalent resistance.",
      answer: ["Remove the load", "Find short-circuit current", "Find equivalent resistance", "Place source in parallel with resistance"],
      explain: "A Norton equivalent is a current source in parallel with the source-side equivalent resistance.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "What is a circuit node?",
      hint: "It is a connection point shared by elements.",
      options: ["A point where two or more elements connect", "Only a voltage source", "A closed path with no elements", "A resistor package size"],
      answer: "A point where two or more elements connect",
      explain: "A node or junction is a point where circuit elements are electrically connected.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "What distinguishes a mesh from a general loop?",
      hint: "A mesh is an elementary closed path.",
      options: ["A mesh contains no smaller loop inside it", "A mesh must contain a battery", "A mesh cannot include resistors", "A mesh is always open"],
      answer: "A mesh contains no smaller loop inside it",
      explain: "A mesh is a loop that does not enclose another loop.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "A 12 V source drives 2 kOhm and 4 kOhm in series. What current flows in mA?",
      hint: "Add series resistance, then use I = V / R.",
      answer: "2",
      tolerance: 0.1,
      suffix: "mA",
      explain: "Total resistance is 6 kOhm, so current is 12 V / 6000 ohm = 2 mA.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "A 10 mA current flows through 470 ohm. What voltage drop appears in V?",
      hint: "Use V = IR, with current in amps.",
      answer: "4.7",
      tolerance: 0.15,
      suffix: "V",
      explain: "0.010 A x 470 ohm = 4.7 V.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which instrument connection is appropriate for measuring voltage across a resistor?",
      hint: "Voltage is measured across two points.",
      options: ["Voltmeter in parallel", "Ammeter in parallel with no resistance", "Ohmmeter on a powered circuit", "Current clamp around only insulation labels"],
      answer: "Voltmeter in parallel",
      explain: "A voltmeter is connected across the element whose voltage is being measured.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which instrument connection is appropriate for measuring branch current?",
      hint: "Current must pass through the meter.",
      options: ["Ammeter in series", "Voltmeter in series", "Ohmmeter across a live supply", "Oscilloscope ground as a fuse"],
      answer: "Ammeter in series",
      explain: "An ammeter is inserted in series so the branch current flows through it.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "order",
      prompt: "Order a practical DC circuit debug flow.",
      hint: "Start with safety and source checks before detailed node math.",
      answer: ["Power off inspection", "Verify supply voltage", "Measure key node voltages", "Compare branch currents"],
      explain: "Practical debug starts with safe inspection, then supply, node voltages, and current consistency.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "A network becomes a circuit when it contains what?",
      hint: "Current needs a complete path.",
      options: ["At least one closed path", "Only one isolated node", "No source of any kind", "Only open switches"],
      answer: "At least one closed path",
      explain: "A circuit is a network with at least one closed path.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "A 2 W resistor carries 0.5 A. What resistance would dissipate that power in ohms?",
      hint: "Use P = I^2 R.",
      answer: "8",
      tolerance: 0.2,
      suffix: "ohm",
      explain: "R = P / I^2 = 2 / 0.25 = 8 ohm.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which theorem replaces a linear bilateral network by a voltage source in series with resistance?",
      hint: "The equivalent source is Vth.",
      options: ["Thevenin theorem", "Norton theorem", "Sampling theorem", "De Morgan theorem"],
      answer: "Thevenin theorem",
      explain: "Thevenin's theorem uses a voltage source in series with equivalent resistance.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which theorem replaces a linear bilateral network by a current source in parallel with resistance?",
      hint: "The equivalent source is In.",
      options: ["Norton theorem", "Thevenin theorem", "KVL only", "Nyquist theorem"],
      answer: "Norton theorem",
      explain: "Norton's theorem uses a current source in parallel with equivalent resistance.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "A 15 V Thevenin source with Rth = 5 ohm drives RL = 10 ohm. What load current flows in A?",
      hint: "The resistances are in series in the Thevenin equivalent.",
      answer: "1",
      tolerance: 0.05,
      suffix: "A",
      explain: "I = 15 / (5 + 10) = 1 A.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    }
  ],
  digital: makeSupplementalConceptQuestions("digital", 28),
  embedded: makeSupplementalConceptQuestions("embedded", 28),
  "ac-power": makeSupplementalConceptQuestions("ac-power", 34),
  electronics: makeSupplementalConceptQuestions("electronics", 34),
  instrumentation: makeSupplementalConceptQuestions("instrumentation", 34)
};

applySupplementalQuestionBank();

function applySupplementalQuestionBank() {
  lessons.forEach((lesson) => {
    lesson.questions.push(...(supplementalQuestionBank[lesson.id] || []));
    if (lesson.questions.length > 40) lesson.questions.length = 40;
  });
}

function makeSupplementalConceptQuestions(conceptId, targetCount) {
  const builders = {
    digital: digitalSupplementals,
    embedded: embeddedSupplementals,
    "ac-power": acPowerSupplementals,
    electronics: electronicsSupplementals,
    instrumentation: instrumentationSupplementals
  };
  return builders[conceptId]().slice(0, targetCount);
}

function digitalSupplementals() {
  return [
    ...[
      [70, 35, 410, "515"],
      [120, 80, 700, "900"],
      [55, 45, 350, "450"],
      [90, 60, 950, "1100"]
    ].map(([cq, setup, logic, answer]) => ({
      type: "fill",
      prompt: `A register path has clock-to-Q = ${cq} ps, setup = ${setup} ps, and logic delay = ${logic} ps. What minimum clock period is needed?`,
      hint: "Add clock-to-Q, combinational delay, and setup time.",
      answer,
      tolerance: 8,
      suffix: "ps",
      explain: `${cq} + ${logic} + ${setup} = ${answer} ps.`,
      source: "WPI ECE574 timing-analysis notes"
    })),
    ...[
      ["Setup slack", "Time margin before the capture edge"],
      ["Hold slack", "Time margin after the capture edge"],
      ["Clock-to-Q delay", "Register output delay after a clock edge"],
      ["False path", "A path excluded because it is not functionally timed"],
      ["Multicycle path", "A path allowed more than one clock period"]
    ].map(([term, answer]) => ({
      type: "choice",
      prompt: `In static timing analysis, what does ${term} refer to?`,
      hint: "Match the term to a timing-analysis meaning.",
      options: ["Time margin before the capture edge", "Time margin after the capture edge", "Register output delay after a clock edge", "A path excluded because it is not functionally timed", "A path allowed more than one clock period"],
      answer,
      explain: `${term} means ${answer.toLowerCase()}.`,
      source: "WPI ECE574 timing-analysis notes"
    })),
    ...[
      ["Two-flop synchronizer", "Single-bit clock-domain crossing"],
      ["Handshake", "Multi-bit event transfer"],
      ["FIFO", "Streaming data between clock domains"],
      ["Gray counter", "Multi-bit pointer crossing"]
    ].map(([technique, answer]) => ({
      type: "choice",
      prompt: `${technique} is most often used for which digital-design situation?`,
      hint: "Think about clock-domain crossing patterns.",
      options: ["Single-bit clock-domain crossing", "Multi-bit event transfer", "Streaming data between clock domains", "Multi-bit pointer crossing"],
      answer,
      explain: `${technique} is a common tool for ${answer.toLowerCase()}.`,
      source: "UMBC metastability and clock-domain crossing notes"
    })),
    ...[
      ["AND", "1 only when both inputs are 1"],
      ["OR", "1 when at least one input is 1"],
      ["XOR", "1 when inputs differ"],
      ["NAND", "0 only when both inputs are 1"],
      ["NOR", "1 only when both inputs are 0"]
    ].map(([gate, answer]) => ({
      type: "choice",
      prompt: `Which behavior describes a ${gate} gate?`,
      hint: "Use the basic two-input truth-table definition.",
      options: ["1 only when both inputs are 1", "1 when at least one input is 1", "1 when inputs differ", "0 only when both inputs are 1", "1 only when both inputs are 0"],
      answer,
      explain: `A ${gate} gate is defined by: ${answer}.`,
      source: "NASA NTRS digital circuits using universal logic gates"
    })),
    {
      type: "choice",
      prompt: "Why is a NAND gate called functionally complete?",
      hint: "A complete gate can build other logic functions.",
      options: ["Any Boolean function can be built from NAND gates", "It stores analog charge forever", "It can only invert clocks", "It removes setup time"],
      answer: "Any Boolean function can be built from NAND gates",
      explain: "NAND is a universal gate because combinations of NAND gates can implement arbitrary Boolean logic.",
      source: "NASA NTRS digital circuits using universal logic gates"
    },
    {
      type: "choice",
      prompt: "What does metastability mean for a flip-flop output?",
      hint: "The output temporarily does not resolve cleanly to 0 or 1.",
      options: ["A temporary unresolved voltage state", "A guaranteed stuck-at-zero fault", "A lower clock frequency setting", "A resistor tolerance code"],
      answer: "A temporary unresolved voltage state",
      explain: "Metastability is a temporary quasi-stable state that can happen when timing requirements are violated.",
      source: "UMBC Lecture 11: Metastability"
    },
    {
      type: "order",
      prompt: "Order a basic static timing debug path.",
      hint: "Start from the report, then inspect and modify the path.",
      answer: ["Read worst negative slack", "Identify source and destination registers", "Inspect combinational logic", "Optimize or pipeline"],
      explain: "Timing closure starts with the failing path, then reduces delay or changes the architecture.",
      source: "WPI ECE574 timing-analysis notes"
    },
    {
      type: "choice",
      prompt: "Which HDL style is safest for combinational logic to avoid inferred latches?",
      hint: "Every output should be assigned for every input path.",
      options: ["Assign all outputs on every branch", "Leave outputs unassigned by default", "Use only clocked always blocks", "Remove sensitivity to inputs"],
      answer: "Assign all outputs on every branch",
      explain: "Incomplete combinational assignments can infer storage, so every output path should be covered.",
      source: "University digital design lecture notes"
    },
    {
      type: "fill",
      prompt: "A 100 MHz clock has what period in ns?",
      hint: "Period is 1 / frequency.",
      answer: "10",
      tolerance: 0.2,
      suffix: "ns",
      explain: "1 / 100 MHz = 10 ns.",
      source: "WPI ECE574 timing-analysis notes"
    },
    {
      type: "fill",
      prompt: "A 40 MHz clock has what period in ns?",
      hint: "Period is 1 / frequency.",
      answer: "25",
      tolerance: 0.5,
      suffix: "ns",
      explain: "1 / 40 MHz = 25 ns.",
      source: "WPI ECE574 timing-analysis notes"
    },
    {
      type: "choice",
      prompt: "Which issue is a classic risk when a pushbutton enters FPGA logic without synchronization?",
      hint: "The input is asynchronous to the FPGA clock.",
      options: ["Metastability", "Three-phase imbalance", "Quantization step rounding", "Zener breakdown"],
      answer: "Metastability",
      explain: "An asynchronous input can violate setup or hold timing at the receiving flip-flop.",
      source: "UMBC Lecture 11: Metastability"
    },
    {
      type: "order",
      prompt: "Order the safer treatment of an asynchronous reset release.",
      hint: "Assertion can be async, but release should be controlled.",
      answer: ["Assert reset", "Synchronize reset deassertion", "Release destination registers", "Verify timing"],
      explain: "Reset deassertion should be synchronized to avoid recovery/removal timing problems.",
      source: "WPI ECE574 timing-analysis notes"
    },
    {
      type: "choice",
      prompt: "Which circuit element stores one bit in synchronous logic?",
      hint: "It captures data on a clock edge.",
      options: ["Flip-flop", "Resistor divider", "Transformer", "Thermistor"],
      answer: "Flip-flop",
      explain: "A flip-flop stores a bit and updates on a clock edge.",
      source: "UMBC digital systems lecture notes"
    },
    {
      type: "choice",
      prompt: "What is fanout?",
      hint: "Count the loads driven by a signal.",
      options: ["Number of inputs driven by one output", "Voltage across a capacitor", "A mesh current", "ADC sample depth"],
      answer: "Number of inputs driven by one output",
      explain: "Fanout is the number of receiving inputs that a signal output drives.",
      source: "UMBC digital systems lecture notes"
    },
    {
      type: "choice",
      prompt: "Which symptom suggests a hold-time problem?",
      hint: "Data changes too soon after the capture clock.",
      options: ["Capture register sees new data too early", "ADC reference is too low", "Power factor is leading", "A diode is reverse biased"],
      answer: "Capture register sees new data too early",
      explain: "Hold violations happen when data changes before the capture register's hold window closes.",
      source: "WPI ECE574 timing-analysis notes"
    },
    {
      type: "order",
      prompt: "Order a combinational logic simplification flow.",
      hint: "Start with the truth table and end with gates.",
      answer: ["Write truth table", "Derive Boolean expression", "Simplify expression", "Map to gates"],
      explain: "Digital logic design commonly proceeds from truth table to simplified Boolean implementation.",
      source: "NASA NTRS digital circuits using universal logic gates"
    },
    {
      type: "choice",
      prompt: "Which check protects against data arriving too late at a register?",
      hint: "Late data is a maximum-delay problem.",
      options: ["Setup timing", "Hold timing", "Pull-up sizing", "Power factor correction"],
      answer: "Setup timing",
      explain: "Setup analysis checks whether data arrives early enough before the capture edge.",
      source: "WPI ECE574 timing-analysis notes"
    },
    {
      type: "choice",
      prompt: "Which check protects against data arriving too soon at a register?",
      hint: "Too-soon data is a minimum-delay problem.",
      options: ["Hold timing", "Setup timing", "ADC aperture", "Thevenin resistance"],
      answer: "Hold timing",
      explain: "Hold analysis checks that data remains stable long enough after the capture edge.",
      source: "WPI ECE574 timing-analysis notes"
    },
    {
      type: "fill",
      prompt: "A 4-bit binary counter has how many states?",
      hint: "Use 2^bits.",
      answer: "16",
      tolerance: 0,
      suffix: "states",
      explain: "2^4 = 16 states.",
      source: "University digital systems lecture notes"
    },
    {
      type: "choice",
      prompt: "Why are Gray-code counters often used for FIFO pointers crossing clock domains?",
      hint: "Only one bit changes per count.",
      options: ["They reduce multi-bit sampling ambiguity", "They increase analog gain", "They replace all memory cells", "They force unity power factor"],
      answer: "They reduce multi-bit sampling ambiguity",
      explain: "Gray code changes one bit at a time, reducing ambiguity when sampled across a clock boundary.",
      source: "UMBC metastability notes"
    },
    {
      type: "order",
      prompt: "Order the lifecycle of a registered signal.",
      hint: "Launch, travel, then capture.",
      answer: ["Launch clock edge", "Clock-to-Q delay", "Combinational path delay", "Capture setup window"],
      explain: "A registered signal launches after clock-to-Q, travels through logic, then must meet setup at capture.",
      source: "WPI ECE574 timing-analysis notes"
    }
  ];
}

function embeddedSupplementals() {
  return [
    ...[
      ["UART", "Asynchronous serial bytes with start and stop bits"],
      ["SPI", "Synchronous full-duplex serial bus with chip select"],
      ["I2C", "Two-wire addressed bus with open-drain signaling"],
      ["ADC", "Peripheral that converts analog voltage to digital code"],
      ["Timer compare-match", "Event when counter equals a programmed value"]
    ].map(([term, answer]) => ({
      type: "choice",
      prompt: `In embedded systems, what does ${term} most directly describe?`,
      hint: "Match the peripheral to its common job.",
      options: ["Asynchronous serial bytes with start and stop bits", "Synchronous full-duplex serial bus with chip select", "Two-wire addressed bus with open-drain signaling", "Peripheral that converts analog voltage to digital code", "Event when counter equals a programmed value"],
      answer,
      explain: `${term} is used for ${answer.toLowerCase()}.`,
      source: "University of Oklahoma embedded systems lecture PDFs"
    })),
    ...[
      [8, 8, "1000"],
      [16, 64, "250"],
      [48, 48000, "1"],
      [72, 72, "1000"]
    ].map(([clock, prescaler, answer]) => ({
      type: "fill",
      prompt: `An MCU timer clock is ${clock} MHz with prescaler ${prescaler}. What is the timer tick rate in kHz?`,
      hint: "Divide clock frequency by prescaler.",
      answer,
      tolerance: Math.max(Number(answer) * 0.03, 0.05),
      suffix: "kHz",
      explain: `${clock} MHz / ${prescaler} = ${answer} kHz.`,
      source: "University of Oklahoma embedded systems timer notes"
    })),
    ...[
      ["RX data ready", "UART receive interrupt"],
      ["Timer overflow", "Periodic scheduling tick"],
      ["ADC conversion complete", "Sample-ready interrupt"],
      ["Watchdog timeout", "Recovery from stalled firmware"]
    ].map(([event, answer]) => ({
      type: "choice",
      prompt: `${event} is most closely associated with which embedded use?`,
      hint: "Match the hardware event to the firmware response.",
      options: ["UART receive interrupt", "Periodic scheduling tick", "Sample-ready interrupt", "Recovery from stalled firmware"],
      answer,
      explain: `${event} commonly triggers ${answer.toLowerCase()}.`,
      source: "UMBC Lecture: Interrupts"
    })),
    {
      type: "choice",
      prompt: "Why should interrupt service routines usually be short?",
      hint: "Long handlers block other time-sensitive work.",
      options: ["They reduce latency and jitter for other events", "They increase ADC resolution", "They replace all queues", "They make UART synchronous"],
      answer: "They reduce latency and jitter for other events",
      explain: "Short ISRs keep the system responsive and defer longer work to the main loop or scheduler.",
      source: "UMBC Lecture: Interrupts"
    },
    {
      type: "choice",
      prompt: "What is a ring buffer useful for in UART firmware?",
      hint: "Bytes arrive at times the main loop may not immediately process.",
      options: ["Decoupling interrupt receive from application processing", "Generating three-phase AC", "Increasing transistor beta", "Replacing pull-up resistors"],
      answer: "Decoupling interrupt receive from application processing",
      explain: "A ring buffer lets an ISR store bytes quickly while foreground code consumes them later.",
      source: "University embedded systems lecture notes"
    },
    {
      type: "choice",
      prompt: "Why does I2C typically use pull-up resistors?",
      hint: "Devices pull the bus low and release it high.",
      options: ["The bus is open-drain/open-collector", "The bus is always push-pull", "It removes addressing", "It converts AC to DC"],
      answer: "The bus is open-drain/open-collector",
      explain: "I2C devices pull lines low; pull-ups restore the high level when devices release the bus.",
      source: "University of Oklahoma I2C lecture notes"
    },
    {
      type: "fill",
      prompt: "A UART sends 8N1 frames at 9600 baud. Roughly how many bytes per second fit on the wire?",
      hint: "8N1 usually means 10 bits per byte frame.",
      answer: "960",
      tolerance: 25,
      suffix: "B/s",
      explain: "9600 bits/s divided by 10 bits/frame gives about 960 bytes/s.",
      source: "University of Oklahoma asynchronous serial protocol notes"
    },
    {
      type: "fill",
      prompt: "A UART sends 8N1 frames at 1 Mbaud. Roughly how many kB/s fit on the wire?",
      hint: "Use 10 bits per byte on the wire.",
      answer: "100",
      tolerance: 3,
      suffix: "kB/s",
      explain: "1,000,000 bits/s divided by 10 is 100,000 B/s, or 100 kB/s.",
      source: "University of Oklahoma asynchronous serial protocol notes"
    },
    {
      type: "order",
      prompt: "Order a robust UART receive path.",
      hint: "The ISR should be quick.",
      answer: ["RX interrupt fires", "Read data register", "Push byte into ring buffer", "Parse packet in main loop"],
      explain: "Fast receive ISRs capture bytes, then foreground code handles heavier parsing.",
      source: "UMBC Interrupts notes"
    },
    {
      type: "choice",
      prompt: "Which SPI signal selects the target peripheral?",
      hint: "It is often active-low and one per device.",
      options: ["Chip select", "SDA", "UART RX", "ADC Vref"],
      answer: "Chip select",
      explain: "SPI uses chip-select or slave-select lines to choose which peripheral is active.",
      source: "University of Oklahoma SPI lecture notes"
    },
    {
      type: "choice",
      prompt: "Which embedded bug can happen if main code reads a multi-byte value updated by an ISR without protection?",
      hint: "The ISR may update between byte reads.",
      options: ["Torn read", "Unity power factor", "Thevenin mismatch", "Full-wave rectification"],
      answer: "Torn read",
      explain: "A multi-byte value can be partially old and partially new unless access is atomic or protected.",
      source: "UMBC Lecture: Interrupts"
    },
    {
      type: "order",
      prompt: "Order an I2C stuck-bus recovery attempt.",
      hint: "Check physical lines, then release the stuck slave.",
      answer: ["Observe SDA and SCL", "Confirm pull-ups", "Clock SCL recovery pulses", "Issue stop condition"],
      explain: "I2C recovery often clocks a stuck slave until SDA is released, then sends a stop.",
      source: "University of Oklahoma I2C lecture notes"
    },
    {
      type: "choice",
      prompt: "What does debouncing a switch prevent?",
      hint: "Mechanical contacts chatter.",
      options: ["Multiple false transitions from one press", "ADC quantization", "Norton conversion", "Power factor lag"],
      answer: "Multiple false transitions from one press",
      explain: "Debouncing filters mechanical bounce so one physical press becomes one logical event.",
      source: "University embedded systems lecture notes"
    },
    {
      type: "choice",
      prompt: "Which low-power strategy lets an MCU sleep until a peripheral event occurs?",
      hint: "The CPU does not need to poll constantly.",
      options: ["Wake on interrupt", "Busy-wait loop", "Disable all clocks forever", "Increase baud rate only"],
      answer: "Wake on interrupt",
      explain: "Interrupt-capable peripherals can wake a sleeping MCU when service is needed.",
      source: "UT Dallas embedded systems catalog topics"
    },
    {
      type: "fill",
      prompt: "A 12-bit ADC reads code 2048 on a 3.3 V reference. Estimate the input voltage in V.",
      hint: "2048 is half of 4096.",
      answer: "1.65",
      tolerance: 0.04,
      suffix: "V",
      explain: "Code 2048 is midscale, about 3.3 / 2 = 1.65 V.",
      source: "University of Oklahoma ADC lecture notes"
    },
    {
      type: "choice",
      prompt: "Which condition most directly causes UART framing errors?",
      hint: "The receiver samples bits at the wrong places or sees invalid stop bits.",
      options: ["Baud mismatch or noisy line", "Perfect clock alignment", "Correct pull-ups", "A larger stack"],
      answer: "Baud mismatch or noisy line",
      explain: "Framing errors often occur when timing or signal quality prevents valid start/stop-bit detection.",
      source: "University of Oklahoma asynchronous serial protocol notes"
    },
    {
      type: "order",
      prompt: "Order a firmware bring-up sequence for a new SPI sensor.",
      hint: "Start with the bus electrical and timing assumptions.",
      answer: ["Verify wiring and chip select", "Set SPI mode and clock", "Read device ID", "Enable sensor measurements"],
      explain: "SPI bring-up starts with wiring and mode, then confirms communication before configuration.",
      source: "University of Oklahoma SPI lecture notes"
    },
    {
      type: "choice",
      prompt: "Which variable should usually be marked volatile?",
      hint: "It changes outside normal foreground flow.",
      options: ["Flag set inside an ISR", "Local loop index only", "Compile-time constant", "Unused macro"],
      answer: "Flag set inside an ISR",
      explain: "A flag modified by an ISR can change asynchronously relative to main code, so volatile is often needed.",
      source: "UMBC Lecture: Interrupts"
    },
    {
      type: "fill",
      prompt: "A 1 ms periodic interrupt runs how many times per second?",
      hint: "1 second contains 1000 ms.",
      answer: "1000",
      tolerance: 0,
      suffix: "Hz",
      explain: "A 1 ms period corresponds to 1000 events per second.",
      source: "University of Oklahoma timer notes"
    },
    {
      type: "choice",
      prompt: "What does ADC conversion time affect?",
      hint: "It limits how quickly new samples can be produced.",
      options: ["Maximum sample throughput", "I2C device address width only", "PCB trace color", "Diode polarity"],
      answer: "Maximum sample throughput",
      explain: "ADC conversion time determines how fast the converter can produce valid samples.",
      source: "University of Oklahoma ADC lecture notes"
    },
    {
      type: "choice",
      prompt: "Which bus supports multiple addressed devices on the same two signal wires?",
      hint: "It uses SCL and SDA.",
      options: ["I2C", "UART point-to-point only", "Single chip-select SPI only", "PWM output"],
      answer: "I2C",
      explain: "I2C uses device addresses on shared SCL and SDA lines.",
      source: "University of Oklahoma I2C lecture notes"
    },
    {
      type: "order",
      prompt: "Order the typical interrupt service flow.",
      hint: "Handle the cause, clear it, then leave.",
      answer: ["Enter ISR", "Read or service peripheral", "Clear interrupt flag", "Return from interrupt"],
      explain: "ISRs service the event source, clear the pending condition, and return to interrupted code.",
      source: "UMBC Lecture: Interrupts"
    },
    {
      type: "choice",
      prompt: "Which timing source is best for precise periodic sampling?",
      hint: "Avoid variable main-loop timing.",
      options: ["Hardware timer trigger", "Random delay loop", "Manual button polling", "String parser completion"],
      answer: "Hardware timer trigger",
      explain: "A hardware timer provides repeatable sample timing independent of foreground workload.",
      source: "University of Oklahoma timer and ADC notes"
    },
    {
      type: "choice",
      prompt: "Which peripheral output is commonly used for motor speed control or LED dimming?",
      hint: "It varies duty cycle.",
      options: ["PWM", "UART RX", "I2C address", "Watchdog reset"],
      answer: "PWM",
      explain: "Pulse-width modulation controls average power by varying duty cycle.",
      source: "University embedded systems lecture notes"
    },
    {
      type: "fill",
      prompt: "A PWM signal has period 20 ms and high time 1.5 ms. What is duty cycle in percent?",
      hint: "Duty cycle = high time / period x 100.",
      answer: "7.5",
      tolerance: 0.2,
      suffix: "%",
      explain: "1.5 / 20 x 100 = 7.5%.",
      source: "University embedded systems lecture notes"
    },
    {
      type: "order",
      prompt: "Order a safe watchdog integration plan.",
      hint: "First understand normal timing, then enable reset behavior.",
      answer: ["Measure worst-case loop time", "Choose watchdog timeout", "Kick only after health checks", "Test forced hang recovery"],
      explain: "A watchdog should prove the system is healthy, not merely that one line of code still runs.",
      source: "University embedded systems lecture notes"
    }
  ];
}

function acPowerSupplementals() {
  return [
    ...[
      [10, 5, "11.18"],
      [8, 6, "10"],
      [12, 9, "15"],
      [5, 12, "13"]
    ].map(([r, x, answer]) => ({
      type: "fill",
      prompt: `A series AC load has R = ${r} ohm and net reactance magnitude X = ${x} ohm. What is impedance magnitude in ohms?`,
      hint: "Use |Z| = sqrt(R^2 + X^2).",
      answer,
      tolerance: Number(answer) * 0.04,
      suffix: "ohm",
      explain: `|Z| = sqrt(${r}^2 + ${x}^2) = ${answer} ohm.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    ...[
      [230, 5, 0.8, "920"],
      [120, 3, 1, "360"],
      [240, 10, 0.5, "1200"],
      [208, 4, 0.9, "749"]
    ].map(([v, i, pf, answer]) => ({
      type: "fill",
      prompt: `An AC load has ${v} Vrms, ${i} Arms, and power factor ${pf}. What real power is consumed?`,
      hint: "Use P = VI cos(phi).",
      answer,
      tolerance: Number(answer) * 0.04,
      suffix: "W",
      explain: `P = ${v} x ${i} x ${pf} = ${answer} W.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    ...[
      ["Real power", "W"],
      ["Reactive power", "VAR"],
      ["Apparent power", "VA"],
      ["Power factor", "dimensionless"]
    ].map(([term, answer]) => ({
      type: "choice",
      prompt: `What unit is associated with ${term}?`,
      hint: "Match AC power triangle quantities to their units.",
      options: ["W", "VAR", "VA", "dimensionless"],
      answer,
      explain: `${term} is measured in ${answer}.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    ...[
      ["Inductive load", "Lagging"],
      ["Capacitive load", "Leading"],
      ["Purely resistive load", "Unity"],
      ["Resonant ideal series RLC", "Unity"]
    ].map(([load, answer]) => ({
      type: "choice",
      prompt: `What power-factor description best fits a ${load}?`,
      hint: "Current lags inductors and leads capacitors.",
      options: ["Lagging", "Leading", "Unity", "Zero only"],
      answer,
      explain: `${load} is associated with a ${answer.toLowerCase()} power factor.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    {
      type: "choice",
      prompt: "In a balanced delta load, how is phase voltage related to line voltage?",
      hint: "Delta phase elements are directly across lines.",
      options: ["Vph = VL", "Vph = VL / sqrt(3)", "Vph = sqrt(3) VL", "Vph = 0"],
      answer: "Vph = VL",
      explain: "In delta, each phase impedance is connected line-to-line, so Vph equals VL.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "In a balanced star load, how is line current related to phase current?",
      hint: "Each line is in series with a phase branch.",
      options: ["IL = Iph", "IL = sqrt(3) Iph", "IL = Iph / sqrt(3)", "IL = 0"],
      answer: "IL = Iph",
      explain: "In a star connection, line current equals phase current.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "A 400 V line-to-line balanced star system has what phase voltage in V?",
      hint: "For star, Vph = VL / sqrt(3).",
      answer: "231",
      tolerance: 4,
      suffix: "V",
      explain: "400 / sqrt(3) is about 231 V.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "What does phase sequence describe in a three-phase system?",
      hint: "It is about the order of phase maxima.",
      options: ["Order in which phase voltages reach positive maximum", "Only the wire insulation color", "Number of transformer laminations", "ADC conversion latency"],
      answer: "Order in which phase voltages reach positive maximum",
      explain: "Phase sequence is the order in which the three phase voltages reach their positive peaks.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "order",
      prompt: "Order a basic AC circuit calculation.",
      hint: "Represent the load first, then compute current and power.",
      answer: ["Write complex impedance", "Compute RMS current", "Find phase angle", "Calculate real and reactive power"],
      explain: "AC analysis moves from impedance to current and phase, then to power quantities.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "At resonance, what is the ideal power factor of a series RLC circuit?",
      hint: "Voltage and current are in phase.",
      options: ["Unity", "Always zero", "Always leading 0.5", "Undefined because current stops"],
      answer: "Unity",
      explain: "At ideal series resonance, net reactance cancels and the circuit appears resistive.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "For a 50 Hz AC waveform, what is the period in ms?",
      hint: "T = 1 / f.",
      answer: "20",
      tolerance: 0.5,
      suffix: "ms",
      explain: "1 / 50 Hz = 0.02 s = 20 ms.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "For a 60 Hz AC waveform, what is the period in ms?",
      hint: "T = 1 / f.",
      answer: "16.67",
      tolerance: 0.4,
      suffix: "ms",
      explain: "1 / 60 Hz is about 16.67 ms.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Why is three-phase power useful for motors?",
      hint: "The power delivery is smoother.",
      options: ["It produces more uniform torque", "It removes all need for insulation", "It makes current DC", "It prevents all heat loss"],
      answer: "It produces more uniform torque",
      explain: "Balanced three-phase systems can produce nearly constant rotating magnetic fields and smoother torque.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which method is commonly used to measure total power in a three-phase three-wire system?",
      hint: "A standard method uses two instruments.",
      options: ["Two-wattmeter method", "One-ohmmeter method", "Single ADC code method", "Norton-only method"],
      answer: "Two-wattmeter method",
      explain: "The two-wattmeter method is commonly used for three-phase power measurement.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "What is RMS value intended to represent for an AC current?",
      hint: "Think heating equivalence.",
      options: ["Equivalent DC value for same heating effect", "Peak-to-peak value only", "Average over a full sine wave only", "Frequency in radians"],
      answer: "Equivalent DC value for same heating effect",
      explain: "RMS is the effective DC value that would produce the same heating in a resistance.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "A sine voltage has peak value 170 V. What is its RMS value approximately?",
      hint: "Vrms = Vpeak / sqrt(2).",
      answer: "120",
      tolerance: 3,
      suffix: "V",
      explain: "170 / sqrt(2) is about 120 V.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "What does complex power S combine?",
      hint: "It has a real part and an imaginary part.",
      options: ["Real and reactive power", "Voltage and resistance only", "Sampling and quantization", "Setup and hold slack"],
      answer: "Real and reactive power",
      explain: "Complex power is commonly written S = P + jQ.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "order",
      prompt: "Order the conceptual path to resonance in a series RLC circuit.",
      hint: "Compare reactances as frequency changes.",
      answer: ["Compute XL", "Compute XC", "Find frequency where XL equals XC", "Treat net reactance as zero"],
      explain: "Series resonance occurs at the frequency where inductive and capacitive reactances cancel.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "As frequency increases, what happens to ideal inductive reactance?",
      hint: "XL = omega L.",
      options: ["It increases", "It decreases", "It stays exactly zero", "It becomes capacitance"],
      answer: "It increases",
      explain: "Inductive reactance is proportional to angular frequency.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "As frequency increases, what happens to ideal capacitive reactance magnitude?",
      hint: "XC = 1 / omega C.",
      options: ["It decreases", "It increases", "It stays infinite", "It becomes resistance only"],
      answer: "It decreases",
      explain: "Capacitive reactance magnitude is inversely proportional to angular frequency.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "A load has apparent power 500 VA and power factor 0.6. What real power is consumed?",
      hint: "P = S x power factor.",
      answer: "300",
      tolerance: 5,
      suffix: "W",
      explain: "500 VA x 0.6 = 300 W.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "A balanced load means what about the three phase impedances?",
      hint: "The magnitudes and phase angles match.",
      options: ["Equal magnitudes and equal phase angles", "One phase is disconnected", "Only neutral current exists", "All resistances must be zero"],
      answer: "Equal magnitudes and equal phase angles",
      explain: "A balanced load has equal phase impedances with equal phase angles of the same nature.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "A balanced star load has Zph = 10 ohm and Vph = 230 V. What is line current in A?",
      hint: "For star, IL = Iph = Vph / Zph.",
      answer: "23",
      tolerance: 0.7,
      suffix: "A",
      explain: "Iph = 230 / 10 = 23 A, and in star IL = Iph.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which AC quantity is measured in ohms?",
      hint: "It is opposition to AC current.",
      options: ["Impedance", "Real power", "Reactive power", "Phase sequence"],
      answer: "Impedance",
      explain: "Impedance is measured in ohms.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "order",
      prompt: "Order a three-phase relationship check for a star load.",
      hint: "Convert line voltage to phase voltage first.",
      answer: ["Read line voltage", "Compute phase voltage", "Divide by phase impedance", "Set line current equal to phase current"],
      explain: "For star loads, Vph = VL/sqrt(3), then Iph = Vph/Zph and IL = Iph.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    }
  ];
}

function electronicsSupplementals() {
  return [
    ...[
      ["Forward bias", "Diode conducts more easily"],
      ["Reverse bias", "Diode blocks except leakage or breakdown"],
      ["Zener breakdown", "Controlled reverse voltage regulation"],
      ["Bridge rectifier", "Full-wave rectification"]
    ].map(([term, answer]) => ({
      type: "choice",
      prompt: `What does ${term} most directly describe?`,
      hint: "Match the device condition or circuit to its role.",
      options: ["Diode conducts more easily", "Diode blocks except leakage or breakdown", "Controlled reverse voltage regulation", "Full-wave rectification"],
      answer,
      explain: `${term} means ${answer.toLowerCase()}.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    ...[
      [12, 0.7, 2.2, "5.14"],
      [9, 0.7, 1, "8.3"],
      [5, 2, 0.33, "9.09"],
      [3.3, 1.8, 0.47, "3.19"]
    ].map(([supply, drop, resistorK, answer]) => ({
      type: "fill",
      prompt: `An LED path has ${supply} V supply, ${drop} V diode drop, and ${resistorK} kOhm series resistance. Estimate current in mA.`,
      hint: "Subtract diode drop, then divide by resistance.",
      answer,
      tolerance: Number(answer) * 0.07,
      suffix: "mA",
      explain: `I = (${supply} - ${drop}) / ${resistorK} kOhm = ${answer} mA.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    ...[
      ["Cutoff", "BJT switch OFF"],
      ["Saturation", "BJT switch ON"],
      ["Active region", "Amplifier operation"],
      ["Base current", "Controls collector current in a BJT"]
    ].map(([term, answer]) => ({
      type: "choice",
      prompt: `For a BJT, what does ${term} most closely indicate?`,
      hint: "Match the BJT operating term to its role.",
      options: ["BJT switch OFF", "BJT switch ON", "Amplifier operation", "Controls collector current in a BJT"],
      answer,
      explain: `${term} is associated with ${answer.toLowerCase()}.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    {
      type: "choice",
      prompt: "What is ripple in a rectifier power supply?",
      hint: "Filtering reduces it after rectification.",
      options: ["Residual AC variation on the DC output", "The fixed diode symbol", "The transistor package type", "The number of PCB layers"],
      answer: "Residual AC variation on the DC output",
      explain: "Ripple is the remaining periodic variation after AC is rectified and filtered.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which component is commonly added after a rectifier to reduce ripple?",
      hint: "It stores charge between peaks.",
      options: ["Filter capacitor", "Series fuse only", "Logic inverter", "Crystal oscillator"],
      answer: "Filter capacitor",
      explain: "A capacitor filter charges near peaks and supplies current between them, reducing ripple.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "order",
      prompt: "Order a half-wave rectifier signal path.",
      hint: "AC is passed in one direction, then optionally filtered.",
      answer: ["AC input", "Diode conduction on one half-cycle", "Pulsating DC output", "Filter capacitor smoothing"],
      explain: "A half-wave rectifier passes one polarity of AC and can be filtered into smoother DC.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "order",
      prompt: "Order a transistor switch design check.",
      hint: "Start from the load and ensure the transistor can be driven safely.",
      answer: ["Find load current", "Choose transistor rating", "Set base or gate drive", "Verify saturation or on-resistance"],
      explain: "Switch design begins with load requirements, then device rating and drive conditions.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "A 5 V regulator supplies 200 mA. What output power is delivered in W?",
      hint: "Use P = VI.",
      answer: "1",
      tolerance: 0.03,
      suffix: "W",
      explain: "5 V x 0.2 A = 1 W.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "A linear regulator drops from 12 V to 5 V at 100 mA. How much power is dissipated in W?",
      hint: "Regulator dissipation is voltage drop times current.",
      answer: "0.7",
      tolerance: 0.03,
      suffix: "W",
      explain: "(12 - 5) V x 0.1 A = 0.7 W.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Why is a flyback diode used across a relay coil?",
      hint: "The coil current cannot stop instantly.",
      options: ["To clamp inductive voltage when switched off", "To increase ADC bit depth", "To force leading power factor", "To make NAND gates universal"],
      answer: "To clamp inductive voltage when switched off",
      explain: "A flyback diode gives inductive current a safe path and limits voltage spikes.",
      source: "Basic electronics and instrumentation practice material"
    },
    {
      type: "choice",
      prompt: "Which diode circuit clips a waveform above a chosen voltage?",
      hint: "It limits amplitude.",
      options: ["Clipper", "Full adder", "Mesh source", "Timer prescaler"],
      answer: "Clipper",
      explain: "A clipper uses diodes to limit waveform amplitude above or below thresholds.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which circuit shifts a waveform DC level without ideally changing its shape?",
      hint: "It is often built with diode, capacitor, and resistor.",
      options: ["Clamper", "Norton equivalent", "Two-flop synchronizer", "I2C arbiter"],
      answer: "Clamper",
      explain: "A clamper shifts a waveform's DC reference level.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "fill",
      prompt: "A transistor has collector current 100 mA and forced beta of 10 for switching. What base current is needed in mA?",
      hint: "Ib = Ic / forced beta.",
      answer: "10",
      tolerance: 0.5,
      suffix: "mA",
      explain: "100 mA / 10 = 10 mA.",
      source: "Basic electronics switching practice"
    },
    {
      type: "choice",
      prompt: "Which device is voltage-controlled and commonly used as a low-side switch?",
      hint: "Its gate voltage controls conduction.",
      options: ["MOSFET", "Current transformer", "Thermocouple", "Wheatstone bridge only"],
      answer: "MOSFET",
      explain: "A MOSFET is voltage-controlled at the gate and widely used for switching loads.",
      source: "Basic electronics lecture material"
    },
    {
      type: "choice",
      prompt: "Why should an LED use a current-limiting resistor?",
      hint: "The diode I-V curve is steep.",
      options: ["To prevent excessive current", "To create three-phase power", "To sample faster", "To remove all ripple without capacitance"],
      answer: "To prevent excessive current",
      explain: "A small voltage change can cause large LED current change, so a resistor limits current.",
      source: "Basic electronics practice material"
    },
    {
      type: "order",
      prompt: "Order a basic bridge-rectifier supply.",
      hint: "Rectify, smooth, then regulate.",
      answer: ["AC secondary", "Bridge rectifier", "Reservoir capacitor", "Voltage regulator"],
      explain: "The bridge rectifier turns AC into pulsating DC, the capacitor smooths it, and the regulator stabilizes it.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which measurement best checks whether a diode is forward biased?",
      hint: "A silicon junction usually shows a small forward drop.",
      options: ["Voltage drop of roughly 0.6 to 0.8 V", "Infinite voltage in both directions", "Exactly 120 Vrms", "Zero current through every branch"],
      answer: "Voltage drop of roughly 0.6 to 0.8 V",
      explain: "A conducting silicon diode commonly has a forward drop around 0.7 V.",
      source: "Basic electronics practice material"
    },
    {
      type: "fill",
      prompt: "A 9 V supply feeds a 3.3 V Zener through 1 kOhm. Ignoring load, estimate current in mA.",
      hint: "Subtract Zener voltage and divide by series resistance.",
      answer: "5.7",
      tolerance: 0.3,
      suffix: "mA",
      explain: "(9 - 3.3) / 1 kOhm = 5.7 mA.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "A full-wave rectifier using a bridge conducts through how many diodes at a time?",
      hint: "Current passes through a pair on each half-cycle.",
      options: ["Two", "One", "Four", "Zero"],
      answer: "Two",
      explain: "A bridge rectifier current path includes two diode drops on each half-cycle.",
      source: "Basic electronics rectifier material"
    },
    {
      type: "choice",
      prompt: "Which rectifier has better transformer utilization than a half-wave rectifier?",
      hint: "It uses both halves of the AC cycle.",
      options: ["Full-wave rectifier", "Single-diode half-wave rectifier", "Open circuit", "Comparator without supply"],
      answer: "Full-wave rectifier",
      explain: "Full-wave rectification uses both positive and negative half-cycles.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which component is most likely damaged by reverse voltage beyond its rating?",
      hint: "Reverse breakdown can be destructive unless designed for it.",
      options: ["Ordinary diode", "Ideal wire", "Ground symbol", "Boolean variable"],
      answer: "Ordinary diode",
      explain: "A standard diode can fail if reverse voltage exceeds its breakdown rating.",
      source: "Basic electronics device notes"
    },
    {
      type: "order",
      prompt: "Order a diode troubleshooting flow.",
      hint: "Check orientation before deeper circuit behavior.",
      answer: ["Verify diode orientation", "Measure forward drop", "Check series current limit", "Inspect output waveform"],
      explain: "Diode circuits are debugged by polarity, conduction voltage, current limiting, and waveform behavior.",
      source: "Basic electronics practice material"
    },
    {
      type: "choice",
      prompt: "Which BJT terminal current is usually largest in active operation?",
      hint: "Collector current is beta times base current approximately.",
      options: ["Collector current", "Base current", "Leakage only", "Gate current"],
      answer: "Collector current",
      explain: "In active operation, collector current is much larger than base current for typical beta values.",
      source: "Basic electronics transistor notes"
    },
    {
      type: "fill",
      prompt: "A BJT has beta 50 and base current 0.2 mA. Estimate collector current in mA in active region.",
      hint: "Ic = beta Ib.",
      answer: "10",
      tolerance: 0.5,
      suffix: "mA",
      explain: "50 x 0.2 mA = 10 mA.",
      source: "Basic electronics transistor notes"
    },
    {
      type: "choice",
      prompt: "Which circuit is used to hold output voltage approximately constant despite input variation?",
      hint: "It is the final stage in many DC supplies.",
      options: ["Voltage regulator", "Mesh analyzer", "UART receiver", "Current divider only"],
      answer: "Voltage regulator",
      explain: "A voltage regulator stabilizes output voltage over changes in input or load, within limits.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    }
  ];
}

function instrumentationSupplementals() {
  return [
    ...[
      ["Active transducer", "Self-generating sensor output"],
      ["Passive transducer", "Requires external excitation"],
      ["Primary transducer", "Directly senses the input quantity"],
      ["Secondary transducer", "Converts output from a first sensing element"]
    ].map(([term, answer]) => ({
      type: "choice",
      prompt: `What does ${term} mean in instrumentation?`,
      hint: "Match the transducer class to its definition.",
      options: ["Self-generating sensor output", "Requires external excitation", "Directly senses the input quantity", "Converts output from a first sensing element"],
      answer,
      explain: `${term} means ${answer.toLowerCase()}.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    ...[
      ["Range", "Span of measurable input values"],
      ["Sensitivity", "Output change per input change"],
      ["Linearity", "How closely output follows a straight-line relation"],
      ["Repeatability", "Agreement for repeated identical inputs"],
      ["Response time", "How quickly output reacts to input change"]
    ].map(([term, answer]) => ({
      type: "choice",
      prompt: `Which definition best matches ${term} for a transducer?`,
      hint: "Match the performance term to its measurement meaning.",
      options: ["Span of measurable input values", "Output change per input change", "How closely output follows a straight-line relation", "Agreement for repeated identical inputs", "How quickly output reacts to input change"],
      answer,
      explain: `${term} is ${answer.toLowerCase()}.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    ...[
      [8, "256"],
      [10, "1024"],
      [12, "4096"],
      [16, "65536"]
    ].map(([bits, answer]) => ({
      type: "fill",
      prompt: `An ADC has ${bits} bits. How many possible output codes does it have?`,
      hint: "Use 2^bits.",
      answer,
      tolerance: 0,
      suffix: "codes",
      explain: `2^${bits} = ${answer} codes.`,
      source: "DSCE instrumentation ADC performance parameters"
    })),
    ...[
      ["Strain gauge", "Resistance changes with mechanical strain"],
      ["Capacitive transducer", "Capacitance changes with geometry or dielectric"],
      ["Piezoelectric sensor", "Electric potential from mechanical deformation"],
      ["Potentiometer", "Resistive voltage divider with a wiper"]
    ].map(([sensor, answer]) => ({
      type: "choice",
      prompt: `${sensor} is best described by which sensing principle?`,
      hint: "Match the sensor to the physical/electrical effect.",
      options: ["Resistance changes with mechanical strain", "Capacitance changes with geometry or dielectric", "Electric potential from mechanical deformation", "Resistive voltage divider with a wiper"],
      answer,
      explain: `${sensor}: ${answer}.`,
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    })),
    {
      type: "choice",
      prompt: "What is the piezoelectric effect?",
      hint: "Mechanical force produces an electrical quantity.",
      options: ["Electric potential appears when certain crystals are mechanically deformed", "Resistance disappears at all temperatures", "A node stores infinite charge", "A UART adds a stop bit"],
      answer: "Electric potential appears when certain crystals are mechanically deformed",
      explain: "Piezoelectric materials generate charge or voltage when mechanically stressed.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Why is a sample-and-hold used with some ADCs?",
      hint: "The input should not move during conversion.",
      options: ["To keep input voltage stable during conversion", "To increase sensor mass", "To create three-phase power", "To replace all filters"],
      answer: "To keep input voltage stable during conversion",
      explain: "A sample-and-hold stores the input on a capacitor so conversion sees a stable value.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which ADC parameter describes the smallest input change that can be represented?",
      hint: "It is tied to bit depth.",
      options: ["Resolution", "Hysteresis only", "Line current", "Phase sequence"],
      answer: "Resolution",
      explain: "ADC resolution describes the code granularity or smallest distinguishable input step.",
      source: "DSCE instrumentation ADC performance parameters"
    },
    {
      type: "choice",
      prompt: "Which ADC parameter describes how long conversion takes?",
      hint: "It limits throughput.",
      options: ["Conversion time", "Power factor", "Mesh current", "Zener voltage"],
      answer: "Conversion time",
      explain: "Conversion time is the time needed for the ADC to produce a valid digital result.",
      source: "DSCE instrumentation ADC performance parameters"
    },
    {
      type: "fill",
      prompt: "A 0-10 V sensor has sensitivity 2 V per unit. What input value produces 6 V?",
      hint: "Input = output / sensitivity.",
      answer: "3",
      tolerance: 0.1,
      suffix: "units",
      explain: "6 V / 2 V per unit = 3 units.",
      source: "DSCE transducer characteristics"
    },
    {
      type: "fill",
      prompt: "A pressure sensor outputs 0.5 V per kPa. What voltage appears at 8 kPa?",
      hint: "Multiply sensitivity by input.",
      answer: "4",
      tolerance: 0.1,
      suffix: "V",
      explain: "0.5 V/kPa x 8 kPa = 4 V.",
      source: "DSCE transducer characteristics"
    },
    {
      type: "order",
      prompt: "Order a measurement system from physical input to displayed result.",
      hint: "Sense, condition, convert, then present.",
      answer: ["Measurand", "Transducer", "Signal conditioning", "ADC and display"],
      explain: "Instrumentation chains convert a physical quantity into conditioned electrical data for conversion and display.",
      source: "DSCE instrumentation transducer unit"
    },
    {
      type: "order",
      prompt: "Order a transducer selection process.",
      hint: "The source PDF emphasizes defining the measurand first.",
      answer: ["Define measurand", "Set range and frequency needs", "Check environment", "Evaluate accuracy and cost"],
      explain: "Sensor choice begins with the measured quantity and expected range, then environment, error, and practical constraints.",
      source: "DSCE Basic Electrical, Electronics and Instrumentation Engineering question bank"
    },
    {
      type: "choice",
      prompt: "Which environmental factor can affect transducer accuracy?",
      hint: "The DSCE notes list temperature, moisture, shock, and vibration.",
      options: ["Temperature change", "Only variable names", "HTML font size", "Clock comment text"],
      answer: "Temperature change",
      explain: "Temperature and other environmental conditions can shift sensor behavior and introduce error.",
      source: "DSCE transducer selection criteria"
    },
    {
      type: "choice",
      prompt: "What does loading effect mean in measurement?",
      hint: "The measuring device changes the thing being measured.",
      options: ["The sensor or meter alters the measured system", "The display font loads slowly", "The source code imports a module", "The ADC has too many labels"],
      answer: "The sensor or meter alters the measured system",
      explain: "A measurement device should avoid significantly disturbing the system under test.",
      source: "DSCE transducer selection criteria"
    },
    {
      type: "choice",
      prompt: "Why is high output signal desirable in a transducer?",
      hint: "It improves processing relative to noise.",
      options: ["It is easier to process and measure above noise", "It guarantees zero power draw", "It removes calibration", "It replaces the ADC"],
      answer: "It is easier to process and measure above noise",
      explain: "A reasonably high output improves signal handling and noise margin.",
      source: "DSCE transducer characteristics"
    },
    {
      type: "choice",
      prompt: "What does hysteresis error mean for a sensor?",
      hint: "Output can differ for rising versus falling input.",
      options: ["Different output depending on input history", "Always exactly linear response", "No environmental effect", "Infinite bandwidth"],
      answer: "Different output depending on input history",
      explain: "Hysteresis means the output depends on whether the input approached from above or below.",
      source: "DSCE transducer requirements"
    },
    {
      type: "choice",
      prompt: "Which transducer type can generate its own electrical output from the measurand?",
      hint: "It does not require external excitation for signal generation.",
      options: ["Active transducer", "Passive transducer", "Voltage divider only", "Sample register"],
      answer: "Active transducer",
      explain: "Active transducers are self-generating.",
      source: "DSCE transducer classification"
    },
    {
      type: "choice",
      prompt: "Which transducer type needs an external power source?",
      hint: "A potentiometer is an example from the notes.",
      options: ["Passive transducer", "Active transducer", "Inverse transducer only", "Ideal current source"],
      answer: "Passive transducer",
      explain: "Passive transducers require external excitation and modulate an electrical parameter.",
      source: "DSCE transducer classification"
    },
    {
      type: "choice",
      prompt: "A loudspeaker is an example of what?",
      hint: "It converts electrical signal into sound.",
      options: ["Inverse transducer", "Primary current transformer only", "ADC quantizer", "Mesh loop"],
      answer: "Inverse transducer",
      explain: "An inverse transducer converts electrical energy into a non-electrical output such as sound.",
      source: "DSCE transducer and inverse transducer section"
    },
    {
      type: "choice",
      prompt: "A microphone is an example of what?",
      hint: "It converts sound into an electrical signal.",
      options: ["Transducer", "Inverse transducer only", "Power factor meter only", "Zener regulator"],
      answer: "Transducer",
      explain: "A microphone converts acoustic energy into an electrical signal.",
      source: "DSCE transducer and inverse transducer section"
    },
    {
      type: "fill",
      prompt: "A 12-bit ADC with 3.0 V reference has what LSB size in mV?",
      hint: "3.0 V / 4096, converted to mV.",
      answer: "0.732",
      tolerance: 0.03,
      suffix: "mV",
      explain: "3.0 / 4096 = 0.000732 V = 0.732 mV.",
      source: "DSCE instrumentation ADC performance parameters"
    },
    {
      type: "order",
      prompt: "Order a calibration workflow for a voltage-output sensor.",
      hint: "Use known inputs and compare against expected output.",
      answer: ["Apply known low input", "Record low output", "Apply known high input", "Fit offset and gain"],
      explain: "Two-point calibration estimates offset and sensitivity from known reference inputs.",
      source: "DSCE transducer characteristics"
    },
    {
      type: "choice",
      prompt: "Which instrument transformer is designed to present negligible load to the measured supply?",
      hint: "It steps voltage for metering.",
      options: ["Potential transformer", "LED", "UART transceiver", "Zener diode"],
      answer: "Potential transformer",
      explain: "Potential transformers scale voltage for measurement while minimally loading the supply.",
      source: "DSCE instrumentation section"
    },
    {
      type: "choice",
      prompt: "Which property should be high if a transducer must track fast-changing inputs?",
      hint: "The notes call this speed of response.",
      options: ["Speed of response", "Hysteresis", "Loading effect", "Residual deformation"],
      answer: "Speed of response",
      explain: "Fast-changing inputs require a transducer with high speed of response.",
      source: "DSCE transducer characteristics"
    },
    {
      type: "choice",
      prompt: "Which sensor characteristic means output remains trustworthy over time?",
      hint: "The source notes pair it with reliability.",
      options: ["Stability", "Aliasing", "Saturation only", "Clock-to-Q"],
      answer: "Stability",
      explain: "Stability means the sensor output remains consistent under expected operating conditions over time.",
      source: "DSCE transducer characteristics"
    },
    {
      type: "order",
      prompt: "Order signal conditioning before an ADC.",
      hint: "Protect, scale, filter, then sample.",
      answer: ["Protect input", "Amplify or attenuate", "Filter noise", "Sample and convert"],
      explain: "Instrumentation front ends protect and scale the signal, reduce unwanted content, and then digitize it.",
      source: "DSCE instrumentation and ADC sections"
    }
  ];
}

const defaultProgress = {
  view: "concept",
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
  view: "concept",
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
const viewTabs = document.querySelectorAll(".view-tab");
const pageViews = document.querySelectorAll(".page-view");
const conceptPage = document.querySelector("#conceptPage");
const problemPage = document.querySelector("#problemPage");
const progressPage = document.querySelector("#progressPage");

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
    view: state.view,
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
  state.view = progress.view === "subject" ? "concept" : (progress.view || "concept");
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
  if (state.view === "problem") {
    renderVisual(question);
    renderAnswer(question);
  }
  renderSkillMap();
  renderNotebook();
  renderUploadStatus();
  renderPages();
}

function setView(view) {
  releaseNavigationFocus();
  state.view = view;
  saveProgress();
  render();
}

function setLesson(index, view = "concept") {
  releaseNavigationFocus();
  state.lessonIndex = index;
  state.questionIndex = 0;
  state.view = view;
  saveProgress();
  render();
}

function releaseNavigationFocus() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
}

function renderPages() {
  viewTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === state.view);
  });
  pageViews.forEach((page) => {
    page.hidden = page.id !== `${state.view}Page`;
  });

  if (state.view === "concept") renderConceptPage();
  if (state.view === "progress") renderProgressPage();
}

function renderConceptPage() {
  const lesson = currentLesson();
  const percent = Math.round((completedCount(lesson.id) / lesson.questions.length) * 100);
  conceptPage.innerHTML = `
    <div class="page-hero compact-page-hero">
      <div>
        <p class="eyebrow">Concept page</p>
        <h2>${lesson.topic}</h2>
        <p>${lesson.title} builds recall through quick questions, hints, and post-answer explanations.</p>
      </div>
      <button class="primary-action" data-action="start-problems" type="button">Start problems</button>
    </div>
    <div class="concept-layout">
      <section class="concept-detail">
        <div class="concept-progress">
          <span>${percent}% complete</span>
          <div><i style="width: ${percent}%; background: ${lesson.color}"></i></div>
        </div>
        <h3>${lesson.title}</h3>
        <p>${lesson.company} problems covering ${lesson.topic.toLowerCase()}.</p>
        <div class="problem-preview-list">
          ${lesson.questions.map((question, index) => `
            <button data-question="${index}" title="${escapeAttribute(question.prompt)}" type="button">
              <span>${index + 1}</span>
              <strong>${typeLabel(question.type)}</strong>
              <em>${question.prompt}</em>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `;
  conceptPage.querySelector("[data-action='start-problems']").addEventListener("click", () => setView("problem"));
  conceptPage.querySelectorAll("[data-question]").forEach((button) => {
    button.addEventListener("click", () => {
      state.questionIndex = Number(button.dataset.question);
      setView("problem");
    });
  });
}

function renderProgressPage() {
  const totalQuestions = getLessons().reduce((sum, lesson) => sum + lesson.questions.length, 0);
  const completed = totalCompletedCount();
  const percent = totalQuestions ? Math.round((completed / totalQuestions) * 100) : 0;
  progressPage.innerHTML = `
    <div class="page-hero compact-page-hero">
      <div>
        <p class="eyebrow">Account and progress</p>
        <h2>${state.account?.name || "Engineer"}</h2>
        <p>${state.account?.email || "Local learner"} has ${state.xp} XP, a ${state.streak}-answer streak, and ${state.hearts} hearts.</p>
      </div>
      <div class="progress-meter" style="--meter-progress: ${percent}%">
        <strong>${percent}%</strong>
        <span>course progress</span>
      </div>
    </div>
    <div class="progress-grid">
      <article><span>XP</span><strong>${state.xp}</strong></article>
      <article><span>Streak</span><strong>${state.streak}</strong></article>
      <article><span>Daily goal</span><strong>${Math.min(state.solvedToday, 3)}/3</strong></article>
      <article><span>Problems done</span><strong>${completed}/${totalQuestions}</strong></article>
    </div>
    <section class="progress-table">
      <h3>Concept progress</h3>
      ${getLessons().map((lesson) => {
        const lessonPercent = Math.round((completedCount(lesson.id) / lesson.questions.length) * 100);
        return `
          <div class="progress-row">
            <span>${lesson.topic}</span>
            <div><i style="width: ${lessonPercent}%; background: ${lesson.color}"></i></div>
            <strong>${lessonPercent}%</strong>
          </div>
        `;
      }).join("")}
    </section>
  `;
}

function conceptCard(lesson, index) {
  const percent = Math.round((completedCount(lesson.id) / lesson.questions.length) * 100);
  return `
    <button class="concept-card" data-lesson="${index}" type="button" style="--lesson: ${lesson.color}">
      <span>${percent}%</span>
      <strong>${lesson.topic}</strong>
      <small>${lesson.questions.length} problems in ${lesson.title}</small>
    </button>
  `;
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
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
      setLesson(index, "concept");
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
    if (state.view === "problem") {
      label.querySelector("input").focus({ preventScroll: true });
    }
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

function totalCompletedCount() {
  return getLessons().reduce((sum, lesson) => sum + completedCount(lesson.id), 0);
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
viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
});
window.handleGoogleCredential = handleGoogleCredential;
window.addEventListener("load", renderGoogleSignIn);

setAuthMode("login");
restoreSession();
