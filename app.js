/**
 * EducateVLSI - Advanced Interactive Portal Logic
 * High-performance, zero-dependency vanilla JS engine
 * Featuring: 74 Flashcards, 12 PD Calculators, EDA Debug Matrix,
 * TCL Automation Generator, Tapeout Checklists, and Video Masterclasses.
 */

// Full 74 Flashcard dataset from flashcards.csv embedded directly to support both HTTP and file:// protocols
const FLASHCARDS_DATA = [
  {
    "id": 1,
    "question": "What is the primary function of the Synthesis stage in the ASIC design flow?",
    "answer": "It is the process of converting the Register Transfer Level (RTL) code into a technology-dependent gate-level netlist.",
    "category": "ASIC Flow & Design Files",
    "tag": "ASIC Flow",
    "difficulty": "Fundamental"
  },
  {
    "id": 2,
    "question": "In the ASIC design flow, what is the purpose of the Floorplan stage?",
    "answer": "It determines the die and core area, places macros and ports/pads, performs power planning, and creates site rows for standard cells.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 3,
    "question": "What is the main objective of the Placement stage in physical design?",
    "answer": "To automatically assign correct, non-overlapping positions to standard cells inside the core area.",
    "category": "Placement & Optimization",
    "tag": "Placement",
    "difficulty": "Core PD"
  },
  {
    "id": 4,
    "question": "What is Clock Tree Synthesis (CTS) in the physical design flow?",
    "answer": "It is the process of building a clock distribution network using buffers and inverters to balance clock skew and minimize insertion delay.",
    "category": "Clock Tree Synthesis (CTS)",
    "tag": "CTS",
    "difficulty": "Clocking"
  },
  {
    "id": 5,
    "question": "What is the function of the Routing stage in the ASIC design flow?",
    "answer": "It physically connects all the cells, macros, and I/O ports using metal layers, converting logical connections into physical ones.",
    "category": "Routing & Physical Verification",
    "tag": "Routing & Signoff",
    "difficulty": "Verification"
  },
  {
    "id": 6,
    "question": "The final stage before tape-out, where checks like DRC, LVS, and LEC are performed to ensure layout quality, is known as _____.",
    "answer": "Signoff",
    "category": "ASIC Flow & Design Files",
    "tag": "ASIC Flow",
    "difficulty": "Fundamental"
  },
  {
    "id": 7,
    "question": "Which input file for Physical Design (PD) contains the logical connectivity of all standard cells and macros?",
    "answer": "The Verilog Netlist (.v file).",
    "category": "ASIC Flow & Design Files",
    "tag": "ASIC Flow",
    "difficulty": "Fundamental"
  },
  {
    "id": 8,
    "question": "Which input file provides timing constraints like clock definitions, input/output delays, and timing exceptions to the PD tools?",
    "answer": "The Synopsys Design Constraints (.sdc) file.",
    "category": "ASIC Flow & Design Files",
    "tag": "ASIC Flow",
    "difficulty": "Fundamental"
  },
  {
    "id": 9,
    "question": "The timing, functionality, and power information of standard cells and macros are contained in the _____ libraries.",
    "answer": "Logical (.lib or .db)",
    "category": "ASIC Flow & Design Files",
    "tag": "ASIC Flow",
    "difficulty": "Fundamental"
  },
  {
    "id": 10,
    "question": "Which file format contains the physical information of standard cells and macros, such as size, pin locations, and obstruction layers?",
    "answer": "The Layout Exchange Format (.lef) file or .Fram_views for Synopsys.",
    "category": "ASIC Flow & Design Files",
    "tag": "ASIC Flow",
    "difficulty": "Fundamental"
  },
  {
    "id": 11,
    "question": "The _____ file contains manufacturing grid definitions, layer characteristics (pitch, width, spacing), and physical design rules provided by the foundry.",
    "answer": "Technology File (.tf)",
    "category": "ASIC Flow & Design Files",
    "tag": "ASIC Flow",
    "difficulty": "Fundamental"
  },
  {
    "id": 12,
    "question": "Which files are used for calculating net delays by providing R-C parasitics of metal layers per unit length?",
    "answer": "TLU+ files (.tlup).",
    "category": "ASIC Flow & Design Files",
    "tag": "ASIC Flow",
    "difficulty": "Fundamental"
  },
  {
    "id": 13,
    "question": "In floorplanning, what is the term for the ratio of the height and width of the core area?",
    "answer": "Aspect ratio.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 14,
    "question": "What does 'core utilization' represent in the context of floorplanning?",
    "answer": "It defines the percentage of the core area that is occupied by standard cells, macros, and other cells.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 15,
    "question": "In floorplanning, what are fly-lines used for?",
    "answer": "Fly-lines show the connectivity between macros and other components (like other macros or I/O ports) to help minimize interconnect length during placement.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 16,
    "question": "What is a 'keep-out margin' or 'halo' when placing macros?",
    "answer": "It is a specified area around a macro where no standard cells can be placed, which helps avoid congestion and protect macro pins.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 17,
    "question": "What is the difference between a hard placement blockage and a soft placement blockage?",
    "answer": "A hard blockage prevents any cell (including buffers/inverters) from being placed, while a soft blockage allows buffers/inverters to be placed during optimization.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 18,
    "question": "A _____ blockage limits the cell density in a specified area to a certain percentage.",
    "answer": "partial",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 19,
    "question": "What is the purpose of a tap cell in physical design?",
    "answer": "It is a special non-logic cell with well and substrate ties (to VDD and ground) to prevent the latch-up problem.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 20,
    "question": "What are Tie-Cells (Tie-High/Tie-Low) used for in a design?",
    "answer": "They provide a constant high (logic 1) or low (logic 0) signal to the inputs of gates, avoiding direct connection to power rails.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 21,
    "question": "What is the function of Filler Cells in physical design?",
    "answer": "They are added after routing to ensure n-well and substrate continuity and to meet density rules, which simplifies the manufacturing process.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 22,
    "question": "What is the purpose of inserting Decap (Decoupling Capacitor) Cells?",
    "answer": "They act as small capacitors between VDD and GND to provide extra charge to logic cells during high current draw, thereby reducing IR drop.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 23,
    "question": "Why are End-cap Cells placed at the ends of cell rows and around block boundaries?",
    "answer": "They protect the gates of adjacent standard cells from damage during manufacturing and help avoid base layer DRC violations.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 24,
    "question": "In power planning, what is the function of power 'rings'?",
    "answer": "Rings are wide metal tracks that carry VDD and VSS around the periphery of the chip or block.",
    "category": "Floorplanning & Power Planning",
    "tag": "Floorplan",
    "difficulty": "Core PD"
  },
  {
    "id": 25,
    "question": "The process of moving cells to legal locations on the placement grid and eliminating any overlap after coarse placement is called _____.",
    "answer": "Legalization",
    "category": "Placement & Optimization",
    "tag": "Placement",
    "difficulty": "Core PD"
  },
  {
    "id": 26,
    "question": "What is the purpose of scan-chain reordering during the placement stage?",
    "answer": "It rearranges the scan chains based on the physical placement of flip-flops to reduce wire length, which improves timing and routability.",
    "category": "Placement & Optimization",
    "tag": "Placement",
    "difficulty": "Core PD"
  },
  {
    "id": 27,
    "question": "What is High Fanout Net Synthesis (HFNS)?",
    "answer": "It is the process of inserting buffers into nets with a high number of fanouts (like reset or scan enable) to reduce delay and transition time issues.",
    "category": "Placement & Optimization",
    "tag": "Placement",
    "difficulty": "Core PD"
  },
  {
    "id": 28,
    "question": "Name one technique used by placement tools to optimize for timing violations.",
    "answer": "Cell sizing (upsizing/downsizing), Vt swapping, buffering, or cloning.",
    "category": "Placement & Optimization",
    "tag": "Placement",
    "difficulty": "Core PD"
  },
  {
    "id": 29,
    "question": "What is congestion in the context of physical design?",
    "answer": "It is a situation where the number of required routing tracks in a given area exceeds the number of available routing tracks.",
    "category": "Placement & Optimization",
    "tag": "Placement",
    "difficulty": "Core PD"
  },
  {
    "id": 30,
    "question": "How does static timing analysis (STA) differ from dynamic timing analysis (DTA)?",
    "answer": "STA checks timing requirements without using input vectors, making it faster, while DTA verifies functionality by applying input vectors.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 31,
    "question": "In STA, what is a 'timing path'?",
    "answer": "A point-to-point path in a design through which data can propagate, typically starting from an input port or a flip-flop's clock pin and ending at an output port or a flip-flop's data pin.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 32,
    "question": "What is 'setup time' for a flip-flop?",
    "answer": "It is the minimum amount of time the data signal must be held steady *before* the active clock edge for it to be reliably sampled.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 33,
    "question": "What is 'hold time' for a flip-flop?",
    "answer": "It is the minimum amount of time the data signal must be held steady *after* the active clock edge for it to be reliably sampled.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 34,
    "question": "In STA, what does 'slack' represent?",
    "answer": "Slack is the difference between the required time and the arrival time for a signal at a particular point.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 35,
    "question": "What is the difference between source latency and network latency of a clock?",
    "answer": "Source latency is the delay from the clock source to the clock definition port, while network latency is the delay from the clock definition port to the clock pins of sequential elements.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 36,
    "question": "What is clock skew?",
    "answer": "It is the time difference between the arrivals of the clock signal at different registers in a clock domain.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 37,
    "question": "What is the difference between local skew and global skew?",
    "answer": "Local skew is the clock skew between two related flip-flops (launch and capture), while global skew is the difference between the maximum and minimum insertion delays in the entire design.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 38,
    "question": "A situation where the capture clock arrives later than the launch clock is known as _____ skew.",
    "answer": "positive",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 39,
    "question": "What is clock jitter?",
    "answer": "It refers to the short-term variations of a clock edge with respect to its ideal position in time.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 40,
    "question": "How is clock uncertainty defined before and after CTS?",
    "answer": "Before CTS, it includes skew + jitter + margin; after CTS, it is typically just jitter + margin, as skew is calculated from the physical tree.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 41,
    "question": "What is a 'multi-cycle path' timing exception?",
    "answer": "It is a path that is intentionally designed to take more than one clock cycle for data to propagate from the start point to the end point.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 42,
    "question": "What is a 'false path' in STA?",
    "answer": "A path that physically exists in the design but is logically or functionally inactive, meaning no data is actually transferred through it.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 43,
    "question": "What is the key characteristic of High Voltage Threshold (HVT) cells?",
    "answer": "They have low leakage power but are slower, making them suitable for non-timing-critical paths.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 44,
    "question": "Why are Low Voltage Threshold (LVT) cells used in timing-critical paths?",
    "answer": "They are faster (high speed) but have higher leakage power.",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 45,
    "question": "The phenomenon where a longer combinational path in a latch-based design borrows time from a subsequent, shorter path is called _____.",
    "answer": "time borrowing or cycle stealing",
    "category": "Static Timing Analysis (STA)",
    "tag": "STA",
    "difficulty": "Timing"
  },
  {
    "id": 46,
    "question": "What is a crosstalk glitch?",
    "answer": "It is a voltage spike (noise) induced on a static victim net due to the switching of a neighbouring aggressor net.",
    "category": "Signal Integrity & Reliability",
    "tag": "SI & Reliability",
    "difficulty": "Advanced"
  },
  {
    "id": 47,
    "question": "What is crosstalk delta delay?",
    "answer": "It is the change (increase or decrease) in the delay of a switching victim net caused by the simultaneous switching of a neighbouring aggressor net.",
    "category": "Signal Integrity & Reliability",
    "tag": "SI & Reliability",
    "difficulty": "Advanced"
  },
  {
    "id": 48,
    "question": "When does crosstalk cause an increase in delay on the victim net?",
    "answer": "When the aggressor and victim nets switch in opposite directions.",
    "category": "Signal Integrity & Reliability",
    "tag": "SI & Reliability",
    "difficulty": "Advanced"
  },
  {
    "id": 49,
    "question": "What is 'net shielding' as a technique to prevent crosstalk?",
    "answer": "It involves inserting a static net (connected to VDD or VSS) between the aggressor and victim nets to block the coupling capacitance.",
    "category": "Signal Integrity & Reliability",
    "tag": "SI & Reliability",
    "difficulty": "Advanced"
  },
  {
    "id": 50,
    "question": "What is the 'Antenna Effect' or 'Plasma Induced Gate Oxide Damage'?",
    "answer": "It is damage to the gate oxide of a transistor caused by charge accumulation on long metal interconnects during plasma etching in the fabrication process.",
    "category": "Signal Integrity & Reliability",
    "tag": "SI & Reliability",
    "difficulty": "Advanced"
  },
  {
    "id": 51,
    "question": "What is one way to fix an antenna violation?",
    "answer": "By inserting a reverse-biased antenna diode near the gate to drain excess charge, or by using metal hopping to a higher layer.",
    "category": "Signal Integrity & Reliability",
    "tag": "SI & Reliability",
    "difficulty": "Advanced"
  },
  {
    "id": 52,
    "question": "What is electromigration (EM)?",
    "answer": "It is the drift of metal ions in an interconnect due to the momentum transfer from a high-density flow of electrons, which can lead to open or short circuits.",
    "category": "Signal Integrity & Reliability",
    "tag": "SI & Reliability",
    "difficulty": "Advanced"
  },
  {
    "id": 53,
    "question": "The formation of _____ in an interconnect due to electromigration can cause an open circuit.",
    "answer": "voids",
    "category": "Signal Integrity & Reliability",
    "tag": "SI & Reliability",
    "difficulty": "Advanced"
  },
  {
    "id": 54,
    "question": "The accumulation of metal ions into a _____ due to electromigration can cause a short circuit with a neighbouring wire.",
    "answer": "hillock",
    "category": "Signal Integrity & Reliability",
    "tag": "SI & Reliability",
    "difficulty": "Advanced"
  },
  {
    "id": 55,
    "question": "How do clock buffers differ from normal buffers?",
    "answer": "Clock buffers are designed to have equal rise and fall times to maintain a 50% duty cycle and avoid pulse width violations.",
    "category": "Clock Tree Synthesis (CTS)",
    "tag": "CTS",
    "difficulty": "Clocking"
  },
  {
    "id": 56,
    "question": "What are Non-Default Rules (NDRs) used for during CTS and routing?",
    "answer": "They are user-defined routing rules, such as double width and double spacing, applied to clock nets to make them less sensitive to crosstalk and EM effects.",
    "category": "Clock Tree Synthesis (CTS)",
    "tag": "CTS",
    "difficulty": "Clocking"
  },
  {
    "id": 57,
    "question": "What is an 'exclude pin' clock tree exception?",
    "answer": "It is a pin (like a non-clock input) that is excluded from clock tree timing calculations and optimization, though DRC fixing is still performed.",
    "category": "Clock Tree Synthesis (CTS)",
    "tag": "CTS",
    "difficulty": "Clocking"
  },
  {
    "id": 58,
    "question": "What is a 'stop pin' in the context of CTS?",
    "answer": "It is an endpoint of the clock tree, such as a flip-flop's clock pin, that is used for delay balancing calculations.",
    "category": "Clock Tree Synthesis (CTS)",
    "tag": "CTS",
    "difficulty": "Clocking"
  },
  {
    "id": 59,
    "question": "What is a 'float pin' clock tree exception, often used for hard macros?",
    "answer": "It is a pin with special insertion delay requirements where balancing is done by considering the macro's internal clock latency.",
    "category": "Clock Tree Synthesis (CTS)",
    "tag": "CTS",
    "difficulty": "Clocking"
  },
  {
    "id": 60,
    "question": "What is the purpose of an Integrated Clock Gating (ICG) cell?",
    "answer": "It stops the clock signal from propagating to a group of logic cells when they are not in use, thereby reducing dynamic power consumption.",
    "category": "Clock Tree Synthesis (CTS)",
    "tag": "CTS",
    "difficulty": "Clocking"
  },
  {
    "id": 61,
    "question": "The routing stage that identifies a general path for nets without adhering to DRC rules is called _____ routing.",
    "answer": "Global",
    "category": "Routing & Physical Verification",
    "tag": "Routing & Signoff",
    "difficulty": "Verification"
  },
  {
    "id": 62,
    "question": "The routing stage that performs the final, DRC-aware physical connections on specific tracks is called _____ routing.",
    "answer": "Detailed",
    "category": "Routing & Physical Verification",
    "tag": "Routing & Signoff",
    "difficulty": "Verification"
  },
  {
    "id": 63,
    "question": "What is Design Rule Check (DRC) in physical verification?",
    "answer": "It is the process of checking if the physical layout adheres to the fabrication-specific geometric rules provided by the foundry.",
    "category": "Routing & Physical Verification",
    "tag": "Routing & Signoff",
    "difficulty": "Verification"
  },
  {
    "id": 64,
    "question": "What is verified during a Layout Versus Schematic (LVS) check?",
    "answer": "LVS verifies that the connectivity of the extracted layout netlist matches the connectivity of the original source (Verilog) netlist.",
    "category": "Routing & Physical Verification",
    "tag": "Routing & Signoff",
    "difficulty": "Verification"
  },
  {
    "id": 65,
    "question": "What is the purpose of an Electrical Rule Check (ERC)?",
    "answer": "ERC checks for electrical connectivity issues in the layout, such as floating devices, shorted power/ground nets, or incorrect well tap connections.",
    "category": "Routing & Physical Verification",
    "tag": "Routing & Signoff",
    "difficulty": "Verification"
  },
  {
    "id": 66,
    "question": "Which ICC2 command is used to invoke the Graphical User Interface (GUI)?",
    "answer": "icc2_shell > start_gui",
    "category": "EDA Tools & ICC2 Commands",
    "tag": "ICC2",
    "difficulty": "Hands-On"
  },
  {
    "id": 67,
    "question": "Which ICC2 command is used to create a new project library?",
    "answer": "create_lib",
    "category": "EDA Tools & ICC2 Commands",
    "tag": "ICC2",
    "difficulty": "Hands-On"
  },
  {
    "id": 68,
    "question": "What is the ICC2 command to import a Verilog netlist into the design?",
    "answer": "read_verilog",
    "category": "EDA Tools & ICC2 Commands",
    "tag": "ICC2",
    "difficulty": "Hands-On"
  },
  {
    "id": 69,
    "question": "What command is used in ICC2 to check if the netlist/design is proper and if libraries are correct?",
    "answer": "check_netlist",
    "category": "EDA Tools & ICC2 Commands",
    "tag": "ICC2",
    "difficulty": "Hands-On"
  },
  {
    "id": 70,
    "question": "The ICC2 command `legalize_placement` is used for what purpose?",
    "answer": "It places the standard cells in legalized locations on the site rows.",
    "category": "EDA Tools & ICC2 Commands",
    "tag": "ICC2",
    "difficulty": "Hands-On"
  },
  {
    "id": 71,
    "question": "What is the purpose of the `report_congestion` command in ICC2?",
    "answer": "It generates a report on the routing congestion in the design, helping to identify problem areas.",
    "category": "EDA Tools & ICC2 Commands",
    "tag": "ICC2",
    "difficulty": "Hands-On"
  },
  {
    "id": 72,
    "question": "Which ICC2 command is used to build the clock tree and perform optimization?",
    "answer": "clock_opt",
    "category": "EDA Tools & ICC2 Commands",
    "tag": "ICC2",
    "difficulty": "Hands-On"
  },
  {
    "id": 73,
    "question": "The command `route_global` performs what function in the routing flow?",
    "answer": "It performs global routing, which determines the general paths for nets.",
    "category": "EDA Tools & ICC2 Commands",
    "tag": "ICC2",
    "difficulty": "Hands-On"
  },
  {
    "id": 74,
    "question": "What does the `report_timing` command in ICC2 do?",
    "answer": "It generates a detailed static timing analysis report for specified paths in the design.",
    "category": "EDA Tools & ICC2 Commands",
    "tag": "ICC2",
    "difficulty": "Hands-On"
  }
];

// Prioritized Debugging Hierarchy (Derived from Shivas PD Hub & Industry Playbooks)
const DEBUG_PRIORITY_ORDER = [
  { priority: 1, violation: 'Connectivity Errors', rationale: 'Missing cells, unresolved refs, opens, and shorts must be fixed before optimization.' },
  { priority: 2, violation: 'Floorplan Violations', rationale: 'A poor floorplan or illegal macro orientation propagates into placement, CTS, and routing.' },
  { priority: 3, violation: 'Power Connectivity', rationale: 'Every standard cell needs reliable VDD/VSS rails before timing optimization can run.' },
  { priority: 4, violation: 'Severe Congestion (> 100%)', rationale: 'Local track overflow makes routing impossible and worsens downstream wire delay.' },
  { priority: 5, violation: 'Setup Timing Violations', rationale: 'Meeting the target clock period is the primary silicon performance goal.' },
  { priority: 6, violation: 'Hold Timing Violations', rationale: 'Hold is closed after setup because setup buffer sizing can create hold violations.' },
  { priority: 7, violation: 'DRV: Transition, Cap, Fanout', rationale: 'Max transition and max capacitance fixes improve signal edge slew and prevent timing traps.' },
  { priority: 8, violation: 'Signal Integrity & Crosstalk', rationale: 'Addressed after routing stabilizes to eliminate victim delta-delay and noise glitches.' },
  { priority: 9, violation: 'Static & Dynamic IR Drop / EM', rationale: 'Current density limits and voltage drop must be verified against signoff margins.' },
  { priority: 10, violation: 'Physical DRC/LVS & DFM', rationale: 'Zero DRC/LVS violations required for foundry mask generation and tapeout.' }
];

// Debug Error Database (Cadence Innovus / Synopsys ICC2 / Voltus / Calibre / PrimeTime)
const DEBUG_ERRORS = [
  {
    id: 'err-1',
    stage: 'Import',
    tool: 'Synopsys ICC2',
    code: 'LIB-001',
    title: 'Unresolved Reference / Cell Not Found',
    snippet: 'ERROR: Cell "AOI22_X1" not found in search path / library list.',
    cause: 'Target standard cell library (.db / .lib) missing from link_library or incorrect target library path.',
    triage: 'Inspect current search path and verify logic library bindings.',
    cmd: 'set_app_var search_path "$search_path ./libs"; set_app_var link_library "* sc_hd_tt.db"'
  },
  {
    id: 'err-2',
    stage: 'Floorplan',
    tool: 'Cadence Innovus',
    code: 'FP-201',
    title: 'Macro Orientation / Poly Pitch Violation',
    snippet: 'WARN: Macro "MEM_SRAM_64K" orientation R90 violates poly-gate alignment rule.',
    cause: 'Advanced sub-28nm process rules require all poly gates oriented in the same direction across the die.',
    triage: 'Re-orient macro to R0 or MX/MY so internal poly matches standard cell rows.',
    cmd: 'rotate_obj [get_cells MEM_SRAM_64K] -orient R0'
  },
  {
    id: 'err-3',
    stage: 'Placement',
    tool: 'Cadence Innovus',
    code: 'ENCPL-1234',
    title: 'Placement Congestion Overflow (> 100%)',
    snippet: 'ERROR: Placement congestion overflow detected: High local pin density or over-utilization in macro channel.',
    cause: 'Excessive local cell density, missing macro keepout halos, or heavy multi-pin clusters in narrow channels.',
    triage: 'Add partial density blockage or widen macro keepout margin.',
    cmd: 'createPlaceBlockage -box 120 340 260 480 -type partial -density 60'
  },
  {
    id: 'err-4',
    stage: 'Placement',
    tool: 'Synopsys ICC2',
    code: 'ICC2-4501',
    title: 'Legalization Failed: Standard Cell Overlap',
    snippet: 'ERROR: Legalization failed. Cell overlap detected between "u_alu/add_32" and "u_reg/dff_0" on row 142.',
    cause: 'Row over-utilization or blocked rows preventing valid snap-to-site placement.',
    triage: 'Run check_legality, reduce local density blockage, and refine placement.',
    cmd: 'check_legality -verbose; legalize_placement -effort high'
  },
  {
    id: 'err-5',
    stage: 'CTS',
    tool: 'Cadence Innovus',
    code: 'CTS-7003',
    title: 'Clock Skew Target Unmet / Insertion Delay Asymmetry',
    snippet: 'WARN: Clock domain "SYS_CLK" max skew 240ps exceeds budget (100ps). Sink clk_div_reg latency is 1.4ns.',
    cause: 'Unbalanced sink loading, high fanout near leaf pins, or missing clock buffer NDR rules.',
    triage: 'Apply double-width, double-spacing NDR to trunk nets and rebalance with useful skew.',
    cmd: 'create_route_rule -name CLK_NDR -width {M4 0.28 M5 0.28} -spacing {M4 0.28 M5 0.28}; set_clock_tree_options -routing_rule CLK_NDR'
  },
  {
    id: 'err-6',
    stage: 'Routing',
    tool: 'Siemens Calibre',
    code: 'DRC-M2.SP',
    title: 'Metal2 Minimum Spacing DRC Violation',
    snippet: 'ERROR: Metal2 spacing violation: Distance 0.065µm < Min DRC Requirement 0.080µm.',
    cause: 'Router pushed signal wire too close in local routing congestion.',
    triage: 'Zoom to violation coordinate in RVE, route with wider-spacing NDR or reroute net segment.',
    cmd: 'route_zrt_eco -open_net_minimum_slack -max_detail_route_iterations 10'
  },
  {
    id: 'err-7',
    stage: 'Routing',
    tool: 'Synopsys ICC2',
    code: 'ANT-501',
    title: 'Antenna Ratio Exceeded on Long Metal Interconnect',
    snippet: 'ERROR: Antenna violation on net "data_bus[31]" on layer M4: Ratio 420.5 > Allowed Max 250.0.',
    cause: 'Accumulated charge during plasma etching exceeds gate dielectric oxide breakdown ratio.',
    triage: 'Insert reverse-biased antenna diode cell near destination gate or hop metal to M5.',
    cmd: 'insert_diode -net "data_bus[31]" -cell "ANTENNA_X1" -pin "A"'
  },
  {
    id: 'err-8',
    stage: 'STA',
    tool: 'Synopsys PrimeTime',
    code: 'PT-2201',
    title: 'Setup Slack Negative on Critical Path (WNS < 0.00 ns)',
    snippet: 'VIOLATION: Setup slack = -0.34 ns on endpoint "fifo_ctrl/wr_ptr_reg/D" (Path Group: reg2reg).',
    cause: 'Excessive combinational logic depth, high cell output load, or high-Vt cell delays.',
    triage: 'Upsize driver cells along critical path, restructure logic, or swap non-critical cells to LVT.',
    cmd: 'size_cell [get_cells fifo_ctrl/U42] "NAND2_X4"; report_timing -delay max -to fifo_ctrl/wr_ptr_reg/D'
  },
  {
    id: 'err-9',
    stage: 'EM/IR',
    tool: 'Cadence Voltus',
    code: 'VOLT-8801',
    title: 'Static IR Drop Limit Exceeded (> 5% VDD)',
    snippet: 'ERROR: Peak static IR drop = 68 mV on VDD rail (Budget: 45 mV on 0.9V supply).',
    cause: 'Insufficient power straps on top metal layers or weak via array connection to standard cell M1 rails.',
    triage: 'Add upper-metal power straps (M7/M8) and increase via array density.',
    cmd: 'add_stripes -layer M7 -width 2.0 -spacing 0.5 -pitch 20.0 -nets {VDD VSS}'
  },
  {
    id: 'err-10',
    stage: 'EM/IR',
    tool: 'Cadence Voltus',
    code: 'VOLT-9002',
    title: 'Dynamic IR Drop Hotspot (> 10% VDD Dip)',
    snippet: 'WARN: Dynamic IR hotspot detected: 112 mV dip during clock edge switching in block U_ALU.',
    cause: 'High simultaneous switching activity in localized module causing L·di/dt inductive supply droop.',
    triage: 'Insert decoupling capacitor (decap) cells in surrounding rows and spread clock arrival.',
    cmd: 'add_decap_cell -cells "DECAP_X8 DECAP_X16" -target_density 15.0 -area {100 100 400 400}'
  },
  {
    id: 'err-11',
    stage: 'DRC/LVS',
    tool: 'Siemens Calibre',
    code: 'LVS-101',
    title: 'Short Between Power Net VDD and Ground Net VSS',
    snippet: 'ERROR: LVS Short detected: Net VDD touches Net VSS at coordinates (X: 421.32, Y: 188.45) on layer M3.',
    cause: 'Misrouted PG stripe or missing via enclosure cutting across complementary power rails.',
    triage: 'Trace short in Calibre RVE, rip up violating wire segment and re-run power grid verification.',
    cmd: 'verify_pg_connectivity -check_shorts -nets {VDD VSS}'
  },
  {
    id: 'err-12',
    stage: 'DRC/LVS',
    tool: 'Siemens Calibre',
    code: 'LVS-202',
    title: 'LVS Discrepancy: Unconnected Net / Power Open',
    snippet: 'ERROR: Unconnected net VDD pin on cell "U_SUB_CORE/inst_buf_29". Schematic Net VDD != Layout OPEN.',
    cause: 'Follow-pin rail routing missing in row segment or tie-high cell connected directly to VSS.',
    triage: 'Run check_power_connectivity and execute route_pg_rails.',
    cmd: 'route_pg -nets {VDD VSS} -ground_net VSS -power_net VDD'
  }
];

// Silicon Study Vault & Reference Library Dataset (D:\EducateVLSI\Study)
const STUDY_VAULT_ITEMS = [
  // 5-Day Foundation Masterclass (Interactive HTML Modules)
  {
    id: 'day-1',
    category: 'foundations',
    type: 'html',
    badge: 'Day 1 Lab',
    title: 'Semiconductor Physics, CMOS & Logic Gates',
    desc: 'Silicon lattice, doping, MOSFET threshold voltage & 3 operating regions, CMOS inverter VTC, noise margins, and standard logic gates.',
    file: 'study/day1_cmos_foundations.html',
    meta: ['Interactive HTML', '10-Q Quiz', 'Formula Cards']
  },
  {
    id: 'day-2',
    category: 'foundations',
    type: 'html',
    badge: 'Day 2 Lab',
    title: 'Sequential Logic, Timing & Metastability',
    desc: 'Cross-coupled NAND/NOR latches, D-latch transparency hazards, master-slave edge-triggered DFF, setup/hold windows, MTBF equation.',
    file: 'study/day2_sequential_logic.html',
    meta: ['Interactive HTML', 'Waveforms', 'Metastability Lab']
  },
  {
    id: 'day-3',
    category: 'foundations',
    type: 'html',
    badge: 'Day 3 Lab',
    title: 'Power Dissipation, VLSI Flow & Verilog RTL',
    desc: 'Dynamic power (α·C·V²·f), short-circuit, subthreshold leakage, Multi-Vt strategy, integrated clock gating (ICG), and synthesizable Verilog.',
    file: 'study/day3_power_vlsi_verilog.html',
    meta: ['Interactive HTML', 'Verilog RTL', 'Power Optimization']
  },
  {
    id: 'day-4',
    category: 'foundations',
    type: 'html',
    badge: 'Day 4 Lab',
    title: 'Logic Synthesis — RTL to Gate Netlist',
    desc: 'Translation, logic optimization, technology mapping, drive strength (X1/X2/X4), Liberty (.lib) PVT corners, and SDC constraints.',
    file: 'study/day4_logic_synthesis.html',
    meta: ['Interactive HTML', 'Synopsys DC Flow', 'Liberty Tables']
  },
  {
    id: 'day-5',
    category: 'foundations',
    type: 'html',
    badge: 'Day 5 Lab',
    title: 'Static Timing Analysis — Reading the Fabric of Time',
    desc: 'Register-to-register paths, 4 path types, unateness, MMMC analysis, OCV/AOCV/POCV derating, clock uncertainty budget, and report reading.',
    file: 'study/day5_static_timing_analysis.html',
    meta: ['Interactive HTML', 'STA Reports', 'Slack Equations']
  },

  // Phase 2 Advanced Physical Design Series (10-Day Deep Dive)
  {
    id: 'phase2-part1',
    category: 'phase2',
    type: 'html',
    badge: 'Phase 2 · Part 1',
    title: 'VLSI & Digital Design Fundamentals & File Ecosystem',
    desc: 'CMOS tech, cell drive strengths (X1-X8), timing paths, DFF vs Latch, RTL-to-GDSII flow, complete PD file ecosystem (.lib, .lef, .sdc, .def, .spef, .gds).',
    file: 'study/Phase2_Part1_VLSI_Fundamentals.html',
    meta: ['Interactive HTML', 'TCL Labs', 'File Inspector']
  },
  {
    id: 'phase2-part2',
    category: 'phase2',
    type: 'html',
    badge: 'Phase 2 · Part 2',
    title: 'Floorplan, Power Planning & Placement (OpenROAD Lab)',
    desc: 'Floorplan anatomy, die area estimation, power mesh rings/stripes, IR drop, global/legalized placement, and OpenLane hands-on lab.',
    file: 'study/Phase2_Part2_Floorplan_Power_Placement.html',
    meta: ['Interactive HTML', 'OpenROAD Lab', 'DEF Parser']
  },
  {
    id: 'phase2-part3',
    category: 'phase2',
    type: 'html',
    badge: 'Phase 2 · Part 3',
    title: 'CTS, Routing, STA & Full Tapeout Signoff',
    desc: 'Clock Tree Synthesis skew/latency, routing metal stackup (M1-M9), global vs detailed routing, real PrimeTime STA reports, signoff checklist.',
    file: 'study/Phase2_Part3_CTS_Routing_STA_Signoff.html',
    meta: ['Interactive HTML', 'Signoff Checklist', 'CTS Skew Analyzer']
  },

  // Master LMS Textbooks & Lab Manuals (PDFs)
  {
    id: 'pdf-lms-pd',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'Comprehensive LMS',
    title: 'Complete Physical Design Notes & Guide',
    desc: 'Official 22.7 MB comprehensive training handbook covering every stage from synthesis handoff to tapeout signoff and DRC/LVS clean-up.',
    file: 'study/LMS_PD_Notes.pdf',
    meta: ['PDF 22.7 MB', 'Full ASIC Flow', 'Complete Notes']
  },
  {
    id: 'pdf-icc-lab',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'EDA Lab Manual',
    title: 'Synopsys IC Compiler (ICC) Lab Manual',
    desc: 'Step-by-step practical lab exercises in Synopsys ICC shell: floorplanning, power grid creation, place_opt, clock_opt, and route_opt.',
    file: 'study/LMS_ICC_Lab_Manual.pdf',
    meta: ['PDF 5.3 MB', 'Synopsys ICC', 'Hands-On Labs']
  },
  {
    id: 'pdf-blueprint',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'Master Guide',
    title: 'Blueprint to Silicon: Complete Engineering Guide',
    desc: 'In-depth architectural and implementation handbook: specification, RTL design, logic synthesis, physical design, and foundry fabrication.',
    file: 'study/Blueprint_to_Silicon.pdf',
    meta: ['PDF 14.6 MB', 'Silicon Architecture', 'Foundry Flow']
  },
  {
    id: 'pdf-fp-inputs',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'Floorplan Guide',
    title: 'Floorplan Design Inputs & Constraints Class Notes',
    desc: 'Detailed class notes on IO pin ordering, macro halo spacing, power ring strap sizing, and pre-placement congestion mitigation.',
    file: 'study/LMS_Input_Files_FloorPlan.pdf',
    meta: ['PDF 4.9 MB', 'Floorplan Inputs', 'Power Planning']
  },
  {
    id: 'pdf-comb-logic',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'Digital Logic',
    title: 'Digital Design — Combinational Logic Architecture',
    desc: 'Comprehensive textbook on Boolean algebra, logic minimization, fast carry-lookahead adders, multipliers, and datapath synthesis.',
    file: 'study/DigitalDesign-CombinationalLogic.pdf',
    meta: ['PDF 3.3 MB', 'Combinational Logic', 'Arithmetic Adders']
  },
  {
    id: 'pdf-tcl-pres',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'TCL Deck',
    title: 'EDA TCL Automation Scripting Presentation',
    desc: 'Slide deck on practical TCL programming for EDA tools: syntax, data structures, regex parsing, and custom report automation.',
    file: 'study/Tcl_Presentation.pdf',
    meta: ['PDF 358 KB', 'TCL Presentation', 'Tool Automation']
  },
  {
    id: 'pdf-toolkit',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'Engineer Guide',
    title: 'The Digital Engineer’s Toolkit Handbook',
    desc: 'Essential practical engineering handbook covering command-line workflows, script automation, and debugging techniques.',
    file: 'study/The_Digital_Engineer_s_Toolkit.pdf',
    meta: ['PDF 11.2 MB', 'Engineer Toolkit', 'Workstation Guide']
  },
  {
    id: 'pdf-linux-notes',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'OS & Shell',
    title: 'Linux EDA Environment Administration Guide',
    desc: 'Essential Linux system administration for chip design engineers, shell environment configuration, tool paths, and process management.',
    file: 'study/linux_notes.pdf',
    meta: ['PDF 1.2 MB', 'Linux Shell', 'EDA Admin']
  },
  {
    id: 'pdf-vim-cheatsheet',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'Productivity',
    title: 'VIM Commands Quick Reference & Cheat Sheet',
    desc: 'Compact reference sheet for chip design engineer productivity in Linux terminal VIM: modal navigation, regex substitution, split buffers, and macros.',
    file: 'study/vim-commands-cheat-sheet-by-pnap.pdf',
    meta: ['PDF 81 KB', 'VIM Editor', 'Cheat Sheet']
  },
  {
    id: 'pdf-cmos',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'Semiconductor',
    title: 'CMOS Fundamentals & Device Characteristics',
    desc: 'Core semiconductor device physics, MOS transistor equations, CMOS inverter transfer characteristics (VTC), noise margins, and stick diagrams.',
    file: 'study/cmos.pdf',
    meta: ['PDF 885 KB', 'MOSFET Physics', 'Inverter VTC']
  },
  {
    id: 'pdf-vlsi-design',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'VLSI Guide',
    title: 'VLSI Design Methodologies & Microarchitectures',
    desc: 'Foundational textbook on VLSI system architecture, silicon compilation, hierarchy, clock distribution, and standard cell layout principles.',
    file: 'study/vlsi-design.pdf',
    meta: ['PDF 950 KB', 'VLSI Design', 'Silicon Architecture']
  },
  {
    id: 'pdf-adv-inputs',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'PD Inputs',
    title: 'Physical Design Advanced Inputs Masterclass Notes',
    desc: 'Classroom notes covering advanced floorplanning inputs, SDC timing modes, multi-corner multi-mode (MCMM) libraries, and UPF/CPF power intents.',
    file: 'study/PD_Adv_Inputs_class.pdf',
    meta: ['PDF 1.2 MB', 'Advanced Inputs', 'MCMM / UPF']
  },
  {
    id: 'pdf-adv-pres',
    category: 'lms_guides',
    type: 'pdf',
    badge: 'PD Deck',
    title: 'Advanced Physical Design Implementation Presentation',
    desc: 'Executive slide presentation summarizing the complete advanced physical design flow, floorplanning guidelines, CTS, and signoff criteria.',
    file: 'study/PD_Adv_Presentatrion.pdf',
    meta: ['PDF 417 KB', 'PD Slides', 'Flow Summary']
  },
  {
    id: 'doc-benchmark-matrix',
    category: 'lms_guides',
    type: 'doc',
    badge: 'Triage Matrix',
    title: 'Physical Design Industry Benchmark & 12-Stage Triage',
    desc: 'Extracted benchmark dataset from industry physical design hub: complete 12-stage violation matrix, 35 EDA calculation formulas, and triage sequence.',
    file: 'study/shivas-pd-hub-extracted-content.md',
    meta: ['Markdown 32 KB', 'Debug Matrix', 'EDA Calculators']
  },

  // Video Toolkits
  {
    id: 'vid-asic-flow',
    category: 'videos',
    type: 'video',
    badge: 'Video Masterclass',
    title: 'ASIC Design Flow — Architectural Deep Dive',
    desc: 'Complete video lecture breaking down the RTL-to-GDSII pipeline, tool handoffs, timing constraints, and physical verification.',
    file: 'study/ASIC_Design_Flow.mp4',
    meta: ['MP4 Video 36 MB', 'RTL to GDSII', 'Deep Dive']
  },
  {
    id: 'vid-toolkit',
    category: 'videos',
    type: 'video',
    badge: 'Video Toolkit',
    title: 'The Engineer’s Toolkit — Professional Workstation Setup',
    desc: 'Video guide detailing modern semiconductor EDA engineering environments, terminal setup, and automation best practices.',
    file: 'study/The_Engineer_s_Toolkit.mp4',
    meta: ['MP4 Video 32 MB', 'EDA Setup', 'Productivity']
  }
];


// Stage Gate Tapeout Checklists Dataset
const CHECKLIST_STAGES = {
  floorplan: [
    { id: 'fp-1', text: 'Die and core dimensions finalized with aspect ratio ~ 1.0 (or target aspect).' },
    { id: 'fp-2', text: 'Core utilization target bounded within 60% – 75% for placement and routing margin.' },
    { id: 'fp-3', text: 'All hard macros placed around periphery with fly-lines checked towards IO ports.' },
    { id: 'fp-4', text: 'Macro keepout halos (10–15µm) and placement blockages created around memory blocks.' },
    { id: 'fp-5', text: 'Well tap cell pitch verified within technology limit (typically < 30µm) to prevent latch-up.' },
    { id: 'fp-6', text: 'Power/Ground mesh rings and top-layer straps (VDD/VSS) built with IR drop < 3%.' }
  ],
  placement: [
    { id: 'pl-1', text: 'Zero cell placement overlaps; full legalization completed on site rows.' },
    { id: 'pl-2', text: 'Global routing congestion overflow verified below 1.0% in all G-cells.' },
    { id: 'pl-3', text: 'High Fanout Net Synthesis (HFNS) executed on resets, clocks, and scan-enable nets.' },
    { id: 'pl-4', text: 'Scan chain reordering completed to minimize wirelength across flip-flops.' },
    { id: 'pl-5', text: 'Initial setup slack (WNS/TNS) reviewed and within recoverable range pre-CTS.' }
  ],
  cts: [
    { id: 'cts-1', text: 'Clock uncertainty budgeted with realistic jitter + margin for all clock domains.' },
    { id: 'cts-2', text: 'Non-Default Rules (NDR - double width / double spacing) applied on all clock trunks.' },
    { id: 'cts-3', text: 'Clock skew target met across all corners (Local skew < 100ps, Global skew balanced).' },
    { id: 'cts-4', text: 'Integrated Clock Gating (ICG) cells placed with clean enable setup timing.' },
    { id: 'cts-5', text: 'Hold violations analyzed post-CTS; buffer insertion executed on violating min-delay paths.' }
  ],
  routing: [
    { id: 'rt-1', text: '100% of nets routed with zero unresolved opens or shorts.' },
    { id: 'rt-2', text: 'Antenna effect verified; all violations fixed with antenna diodes or metal hopping.' },
    { id: 'rt-3', text: 'Crosstalk delta delay and noise glitch checks pass on victim nets.' },
    { id: 'rt-4', text: 'DFM wire widening and redundant via insertion completed to boost foundry yield.' }
  ],
  signoff: [
    { id: 'so-1', text: 'Multi-Corner Multi-Mode (MCMM) PrimeTime STA clean: Setup WNS >= 0, Hold WNS >= 0.' },
    { id: 'so-2', text: 'Static IR drop < 5% VDD and Dynamic switching IR drop < 10% VDD across all vectors.' },
    { id: 'so-3', text: 'Electromigration (EM) current density below technology Jmax on all signal and power nets.' },
    { id: 'so-4', text: 'Calibre DRC zero violations (base layers, poly, metal spacing, min area, density).' },
    { id: 'so-5', text: 'Calibre LVS clean (100% netlist versus layout schematic equivalence).' },
    { id: 'so-6', text: 'GDSII / OASIS stream exported with verified layer map and foundry signoff checksum.' }
  ]
};

// ==========================================================================
// ECE TO VLSI PHYSICAL DESIGN MASTER CURRICULUM (FROM SCRATCH TO ADVANCED)
// ==========================================================================
const LEARN_TRACKS = [
  { id: 'ece', title: '1. ECE & Physics', badge: 'Scratch', count: 3, desc: 'Semiconductor physics, PN junction, MOSFET IV equations, and CMOS Inverter VTC.' },
  { id: 'digital', title: '2. Digital Logic', badge: 'Fundamentals', count: 4, desc: 'Combinational datapaths, latches vs flip-flops, metastability, CDC, and synthesizable RTL.' },
  { id: 'frontend', title: '3. ASIC Flow', badge: 'Front-End', count: 4, desc: 'Logic synthesis, SDC constraints, Liberty (.lib) models, and physical LEF abstraction.' },
  { id: 'backend', title: '4. Physical Design', badge: 'Core PnR', count: 6, desc: 'Floorplanning, power mesh, placement, CTS, global & detailed routing.' },
  { id: 'signoff', title: '5. Signoff & SI', badge: 'Signoff', count: 5, desc: 'STA & MCMM, crosstalk, DRC/LVS, electromigration, IR drop, and tapeout ECOs.' },
  { id: 'advanced', title: '6. FinFET & 3nm', badge: 'Sub-7nm', count: 3, desc: '3D FinFET, Gate-All-Around (GAA), EUV lithography, and 2.5D/3D Chiplet packaging.' }
];

const LEARN_LESSONS = [
  // --- Track 1: ECE & Semiconductor Physics ---
  {
    id: 'ece-pn',
    trackId: 'ece',
    number: '1.1',
    title: 'Semiconductor Physics & PN Junction Diodes',
    subtitle: 'Energy Bandgaps, Depletion Region, and Built-In Potential',
    level: 'Foundational ECE',
    duration: '25 min read',
    topics: ['Silicon Lattice', 'Drift vs Diffusion', 'Depletion Width', 'Zener/Avalanche'],
    formula: 'V_0 = V_t \\cdot \\ln\\left(\\frac{N_A \\cdot N_D}{n_i^2}\\right) \\quad \\text{and} \\quad W = \\sqrt{\\frac{2\\epsilon_s}{q}(V_0 + V_R)\\left(\\frac{1}{N_A} + \\frac{1}{N_D}\\right)}',
    summary: 'Silicon (Group IV) crystallizes in a diamond lattice with an energy bandgap of 1.12 eV at 300K. When trivalent atoms (Boron) or pentavalent atoms (Phosphorus/Arsenic) are introduced via ion implantation, p-type and n-type silicon are formed. At the metallurgical junction, electrons diffuse into the p-region and holes diffuse into the n-region, leaving uncompensated donor and acceptor ions that establish an electric field pointing from n to p. This electrostatic barrier halts diffusion, establishing equilibrium built-in potential V0.',
    deepDive: `
      <h4>1. Drift vs. Diffusion Mechanisms</h4>
      <p>Total current density in a semiconductor is governed by carrier transport:</p>
      <div class="lesson-formula-callout">
        J_{total} = J_{drift} + J_{diffusion} = (q n \\mu_n + q p \\mu_p)E + q D_n \\frac{dn}{dx} - q D_p \\frac{dp}{dx}
      </div>
      <p>The Einstein relation links diffusivity and mobility: <code>D / μ = kT / q = Vt (≈ 26 mV at 300K)</code>.</p>

      <h4>2. Depletion Capacitance & Reverse Bias</h4>
      <p>Under reverse bias voltage VR, the depletion region widens, acting as a parallel-plate capacitor with voltage-dependent capacitance: <code>C_j = ε_s A / W ∝ 1 / √(V_0 + V_R)</code>. In high-speed VLSI circuits, junction capacitance forms a significant component of standard cell source/drain parasitic load.</p>
    `,
    tips: 'In physical design, substrate taps tie P-wells to VSS and N-wells to VDD precisely to keep parasitic PN junctions between diffusion regions and the well strongly reverse-biased at all operating corners.',
    interviewQA: [
      {
        q: 'Why does Silicon dominate the VLSI industry over Germanium and Gallium Arsenide (GaAs)?',
        a: 'Silicon naturally forms an exceptionally stable, insulating native oxide (SiO2 and later High-k metal gate dielectrics) that allows planar photolithography etching and passivation. Germanium oxide is water-soluble, and GaAs lacks a native high-quality insulating oxide, making wafer-scale integrated circuit yields unfeasible.'
      },
      {
        q: 'What is the temperature coefficient of the reverse saturation current (I0) in a silicon diode?',
        a: 'Reverse saturation current roughly doubles for every 10°C rise in junction temperature due to thermal generation of intrinsic electron-hole pairs (ni² ∝ T³ exp(-Eg/kT)). This exponential temperature sensitivity explains why cell leakage escalates sharply at high temperature signoff corners (125°C).'
      },
      {
        q: 'What is the physical difference between Zener Breakdown and Avalanche Breakdown?',
        a: 'Zener breakdown occurs in heavily doped junctions where the depletion layer is thin (< 10nm) and strong electric fields directly cause quantum mechanical tunneling of valence electrons. Avalanche breakdown occurs in moderately/lightly doped junctions where carriers gain kinetic energy from the field and liberate secondary electron-hole pairs via impact ionization.'
      }
    ]
  },
  {
    id: 'ece-mosfet',
    trackId: 'ece',
    number: '1.2',
    title: 'Transistors & MOSFET Operating Physics',
    subtitle: 'Inversion Channel, Saturation, Threshold Voltage & Body Effect',
    level: 'Foundational ECE',
    duration: '35 min read',
    topics: ['Inversion Layer', 'Triode vs Saturation', 'Pinch-Off', 'Body Effect', 'Sub-Threshold Slope'],
    formula: 'I_{D,sat} = \\frac{1}{2} \\mu C_{ox} \\frac{W}{L} (V_{GS} - V_{th})^2 (1 + \\lambda V_{DS}) \\quad \\text{and} \\quad SS = \\ln(10) \\frac{kT}{q} \\left(1 + \\frac{C_d}{C_{ox}}\\right)',
    summary: 'The Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET) is the fundamental switching element of modern computing. In an NMOS transistor built on a p-type substrate, applying a positive gate voltage VGS attracts minority electrons to the Si-SiO2 interface, depleting holes and eventually creating an n-type inversion layer once VGS exceeds the threshold voltage Vth.',
    deepDive: `
      <h4>1. Operating Regimes of a MOSFET</h4>
      <ul>
        <li><strong>Cut-off Region (VGS &lt; Vth):</strong> Channel is not inverted. Ideal drain current is zero, but real devices conduct sub-threshold leakage current: <code>I_sub ∝ exp(q(V_GS - V_th) / mkT)</code>.</li>
        <li><strong>Linear / Triode Region (VDS &lt; VGS - Vth):</strong> Continuous conductive channel from source to drain. Current varies almost linearly with VDS: <code>ID = μ Cox (W/L) [(VGS - Vth)VDS - 0.5 VDS²]</code>.</li>
        <li><strong>Saturation Region (VDS &ge; VGS - Vth):</strong> The channel pinches off near the drain pin. Further increases in VDS do not increase channel drift current; carriers are swept across the pinch-off depletion field by high electric field.</li>
      </ul>

      <h4>2. Body Effect & Threshold Voltage Shifts</h4>
      <p>When the source is biased at a higher potential than the substrate (VSB &gt; 0), the depletion charge under the channel increases, shifting the threshold voltage upward:</p>
      <div class="lesson-formula-callout">
        V_{th} = V_{th0} + \\gamma \\left(\\sqrt{2\\phi_F + V_{SB}} - \\sqrt{2\\phi_F}\\right)
      </div>
      <p>In multi-input stacked gates (e.g. 3-input NAND gates), upper NMOS transistors suffer severe body effect, slowing down pull-down transition times.</p>
    `,
    tips: 'Standard cell libraries provide multiple threshold voltage variants (HVT, SVT, LVT, eLVT) by altering channel doping profiles during fabrication. In physical design, LVT cells are prioritized on critical timing paths, while non-critical paths are swapped to HVT to recover leakage.',
    interviewQA: [
      {
        q: 'Why does current continue to flow in saturation even though the channel is pinched off at the drain end?',
        a: 'Pinch-off simply means the inverted electron channel density drops to zero at the drain edge. Electrons traveling from the source reach the pinch-off point and are immediately swept across the high-electric-field depletion zone into the drain contact, much like water flowing over a waterfall.'
      },
      {
        q: 'Why is electron mobility (μn) roughly 2.5× to 3× higher than hole mobility (μp) in silicon?',
        a: 'Electrons reside in the conduction band where the effective mass of an electron is smaller (m* ≈ 0.26 m0) and lattice scattering is lower. Holes travel in the valence band through covalent bond breaking and recombination, resulting in a heavier effective mass (m* ≈ 0.49 m0). Consequently, PMOS transistors must be sized ~2× wider than NMOS to achieve equal rise/fall times.'
      },
      {
        q: 'What is the Subthreshold Slope (SS), and why can it never be smaller than 60 mV/decade at 300K in classical planar MOSFETs?',
        a: 'Subthreshold swing (SS) measures the gate voltage required to change drain current by one order of magnitude. Governed by Boltzmann thermodynamics (kT/q), SS = ln(10)·(kT/q)·(1 + Cd/Cox). Even with an ideal zero depletion capacitance (Cd=0), SS cannot drop below ln(10)·26mV ≈ 60 mV/decade at room temperature. This thermodynamic barrier is why threshold voltage scaling stalled at sub-28nm.'
      }
    ]
  },
  {
    id: 'ece-cmos-inverter',
    trackId: 'ece',
    number: '1.3',
    title: 'CMOS Inverter Characteristics & Power Dissipation',
    subtitle: 'VTC Curve, Noise Margins, Switching Dynamics & Power Equations',
    level: 'Foundational ECE',
    duration: '30 min read',
    topics: ['VTC Curve', 'Noise Margins (NMH, NML)', 'Dynamic Power', 'Short-Circuit Current', 'Leakage Power'],
    formula: 'P_{total} = \\alpha \\cdot C_L \\cdot V_{DD}^2 \\cdot f + I_{sc} \\cdot V_{DD} + I_{leak} \\cdot V_{DD}',
    summary: 'The static CMOS inverter consists of an NMOS pull-down network and a PMOS pull-up network operating in exact complementary fashion. It features virtually zero static power consumption during steady states (logic 0 or logic 1), high input impedance, and rail-to-rail voltage swing (0V to VDD), providing robust noise margins.',
    deepDive: `
      <h4>1. Voltage Transfer Characteristics (VTC) & Noise Margins</h4>
      <p>Key transition points on the VTC where slope <code>dVout / dVin = -1</code> dictate noise tolerance:</p>
      <ul>
        <li><code>VIL</code>: Maximum input voltage recognized as a stable logic 0.</li>
        <li><code>VIH</code>: Minimum input voltage recognized as a stable logic 1.</li>
        <li><code>VOL</code>: Nominal low output voltage (0V in static CMOS).</li>
        <li><code>VOH</code>: Nominal high output voltage (VDD in static CMOS).</li>
      </ul>
      <div class="lesson-formula-callout">
        NM_L = V_{IL} - V_{OL} = V_{IL} \\quad \\text{and} \\quad NM_H = V_{OH} - V_{IH} = V_{DD} - V_{IH}
      </div>

      <h4>2. Power Dissipation Mechanisms in CMOS</h4>
      <ol>
        <li><strong>Dynamic Switching Power (60–80%):</strong> Expended charging and discharging load capacitance CL during transitions: <code>P_dyn = α · CL · VDD² · f</code>.</li>
        <li><strong>Short-Circuit Power (5–10%):</strong> Occurs during input transitions when both NMOS and PMOS conduct simultaneously for a brief duration <code>t_sc</code>: <code>P_sc = I_peak · t_sc · VDD · f</code>.</li>
        <li><strong>Static Leakage Power (20–40% at advanced nodes):</strong> Flowing while the gate is idle via sub-threshold conduction, gate oxide tunneling, and reverse-biased PN junction leakage.</li>
      </ol>
    `,
    tips: 'In physical design, minimizing clock network activity factor α using Integrated Clock Gating (ICG) cells is the most powerful architectural dynamic power optimization technique.',
    interviewQA: [
      {
        q: 'If PMOS width is made equal to NMOS width (Wp = Wn), where does the switching threshold (VM) shift?',
        a: 'Because hole mobility is ~2.5× lower than electron mobility, an equally sized PMOS is weaker than the NMOS. The switching threshold VM (where Vin = Vout) will shift to the left, below VDD/2, reducing the high noise margin (NMH) and increasing susceptibility to high-state noise.'
      },
      {
        q: 'How does input slew (transition time) impact short-circuit power dissipation?',
        a: 'Slower input transitions extend the duration t_sc during which both NMOS and PMOS transistors operate in saturation/linear regions simultaneously, dramatically increasing short-circuit current. Maintaining steep transition times via repeater buffering keeps short-circuit power below 10% of total dynamic power.'
      },
      {
        q: 'What is the Miller Effect in CMOS inverters, and how does it impact propagation delay?',
        a: 'The gate-to-drain overlap capacitance (Cgd) connects input to output. When the inverter switches, the output swings from 0 to VDD while the input swings from VDD to 0 (a voltage swing of 2·VDD across Cgd). From Miller theorem, the effective input capacitance is magnified by (1 - Gain) ≈ (1 - (-1)) = 2·Cgd, increasing input load.'
      }
    ]
  },

  // --- Track 2: Digital Logic & Sequential Architecture ---
  {
    id: 'dig-comb',
    trackId: 'digital',
    number: '2.1',
    title: 'Combinational Logic & High-Speed Datapaths',
    subtitle: 'Boolean Synthesis, Multiplexers, Adders & Hazard Prevention',
    level: 'Digital Design',
    duration: '25 min read',
    topics: ['Universal Gates', 'Kogge-Stone Adders', 'Carry Lookahead', 'Static Hazards & Glitches'],
    formula: 'G_i = A_i \\cdot B_i \\quad \\text{(Generate)}, \\quad P_i = A_i \\oplus B_i \\quad \\text{(Propagate)}, \\quad C_{i+1} = G_i + P_i \\cdot C_i',
    summary: 'Combinational logic outputs depend strictly on current inputs without memory. In modern ASIC physical design, datapath blocks (adders, multipliers, ALUs) dictate the critical timing path and silicon area.',
    deepDive: `
      <h4>1. Adder Architectures in VLSI</h4>
      <ul>
        <li><strong>Ripple Carry Adder (RCA):</strong> Minimal area, but worst-case delay scales linearly: <code>Delay = O(N)</code>.</li>
        <li><strong>Carry Lookahead Adder (CLA):</strong> Computes carry signals in parallel using generate (G) and propagate (P) terms, reducing delay to <code>O(log N)</code> at the cost of higher fanout.</li>
        <li><strong>Parallel Prefix Adders (Kogge-Stone & Brent-Kung):</strong> Kogge-Stone achieves minimum logical depth at the cost of high routing congestion; Brent-Kung balances wire tracks and logic levels.</li>
      </ul>

      <h4>2. Hazards & Glitches</h4>
      <p>Unequal propagation delays along converging paths can induce temporary spurious output transitions called glitches. Glitches consume unnecessary dynamic power (<code>P_glitch = α_glitch · C · VDD² · f</code>) without performing logical work.</p>
    `,
    tips: 'Datapath restructuring in synthesis (e.g. sharing operands, applying Booth encoding, or converting ripple-carry to tree adders) is 10× more effective than physical sizing during backend placement.',
    interviewQA: [
      {
        q: 'Implement a 2-input XOR gate using only a single 2:1 Multiplexer and an inverter.',
        a: 'Connect select input S = A. Connect multiplexer input D0 = B, and input D1 = ~B. When A=0, Out=B. When A=1, Out=~B. This implements Out = (~A·B) + (A·~B) = A ⊕ B.'
      },
      {
        q: 'Why do high-performance CPUs utilize Kogge-Stone adders despite their high wiring density?',
        a: 'Kogge-Stone has the lowest logical depth (log2 N) and uniform fanout of 2 at each stage, making it the fastest possible parallel-prefix topology for 64-bit ALUs where clock period closure is paramount.'
      },
      {
        q: 'What is a static-1 hazard in combinational circuits, and how do you fix it?',
        a: 'A static-1 hazard occurs when an output should remain at logic 1 during an input transition, but momentarily dips to 0 due to asymmetric path delays. It is fixed in Karnaugh maps by adding redundant consensus product terms that bridge adjacent 1-groupings.'
      }
    ]
  },
  {
    id: 'dig-seq',
    trackId: 'digital',
    number: '2.2',
    title: 'Sequential Elements: Latches, Flip-Flops & Metastability',
    subtitle: 'Setup, Hold, Master-Slave Latches, Metastability & MTBF',
    level: 'Digital Design',
    duration: '35 min read',
    topics: ['Level-Sensitive Latches', 'Edge-Triggered Flops', 'Tsetup / Thold', 'Metastability Resolution', 'MTBF'],
    formula: 'T_{clk} \\ge T_{clk-q} + T_{comb,max} + T_{setup} - T_{skew} \\quad \\text{and} \\quad MTBF = \\frac{e^{t_r / \\tau}}{T_0 \\cdot f_{clk} \\cdot f_{data}}',
    summary: 'Sequential elements store state across clock boundaries. A D-Latch is level-sensitive (transparent while clock is active), whereas an edge-triggered D-Flip-Flop samples data strictly on clock edges (typically rising edge) using a master-slave latch pair.',
    deepDive: `
      <h4>1. Timing Requirements: Setup & Hold Windows</h4>
      <ul>
        <li><strong>Setup Time (Tsetup):</strong> Minimum duration data must remain stable BEFORE the active clock edge.</li>
        <li><strong>Hold Time (Thold):</strong> Minimum duration data must remain stable AFTER the active clock edge.</li>
        <li><strong>Clock-to-Q Delay (Tclk-q):</strong> Delay from clock edge until the Q output updates.</li>
      </ul>

      <h4>2. Metastability Physics</h4>
      <p>When input data violates setup or hold windows, internal cross-coupled inverters enter a quasi-stable state between 0 and VDD. The time taken to resolve depends exponentially on internal circuit gain and bandwidth:</p>
      <div class="lesson-formula-callout">
        \\text{Resolution Time } t_r \\implies MTBF = \\frac{\\exp(t_r / \\tau)}{T_0 \\cdot f_{clk} \\cdot f_{data}}
      </div>
    `,
    tips: 'Hold violations must be fixed across all PVT corners before signoff because an uncorrected hold violation causes chips to fail at any frequency, whereas a setup violation can often be worked around by slowing the clock.',
    interviewQA: [
      {
        q: 'Can a flip-flop have a negative setup time or a negative hold time?',
        a: 'Yes. If internal clock path delay exceeds internal data path delay, the data can change after the external clock pin transition, producing a negative setup time. Conversely, adding delay inside the data path produces negative hold time at the expense of increased setup time.'
      },
      {
        q: 'Why can hold violations NOT be fixed by decreasing the clock frequency?',
        a: 'The hold condition is: (Tclk-q + Tcomb,min) > (Thold + Tskew). Notice that clock period T does not appear in this equation! Hold is a race between fast data from the current cycle and the capture clock of the same cycle.'
      },
      {
        q: 'Why does a 2-FF synchronizer dramatically improve MTBF for asynchronous inputs?',
        a: 'The first flip-flop captures the asynchronous signal and may enter metastability. Giving the first flop an entire clock period (tr = Tclk - Tsetup) allows its internal state to resolve exponentially to a clean 0 or 1 before the second flop samples it, multiplying MTBF by millions of years.'
      }
    ]
  },
  {
    id: 'dig-cdc',
    trackId: 'digital',
    number: '2.3',
    title: 'Clock Domain Crossing (CDC) & Asynchronous FIFOs',
    subtitle: 'Multi-Clock SoCs, Gray Coding, Coherency & Dual-Clock FIFOs',
    level: 'Digital Design',
    duration: '30 min read',
    topics: ['CDC Glitches', 'Gray Code Pointers', 'Dual-Clock FIFO', 'Full/Empty Flags'],
    formula: 'G[i] = B[i] \\oplus B[i+1] \\quad \\text{(Binary to Gray Conversion)}',
    summary: 'Modern chips integrate dozens of asynchronous clock domains (PCIe, DDR, CPU, USB). Transferring data across clock boundaries without careful synchronization causes metastability, data loss, and coherency failures.',
    deepDive: `
      <h4>1. The Multi-Bit Convergence Problem</h4>
      <p>When multi-bit bus signals cross asynchronous boundaries, slight differences in wire routing delays cause bits to arrive at different clock edges. If binary counters (e.g. 0111 to 1000) are synchronized bit-by-bit, intermediate values (like 1111 or 0000) can be sampled, corrupting pointers.</p>

      <h4>2. Gray Code Synchronization in Async FIFOs</h4>
      <p>Gray code ensures only ONE single bit changes on any count increment:</p>
      <ul>
        <li>Write pointer generated in write clock domain, converted to Gray code, and passed through a 2-FF synchronizer into the read domain.</li>
        <li>Read pointer generated in read clock domain, converted to Gray code, and synchronized into the write domain.</li>
      </ul>
    `,
    tips: 'In SDC constraints, never use set_false_path across asynchronous clock domains unless proper CDC synchronizers or FIFOs are verified using formal CDC checking tools (SpyGlass CDC / Questa CDC).',
    interviewQA: [
      {
        q: 'Why are Gray code pointers used instead of binary pointers in asynchronous FIFO design?',
        a: 'In binary counting, multiple bits switch simultaneously (e.g. 3 (011) to 4 (100) changes all 3 bits). If an asynchronous clock samples during transition, arbitrary invalid states can be captured. In Gray code, exactly one bit transitions per increment, ensuring sampled values are either the old value or the new value, never corrupted.'
      },
      {
        q: 'What happens if write-pointer synchronization delay causes the read domain to see an older write pointer?',
        a: 'The read domain sees fewer words than actually exist, meaning it may assert FIFO empty slightly early. This is completely safe and pessimistic; it never causes read underflow.'
      },
      {
        q: 'What is a 1-bit pulse synchronizer (Toggle Synchronizer)?',
        a: 'If a pulse in a fast clock domain is shorter than the period of a slow clock domain, a 2-FF synchronizer may miss it. A pulse synchronizer converts the fast pulse into a toggle signal (T-flip flop), passes the level through a 2-FF synchronizer, and performs edge detection in the destination domain.'
      }
    ]
  },
  {
    id: 'dig-hdl',
    trackId: 'digital',
    number: '2.4',
    title: 'Synthesizable Verilog & RTL Architecture',
    subtitle: 'RTL Idioms, Blocking vs Non-Blocking, Inferred Latches',
    level: 'Digital Design',
    duration: '25 min read',
    topics: ['Blocking (=)', 'Non-Blocking (<=)', 'Latch Inference', 'Synthesis Directives'],
    formula: '\\text{Golden Rule: } \\begin{cases} \\text{Combinational logic:} & \\text{always @(*) with } = \\\\ \\text{Sequential logic:} & \\text{always @(posedge clk) with } <= \\end{cases}',
    summary: 'Hardware Description Languages model concurrent physical hardware. Writing synthesizable RTL requires understanding how language constructs map onto standard cells, registers, and clock networks.',
    deepDive: `
      <h4>1. The Golden Rules of Verilog Assignments</h4>
      <ul>
        <li>Always use non-blocking (<code>&lt;=</code>) assignments inside sequential <code>always @(posedge clk)</code> blocks to eliminate race conditions between flip-flops.</li>
        <li>Always use blocking (<code>=</code>) assignments inside combinational <code>always @(*)</code> blocks.</li>
        <li>Never mix blocking and non-blocking assignments inside the same always block.</li>
      </ul>

      <h4>2. Unintended Latch Inference</h4>
      <p>If an output signal is not assigned a value under every possible branch of an <code>if-else</code> or <code>case</code> statement in a combinational block, the synthesis tool infers a transparent D-latch to preserve the previous value, causing severe timing and testability issues.</p>
    `,
    tips: 'Set synthesis tools to fail on inferred latches (`set_app_var hdlin_check_no_latch true`). Latches complicate STA timing exceptions and defeat standard scan chain testing.',
    interviewQA: [
      {
        q: 'What causes a synthesis tool to infer a transparent latch from combinational code?',
        a: 'Failing to assign an output variable in all possible conditional branches of an `if-else` or `case` statement, or failing to provide default assignments at the beginning of an `always @(*)` block. The synthesis tool must physically retain the variable\'s previous value, which mandates a latch.'
      },
      {
        q: 'Why does using blocking assignments in sequential blocks cause simulation-synthesis mismatches?',
        a: 'Blocking assignments evaluate and update sequentially in simulation order. When two sequential registers update with blocking assignments, simulator event scheduling can cause the second register to capture the newly updated value in the same clock cycle (like a shift register becoming a single flop).'
      },
      {
        q: 'What is the purpose of the `full_case` and `parallel_case` synthesis attributes, and why are they considered dangerous?',
        a: 'They instruct synthesis tools that unused case options are unreachable (`full_case`) or that case items are mutually exclusive (`parallel_case`), synthesizing priority encoders into multiplexers. If simulation and actual hardware behavior deviate, catastrophic silicon functional bugs occur.'
      }
    ]
  },

  // --- Track 3: ASIC Flow & Front-End Handoff ---
  {
    id: 'fe-synth',
    trackId: 'frontend',
    number: '3.1',
    title: 'Logic Synthesis & Technology Mapping',
    subtitle: 'From RTL to Technology Netlist: Translation, Optimization, Gating',
    level: 'ASIC Flow',
    duration: '30 min read',
    topics: ['RTL to Gate-Level', 'Cost Functions (WNS/TNS)', 'Technology Mapping', 'Integrated Clock Gating'],
    formula: '\\text{Cost Function} = w_1 \\cdot \\text{Worst Negative Slack} + w_2 \\cdot \\text{Total Negative Slack} + w_3 \\cdot \\text{Area}',
    summary: 'Logic synthesis takes synthesizable RTL Verilog/VHDL, technology libraries (.lib), and timing constraints (.sdc) to generate an optimized, technology-mapped gate-level netlist (.v).',
    deepDive: `
      <h4>1. The Three Phases of Synthesis</h4>
      <ol>
        <li><strong>Translation:</strong> Parses Verilog RTL into an internal technology-independent generic logic representation (GTECH).</li>
        <li><strong>Logic Optimization:</strong> Applies Boolean minimization, constant folding, dead-code removal, and resource sharing.</li>
        <li><strong>Technology Mapping:</strong> Maps generic Boolean functions onto real physical standard cells available in the target foundry .lib (AND, OR, AOI, Flip-Flops).</li>
      </ol>
    `,
    tips: 'Never pass a netlist to Physical Design with unresolved references (`ERROR: Cell not found`), floating pins, or assign statements. Use `remove_assigns` or `change_names -rules verilog` in synthesis.',
    interviewQA: [
      {
        q: 'What are the essential input files required to run ASIC logic synthesis?',
        a: '1. Synthesizable RTL source files (.v / .sv); 2. Target technology libraries (.lib / .db) containing cell delays, area, and power; 3. Synopsys Design Constraints (.sdc) defining clock frequencies, IO delays, and false paths; 4. Operating condition / wireload model specifications.'
      },
      {
        q: 'What is the primary role of an Integrated Clock Gating (ICG) cell inserted during synthesis?',
        a: 'An ICG combines an active-low latch and an AND gate into a glitch-free standard cell. When the enable signal is low, it shuts off clock propagation to downstream flip-flops, eliminating dynamic clock tree switching power.'
      },
      {
        q: 'What is Total Negative Slack (TNS) vs Worst Negative Slack (WNS)?',
        a: 'WNS is the slack of the single worst violating path in a design/group (magnitude determines frequency feasibility). TNS is the sum of negative slacks across all violating endpoints (indicates overall timing closure difficulty).'
      }
    ]
  },
  {
    id: 'fe-sdc',
    trackId: 'frontend',
    number: '3.2',
    title: 'Timing Constraints & SDC Mastery',
    subtitle: 'Clocks, Latency, Uncertainty, IO Delays & Exceptions',
    level: 'Timing & Constraints',
    duration: '35 min read',
    topics: ['create_clock', 'create_generated_clock', 'set_input_delay', 'set_false_path', 'Multicycle'],
    formula: 'T_{required,setup} = T_{period} + T_{capture,latency} - T_{setup} - T_{uncertainty}',
    summary: 'Synopsys Design Constraints (.sdc) is the industry standard for specifying design intent, clock waveforms, environmental budgets, and timing exceptions to synthesis and physical design tools.',
    deepDive: `
      <h4>1. Defining Primary Clocks & Generated Clocks</h4>
      <div class="lesson-formula-callout">
        create_clock -name SYS_CLK -period 1.0 -waveform {0.0 0.5} [get_ports clk_in]<br>
        create_generated_clock -name DIV2_CLK -source [get_ports clk_in] -divide_by 2 [get_pins div2_reg/Q]
      </div>

      <h4>2. Timing Exceptions: False Paths & Multicycle Paths</h4>
      <p>Timing exceptions inform STA engines to bypass or relax default single-cycle setup/hold assumptions on functionally inactive paths.</p>
    `,
    tips: 'Before CTS, always budget clock uncertainty with skew + jitter + margin (`set_clock_uncertainty 0.15 [get_clocks SYS_CLK]`). After CTS, reduce uncertainty to jitter + margin because skew is calculated from the real clock tree.',
    interviewQA: [
      {
        q: 'If you set a multicycle path of 2 cycles for setup, what hold constraint does the tool apply by default?',
        a: 'By default, the tool checks hold relative to the capture edge minus one cycle, which places the hold check at cycle 1 (the same edge where data was launched!). You must explicitly specify `set_multicycle_path 1 -hold -to [get_pins ...]` to shift the hold check back to cycle 0.'
      },
      {
        q: 'What is the physical meaning of `set_input_delay`?',
        a: 'It specifies the external delay consumed by the transmitting chip/board before the signal arrives at the input port. The internal chip logic has only (Tperiod - InputDelay) remaining to capture the signal.'
      },
      {
        q: 'What is the difference between source latency and network latency?',
        a: 'Source latency is the delay from the actual clock oscillator/PLL to the chip\'s clock definition port. Network latency is the propagation delay from the clock definition port through clock buffers to the clock pins of registers.'
      }
    ]
  },
  {
    id: 'fe-lib',
    trackId: 'frontend',
    number: '3.3',
    title: 'Standard Cell Library Characterization (.lib)',
    subtitle: 'Liberty Formats, NLDM Tables, CCS Current Models, Multi-Vt',
    level: 'ASIC Libraries',
    duration: '30 min read',
    topics: ['NLDM Lookup Tables', 'CCS Current Sources', 'HVT / SVT / LVT', 'Leakage vs Speed'],
    formula: '\\text{Delay} = f(\\text{Input Transition}, \\text{Output Capacitance})',
    summary: 'The Liberty (.lib / .db) file contains the electrical, functional, area, and power characterization of every standard cell and macro in a technology node.',
    deepDive: `
      <h4>1. NLDM vs Composite Current Source (CCS)</h4>
      <p>Non-Linear Delay Model (NLDM) uses 2D lookup tables indexed by input slew and output capacitance. Below 28nm, high interconnect resistance invalidates pure lumped-capacitance assumptions; Composite Current Source (CCS) models the driver as a time-varying non-linear current source I(t), providing SPICE-accurate delays.</p>
    `,
    tips: 'Always maintain balanced cell library usage: aim for >70% HVT/SVT cells across the chip, restricting LVT/eLVT cells strictly to top violating timing paths.',
    interviewQA: [
      {
        q: 'Why does NLDM delay calculation fail at advanced process nodes (sub-28nm)?',
        a: 'NLDM assumes standard cell load can be modeled as a single lumped capacitance. At sub-28nm nodes, interconnect wire resistance (R) is comparable to driver resistance. The receiver sees a shielded capacitance, and the output waveform becomes non-linear, which NLDM voltage-based tables cannot capture.'
      },
      {
        q: 'What are the trade-offs of using Low-Vt (LVT) standard cells?',
        a: 'LVT cells switch ~25% faster due to higher overdrive voltage (VGS - Vth), but suffer exponential increases in subthreshold leakage power (10x to 100x higher than HVT). Overusing LVT destroys mobile battery budgets.'
      },
      {
        q: 'What is the function of a tie-high and tie-low cell?',
        a: 'Connecting gate inputs directly to VDD or VSS power rails exposes thin gate oxides to destructive voltage surges or ESD during manufacturing. Tie-high/tie-low cells provide a diode-protected reference voltage (logic 1 or 0).'
      }
    ]
  },
  {
    id: 'fe-lef',
    trackId: 'frontend',
    number: '3.4',
    title: 'Physical Libraries: Tech LEF & Macro LEF',
    subtitle: 'Physical Abstraction, Routing Layers, Obstructions & Tracks',
    level: 'Physical Libraries',
    duration: '25 min read',
    topics: ['Tech LEF', 'Macro LEF', 'Obstruction Layers (OBS)', 'Routing Tracks'],
    formula: '\\text{Track Pitch} = \\text{Minimum Width} + \\text{Minimum Spacing}',
    summary: 'Layout Exchange Format (LEF) is an ASCII format representing physical layout data in an abstracted form. It omits internal transistor active/diffusion masks, exposing only boundaries, pins, and metal obstructions.',
    deepDive: `
      <h4>1. Tech LEF vs Macro LEF</h4>
      <ul>
        <li><strong>Tech LEF:</strong> Defines global manufacturing rules: metal layer names, preferred routing directions, min widths, spacing, pitch, resistance/capacitance per unit area, and default via templates.</li>
        <li><strong>Macro LEF:</strong> Defines standard cells and memory macros: cell height/width (SIZE), placement site (SITE core), input/output pin coordinates (PIN), and routing obstruction geometries (OBS).</li>
      </ul>
    `,
    tips: 'Verify that macro LEF obstructions cover internal metal layers up to the highest internal metal used, so global routers do not short through the macro.',
    interviewQA: [
      {
        q: 'Why do PnR tools load LEF files instead of full GDSII layout files?',
        a: 'GDSII files contain billions of detailed polygons for all fabrication base layers (diffusion, poly, wells, contacts). Loading GDSII for an entire SoC would exceed workstation RAM. LEF abstracts away base layers, providing only the pin locations and metal obstructions needed for place-and-route.'
      },
      {
        q: 'What is the purpose of the SITE definition in a LEF file?',
        a: 'The SITE statement defines the basic placement grid unit (height and width) of a standard cell row. All standard cells must have heights equal to the site height (or integer multiples for multi-height cells) so they snap legally onto placement rows.'
      },
      {
        q: 'What is an obstruction (OBS) in a macro LEF?',
        a: 'An OBS defines a geometric region on specific metal layers inside a macro where the router is forbidden from routing signals, preventing shorts with internal macro wiring.'
      }
    ]
  },

  // --- Track 4: Core Physical Design (RTL-to-GDSII) ---
  {
    id: 'be-floorplan',
    trackId: 'backend',
    number: '4.1',
    title: 'Floorplanning & Die Architecture',
    subtitle: 'Aspect Ratio, Utilization, IO Placement & Boundary Planning',
    level: 'Core Physical Design',
    duration: '35 min read',
    topics: ['Aspect Ratio', 'Core Utilization', 'IO Pads', 'Tap Cells', 'End-Caps'],
    formula: '\\text{Die Area} = \\text{Core Area} + \\text{IO Ring Area} + \\text{Scribe Line Margins}',
    summary: 'Floorplanning establishes the physical framework for the entire chip: determining core/die dimensions, placing hard macros, defining IO port locations, and allocating power grid resources.',
    deepDive: `
      <h4>1. Core Utilization & Aspect Ratio</h4>
      <p>Target utilization is typically bounded between 60% and 75%:</p>
      <div class="lesson-formula-callout">
        \\text{Utilization} = \\frac{\\text{Standard Cell Area} + \\text{Macro Area}}{\\text{Core Area}} \\times 100
      </div>
      <p>Aspect ratio AR = Width / Height. An aspect ratio of 1.0 (square) minimizes worst-case clock tree latency and wirelength.</p>

      <h4>2. Special Physical Boundary Cells</h4>
      <ul>
        <li><strong>Well Tap Cells:</strong> Inserted at regular intervals (< 30µm) connecting VDD to n-well and VSS to p-substrate to prevent parasitic SCR latch-up.</li>
        <li><strong>End-Cap Cells:</strong> Placed at row ends to prevent base layer DRC issues and terminate active diffusion.</li>
      </ul>
    `,
    tips: 'Always run a trial placement and routing congestion analysis at floorplan stage before proceeding to full placement. Solving congestion at floorplanning is 100x faster than post-route fixes.',
    interviewQA: [
      {
        q: 'What happens if you floorplan a chip with 90% core utilization?',
        a: 'The placer and router will suffer catastrophic congestion. Pin density will exceed routing track capacity, causing thousands of DRC shorts, timing closure failure, and zero space for post-CTS hold fixing or timing ECO buffers.'
      },
      {
        q: 'Explain the latch-up phenomenon and how tap cells eliminate it.',
        a: 'Latch-up occurs when parasitic NPN and PNP bipolar transistors in the CMOS substrate form a low-impedance p-n-p-n thyristor between VDD and GND. High currents can destroy the chip. Tap cells tie the well and substrate firmly to power rails, reducing substrate resistance below the threshold required to forward-bias parasitic junctions.'
      },
      {
        q: 'What are fly-lines in a physical design GUI?',
        a: 'Fly-lines (flight lines) are visual connection vectors showing logical net connectivity between macros, IO ports, and standard cell modules, helping the designer place communicating blocks close together.'
      }
    ]
  },
  {
    id: 'be-macro',
    trackId: 'backend',
    number: '4.2',
    title: 'Macro Placement & Channel Planning',
    subtitle: 'Memory Placement, Halo Keepouts, Routing Channels & Pin Directions',
    level: 'Core Physical Design',
    duration: '30 min read',
    topics: ['Macro Halos', 'Channel Width Calculation', 'Periphery Placement', 'Blockages'],
    formula: '\\text{Channel Width} = \\frac{N_{pins} \\times \\text{Pitch}}{N_{layers} / 2} + \\text{Buffer Space}',
    summary: 'Hard macros (SRAMs, PLLs, analog blocks) represent massive physical and routing obstructions. Poor macro placement causes detour routing, timing violations, and severe congestion.',
    deepDive: `
      <h4>1. Periphery Placement Guidelines</h4>
      <ul>
        <li>Place hard macros along chip edges/periphery with pins facing the core area.</li>
        <li>Never place standard cells in narrow macro-to-macro alleys; maintain wide channels or abut matching memories.</li>
        <li>Add macro keepout halos (10–15µm) to prevent standard cells from blocking macro pin access.</li>
      </ul>
    `,
    tips: 'Group memories functionally according to their hierarchy (e.g. all L1 instruction cache memories clustered together with shared address bus fly-lines).',
    interviewQA: [
      {
        q: 'Why should macros generally NOT be placed in the center of the core?',
        a: 'Central macros act as massive routing barriers, forcing all signal routing to take long detours around them, which escalates wirelength, RC delay, congestion, and makes power delivery to center logic exceedingly difficult.'
      },
      {
        q: 'What is the difference between a hard placement blockage and a soft placement blockage?',
        a: 'A hard blockage strictly forbids any standard cell (including buffers/inverters) from being placed. A soft blockage prevents standard cells during coarse placement but permits the optimizer to insert buffers/inverters for timing or electrical design rule fixes.'
      },
      {
        q: 'How do you calculate the minimum channel width between two adjacent macros?',
        a: 'Count the total number of interconnect wires that must pass through the channel, multiply by the routing pitch of available metal layers, divide by the number of routing layers routed in that direction, and add a safety margin (typically 20–30%) for power straps and buffer insertion.'
      }
    ]
  },
  {
    id: 'be-power',
    trackId: 'backend',
    number: '4.3',
    title: 'Power Planning & Power Distribution Network (PDN)',
    subtitle: 'Power Rings, Straps, Standard Cell Rails, IR Drop & Decap Sizing',
    level: 'Core Physical Design',
    duration: '35 min read',
    topics: ['Power Rings', 'Power Straps', 'Static vs Dynamic IR', 'Decap Cells'],
    formula: 'V_{drop,static} = I_{avg} \\cdot R_{mesh} \\quad \\text{and} \\quad V_{drop,dynamic} = L \\frac{di}{dt} + I_{peak} \\cdot R',
    summary: 'The Power Distribution Network (PDN) delivers stable VDD and VSS voltages to every transistor across the chip without exceeding IR drop budgets or causing electromigration failures.',
    deepDive: `
      <h4>1. The Power Hierarchy</h4>
      <ol>
        <li><strong>Power Rings:</strong> Wide metal loops surrounding the core and macro boundaries to distribute supply current around the periphery.</li>
        <li><strong>Power Straps:</strong> Horizontal and vertical stripes placed on top thick metal layers (M7, M8) with wide cross-sections to minimize sheet resistance.</li>
        <li><strong>Standard Cell Rails:</strong> Follow-pin rails on M1 that directly power every standard cell row.</li>
      </ol>
    `,
    tips: 'Decoupling capacitor (Decap) cells should be inserted after power mesh synthesis in empty standard cell row sites near high-switching clocks and bus drivers to provide local charge reservoirs during clock edges.',
    interviewQA: [
      {
        q: 'What is the difference between Static IR drop and Dynamic IR drop?',
        a: 'Static IR drop is steady-state ohmic voltage loss caused by average current flowing through resistive metal straps (V = Iavg · R). Dynamic IR drop is instantaneous voltage droop caused by thousands of flip-flops switching simultaneously on active clock edges (V = L·(di/dt) + Ipeak·R).'
      },
      {
        q: 'Why are top metal layers preferred for power straps rather than lower metal layers?',
        a: 'Top metals are physically thicker and wider, giving them dramatically lower sheet resistance (mΩ/sq) and 3x higher electromigration current handling capacity. Lower metals are preserved for dense signal routing between standard cell pins.'
      },
      {
        q: 'What is the danger of inserting too many decoupling capacitor (decap) cells?',
        a: 'Decap cells act as thin-oxide gate capacitors between VDD and GND. While they damp dynamic IR drop, they leak static sub-threshold and gate tunneling current, substantially increasing standby battery power drain.'
      }
    ]
  },
  {
    id: 'be-placement',
    trackId: 'backend',
    number: '4.4',
    title: 'Standard Cell Placement & Optimization',
    subtitle: 'Coarse Placement, Legalization, Scan Reordering, Congestion, HFNS',
    level: 'Core Physical Design',
    duration: '35 min read',
    topics: ['Global Placement', 'Legalization', 'Scan Chain Reordering', 'HFNS', 'Timing Optimization'],
    formula: '\\text{HPWL} = (X_{max} - X_{min}) + (Y_{max} - Y_{min})',
    summary: 'Placement assigns physical coordinates to every standard cell in the gate-level netlist, optimizing for total wirelength, timing slack, routing congestion, and power.',
    deepDive: `
      <h4>1. Placement Phases in EDA Tools</h4>
      <ol>
        <li><strong>Coarse (Global) Placement:</strong> Determines approximate locations minimizing Half-Perimeter Wirelength (HPWL); allows slight overlaps.</li>
        <li><strong>Legalization:</strong> Snaps cells to legal placement site rows and aligns them with well tap grids, eliminating all cell overlaps.</li>
        <li><strong>High Fanout Net Synthesis (HFNS):</strong> Inserts buffer trees into high-fanout control signals (resets, enables, scan-enables) before CTS.</li>
        <li><strong>Scan Chain Reordering:</strong> Re-links scan flip-flops based on their physical placement to avoid long crisscrossing test routing wires.</li>
      </ol>
    `,
    tips: 'Inspect the global routing congestion map immediately after placement. If routing demand exceeds capacity by > 1.0% in any G-cell cluster, detailed routing will fail with DRC shorts.',
    interviewQA: [
      {
        q: 'What is High Fanout Net Synthesis (HFNS), and why are clock nets excluded from HFNS?',
        a: 'HFNS synthesizes buffer trees for high-fanout control signals (like resets and enables) to satisfy max transition and max capacitance rules. Clock nets are excluded because clocks require special CTS algorithms to balance skew and insertion delay, which standard HFNS cannot accomplish.'
      },
      {
        q: 'Why is scan chain reordering performed during placement?',
        a: 'During synthesis, scan chains are connected arbitrarily based on netlist naming. After physical placement, flip-flops are scattered across the die. Scan reordering stitches neighboring flip-flops together, slashing test wirelength and congestion.'
      },
      {
        q: 'What techniques does an EDA placement tool use to fix setup violations during `place_opt`?',
        a: '1. Cell upsizing (increasing driver width); 2. Swapping HVT cells to faster LVT cells; 3. Buffer insertion to split long interconnects; 4. Pin swapping to put critical inputs on faster internal transistor gates; 5. Logic cloning.'
      }
    ]
  },
  {
    id: 'be-cts',
    trackId: 'backend',
    number: '4.5',
    title: 'Clock Tree Synthesis (CTS) & Skew Optimization',
    subtitle: 'H-Tree, Mesh, Skew Balancing, Latency, NDR Rules, ICG Gates',
    level: 'Clocking & CTS',
    duration: '40 min read',
    topics: ['Clock Skew (Local vs Global)', 'Insertion Delay', 'Clock Buffers', 'Non-Default Rules (NDR)', 'Clock Gating'],
    formula: 'T_{skew} = T_{capture,latency} - T_{launch,latency} \\quad \\text{and} \\quad T_{uncertainty,post-CTS} = \\text{Jitter} + \\text{Margin}',
    summary: 'Clock Tree Synthesis (CTS) distributes the clock signal from the chip clock root to hundreds of thousands of sequential registers with minimal insertion delay and balanced clock skew.',
    deepDive: `
      <h4>1. Clock Skew vs Insertion Delay</h4>
      <ul>
        <li><strong>Local Skew:</strong> Time difference between clock arrival at two communicating registers (launch flop and capture flop). Directly enters setup and hold slack equations.</li>
        <li><strong>Global Skew:</strong> Difference between maximum insertion delay and minimum insertion delay across the entire clock domain.</li>
      </ul>

      <h4>2. Non-Default Routing Rules (NDR) for Clocks</h4>
      <p>Clock nets toggle twice every clock cycle (100% activity factor). To protect clocks from crosstalk interference and prevent electromigration, CTS routers apply Non-Default Rules (typically double width, double spacing - 2W2S) on intermediate and upper routing layers.</p>
    `,
    tips: 'Use symmetric clock inverter/buffer cells from the library with matched rise and fall delays to prevent pulse width distortion from shrinking the clock high-pulse duration.',
    interviewQA: [
      {
        q: 'What is the difference between a clock buffer and a normal standard cell buffer?',
        a: 'Clock buffers are physically designed with balanced pull-up (PMOS) and pull-down (NMOS) drive strengths to ensure equal rise time and fall time (50% duty cycle). Normal buffers are asymmetric to save area, which distorts clock pulses and causes min-pulse-width violations.'
      },
      {
        q: 'What is an "Exclude Pin" vs a "Stop Pin" vs a "Float Pin" in CTS constraints?',
        a: 'A Stop Pin is an active clock endpoint (e.g. register CK pin) where the clock tree balances delay. An Exclude Pin is ignored during clock balancing (e.g. non-clock inputs). A Float Pin has a predetermined internal macro insertion delay that CTS must account for when balancing the tree.'
      },
      {
        q: 'Why are hold violations typically analyzed and repaired ONLY after CTS?',
        a: 'Before CTS, the clock is ideal with 0ns insertion delay and 0ns skew, making hold analysis unrealistic. After CTS, real clock tree delays and skew exist, so the tool can accurately measure min-delay paths and insert delay cells to fix hold.'
      }
    ]
  },
  {
    id: 'be-routing',
    trackId: 'backend',
    number: '4.6',
    title: 'Global & Detailed Routing',
    subtitle: 'G-Cell Grids, Track Assignment, Search & Repair, Antenna Diodes, DFM',
    level: 'Core Physical Design',
    duration: '35 min read',
    topics: ['Global Routing', 'Track Assignment', 'Detailed Routing', 'Antenna Effect', 'Redundant Vias'],
    formula: '\\text{Antenna Ratio} = \\frac{\\text{Exposed Metal Wire Area}}{\\text{Connected Gate Oxide Area}} \\le 250',
    summary: 'Routing physically connects all placed standard cells, macros, and IO ports using metallic layers in accordance with foundry design rules.',
    deepDive: `
      <h4>1. The Three Stages of Modern Routing</h4>
      <ol>
        <li><strong>Global Routing:</strong> Partitions chip into a grid of Global Cells (G-cells), planning rough routes through G-cell edges to avoid congested areas.</li>
        <li><strong>Track Assignment:</strong> Replaces global routing segments with straight continuous wires assigned to specific tracks on preferred metal layers.</li>
        <li><strong>Detailed Routing:</strong> Connects pins and vias adhering to all DRC design rules (end-of-line spacing, via enclosure, corner notch rules) using search-and-repair iterations.</li>
      </ol>

      <h4>2. Process Antenna Effect Violation & Fixing</h4>
      <p>During plasma etching in fabrication, long metal wires collect electrostatic charge. If connected directly to a thin transistor gate oxide without a diode path to substrate, the accumulated charge discharges through the gate dielectric, rupturing it.</p>
    `,
    tips: 'Fix antenna violations using metal hopping (jumping to a higher metal layer near the destination gate so the long wire is disconnected during lower-layer etching) or inserting reverse-biased antenna diodes.',
    interviewQA: [
      {
        q: 'What is metal hopping (jumping) and how does it fix an antenna violation?',
        a: 'Metal hopping routes the long interconnect wire up to a higher metal layer and drops down to the destination gate only on the top layer. Because chips are built layer-by-layer from bottom to top, the long wire is not connected to the delicate gate oxide when lower metal layers are being plasma etched.'
      },
      {
        q: 'Why are redundant (double) vias inserted during detailed routing?',
        a: 'Single vias are vulnerable to random particle defects or voiding during chemical-mechanical polishing (CMP), creating open-circuit failures. Inserting redundant parallel vias increases fabrication yield and slashes interconnect via resistance by half.'
      },
      {
        q: 'What is crosstalk delta delay in routed interconnects?',
        a: 'Coupling capacitance (Cc) exists between adjacent parallel wires. When an aggressor net switches in the opposite direction of a victim net, Cc acts as a 2x Miller capacitance, slowing down the victim transition and increasing propagation delay (setup violation).'
      }
    ]
  },

  // --- Track 5: Signoff, Timing Closure & Reliability ---
  {
    id: 'so-sta',
    trackId: 'signoff',
    number: '5.1',
    title: 'Static Timing Analysis (STA) & Multi-Corner Signoff',
    subtitle: 'MCMM, Setup/Hold Inequalities, CRPR/CPPR, OCV / AOCV / POCV',
    level: 'Signoff & Verification',
    duration: '40 min read',
    topics: ['MCMM', 'CRPR / CPPR', 'OCV Derating', 'AOCV', 'POCV Gaussian'],
    formula: '\\text{Setup: } T_{clk} + T_{cap} - T_{setup} - T_{uncert} - (T_{launch} + T_{data}) \\ge 0 \\quad \\text{and} \\quad \\text{Hold: } (T_{launch} + T_{data}) - (T_{cap} + T_{hold} + T_{uncert}) \\ge 0',
    summary: 'Static Timing Analysis (STA) exhaustively verifies every timing path in the design across all process, voltage, and temperature (PVT) corners without requiring dynamic input test vectors.',
    deepDive: `
      <h4>1. Clock Reconvergence Pessimism Removal (CRPR / CPPR)</h4>
      <p>In OCV analysis, the tool applies an early derate to one path and a late derate to the other. On the common clock segment shared by both launch and capture clocks, the physical wire cannot simultaneously be early and late! CRPR calculates this common path delay difference and credits it back to the slack.</p>
    `,
    tips: 'Sign off timing with PrimeTime or Tempus using Multi-Mode Multi-Corner (MMMC) views covering Functional, ScanShift, and Capture modes at Max (SSG/0.75V/-40C) and Min (FFG/0.95V/125C) corners.',
    interviewQA: [
      {
        q: 'Why does setup analysis use late launch and early capture, while hold analysis uses early launch and late capture?',
        a: 'Setup checks for max delay, so it tests whether the slowest possible data launched by a delayed clock arrives before an advanced capture clock. Hold checks for min delay, testing whether the fastest possible data launched by an early clock races ahead and corrupts the previous state at a delayed capture clock.'
      },
      {
        q: 'What is the difference between flat OCV, AOCV, and POCV?',
        a: 'Flat OCV applies a fixed derate (e.g. ±10%) across all paths, which is excessively pessimistic. Advanced OCV (AOCV) scales derate based on path logic depth and physical wire distance. Parametric OCV (POCV) models variation statistically as a Gaussian distribution (μ ± 3σ) per cell, avoiding worst-case stacking.'
      },
      {
        q: 'What is temperature inversion in deep submicron technology?',
        a: 'At older nodes (>65nm), higher temperature always made cells slower due to reduced carrier mobility. At sub-28nm low voltages, lower temperature increases threshold voltage (Vth), which reduces gate overdrive (VGS - Vth) faster than mobility improves, causing cells to be SLOWER at -40°C than at 125°C!'
      }
    ]
  },
  {
    id: 'so-si',
    trackId: 'signoff',
    number: '5.2',
    title: 'Signal Integrity, Crosstalk & Noise Analysis',
    subtitle: 'Coupling Capacitance, Noise Glitches, Victim Shielding & Slew Degradation',
    level: 'Signoff & Verification',
    duration: '30 min read',
    topics: ['Coupling Cap (Cc)', 'Miller Factor', 'Noise Glitch', 'VDD/VSS Shielding'],
    formula: '\\Delta \\text{Delay} = R_{victim} \\cdot (C_{ground} + k \\cdot C_{coupling}), \\quad k \\in [0, 2]',
    summary: 'At advanced nodes, wires are tall and narrow with aspect ratios > 2, causing lateral coupling capacitance (Cc) between adjacent nets to exceed ground capacitance (Cg), inducing severe crosstalk noise.',
    deepDive: `
      <h4>1. Crosstalk Glitch vs Crosstalk Delta Delay</h4>
      <ul>
        <li><strong>Delta Delay:</strong> Aggressor and victim both switch. If opposite direction, k=2 (delay increases, setup violation); if same direction, k=0 (delay decreases, hold violation).</li>
        <li><strong>Noise Glitch:</strong> Victim net is quiet (static 0 or 1). Fast switching on neighboring aggressors injects charge, producing a voltage spike that can inadvertently clock a flip-flop or reset a circuit.</li>
      </ul>
    `,
    tips: 'Apply net shielding on critical asynchronous resets and analog lines by routing dedicated VSS ground wires on both sides of the victim wire.',
    interviewQA: [
      {
        q: 'How do you fix a crosstalk noise glitch violation on a static victim net?',
        a: '1. Upsize the victim driver (lower driver resistance discharges coupled noise faster); 2. Increase spacing between aggressor and victim; 3. Insert a buffer on the victim net to split wire length; 4. Add VDD/VSS shielding.'
      },
      {
        q: 'Why does a crosstalk hold violation occur when aggressor and victim switch in the same direction?',
        a: 'When both nets transition simultaneously in the same direction, the effective voltage change across the coupling capacitor is zero (k=0), removing coupling load and causing the victim net to transition much faster than anticipated, violating hold time.'
      },
      {
        q: 'What is the receiver noise threshold in signal integrity signoff?',
        a: 'The maximum peak voltage amplitude and pulse width of a noise glitch that a receiver gate can tolerate without propagating the glitch to its output or corrupting stored state.'
      }
    ]
  },
  {
    id: 'so-pv',
    trackId: 'signoff',
    number: '5.3',
    title: 'Physical Verification: DRC, LVS & ERC',
    subtitle: 'Foundry Design Rules, Netlist Extraction, Floating Gates, CMP Fills',
    level: 'Signoff & Verification',
    duration: '35 min read',
    topics: ['Calibre nmDRC', 'LVS Netlist Match', 'ERC Checks', 'CMP Dummy Fill'],
    formula: '\\text{CMP Metal Density} = \\frac{\\text{Total Metal Area in Window}}{\\text{Window Area}} \\in [20\\%, 80\\%]',
    summary: 'Physical verification guarantees that the layout geometries comply strictly with foundry fabrication design rules (DRC) and that the extracted layout matches the golden gate netlist (LVS).',
    deepDive: `
      <h4>1. Design Rule Check (DRC) Violations</h4>
      <ul>
        <li><strong>Width & Spacing:</strong> Metal wire narrower than lithography resolution or closer than dielectric breakdown limits.</li>
        <li><strong>Via Enclosure & End-of-Line (EOL):</strong> Metal overhang required around via cuts to tolerate overlay misalignment.</li>
        <li><strong>Metal Density Rules:</strong> Minimum and maximum metal density within moving windows to prevent dishing or erosion during Chemical-Mechanical Polishing (CMP).</li>
      </ul>
    `,
    tips: 'Always run LVS immediately after power routing to catch power shorts before wasting hours running detailed signal routing.',
    interviewQA: [
      {
        q: 'What is the difference between a Short and an Open in LVS verification?',
        a: 'An Open occurs when two pins that should be connected in the schematic are physically disconnected in layout. A Short occurs when two distinct electrical nets (e.g. VDD and a signal net) physically touch in layout, creating an unintended connection.'
      },
      {
        q: 'What is an Electrical Rule Check (ERC) and what does it detect that DRC misses?',
        a: 'DRC checks purely geometric shapes. ERC verifies electrical connectivity rules: detecting floating MOS gates, un-tapped wells, substrate bias errors, and cross-power domain level-shifter omissions.'
      },
      {
        q: 'Why do foundries require dummy metal fill insertion, and how is timing closure preserved?',
        a: 'During CMP, uneven metal density causes soft oxide erosion and metal dishing, producing surface non-planarity that defocuses lithography. Dummy metal fill balances density. Signoff extraction tools re-extract parasitics with dummy fill to confirm timing closure.'
      }
    ]
  },
  {
    id: 'so-em',
    trackId: 'signoff',
    number: '5.4',
    title: 'Electromigration & Voltus Power Integrity Signoff',
    subtitle: 'Black\'s Equation, Jmax Current Limits, Void Nucleation, VCD Activity',
    level: 'Signoff & Reliability',
    duration: '30 min read',
    topics: ['Electromigration (EM)', 'Black\'s Equation', 'Voltus Rail Analysis', 'Power Grid Views (PGV)'],
    formula: 'MTTF = A \\cdot J^{-n} \\cdot \\exp\\left(\\frac{E_a}{k \\cdot T}\\right), \\quad n \\approx 2',
    summary: 'Electromigration is the gradual transport of metal atoms caused by the momentum transfer of conducting electrons ("electron wind"). Over time, EM creates voids (open circuits) and hillocks (short circuits).',
    deepDive: `
      <h4>1. Current Density Limits (Jmax)</h4>
      <p>Foundry rule decks specify three distinct current limits for every metal layer:</p>
      <ul>
        <li><code>I_avg</code>: Drives unidirectional atomic drift on DC power/ground straps.</li>
        <li><code>I_rms</code>: Governs Joule heating (I²R thermal heating) on bi-directional signal nets.</li>
        <li><code>I_peak</code>: Protects against sudden mechanical stress in via cuts.</li>
      </ul>
    `,
    tips: 'In Cadence Voltus / Ansys RedHawk, load gate-level simulation VCD activity files from dynamic testbenches to pinpoint true dynamic IR drop hotspots during burst operations.',
    interviewQA: [
      {
        q: 'Explain each term in Black\'s equation for electromigration mean time to failure (MTTF).',
        a: 'A is an empirical material constant; J is current density (I/A); n is the current acceleration exponent (~2 for void nucleation); Ea is activation energy (~0.7–0.9 eV for copper); k is Boltzmann constant; T is absolute temperature in Kelvin.'
      },
      {
        q: 'Why is electromigration much worse in copper vias than in wide planar wires?',
        a: 'Current crowding occurs at right-angle via interfaces where current constricts into a narrow cut, causing localized current density peaks 10x higher than in the planar line, accelerating void formation beneath the via barrier layer.'
      },
      {
        q: 'What is the difference between vector-based and vectorless dynamic power analysis?',
        a: 'Vectorless analysis uses statistical switching probabilities (e.g. default 0.1 toggle rate). Vector-based analysis reads an actual simulation VCD/FSDB activity dump, capturing real-world simultaneous switching clock cycles where dynamic IR drop peaks.'
      }
    ]
  },
  {
    id: 'so-tapeout',
    trackId: 'signoff',
    number: '5.5',
    title: 'Engineering Change Orders (ECO) & Tapeout Signoff',
    subtitle: 'Pre-Mask vs Post-Mask ECOs, Spare Cells, GDSII / OASIS Streaming',
    level: 'Signoff & Verification',
    duration: '30 min read',
    topics: ['Pre-Mask ECO', 'Post-Mask Metal ECO', 'Spare Cells', 'GDSII vs OASIS'],
    formula: '\\text{Post-Mask Mask Cost Savings} = \\text{Reuse Base Masks (M0-M1)} \\implies \\text{Save } \\$2\\text{M–}\\$10\\text{M}',
    summary: 'The final stage before silicon fabrication. Tapeout occurs when all signoff gates (DRC, LVS, ERC, STA, IR, EM) pass with zero waivers or fully documented, approved waivers.',
    deepDive: `
      <h4>1. Pre-Mask vs Post-Mask ECOs</h4>
      <ul>
        <li><strong>Pre-Mask ECO:</strong> Silicon masks have not been written. Standard cells can be moved, resized, or inserted with full freedom across all base and metal layers.</li>
        <li><strong>Post-Mask Metal ECO:</strong> Base silicon layers (active diffusion, wells, poly) are already fabricated in the fab! Fixes must strictly reuse pre-placed "spare cells" by altering only metal and via masks, saving millions in mask tooling costs.</li>
      </ul>
    `,
    tips: 'Pre-place a diverse pool of spare gates (NAND, NOR, DFF, MUX, Inverters) evenly distributed across every row during initial floorplanning to guarantee post-mask ECO readiness.',
    interviewQA: [
      {
        q: 'What are spare cells, and where are they tied in the netlist during normal chip operation?',
        a: 'Spare cells are uncommitted standard cells (inverters, NANDs, flops) scattered across the core during floorplan. Their inputs are safely tied to VDD or VSS using tie-cells so they do not float, and their outputs are left unconnected until modified during a metal-only ECO.'
      },
      {
        q: 'What is the difference between GDSII and OASIS file formats for layout delivery?',
        a: 'GDSII is a legacy 1970s 32-bit format with file size limits and redundant polygon records. OASIS (Open Artwork System Interchange Standard) uses variable-byte integer encoding, geometric repetition compression, and relative offsets, reducing layout stream file sizes by 70–80%.'
      },
      {
        q: 'What is a "tapeout freeze" in an ASIC team schedule?',
        a: 'A freeze milestone after which no new RTL, SDC, or netlist changes are allowed. Only critical, verified ECO fixes addressing silicon-fatal bugs or signoff DRC/STA violations may be committed with engineering management approval.'
      }
    ]
  },

  // --- Track 6: Sub-7nm Nodes: FinFET, GAA & 3D Packaging ---
  {
    id: 'adv-finfet',
    trackId: 'advanced',
    number: '6.1',
    title: 'FinFET, Gate-All-Around (GAA) & 3nm Devices',
    subtitle: '3D Gate Electrostatics, Fin Quantization, Nanosheets & Backside Power',
    level: 'Advanced Sub-7nm',
    duration: '35 min read',
    topics: ['FinFET', 'GAA Nanosheet', 'Fin Quantization', 'Backside Power Delivery (BSPDN)'],
    formula: 'W_{eff,FinFET} = N_{fins} \\cdot (2H_{fin} + W_{fin}) \\quad \\text{and} \\quad W_{eff,GAA} = N_{sheets} \\cdot (2W_{sheet} + 2T_{sheet})',
    summary: 'Below 28nm, planar MOSFETs suffer catastrophic short-channel effects as the drain electric field steals gate control. FinFET and Gate-All-Around (GAA) architectures restore electrostatic gate dominance by wrapping the gate around 3 or 4 sides of the channel.',
    deepDive: `
      <h4>1. Fin Quantization vs Nanosheets</h4>
      <p>In FinFETs, transistor width is discrete (quantized): you can select 1-fin, 2-fin, or 3-fin cells, but cannot choose fractional widths. GAA Multi-Bridge Channel FETs (MBCFET) utilize horizontal nanosheets where width Wsheet can be continuously varied, giving back analog and PPA tuning flexibility.</p>

      <h4>2. Backside Power Delivery Network (BSPDN / PowerVia)</h4>
      <p>In standard chips, power and signal interconnects compete for the same front-side metal layers. Backside power delivery moves all heavy VDD/VSS power meshes to the back of the silicon wafer using Nano-TSVs, liberating front-side metal for signal routing, reducing IR drop by 30%, and shrinking standard cell height by 15%.</p>
    `,
    tips: 'In FinFET and GAA physical design, cell placement must adhere strictly to continuous poly-on-diffusion (CPODE) rules and fin grid alignment.',
    interviewQA: [
      {
        q: 'Why did the semiconductor industry transition from planar MOSFETs to FinFETs at the 22nm/16nm node?',
        a: 'In planar MOSFETs, as gate length shrunk, the drain depletion region encroached under the gate, causing Drain-Induced Barrier Lowering (DIBL), high subthreshold leakage, and punch-through. FinFET raises the channel into a thin 3D vertical fin wrapped by the gate on 3 sides, providing superior electrostatic control and suppressing leakage.'
      },
      {
        q: 'What is Backside Power Delivery (BSPDN / Intel PowerVia / TSMC A16) and what problem does it solve?',
        a: 'BSPDN places the power grid on the back of the wafer, delivering current directly to transistors through through-silicon vias. This eliminates voltage droop from routing power through 15+ front-side metal layers, removes routing congestion, and increases clock frequency by ~6%.'
      },
      {
        q: 'What is self-heating in FinFET and GAA nanosheets?',
        a: 'Because fins and nanosheets are surrounded by low-thermal-conductivity dielectric oxides (SiO2/low-k) rather than bulk silicon, heat generated by high current density cannot dissipate easily. This raises local channel temperature by 15–30°C, accelerating electromigration and NBTI aging.'
      }
    ]
  },
  {
    id: 'adv-litho',
    trackId: 'advanced',
    number: '6.2',
    title: 'Advanced Lithography, Multi-Patterning & EUV',
    subtitle: 'Rayleigh Criterion, 13.5nm EUV, Self-Aligned Quadruple Patterning (SAQP)',
    level: 'Advanced Sub-7nm',
    duration: '30 min read',
    topics: ['Rayleigh Criterion', 'EUV 13.5nm', 'SADP / SAQP', 'Coloring Conflicts'],
    formula: 'R = k_1 \\frac{\\lambda}{NA} \\quad (\\lambda_{ArFi} = 193\\text{nm}, \\; \\lambda_{EUV} = 13.5\\text{nm})',
    summary: 'Optical lithography prints the geometric features of integrated circuits. When feature pitches shrunk below 80nm, single-exposure 193nm immersion lithography reached optical diffraction limits, necessitating multi-patterning and Extreme Ultraviolet (EUV) light.',
    deepDive: `
      <h4>1. Multi-Patterning Techniques (LELE vs SADP)</h4>
      <ul>
        <li><strong>Litho-Etch-Litho-Etch (LELE):</strong> Splits dense features across two masks (Mask A and Mask B). Requires coloring algorithms in PnR tools to avoid odd-cycle loops.</li>
        <li><strong>Self-Aligned Spacer Patterning (SADP / SAQP):</strong> Uses sacrificial mandrels and conformal sidewall oxide spacers to double or quadruple feature pitch using a single critical mask exposure.</li>
      </ul>
    `,
    tips: 'In multi-patterning technologies, routers must comply with coloring rules: adjacent parallel wires on the same layer must be assigned alternating mask colors to prevent short-circuit bridging.',
    interviewQA: [
      {
        q: 'What is a "coloring conflict" in double patterning lithography (LELE)?',
        a: 'When three polygons are positioned such that each is closer to the other two than the single-exposure minimum spacing rule (an odd cycle of 3), the layout cannot be partitioned into two alternating colors (masks). The router must insert jogs or reroute to break the odd cycle.'
      },
      {
        q: 'Why did the transition to EUV lithography simplify physical design rule decks?',
        a: 'Single-exposure EUV (13.5nm wavelength) replaced complex 4-mask SAQP stacks with a single mask exposure down to ~30nm pitch, eliminating mask alignment overlay errors, coloring conflicts, and complex DRC forbidden pitch rules.'
      },
      {
        q: 'What is High-NA EUV lithography?',
        a: 'High-NA EUV increases the numerical aperture from 0.33 NA to 0.55 NA using anamorphic mirrors (magnifying 8x in Y and 4x in X) to enable single-exposure printing for sub-2nm nodes.'
      }
    ]
  },
  {
    id: 'adv-pkg',
    trackId: 'advanced',
    number: '6.3',
    title: '2.5D/3D Chiplets, Interposers & Advanced Packaging',
    subtitle: 'Chiplet Disaggregation, Silicon Interposers, TSV, Hybrid Bonding & UCIe',
    level: 'Advanced Sub-7nm',
    duration: '35 min read',
    topics: ['Chiplets', 'Silicon Interposer', 'Through-Silicon Vias (TSV)', 'Direct Hybrid Bonding', 'UCIe'],
    formula: '\\text{Die Yield } Y = \\left(1 + \\frac{D_0 \\cdot \\text{Area}}{\\alpha}\\right)^{-\\alpha} \\implies 4 \\times 200\\text{mm}^2 \\text{ yields } 2.5\\times \\text{ higher than } 1 \\times 800\\text{mm}^2',
    summary: 'As monolithic silicon dies approach the optical reticle limit (~858 mm²) and wafer costs escalate, the industry has shifted to modular Chiplet architectures connected via high-density 2.5D and 3D advanced packaging.',
    deepDive: `
      <h4>1. Packaging Topologies</h4>
      <ul>
        <li><strong>2.5D Packaging (e.g. TSMC CoWoS, Intel EMIB):</strong> Multiple dies (CPU/GPU cores + High Bandwidth Memory HBM) placed side-by-side on a passive or active silicon interposer with dense micro-bumps (25–50µm pitch).</li>
        <li><strong>3D Die Stacking (e.g. TSMC SoIC, AMD 3D V-Cache):</strong> Logic dies bonded directly on top of base dies using Through-Silicon Vias (TSVs) or direct copper-to-copper hybrid bonding with pitch &lt; 9µm.</li>
      </ul>
    `,
    tips: 'Signoff for 2.5D/3D systems requires multi-physics electro-thermal analysis (Ansys RedHawk-SC Electrothermal) to model heat dissipation between vertically stacked dies.',
    interviewQA: [
      {
        q: 'What is the primary economic and yield motivation for disaggregating a monolithic SoC into chiplets?',
        a: 'Silicon defect density causes manufacturing yield to fall exponentially with die area. Splitting an 800mm² monolithic die into four 200mm² chiplets dramatically increases wafer yield. Furthermore, non-scaling blocks (like IO and analog PHYs) can remain on cheap, mature nodes (e.g. 16nm), while only compute cores use expensive 3nm silicon.'
      },
      {
        q: 'What is the UCIe (Universal Chiplet Interconnect Express) standard?',
        a: 'An open industry standard defining the die-to-die physical layer, protocol stack, and packet formatting (PCIe, CXL, streaming) for interconnecting chiplets across 2D standard packaging and 2.5D advanced packaging with high bandwidth density and ultra-low latency (<2ns).'
      },
      {
        q: 'What is direct copper-to-copper hybrid bonding in 3D ICs?',
        a: 'Instead of using solder micro-bumps, planarized dielectric (SiO2) and copper pads are polished atomically flat via CMP. Molecular bonding fuses the dielectric, and thermal annealing expands and bonds the copper pads directly, enabling interconnect pitch < 1µm and 1000x higher interconnect density than micro-bumps.'
      }
    ]
  }
];

// Application State
const state = {
  allCards: [...FLASHCARDS_DATA],
  filteredCards: [...FLASHCARDS_DATA],
  currentIndex: 0,
  activeCategory: 'All',
  searchQuery: '',
  viewMode: 'studio', // 'studio' | 'grid'
  masteredIds: new Set(JSON.parse(localStorage.getItem('educatevlsi_mastered') || '[]')),
  theme: localStorage.getItem('educatevlsi_theme') || 'dark',
  debugErrors: [...DEBUG_ERRORS],
  debugStage: 'All',
  debugQuery: '',
  activeChecklistTab: 'floorplan',
  checklistChecked: JSON.parse(localStorage.getItem('educatevlsi_checklists') || '{}'),
  activeLearnTrack: 'ece',
  learnSearchQuery: '',
  studiedLessonIds: new Set(JSON.parse(localStorage.getItem('educatevlsi_studied_lessons') || '[]')),
  activeStudyCategory: 'all',
  studySearchQuery: ''
};

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initLearnAcademy();
  initSiliconStudio();
  initStudyVault();
  initFlashcardStudio();
  initCategoryFilters();
  initSearchAndModes();
  initRoadmapInteractions();
  initCalculators();
  initDebugCenter();
  initTclGenerator();
  initChecklists();
  initTerminalCopy();
  initKeyboardShortcuts();
  updateProgressTracker();
});

/* ==========================================================================
   Navigation & Dropdown Management
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('primaryNav');
  const dropdown = document.getElementById('navDropdown');
  const dropdownBtn = document.getElementById('navDropdownBtn');
  const mobileBackdrop = document.getElementById('mobileNavBackdrop');

  function closeMobileNav() {
    if (navMenu) navMenu.classList.remove('open');
    if (mobileBackdrop) mobileBackdrop.classList.remove('active');
    document.body.classList.remove('nav-drawer-open');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    if (dropdown) dropdown.classList.remove('open');
    if (dropdownBtn) dropdownBtn.setAttribute('aria-expanded', 'false');
  }

  // Mobile drawer toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      if (mobileBackdrop) mobileBackdrop.classList.toggle('active', isOpen);
      document.body.classList.toggle('nav-drawer-open', isOpen);
    });

    // Close mobile menu on nav link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => {
      closeMobileNav();
    });
  }

  // Dropdown click toggle (touch and click support)
  if (dropdown && dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
      const isExpanded = dropdown.classList.contains('open');
      dropdownBtn.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Close menus when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && !navMenu.contains(e.target) && mobileToggle && !mobileToggle.contains(e.target)) {
      closeMobileNav();
    }
    if (dropdown && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      if (dropdownBtn) dropdownBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menus on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileNav();
    }
  });
}

/* ==========================================================================
   Theme Management
   ========================================================================== */
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeToggle = document.getElementById('themeToggleBtn');
  if (themeToggle) {
    updateThemeIcon(themeToggle, state.theme);
    themeToggle.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('educatevlsi_theme', state.theme);
      updateThemeIcon(themeToggle, state.theme);
      showToast(`Switched to ${state.theme} mode`);
    });
  }
}

function updateThemeIcon(btn, theme) {
  btn.innerHTML = theme === 'dark' 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
}

/* ==========================================================================
   Flashcards Engine
   ========================================================================== */
function initFlashcardStudio() {
  renderStudioCard();
  renderGridView();

  const card3d = document.getElementById('card3dWrap');
  if (card3d) {
    card3d.addEventListener('click', () => {
      card3d.classList.toggle('flipped');
    });
  }

  const prevBtn = document.getElementById('prevCardBtn');
  const nextBtn = document.getElementById('nextCardBtn');
  const flipBtn = document.getElementById('flipCardActionBtn');
  const shuffleBtn = document.getElementById('shuffleCardBtn');
  const masterBtn = document.getElementById('toggleMasteryBtn');

  if (prevBtn) prevBtn.addEventListener('click', prevCard);
  if (nextBtn) nextBtn.addEventListener('click', nextCard);
  if (flipBtn) flipBtn.addEventListener('click', () => card3d?.classList.toggle('flipped'));
  if (shuffleBtn) shuffleBtn.addEventListener('click', shuffleCards);
  if (masterBtn) masterBtn.addEventListener('click', toggleMasteryCurrent);
}

function renderStudioCard() {
  const card = state.filteredCards[state.currentIndex];
  const card3d = document.getElementById('card3dWrap');
  if (!card) {
    const qEl = document.getElementById('cardQuestionText');
    if (qEl) qEl.textContent = 'No flashcards match your filter criteria.';
    return;
  }

  if (card3d && card3d.classList.contains('flipped')) {
    card3d.classList.remove('flipped');
  }

  const counterEl = document.getElementById('cardIndexCounter');
  const catBadgeFront = document.getElementById('cardCatBadgeFront');
  const diffBadgeFront = document.getElementById('cardDiffBadgeFront');
  const catBadgeBack = document.getElementById('cardCatBadgeBack');
  const diffBadgeBack = document.getElementById('cardDiffBadgeBack');
  const qText = document.getElementById('cardQuestionText');
  const aText = document.getElementById('cardAnswerText');
  const masterBtn = document.getElementById('toggleMasteryBtn');
  const prevBtn = document.getElementById('prevCardBtn');
  const nextBtn = document.getElementById('nextCardBtn');

  if (counterEl) {
    counterEl.textContent = `${state.currentIndex + 1} of ${state.filteredCards.length}`;
  }

  if (catBadgeFront) catBadgeFront.textContent = card.category;
  if (diffBadgeFront) diffBadgeFront.textContent = card.difficulty;
  if (catBadgeBack) catBadgeBack.textContent = card.category;
  if (diffBadgeBack) diffBadgeBack.textContent = card.difficulty;

  if (qText) qText.textContent = card.question;
  if (aText) aText.textContent = card.answer;

  const isMastered = state.masteredIds.has(card.id);
  if (masterBtn) {
    if (isMastered) {
      masterBtn.classList.add('mastered');
      masterBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Mastered`;
    } else {
      masterBtn.classList.remove('mastered');
      masterBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg> Mark as Mastered`;
    }
  }

  if (prevBtn) prevBtn.disabled = state.currentIndex === 0;
  if (nextBtn) nextBtn.disabled = state.currentIndex === state.filteredCards.length - 1;
}

function nextCard() {
  if (state.currentIndex < state.filteredCards.length - 1) {
    state.currentIndex++;
    renderStudioCard();
  }
}

function prevCard() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderStudioCard();
  }
}

function shuffleCards() {
  for (let i = state.filteredCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.filteredCards[i], state.filteredCards[j]] = [state.filteredCards[j], state.filteredCards[i]];
  }
  state.currentIndex = 0;
  renderStudioCard();
  showToast('Cards shuffled randomly!');
}

function toggleMasteryCurrent() {
  const card = state.filteredCards[state.currentIndex];
  if (!card) return;

  if (state.masteredIds.has(card.id)) {
    state.masteredIds.delete(card.id);
    showToast(`Card #${card.id} marked for review`);
  } else {
    state.masteredIds.add(card.id);
    showToast(`Card #${card.id} marked as Mastered! 🎉`);
  }

  localStorage.setItem('educatevlsi_mastered', JSON.stringify([...state.masteredIds]));
  renderStudioCard();
  updateProgressTracker();
  renderGridView();
}

function updateProgressTracker() {
  const total = state.allCards.length;
  const mastered = state.masteredIds.size;
  const pct = Math.round((mastered / total) * 100);

  const statVal = document.getElementById('statMasteredPercent');
  const statCount = document.getElementById('statMasteredCount');
  const heroBadge = document.getElementById('heroMasteryStat');

  if (statVal) statVal.textContent = `${pct}%`;
  if (statCount) statCount.textContent = `${mastered} / ${total} Mastered`;
  if (heroBadge) heroBadge.textContent = `${mastered}/${total} Mastered`;
}

function initCategoryFilters() {
  const container = document.getElementById('categoryChipsContainer');
  if (!container) return;

  const categories = [
    'All',
    'ASIC Flow & Design Files',
    'Floorplanning & Power Planning',
    'Placement & Optimization',
    'Static Timing Analysis (STA)',
    'Signal Integrity & Reliability',
    'Clock Tree Synthesis (CTS)',
    'Routing & Physical Verification',
    'EDA Tools & ICC2 Commands'
  ];

  container.innerHTML = categories.map(cat => `
    <button class="filter-chip ${cat === 'All' ? 'active' : ''}" data-cat="${cat}">
      ${cat}
    </button>
  `).join('');

  container.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;

    container.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    state.activeCategory = chip.dataset.cat;
    applyFilter();
  });
}

function initSearchAndModes() {
  const searchInput = document.getElementById('flashcardSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      applyFilter();
    });
  }

  const modeStudioBtn = document.getElementById('modeStudioBtn');
  const modeGridBtn = document.getElementById('modeGridBtn');
  const studioWrap = document.getElementById('studioModeWrap');
  const gridWrap = document.getElementById('gridModeWrap');

  if (modeStudioBtn && modeGridBtn) {
    modeStudioBtn.addEventListener('click', () => {
      modeStudioBtn.classList.add('active');
      modeGridBtn.classList.remove('active');
      state.viewMode = 'studio';
      studioWrap.style.display = 'block';
      gridWrap.style.display = 'none';
    });

    modeGridBtn.addEventListener('click', () => {
      modeGridBtn.classList.add('active');
      modeStudioBtn.classList.remove('active');
      state.viewMode = 'grid';
      studioWrap.style.display = 'none';
      gridWrap.style.display = 'block';
      renderGridView();
    });
  }
}

function applyFilter() {
  state.filteredCards = state.allCards.filter(card => {
    const matchesCat = state.activeCategory === 'All' || card.category === state.activeCategory;
    const matchesSearch = !state.searchQuery || 
      card.question.toLowerCase().includes(state.searchQuery) || 
      card.answer.toLowerCase().includes(state.searchQuery) ||
      card.category.toLowerCase().includes(state.searchQuery) ||
      card.tag.toLowerCase().includes(state.searchQuery);
    return matchesCat && matchesSearch;
  });

  state.currentIndex = 0;
  renderStudioCard();
  renderGridView();
}

function renderGridView() {
  const grid = document.getElementById('flashcardsGrid');
  if (!grid) return;

  if (state.filteredCards.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
      No flashcards match "${state.searchQuery || state.activeCategory}". Try clearing your filters.
    </div>`;
    return;
  }

  grid.innerHTML = state.filteredCards.map(c => {
    const isMastered = state.masteredIds.has(c.id);
    return `
      <div class="grid-card-item" id="grid-card-${c.id}">
        <div>
          <div class="grid-card-header">
            <span class="badge badge-cyan">${c.tag}</span>
            <span class="badge ${isMastered ? 'badge-emerald' : 'badge-purple'}">
              ${isMastered ? 'Mastered' : c.difficulty}
            </span>
          </div>
          <h3 class="grid-card-question" style="margin-top: 1rem;">${highlightMatch(c.question, state.searchQuery)}</h3>
        </div>
        <div>
          <div class="grid-card-answer">
            ${highlightMatch(c.answer, state.searchQuery)}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.85rem; font-size: 0.8rem; color: var(--text-muted);">
            <span>Card #${c.id}</span>
            <button onclick="toggleCardMastery(${c.id})" style="color: ${isMastered ? 'var(--accent-emerald)' : 'var(--text-muted)'}; font-weight: 600;">
              ${isMastered ? '✓ Mastered' : '+ Mark Mastered'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.toggleCardMastery = function(id) {
  if (state.masteredIds.has(id)) {
    state.masteredIds.delete(id);
    showToast(`Card #${id} unmarked`);
  } else {
    state.masteredIds.add(id);
    showToast(`Card #${id} marked as Mastered! 🎉`);
  }
  localStorage.setItem('educatevlsi_mastered', JSON.stringify([...state.masteredIds]));
  renderGridView();
  renderStudioCard();
  updateProgressTracker();
};

function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark style="background: rgba(0, 242, 254, 0.3); color: #fff; padding: 0 2px; border-radius: 2px;">$1</mark>');
}

/* ==========================================================================
   Roadmap Step Expansion
   ========================================================================== */
function initRoadmapInteractions() {
  const steps = document.querySelectorAll('.step-card');
  steps.forEach(card => {
    card.addEventListener('click', () => {
      const details = card.querySelector('.step-details-grid');
      if (details) {
        const isHidden = window.getComputedStyle(details).display === 'none';
        details.style.display = isHidden ? 'grid' : 'none';
      }
    });
  });
}

/* ==========================================================================
   Interactive Physical Design Calculators Engine
   ========================================================================== */
function initCalculators() {
  // Bind live calculations
  bindCalc('calcDynPower', runDynPower);
  bindCalc('calcUtilization', runUtilization);
  bindCalc('calcSetupSlack', runSetupSlack);
  bindCalc('calcHoldSlack', runHoldSlack);
  bindCalc('calcClockSkew', runClockSkew);
  bindCalc('calcElmore', runElmore);
  bindCalc('calcEM', runEM);
  bindCalc('calcIRDrop', runIRDrop);

  // Toggle Insight Collapsibles
  document.querySelectorAll('.calc-toggle-insight-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      if (body) {
        body.classList.toggle('show');
        btn.querySelector('span').textContent = body.classList.contains('show') ? 'Hide Insight ▲' : 'Interview & Notes ▼';
      }
    });
  });

  // Run initial calculations
  runDynPower();
  runUtilization();
  runSetupSlack();
  runHoldSlack();
  runClockSkew();
  runElmore();
  runEM();
  runIRDrop();
  runClockUncert();
  runWireRC();
  runDecap();
  runCrosstalk();
}

function bindCalc(containerId, fn) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', fn);
    input.addEventListener('change', fn);
  });
}

// 1. Dynamic Power: P = alpha * C * V^2 * f
function runDynPower() {
  const alpha = parseFloat(document.getElementById('dyn_alpha')?.value || 0.1);
  const c_pf = parseFloat(document.getElementById('dyn_c')?.value || 250); // in pF
  const v = parseFloat(document.getElementById('dyn_v')?.value || 0.9);   // in Volts
  const f_mhz = parseFloat(document.getElementById('dyn_f')?.value || 1000); // in MHz

  // P = alpha * (C * 1e-12) * V^2 * (f * 1e6) * 1e3 (to mW)
  // Simplified: alpha * C_pf * V^2 * f_mhz * 1e-3 mW
  const p_mw = alpha * c_pf * (v * v) * f_mhz * 1e-3;

  const resEl = document.getElementById('res_dyn_power');
  if (resEl) resEl.textContent = `${p_mw.toFixed(2)} mW`;
}

// 2. Core Utilization: Util = (CellArea / CoreArea) * 100
function runUtilization() {
  const cellArea = parseFloat(document.getElementById('util_cells')?.value || 650000); // um2
  const coreArea = parseFloat(document.getElementById('util_core')?.value || 1000000); // um2

  const util = coreArea > 0 ? (cellArea / coreArea) * 100 : 0;
  const resEl = document.getElementById('res_util_val');
  const statusEl = document.getElementById('res_util_status');

  if (resEl) resEl.textContent = `${util.toFixed(1)}%`;
  if (statusEl) {
    if (util < 50) {
      statusEl.className = 'calc-result-status calc-status-warn';
      statusEl.textContent = 'Under-utilized';
    } else if (util <= 75) {
      statusEl.className = 'calc-result-status calc-status-pass';
      statusEl.textContent = 'Optimal (60-75%)';
    } else {
      statusEl.className = 'calc-result-status calc-status-fail';
      statusEl.textContent = 'High Congestion Risk';
    }
  }
}

// 3. Setup Slack: Required - Arrival
// Arrival = LaunchLatency + Clk2Q + CombDelay
// Required = T + CaptureLatency - Setup - Uncertainty
function runSetupSlack() {
  const t = parseFloat(document.getElementById('setup_t')?.value || 1.0); // ns
  const launchLat = parseFloat(document.getElementById('setup_launch')?.value || 0.25);
  const captureLat = parseFloat(document.getElementById('setup_capture')?.value || 0.28);
  const clk2q = parseFloat(document.getElementById('setup_clk2q')?.value || 0.12);
  const comb = parseFloat(document.getElementById('setup_comb')?.value || 0.65);
  const setupTime = parseFloat(document.getElementById('setup_time')?.value || 0.08);
  const uncert = parseFloat(document.getElementById('setup_uncert')?.value || 0.05);

  const arrival = launchLat + clk2q + comb;
  const required = t + captureLat - setupTime - uncert;
  const slack = required - arrival;

  const resEl = document.getElementById('res_setup_slack');
  const statusEl = document.getElementById('res_setup_status');

  if (resEl) resEl.textContent = `${slack >= 0 ? '+' : ''}${slack.toFixed(3)} ns`;
  if (statusEl) {
    if (slack >= 0) {
      statusEl.className = 'calc-result-status calc-status-pass';
      statusEl.textContent = 'MET (PASS)';
    } else {
      statusEl.className = 'calc-result-status calc-status-fail';
      statusEl.textContent = 'VIOLATED (FAIL)';
    }
  }
}

// 4. Hold Slack: Arrival - Required
// Arrival = LaunchLat + Clk2Q + MinComb
// Required = CaptureLat + HoldTime + Uncertainty
function runHoldSlack() {
  const launchLat = parseFloat(document.getElementById('hold_launch')?.value || 0.25);
  const captureLat = parseFloat(document.getElementById('hold_capture')?.value || 0.27);
  const clk2q = parseFloat(document.getElementById('hold_clk2q')?.value || 0.09);
  const minComb = parseFloat(document.getElementById('hold_comb')?.value || 0.08);
  const holdTime = parseFloat(document.getElementById('hold_time')?.value || 0.04);
  const uncert = parseFloat(document.getElementById('hold_uncert')?.value || 0.03);

  const arrival = launchLat + clk2q + minComb;
  const required = captureLat + holdTime + uncert;
  const slack = arrival - required;

  const resEl = document.getElementById('res_hold_slack');
  const statusEl = document.getElementById('res_hold_status');

  if (resEl) resEl.textContent = `${slack >= 0 ? '+' : ''}${slack.toFixed(3)} ns`;
  if (statusEl) {
    if (slack >= 0) {
      statusEl.className = 'calc-result-status calc-status-pass';
      statusEl.textContent = 'MET (PASS)';
    } else {
      statusEl.className = 'calc-result-status calc-status-fail';
      statusEl.textContent = 'VIOLATED (FAIL)';
    }
  }
}

// 5. Clock Skew: T_capture - T_launch
function runClockSkew() {
  const tCap = parseFloat(document.getElementById('skew_cap')?.value || 0.35); // ns
  const tLaunch = parseFloat(document.getElementById('skew_launch')?.value || 0.32); // ns

  const skew_ps = (tCap - tLaunch) * 1000;
  const resEl = document.getElementById('res_skew_val');
  const statusEl = document.getElementById('res_skew_status');

  if (resEl) resEl.textContent = `${skew_ps >= 0 ? '+' : ''}${skew_ps.toFixed(1)} ps`;
  if (statusEl) {
    if (skew_ps > 0) {
      statusEl.className = 'calc-result-status calc-status-pass';
      statusEl.textContent = 'Positive Skew (Helps Setup)';
    } else if (skew_ps < 0) {
      statusEl.className = 'calc-result-status calc-status-warn';
      statusEl.textContent = 'Negative Skew (Helps Hold)';
    } else {
      statusEl.className = 'calc-result-status calc-status-pass';
      statusEl.textContent = 'Balanced Zero Skew';
    }
  }
}

// 6. Elmore Delay: tau = R_total * C_total (or multi-segment sum)
function runElmore() {
  const r_ohm = parseFloat(document.getElementById('elmore_r')?.value || 120);  // ohms
  const c_ff = parseFloat(document.getElementById('elmore_c')?.value || 35);    // fF

  // Delay in ps = 0.69 * R * C
  const delay_ps = 0.69 * r_ohm * c_ff * 1e-3;
  const resEl = document.getElementById('res_elmore_val');
  if (resEl) resEl.textContent = `${delay_ps.toFixed(2)} ps`;
}

// 7. Electromigration (EM): J = I / Area
function runEM() {
  const i_ma = parseFloat(document.getElementById('em_i')?.value || 2.4); // mA
  const width_um = parseFloat(document.getElementById('em_w')?.value || 0.14); // um
  const thick_um = parseFloat(document.getElementById('em_t')?.value || 0.18); // um
  const j_limit = parseFloat(document.getElementById('em_limit')?.value || 15.0); // mA/um2

  const area = width_um * thick_um;
  const j_curr = area > 0 ? i_ma / area : 0;

  const resEl = document.getElementById('res_em_val');
  const statusEl = document.getElementById('res_em_status');

  if (resEl) resEl.textContent = `${j_curr.toFixed(2)} mA/µm²`;
  if (statusEl) {
    if (j_curr <= j_limit) {
      statusEl.className = 'calc-result-status calc-status-pass';
      statusEl.textContent = 'SAFE (< Jmax)';
    } else {
      statusEl.className = 'calc-result-status calc-status-fail';
      statusEl.textContent = 'EM VIOLATION (Open/Short Risk)';
    }
  }
}

// 8. Static IR Drop: V_drop = I * R
function runIRDrop() {
  const i_curr = parseFloat(document.getElementById('ir_i')?.value || 45); // mA
  const r_mesh = parseFloat(document.getElementById('ir_r')?.value || 0.8); // Ohms
  const v_supply = parseFloat(document.getElementById('ir_vdd')?.value || 0.9); // Volts

  const drop_mv = i_curr * r_mesh;
  const drop_pct = (drop_mv / (v_supply * 1000)) * 100;

  const resEl = document.getElementById('res_ir_val');
  const statusEl = document.getElementById('res_ir_status');

  if (resEl) resEl.textContent = `${drop_mv.toFixed(1)} mV (${drop_pct.toFixed(1)}%)`;
  if (statusEl) {
    if (drop_pct <= 5.0) {
      statusEl.className = 'calc-result-status calc-status-pass';
      statusEl.textContent = 'PASS (< 5% VDD)';
    } else if (drop_pct <= 10.0) {
      statusEl.className = 'calc-result-status calc-status-warn';
      statusEl.textContent = 'WARN (5-10% VDD)';
    } else {
      statusEl.className = 'calc-result-status calc-status-fail';
      statusEl.textContent = 'FAIL (> 10% VDD)';
    }
  }
}

// 9. Clock Uncertainty Budget: Uncertainty = Jitter + Skew + OCV + Margin
function runClockUncert() {
  const jitter = parseFloat(document.getElementById('uncert_jitter')?.value || 25); // ps
  const skew = parseFloat(document.getElementById('uncert_skew')?.value || 50);     // ps
  const ocv = parseFloat(document.getElementById('uncert_ocv')?.value || 40);       // ps
  const margin = parseFloat(document.getElementById('uncert_margin')?.value || 15); // ps
  const period = parseFloat(document.getElementById('uncert_period')?.value || 1000); // ps (1ns = 1GHz)

  const total = jitter + skew + ocv + margin;
  const pct = period > 0 ? (total / period) * 100 : 0;

  const resEl = document.getElementById('res_uncert_val');
  const statusEl = document.getElementById('res_uncert_status');

  if (resEl) resEl.textContent = `${total.toFixed(1)} ps (${pct.toFixed(1)}% of T)`;
  if (statusEl) {
    if (pct <= 15) {
      statusEl.className = 'calc-result-status calc-status-pass';
      statusEl.textContent = 'ROBUST (< 15% T)';
    } else if (pct <= 25) {
      statusEl.className = 'calc-result-status calc-status-warn';
      statusEl.textContent = 'TIGHT (15-25% T)';
    } else {
      statusEl.className = 'calc-result-status calc-status-fail';
      statusEl.textContent = 'HIGH RISK (> 25% T)';
    }
  }
}

// 10. Wire Resistance & RC Time Constant: R = rho*L/(W*T), tau = 0.69*R*C
function runWireRC() {
  const l_um = parseFloat(document.getElementById('wire_l')?.value || 500); // um
  const w_um = parseFloat(document.getElementById('wire_w')?.value || 0.1);  // um
  const t_um = parseFloat(document.getElementById('wire_t')?.value || 0.15); // um
  const rho = parseFloat(document.getElementById('wire_rho')?.value || 0.022); // Ohm*um (Copper)
  const c_ff = parseFloat(document.getElementById('wire_c')?.value || 75); // fF

  const area = w_um * t_um;
  const r_ohm = area > 0 ? rho * (l_um / area) : 0;
  const tau_ps = 0.69 * r_ohm * c_ff * 1e-3;

  const resEl = document.getElementById('res_wire_val');
  const statusEl = document.getElementById('res_wire_status');

  if (resEl) resEl.textContent = `R: ${r_ohm.toFixed(1)} Ω | τ: ${tau_ps.toFixed(2)} ps`;
  if (statusEl) {
    if (tau_ps < 20) {
      statusEl.className = 'calc-result-status calc-status-pass';
      statusEl.textContent = 'FAST INTERCONNECT';
    } else if (tau_ps < 60) {
      statusEl.className = 'calc-result-status calc-status-warn';
      statusEl.textContent = 'MODERATE DELAY';
    } else {
      statusEl.className = 'calc-result-status calc-status-fail';
      statusEl.textContent = 'BUFFER REQD (Long Wire)';
    }
  }
}

// 11. Decoupling Capacitor Sizing: C_decap = (delta_I * delta_t) / delta_V
function runDecap() {
  const delta_i_ma = parseFloat(document.getElementById('decap_di')?.value || 120); // mA
  const delta_t_ps = parseFloat(document.getElementById('decap_dt')?.value || 150); // ps
  const delta_v_mv = parseFloat(document.getElementById('decap_dv')?.value || 30);  // mV allowable dip

  const c_decap_pf = delta_v_mv > 0 ? (delta_i_ma * delta_t_ps) / (delta_v_mv * 1000) : 0;

  const resEl = document.getElementById('res_decap_val');
  const statusEl = document.getElementById('res_decap_status');

  if (resEl) resEl.textContent = `${c_decap_pf.toFixed(2)} pF Decap`;
  if (statusEl) {
    statusEl.className = 'calc-result-status calc-status-pass';
    statusEl.textContent = 'Charge Reservoir Sized';
  }
}

// 12. Crosstalk Coupling Delay: tau = R_drvr * (C_ground + k * C_coupling)
function runCrosstalk() {
  const r_drvr = parseFloat(document.getElementById('xtalk_r')?.value || 350); // Ohms
  const c_gnd = parseFloat(document.getElementById('xtalk_cg')?.value || 40);   // fF
  const c_coup = parseFloat(document.getElementById('xtalk_cc')?.value || 25);  // fF
  const k_factor = parseFloat(document.getElementById('xtalk_k')?.value || 2.0); // 0 (same dir), 1 (quiet), 2 (opp dir)

  const eff_cap = c_gnd + (k_factor * c_coup);
  const total_delay_ps = r_drvr * eff_cap * 1e-3;
  const delta_delay_ps = r_drvr * (k_factor * c_coup) * 1e-3;

  const resEl = document.getElementById('res_xtalk_val');
  const statusEl = document.getElementById('res_xtalk_status');

  if (resEl) resEl.textContent = `Delay: ${total_delay_ps.toFixed(2)} ps (+${delta_delay_ps.toFixed(2)} ps SI)`;
  if (statusEl) {
    if (k_factor === 2.0) {
      statusEl.className = 'calc-result-status calc-status-fail';
      statusEl.textContent = 'WORST-CASE SWITCH (k=2)';
    } else if (k_factor === 1.0) {
      statusEl.className = 'calc-result-status calc-status-warn';
      statusEl.textContent = 'QUIET VICTIM (k=1)';
    } else {
      statusEl.className = 'calc-result-status calc-status-pass';
      statusEl.textContent = 'SAME DIRECTION (k=0)';
    }
  }
}

/* ==========================================================================
   Debug Center & Error Lookup Engine
   ========================================================================== */
function initDebugCenter() {
  const stagePills = document.getElementById('debugStagePills');
  const searchInput = document.getElementById('debugSearchInput');

  if (stagePills) {
    const stages = ['All', 'Import', 'Floorplan', 'Placement', 'CTS', 'Routing', 'STA', 'EM/IR', 'DRC/LVS'];
    stagePills.innerHTML = stages.map(st => `
      <button class="filter-chip ${st === 'All' ? 'active' : ''}" data-stage="${st}">
        ${st}
      </button>
    `).join('');

    stagePills.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      stagePills.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.debugStage = chip.dataset.stage;
      renderDebugErrors();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.debugQuery = e.target.value.toLowerCase().trim();
      renderDebugErrors();
    });
  }

  renderDebugErrors();
}

function renderDebugErrors() {
  const container = document.getElementById('debugErrorsContainer');
  if (!container) return;

  const filtered = state.debugErrors.filter(err => {
    const matchesStage = state.debugStage === 'All' || err.stage === state.debugStage;
    const matchesQuery = !state.debugQuery || 
      err.title.toLowerCase().includes(state.debugQuery) ||
      err.snippet.toLowerCase().includes(state.debugQuery) ||
      err.cause.toLowerCase().includes(state.debugQuery) ||
      err.tool.toLowerCase().includes(state.debugQuery);
    return matchesStage && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2.5rem; color: var(--text-muted);">
      No error signatures match your search. Try resetting filters.
    </div>`;
    return;
  }

  container.innerHTML = filtered.map(err => `
    <div class="debug-error-card">
      <div>
        <div class="debug-card-top">
          <span class="badge badge-cyan">${err.stage}</span>
          <span class="badge badge-purple">${err.tool}</span>
        </div>
        <h3 class="debug-error-title" style="margin-top: 0.75rem;">${err.title}</h3>
        <div class="error-snippet-box" style="margin-top: 0.75rem;">
          ${err.snippet}
        </div>
      </div>
      <div>
        <p class="debug-root-cause">
          <strong>Root Cause:</strong> ${err.cause}
        </p>
        <div class="debug-fix-block" style="margin-top: 1rem;">
          <div class="debug-cmd-code">${err.cmd}</div>
          <button class="btn-copy-cmd" data-cmd="${escapeQuotes(err.cmd)}" title="Copy Command">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <span>Copy</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-bind copy buttons
  initTerminalCopy();
}

function escapeQuotes(str) {
  return str.replace(/"/g, '&quot;');
}

/* ==========================================================================
   Interactive TCL Automation Script Generator (EducateVLSI Core Specialty)
   ========================================================================== */
function initTclGenerator() {
  const typeSelect = document.getElementById('tclTemplateSelect');
  const genBtn = document.getElementById('genTclBtn');
  const copyBtn = document.getElementById('copyTclBtn');
  const downloadBtn = document.getElementById('downloadTclBtn');

  if (typeSelect) {
    typeSelect.addEventListener('change', updateTclParamsUI);
  }

  if (genBtn) genBtn.addEventListener('click', generateTclScript);
  if (copyBtn) copyBtn.addEventListener('click', copyTclScript);
  if (downloadBtn) downloadBtn.addEventListener('click', downloadTclScript);

  updateTclParamsUI();
  generateTclScript();
}

function updateTclParamsUI() {
  const type = document.getElementById('tclTemplateSelect')?.value || 'ndr';
  const paramGroup = document.getElementById('tclParamFields');
  if (!paramGroup) return;

  if (type === 'ndr') {
    paramGroup.innerHTML = `
      <div class="calc-field-wrap">
        <label class="calc-label">Rule Name:</label>
        <input type="text" id="tcl_ndr_name" class="calc-input" value="CLK_2W2S_RULE">
      </div>
      <div class="calc-field-wrap">
        <label class="calc-label">Target Metal Layers:</label>
        <input type="text" id="tcl_ndr_layers" class="calc-input" value="M4 M5 M6">
      </div>
      <div class="calc-field-wrap">
        <label class="calc-label">Width & Spacing Multiplier:</label>
        <input type="number" id="tcl_ndr_mult" class="calc-input" value="2" min="1" max="4">
      </div>
    `;
  } else if (type === 'halo') {
    paramGroup.innerHTML = `
      <div class="calc-field-wrap">
        <label class="calc-label">Keepout Margin (Left Bottom Right Top) [µm]:</label>
        <input type="text" id="tcl_halo_dist" class="calc-input" value="15 15 15 15">
      </div>
      <div class="calc-field-wrap">
        <label class="calc-label">Target Macro Filter:</label>
        <input type="text" id="tcl_halo_filter" class="calc-input" value="is_hard_macro==true">
      </div>
    `;
  } else if (type === 'eco') {
    paramGroup.innerHTML = `
      <div class="calc-field-wrap">
        <label class="calc-label">Slack Margin Threshold [ns]:</label>
        <input type="text" id="tcl_eco_slack" class="calc-input" value="-0.15">
      </div>
      <div class="calc-field-wrap">
        <label class="calc-label">Target Fast Vt Prefix:</label>
        <input type="text" id="tcl_eco_vt" class="calc-input" value="LVT">
      </div>
      <div class="calc-field-wrap">
        <label class="calc-label">Upsize Multiplier Step:</label>
        <input type="text" id="tcl_eco_size" class="calc-input" value="_X2 -> _X4">
      </div>
    `;
  } else if (type === 'pdn') {
    paramGroup.innerHTML = `
      <div class="calc-field-wrap">
        <label class="calc-label">Power & Ground Nets:</label>
        <input type="text" id="tcl_pdn_nets" class="calc-input" value="VDD VSS">
      </div>
      <div class="calc-field-wrap">
        <label class="calc-label">Top Mesh Layers:</label>
        <input type="text" id="tcl_pdn_layers" class="calc-input" value="M7 M8">
      </div>
      <div class="calc-field-wrap">
        <label class="calc-label">Stripe Width & Pitch [µm]:</label>
        <input type="text" id="tcl_pdn_dim" class="calc-input" value="Width: 2.4, Pitch: 24.0">
      </div>
    `;
  }

  paramGroup.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', generateTclScript);
  });
}

function generateTclScript() {
  const type = document.getElementById('tclTemplateSelect')?.value || 'ndr';
  const codeBox = document.getElementById('tclOutputCode');
  if (!codeBox) return;

  let script = '';

  if (type === 'ndr') {
    const name = document.getElementById('tcl_ndr_name')?.value || 'CLK_2W2S_RULE';
    const layers = document.getElementById('tcl_ndr_layers')?.value || 'M4 M5 M6';
    const mult = document.getElementById('tcl_ndr_mult')?.value || '2';
    script = `# ==============================================================
# EducateVLSI Generated TCL Automation Script
# Module: Clock Non-Default Routing Rules (NDR) for Low Skew & SI
# ==============================================================

proc create_custom_clock_ndr {rule_name layers mult} {
    puts "\[INFO\] Defining Non-Default Rule: $rule_name with multiplier ${mult}x"
    
    # 1. Create Routing Rule
    create_routing_rule $rule_name \\
        -multiplier_width $mult \\
        -multiplier_spacing $mult \\
        -layers "$layers"
        
    # 2. Attach NDR to Clock Nets in Design
    set clk_nets [get_nets -hierarchical -filter "is_clock==true"]
    set_routing_rule -rule $rule_name $clk_nets
    
    puts "\[INFO\] Successfully bound $rule_name to [sizeof_collection $clk_nets] clock nets."
}

# Execute Procedure
create_custom_clock_ndr "${name}" "${layers}" ${mult}`;
  } else if (type === 'halo') {
    const dist = document.getElementById('tcl_halo_dist')?.value || '15 15 15 15';
    const filter = document.getElementById('tcl_halo_filter')?.value || 'is_hard_macro==true';
    script = `# ==============================================================
# EducateVLSI Generated TCL Automation Script
# Module: Macro Halos & Keepout Margins to Eliminate Channel Congestion
# ==============================================================

proc apply_macro_halos {margin_coords filter_query} {
    puts "\[INFO\] Querying target macros with: $filter_query"
    set target_macros [get_cells -hierarchical -filter "$filter_query"]
    
    if {[sizeof_collection $target_macros] == 0} {
        puts "\[WARN\] No hard macros found matching criteria."
        return
    }
    
    foreach_in_collection macro $target_macros {
        set m_name [get_object_name $macro]
        create_keepout_margin -type hard -outer [list ${margin_coords}] $macro
        puts "\[INFO\] Applied ${margin_coords} µm keepout margin around: $m_name"
    }
    puts "\[INFO\] Completed halo generation across [sizeof_collection $target_macros] macros."
}

# Execute Procedure
apply_macro_halos "${dist}" "${filter}"`;
  } else if (type === 'eco') {
    const slackThresh = document.getElementById('tcl_eco_slack')?.value || '-0.15';
    script = `# ==============================================================
# EducateVLSI Generated TCL Automation Script
# Module: Setup Timing ECO - Critical Path Collector & Cell Upsizing
# ==============================================================

proc fix_setup_violations_eco {slack_threshold} {
    puts "\[INFO\] Collecting violating paths worse than $slack_threshold ns..."
    
    set crit_paths [get_timing_paths -delay_type max -max_paths 50 -slack_lesser_than $slack_threshold]
    set cell_count 0
    
    foreach_in_collection path $crit_paths {
        set points [get_property $path points]
        foreach_in_collection pt $points {
            set pin [get_property $pt object]
            set cell [get_cells -of_objects $pin]
            if {[sizeof_collection $cell] > 0} {
                set cell_name [get_object_name $cell]
                set ref_name [get_property $cell ref_name]
                
                # Check for standard cell upsize candidates (e.g., _X1 -> _X2, _X2 -> _X4)
                if {[regexp {(.*)_X([0-9]+)} $ref_name match base_type drive]} {
                    set new_drive [expr {$drive * 2}]
                    set new_ref "\${base_type}_X\${new_drive}"
                    size_cell $cell $new_ref
                    incr cell_count
                }
            }
        }
    }
    puts "\[INFO\] Timing ECO complete. Upsized $cell_count driver cells along critical paths."
}

# Execute Procedure
fix_setup_violations_eco ${slackThresh}`;
  } else if (type === 'pdn') {
    const nets = document.getElementById('tcl_pdn_nets')?.value || 'VDD VSS';
    const layers = document.getElementById('tcl_pdn_layers')?.value || 'M7 M8';
    script = `# ==============================================================
# EducateVLSI Generated TCL Automation Script
# Module: Power Distribution Network (PDN) Mesh Definition
# ==============================================================

proc synthesize_power_grid_mesh {pg_nets top_layers} {
    puts "\[INFO\] Initializing Power Grid Strategy for nets: $pg_nets"
    
    # 1. Define Pattern for Core Mesh
    create_pg_mesh_pattern core_mesh_pattern \\
        -layers {
            {metal_layer: M7, width: 2.4, pitch: 24.0, offset: 5.0}
            {metal_layer: M8, width: 3.2, pitch: 32.0, offset: 6.0}
        }
        
    # 2. Attach Strategy to Core Area
    set_pg_strategy core_pg_strategy \\
        -core \\
        -pattern {name: core_mesh_pattern, nets: [list ${nets}]}
        
    # 3. Compile Power Mesh
    compile_pg -strategies core_pg_strategy
    puts "\[INFO\] Power Grid Mesh successfully compiled on layers: $top_layers"
}

# Execute Procedure
synthesize_power_grid_mesh "${nets}" "${layers}"`;
  }

  codeBox.textContent = script;
}

function copyTclScript() {
  const codeBox = document.getElementById('tclOutputCode');
  if (!codeBox) return;
  navigator.clipboard.writeText(codeBox.textContent).then(() => {
    showToast('TCL Script copied to clipboard! 📋');
  });
}

function downloadTclScript() {
  const codeBox = document.getElementById('tclOutputCode');
  if (!codeBox) return;
  const blob = new Blob([codeBox.textContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `educate_vlsi_script_${Date.now()}.tcl`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('TCL Script downloaded successfully!');
}

/* ==========================================================================
   Interactive Stage Gate Tapeout Checklists Engine
   ========================================================================== */
function initChecklists() {
  const tabContainer = document.getElementById('checklistStageTabs');
  if (tabContainer) {
    const stages = [
      { key: 'floorplan', label: '1. Floorplan Gate' },
      { key: 'placement', label: '2. Placement Gate' },
      { key: 'cts', label: '3. CTS Gate' },
      { key: 'routing', label: '4. Routing Gate' },
      { key: 'signoff', label: '5. Signoff & Tapeout' }
    ];

    tabContainer.innerHTML = stages.map((st, i) => `
      <button class="pill-nav-btn ${st.key === state.activeChecklistTab ? 'active' : ''}" data-tab="${st.key}">
        ${st.label}
      </button>
    `).join('');

    tabContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-nav-btn');
      if (!btn) return;
      tabContainer.querySelectorAll('.pill-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeChecklistTab = btn.dataset.tab;
      renderChecklistItems();
    });
  }

  renderChecklistItems();
}

function renderChecklistItems() {
  const container = document.getElementById('checklistItemsContainer');
  if (!container) return;

  const items = CHECKLIST_STAGES[state.activeChecklistTab] || [];
  container.innerHTML = items.map(item => {
    const isDone = !!state.checklistChecked[item.id];
    return `
      <label class="check-item ${isDone ? 'completed' : ''}" id="check-item-${item.id}">
        <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleChecklistItem('${item.id}')">
        <span class="check-item-text">${item.text}</span>
      </label>
    `;
  }).join('');

  updateChecklistProgress();
}

window.toggleChecklistItem = function(id) {
  state.checklistChecked[id] = !state.checklistChecked[id];
  localStorage.setItem('educatevlsi_checklists', JSON.stringify(state.checklistChecked));
  renderChecklistItems();
};

function updateChecklistProgress() {
  let totalAll = 0;
  let doneAll = 0;

  Object.values(CHECKLIST_STAGES).forEach(list => {
    list.forEach(it => {
      totalAll++;
      if (state.checklistChecked[it.id]) doneAll++;
    });
  });

  const pct = Math.round((doneAll / totalAll) * 100);
  const fillEl = document.getElementById('checklistProgressBarFill');
  const countEl = document.getElementById('checklistScoreCount');
  const badgeEl = document.getElementById('checklistScoreBadge');

  if (fillEl) fillEl.style.width = `${pct}%`;
  if (countEl) countEl.textContent = `${doneAll} of ${totalAll} Checks Passed`;
  if (badgeEl) {
    badgeEl.textContent = `${pct}% Signoff Ready`;
    if (pct === 100) {
      badgeEl.className = 'badge badge-emerald';
    } else if (pct > 60) {
      badgeEl.className = 'badge badge-cyan';
    } else {
      badgeEl.className = 'badge badge-amber';
    }
  }
}

/* ==========================================================================
   Terminal Snippets & Copy
   ========================================================================== */
function initTerminalCopy() {
  document.querySelectorAll('.btn-copy-cmd').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const code = btn.dataset.cmd;
      if (code) {
        navigator.clipboard.writeText(code).then(() => {
          showToast(`Copied to clipboard: ${code}`);
          const original = btn.innerHTML;
          btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
          setTimeout(() => {
            btn.innerHTML = original;
          }, 1800);
        });
      }
    });
  });
}

/* ==========================================================================
   Keyboard Shortcuts
   ========================================================================== */
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT') return;

    if (e.code === 'Space') {
      e.preventDefault();
      const card3d = document.getElementById('card3dWrap');
      card3d?.classList.toggle('flipped');
    } else if (e.code === 'ArrowRight') {
      nextCard();
    } else if (e.code === 'ArrowLeft') {
      prevCard();
    } else if (e.key === 'm' || e.key === 'M') {
      toggleMasteryCurrent();
    }
  });
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(msg) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
    <span>${msg}</span>
  `;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

/* ==========================================================================
   Learn Academy (ECE to VLSI Physical Design Masterclass)
   ========================================================================== */
function initLearnAcademy() {
  renderLearnTracks();
  renderLearnModules();
  updateLearnProgress();

  const searchInput = document.getElementById('learnSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.learnSearchQuery = e.target.value.trim().toLowerCase();
      renderLearnModules();
    });
  }

  // Modal Backdrop Click to close
  const modalBackdrop = document.getElementById('lessonModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeLessonModal();
      }
    });
  }

  // Close button inside modal
  const closeBtn = document.getElementById('closeLessonModalBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLessonModal);
  }

  // Esc key closes modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLessonModal();
    }
  });
}


// Contextual Mapping from Curriculum Lessons to Silicon Interactive Studio Simulators
const LESSON_GUI_MAP = {
  'ece-pn': { tab: 'mosfet', label: '🔬 Junction & Field GUI' },
  'ece-mosfet': { tab: 'mosfet', label: '🔬 Launch MOSFET IV GUI' },
  'ece-cmos-inverter': { tab: 'inverter', label: '⚡ Launch Inverter VTC GUI' },
  'dig-comb': { tab: 'logic', label: '🔌 Logic Gates & Layout GUI' },
  'dig-seq': { tab: 'logic', label: '🔌 Sequential DFF GUI' },
  'dig-cdc': { tab: 'sta', label: '⏱️ CDC Skew & Latency GUI' },
  'dig-hdl': { tab: 'pipeline', label: '🗺️ Verilog to Synthesis Flow' },
  'fe-synth': { tab: 'pipeline', label: '🗺️ Logic Synthesis Pipeline' },
  'fe-sdc': { tab: 'sta', label: '⏱️ SDC Constraints & Slack' },
  'fe-lib': { tab: 'sta', label: '⏱️ Liberty Timing & NLDM GUI' },
  'fe-lef': { tab: 'logic', label: '🔌 Physical LEF & Cell Layout' },
  'be-floorplan': { tab: 'pipeline', label: '🗺️ Floorplan Stage GUI' },
  'be-macro': { tab: 'pipeline', label: '🗺️ Macro Placement & Halos' },
  'be-power': { tab: 'pipeline', label: '🗺️ Power Grid & IR Drop GUI' },
  'be-placement': { tab: 'pipeline', label: '🗺️ Cell Placement & Legalization' },
  'be-cts': { tab: 'sta', label: '⏱️ CTS Skew & Latency GUI' },
  'be-routing': { tab: 'logic', label: '🔌 Detailed Routing & Metal Tracks' },
  'so-sta': { tab: 'sta', label: '⏱️ Launch STA Waveform GUI' },
  'so-si': { tab: 'sta', label: '⏱️ Crosstalk & Noise Margin' },
  'so-pv': { tab: 'logic', label: '🔌 DRC/LVS Signoff Checks' },
  'so-em': { tab: 'pipeline', label: '🗺️ EM Signoff & DVD Analysis' },
  'so-tapeout': { tab: 'pipeline', label: '🗺️ GDSII Tapeout Signoff' },
  'adv-finfet': { tab: 'mosfet', label: '🔬 FinFET / GAA Simulator' },
  'adv-litho': { tab: 'pipeline', label: '🗺️ EUV & Multi-Patterning' },
  'adv-pkg': { tab: 'pipeline', label: '🗺️ 2.5D/3D Chiplet Pipeline' }
};

window.launchStudioGui = function(tabName) {
  closeLessonModal();
  const studioWrap = document.getElementById('siliconStudioWrap');
  if (studioWrap) {
    studioWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof switchStudioTab === 'function') {
      switchStudioTab(tabName);
    }
    studioWrap.style.boxShadow = '0 0 40px rgba(0, 242, 254, 0.45)';
    setTimeout(() => {
      studioWrap.style.boxShadow = '';
    }, 1800);
  }
};

const LESSON_EXPANDED_DATA = {
  "ece-pn": {
    "breakdown": [
      {
        "symbol": "V_0",
        "name": "Built-in Potential",
        "unit": "V",
        "desc": "Equilibrium barrier voltage formed by uncompensated space-charge ions (0.65V \u2013 0.88V at 300K)."
      },
      {
        "symbol": "V_t = kT/q",
        "name": "Thermal Voltage",
        "unit": "V",
        "desc": "Thermal energy potential; equals 25.85 mV at 300K, scales directly with junction temperature."
      },
      {
        "symbol": "N_A, N_D",
        "name": "Doping Concentrations",
        "unit": "cm\u207b\u00b3",
        "desc": "Acceptor (p-type) and Donor (n-type) ion concentrations (typically 10\u00b9\u2076 to 10\u00b9\u2078 cm\u207b\u00b3)."
      },
      {
        "symbol": "n_i",
        "name": "Intrinsic Carrier Conc.",
        "unit": "cm\u207b\u00b3",
        "desc": "Silicon intrinsic carriers (1.5 \u00d7 10\u00b9\u2070 cm\u207b\u00b3 at 300K; doubles every ~10\u00b0C)."
      },
      {
        "symbol": "W",
        "name": "Depletion Width",
        "unit": "\u03bcm",
        "desc": "Space charge barrier thickness; expands with reverse bias voltage V_R."
      },
      {
        "symbol": "\u03b5_s",
        "name": "Silicon Permittivity",
        "unit": "F/cm",
        "desc": "Dielectric permittivity of silicon (11.7 \u00d7 \u03b5_0 = 1.036 \u00d7 10\u207b\u00b9\u00b2 F/cm)."
      }
    ],
    "workedExample": {
      "title": "SkyWater 130nm Substrate Well-Tap Reverse-Bias Calculation",
      "scenario": "Calculate built-in potential V0 and depletion layer width W under a reverse bias VR = 1.8V for a p-well (NA = 1.2 \u00d7 10\u00b9\u2077 cm\u207b\u00b3) and n+ diffusion contact (ND = 2.0 \u00d7 10\u00b9\u2078 cm\u207b\u00b3).",
      "formula": "V_0 = V_t * ln((N_A * N_D) / n_i^2), W = sqrt((2*\u03b5_s/q)*(V_0 + V_R)*(1/N_A + 1/N_D))",
      "values": "N_A = 1.2e17 cm\u207b\u00b3, N_D = 2.0e18 cm\u207b\u00b3, n_i = 1.5e10 cm\u207b\u00b3, V_t = 0.02585 V, V_R = 1.8 V, \u03b5_s = 1.036e-12 F/cm, q = 1.602e-19 C",
      "calculation": "1) V_0 = 0.02585 * ln((2.4e35) / (2.25e20)) = 0.02585 * ln(1.067e15) = 0.894 V.\\n2) Total barrier = V_0 + V_R = 0.894 + 1.80 = 2.694 V.\\n3) Factor: (2 * 1.036e-12 / 1.602e-19) * 2.694 = 3.484e7.\\n4) Doping sum: (1/1.2e17 + 1/2.0e18) = 8.833e-18.\\n5) W = sqrt(3.484e7 * 8.833e-18) = 1.754e-5 cm = 0.175 \u03bcm (175 nm).",
      "result": "V_0 = 0.894 V, Depletion Width W = 175 nm, Junction Capacitance C_j = \u03b5_s / W \u2248 0.59 fF/\u03bcm\u00b2.",
      "signoffJudgment": "PASSED: Depletion region of 175 nm provides robust galvanic isolation without punch-through risk."
    },
    "pvtSensitivity": {
      "summary": "Reverse saturation current I0 doubles every 10\u00b0C rise. Built-in potential decreases by ~2 mV/\u00b0C.",
      "slowCorner": "ss_0.72v_125c: High junction temperature inflates sub-threshold diode leakage by 50\u00d7 compared to 25\u00b0C.",
      "fastCorner": "ff_0.88v_-40c: Depletion width shrinks slightly, increasing parasitic junction capacitance C_j by ~12%."
    },
    "edaCommandRecipe": {
      "tool": "Cadence Innovus / Synopsys ICC2",
      "title": "Substrate Well-Tap Insertion & Check Commands",
      "tcl": "set_well_tap_mode -rule 60.0 -bottom_tap_cell TAPCELLBWP -top_tap_cell TAPCELLBWP\naddWellTap -cell TAPCELLBWP -cellInterval 60.0 -prefix WELLTAP\nverify_drc -check_well_taps -report well_taps_drc.rpt"
    },
    "signoffChecklist": [
      "Verify tap-to-gate maximum distance does not exceed 60 \u03bcm anywhere in the core to prevent CMOS latchup.",
      "Ensure double guard rings enclose all high-frequency PLL/Oscillator macros to isolate substrate noise.",
      "Confirm all well tap cells are tied to valid PG nets (VSS for P-well, VDD for N-well)."
    ],
    "guidedExperiments": [
      "Experiment 1: In the Silicon Studio MOSFET/Junction lab, sweep reverse voltage to observe depletion layer expansion.",
      "Experiment 2: Notice how parasitic junction capacitance Cj drops inversely with the square root of reverse voltage.",
      "Experiment 3: Observe exponential leakage increase as temperature rises from 25\u00b0C to 125\u00b0C."
    ]
  },
  "ece-mosfet": {
    "breakdown": [
      {
        "symbol": "I_{D,sat}",
        "name": "Saturation Current",
        "unit": "\u03bcA",
        "desc": "Maximum channel drive current when pinch-off occurs at the drain end."
      },
      {
        "symbol": "\u03bc_n, \u03bc_p",
        "name": "Carrier Mobility",
        "unit": "cm\u00b2/V\u00b7s",
        "desc": "Electron mobility (~400 cm\u00b2/V\u00b7s) is ~2.5\u00d7 higher than hole mobility (~150 cm\u00b2/V\u00b7s) in silicon inversion channels."
      },
      {
        "symbol": "C_{ox}",
        "name": "Oxide Capacitance",
        "unit": "fF/\u03bcm\u00b2",
        "desc": "Gate dielectric capacitance per unit area (\u03b5_ox / t_ox)."
      },
      {
        "symbol": "W/L",
        "name": "Aspect Ratio",
        "unit": "ratio",
        "desc": "Transistor width to channel length; dictates drive current and input capacitance."
      },
      {
        "symbol": "V_{th}",
        "name": "Threshold Voltage",
        "unit": "V",
        "desc": "Minimum gate bias required to induce strong inversion layer under the oxide (0.25V\u20130.45V)."
      },
      {
        "symbol": "\u03bb",
        "name": "Channel Modulation",
        "unit": "V\u207b\u00b9",
        "desc": "Finite output resistance parameter; causes slight current increase in saturation due to effective channel shortening."
      }
    ],
    "workedExample": {
      "title": "FinFET Cell Drive Current Calculation in Saturation",
      "scenario": "Calculate the drive current for an NMOS buffer cell with W/L = 12, \u03bcn*Cox = 320 \u03bcA/V\u00b2, Vth = 0.32V operating at VDD = 0.75V with \u03bb = 0.04 V\u207b\u00b9.",
      "formula": "I_{D,sat} = 0.5 * \u03bc * C_ox * (W/L) * (V_GS - V_th)^2 * (1 + \u03bb * V_DS)",
      "values": "\u03bc*Cox = 320 \u03bcA/V\u00b2, W/L = 12, V_GS = 0.75 V, V_DS = 0.75 V, V_th = 0.32 V, \u03bb = 0.04 V\u207b\u00b9",
      "calculation": "1) Overdrive voltage (V_GS - V_th) = 0.75 - 0.32 = 0.43 V.\\n2) (0.43)^2 = 0.1849 V\u00b2.\\n3) Core factor: 0.5 * 320 * 12 * 0.1849 = 1920 * 0.1849 = 355.0 \u03bcA.\\n4) Channel modulation factor: (1 + 0.04 * 0.75) = 1.030.\\n5) Saturated current I_{D,sat} = 355.0 * 1.030 = 365.65 \u03bcA.",
      "result": "I_{D,sat} = 365.7 \u03bcA (or ~30.5 \u03bcA per fin equivalent).",
      "signoffJudgment": "PASSED: Provides sufficient pull-down drive strength for clock buffer tree fanout of 4."
    },
    "pvtSensitivity": {
      "summary": "Current decreases at hot temperature due to phonon lattice scattering reducing mobility \u03bc, but subthreshold leakage escalates exponentially.",
      "slowCorner": "ss_0.72v_125c: Overdrive drops to 0.72 - 0.38 = 0.34V, slowing propagation delay by ~28%.",
      "fastCorner": "ff_0.88v_-40c: Overdrive rises to 0.88 - 0.26 = 0.62V, increasing drive current and hold violation risk."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys PrimeTime / Cadence Tempus",
      "title": "Multi-Vt Leakage & Timing Optimization",
      "tcl": "set_power_strategy -leakage -timing_preserve\nswap_cell -from HVT_X2 -to LVT_X2 [get_cells -filter \"slack < 0.0\"]\nreport_power -by_vt -hierarchy"
    },
    "signoffChecklist": [
      "Enforce maximum transition constraint (slew < 120 ps) to keep devices out of high short-circuit regions.",
      "Verify multi-Vt boundary spacing meets foundry design rules (min 2 dummy rows between HVT and eLVT).",
      "Check body-bias tap continuity across all standard cell rows."
    ],
    "guidedExperiments": [
      "Experiment 1: In the MOSFET IV Studio, adjust VGS slider from 0.2V to 1.0V to observe the transition from cutoff to triode to saturation.",
      "Experiment 2: Notice the pinch-off point VDS = VGS - Vth shift rightward as VGS increases.",
      "Experiment 3: Observe channel pinch-off diagram update with drain depletion zone expanding."
    ]
  },
  "ece-cmos-inverter": {
    "breakdown": [
      {
        "symbol": "P_{total}",
        "name": "Total Power Dissipation",
        "unit": "\u03bcW",
        "desc": "Sum of dynamic capacitive charging, short-circuit current, and static device leakage."
      },
      {
        "symbol": "\u03b1",
        "name": "Switching Activity",
        "unit": "prob",
        "desc": "Average transitions per clock cycle (0.1 for general logic, 1.0 for clock buffers)."
      },
      {
        "symbol": "C_L",
        "name": "Load Capacitance",
        "unit": "fF",
        "desc": "Total downstream load including interconnect wire capacitance and gate input pins."
      },
      {
        "symbol": "V_{DD}",
        "name": "Core Supply Voltage",
        "unit": "V",
        "desc": "Regulated power supply (0.75V in 7nm, 1.2V in 65nm, 1.8V in 180nm)."
      },
      {
        "symbol": "f",
        "name": "Clock Frequency",
        "unit": "GHz",
        "desc": "Operating clock speed of the synchronized domain."
      },
      {
        "symbol": "NM_L, NM_H",
        "name": "Noise Margins",
        "unit": "V",
        "desc": "Low and High static noise margins (NML = VIL - VOL, NMH = VOH - VIH)."
      }
    ],
    "workedExample": {
      "title": "CMOS Inverter Dynamic & Leakage Power Budgeting",
      "scenario": "Calculate the total power for an inverter driving a 25 fF load at 2.0 GHz, VDD = 0.75V, \u03b1 = 0.15, with Ileak = 3.8 nA and Isc_avg = 0.85 \u03bcA.",
      "formula": "P_{total} = \u03b1 * C_L * V_{DD}^2 * f + I_{sc} * V_{DD} + I_{leak} * V_{DD}",
      "values": "\u03b1 = 0.15, C_L = 25e-15 F, V_{DD} = 0.75 V, f = 2.0e9 Hz, I_{sc} = 0.85e-6 A, I_{leak} = 3.8e-9 A",
      "calculation": "1) Dynamic power: 0.15 * 25e-15 * (0.75)^2 * 2.0e9 = 0.15 * 25e-15 * 0.5625 * 2.0e9 = 4.219 \u03bcW.\\n2) Short-circuit power: 0.85e-6 * 0.75 = 0.638 \u03bcW.\\n3) Static leakage: 3.8e-9 * 0.75 = 0.00285 \u03bcW.\\n4) Total power: 4.219 + 0.638 + 0.00285 = 4.860 \u03bcW.",
      "result": "Total P = 4.86 \u03bcW (Dynamic 86.8%, Short-Circuit 13.1%, Leakage < 0.1%).",
      "signoffJudgment": "PASSED: Total cell dissipation is within the 5.0 \u03bcW per gate thermal envelope."
    },
    "pvtSensitivity": {
      "summary": "Dynamic power scales quadratically with VDD and linearly with frequency. Leakage increases exponentially with temperature.",
      "slowCorner": "ss_0.72v_125c: Dynamic power drops due to lower voltage, but static leakage surges by 35\u00d7.",
      "fastCorner": "ff_0.88v_-40c: Dynamic power surges by 38% ((0.88/0.75)^2 = 1.38), demanding robust PDN sizing."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys PrimePower / Cadence Joules",
      "title": "Full-Chip Power Analysis with Activity Annotation",
      "tcl": "read_activity_file -format vcd -scope tb/dut sim_trace.vcd\nreport_power -hierarchy -levels 2 -cell_power\nset_clock_gating_style -control_point before -min_bitwidth 4"
    },
    "signoffChecklist": [
      "Verify noise margins NML and NMH both exceed 0.35 * VDD under worst-case corner.",
      "Enforce maximum transition constraint to limit short-circuit duration below 10% of cycle time.",
      "Verify switching threshold VM sits at VDD/2 \u00b1 8% for balanced rise and fall delays."
    ],
    "guidedExperiments": [
      "Experiment 1: In the CMOS Inverter Studio, slide Vin from 0V to 1V to trace the continuous non-linear VTC curve.",
      "Experiment 2: Alter the Wp/Wn ratio from 1.0 to 3.0 and watch VM shift rightward to compensate for lower hole mobility.",
      "Experiment 3: Observe dynamic noise margin indicators updating live as sizing changes."
    ]
  },
  "dig-comb": {
    "breakdown": [
      {
        "symbol": "G_i = A_i \u00b7 B_i",
        "name": "Carry Generate",
        "unit": "logic",
        "desc": "High when both inputs are 1; a carry output is generated regardless of carry input."
      },
      {
        "symbol": "P_i = A_i \u2295 B_i",
        "name": "Carry Propagate",
        "unit": "logic",
        "desc": "High when exactly one input is 1; incoming carry will propagate directly to output."
      },
      {
        "symbol": "C_{i+1}",
        "name": "Carry Out",
        "unit": "logic",
        "desc": "C_{i+1} = G_i + P_i \u00b7 C_i; recursive formulation for parallel-prefix tree adders."
      },
      {
        "symbol": "g",
        "name": "Logical Effort",
        "unit": "ratio",
        "desc": "Ratio of input capacitance of a gate to that of an inverter delivering the same output current."
      },
      {
        "symbol": "Delay",
        "name": "Datapath Delay",
        "unit": "ps",
        "desc": "Sum of stage logical efforts and parasitic RC delays along the critical combinational path."
      }
    ],
    "workedExample": {
      "title": "32-Bit Kogge-Stone vs Ripple Carry Adder Timing Comparison",
      "scenario": "Compare the worst-case carry propagation delay between a 32-bit Ripple Carry Adder (RCA, 32 stages of Full Adder carry delay = 45 ps/stage) and a Kogge-Stone Tree Adder (log2(32) = 5 stages = 38 ps/stage + 40 ps input prep).",
      "formula": "RCA: Delay = N * T_{carry}, Kogge-Stone: Delay = T_{prep} + log_2(N) * T_{tree}",
      "values": "N = 32, T_{carry,RCA} = 45 ps, T_{prep} = 40 ps, T_{tree} = 38 ps",
      "calculation": "1) RCA Delay = 32 * 45 ps = 1440 ps = 1.44 ns.\\n2) Kogge-Stone Delay = 40 ps + 5 * 38 ps = 40 + 190 = 230 ps = 0.23 ns.\\n3) Speedup factor = 1440 / 230 = 6.26\u00d7 faster.",
      "result": "Kogge-Stone delay = 230 ps (enables 4 GHz clocking), RCA delay = 1440 ps (limited to 690 MHz).",
      "signoffJudgment": "PASSED: Kogge-Stone easily closes timing under the 500 ps target clock period budget."
    },
    "pvtSensitivity": {
      "summary": "Combinational delay increases by 25-35% at slow-hot corners due to carrier mobility reduction.",
      "slowCorner": "ss_0.72v_125c: High wire resistance and lower transistor drive make multi-level prefix adders susceptible to setup slacks.",
      "fastCorner": "ff_0.88v_-40c: Extremely fast carry paths can cause short-path hold violations into downstream pipeline registers."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys Design Compiler / Cadence Genus",
      "title": "Datapath Architecture Selection in Synthesis",
      "tcl": "set_dp_smartgen_options -smart_adder true\nset_implementation pparch [get_cells -hier *adder*]\ncompile_ultra -timing_high_effort_script"
    },
    "signoffChecklist": [
      "Check for combinational glitch hazards by verifying balanced tree structures on multi-bit muxes.",
      "Ensure datapath macro cells are clustered close to minimize routing congestion.",
      "Limit maximum logic depth to under 25 gates per clock period for high-speed targets."
    ],
    "guidedExperiments": [
      "Experiment 1: In the Silicon Studio Logic Gates lab, switch between INV, NAND2, NOR2, AND2, OR2, and XOR2.",
      "Experiment 2: Test input combinations (A=0,1; B=0,1) to verify live truth-table highlighting and active NMOS/PMOS conduction paths.",
      "Experiment 3: Inspect the SVG stick diagram layout to see polysilicon gates crossing diffusion rails."
    ]
  },
  "dig-seq": {
    "breakdown": [
      {
        "symbol": "T_{clk}",
        "name": "Clock Period",
        "unit": "ps",
        "desc": "Duration of one complete clock cycle; inverse of operating frequency."
      },
      {
        "symbol": "T_{c2q}",
        "name": "Clock-to-Q Delay",
        "unit": "ps",
        "desc": "Propagation delay from active clock edge at CK pin until stable data appears at Q output."
      },
      {
        "symbol": "T_{comb}",
        "name": "Datapath Delay",
        "unit": "ps",
        "desc": "Worst-case delay through combinational logic and interconnect between launch and capture registers."
      },
      {
        "symbol": "T_{setup}",
        "name": "Setup Time",
        "unit": "ps",
        "desc": "Minimum duration data must remain stable before capture clock edge."
      },
      {
        "symbol": "T_{hold}",
        "name": "Hold Time",
        "unit": "ps",
        "desc": "Minimum duration data must remain stable after capture clock edge."
      },
      {
        "symbol": "MTBF",
        "name": "Mean Time Between Failures",
        "unit": "years",
        "desc": "Expected operational duration between metastability failure events in synchronizers."
      }
    ],
    "workedExample": {
      "title": "Maximum Operating Frequency (Fmax) & Setup Slack Closure",
      "scenario": "Determine maximum clock frequency Fmax for a pipeline stage with Tc2q = 110 ps, Tcomb = 620 ps, Tsetup = 75 ps, clock skew Tskew = +30 ps, and clock uncertainty Tunc = 45 ps.",
      "formula": "T_{clk,min} = T_{c2q} + T_{comb} + T_{setup} - T_{skew} + T_{unc}, F_{max} = 1 / T_{clk,min}",
      "values": "T_{c2q} = 110 ps, T_{comb} = 620 ps, T_{setup} = 75 ps, T_{skew} = +30 ps, T_{unc} = 45 ps",
      "calculation": "1) T_{clk,min} = 110 + 620 + 75 - 30 + 45 = 820 ps = 0.82 ns.\\n2) F_{max} = 1 / (820 * 10\u207b\u00b9\u00b2 s) = 1.2195 GHz.\\n3) At an operating clock of 1.0 GHz (Tclk = 1000 ps):\\nSetup Slack = 1000 - 820 = +180 ps.",
      "result": "Tclk,min = 820 ps, Fmax = 1.22 GHz. Setup Slack at 1 GHz is +180 ps (Positive Slack / Timing MET).",
      "signoffJudgment": "PASSED: Setup timing closes with a healthy +180 ps margin for on-chip variation."
    },
    "pvtSensitivity": {
      "summary": "Setup violations are worst at ss_0.72v_125c (slow path). Hold violations are worst at ff_0.88v_-40c (fast path).",
      "slowCorner": "ss_0.72v_125c: High temperature and low voltage increase combinational delays by up to 35%.",
      "fastCorner": "ff_0.88v_-40c: Extremely fast Tc2q (e.g. 55 ps) easily violates Thold (70 ps) if combinational delay is near zero."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys PrimeTime / Cadence Tempus",
      "title": "Setup and Hold Path Reporting",
      "tcl": "report_timing -delay_type max -max_paths 10 -nworst 1 -path_type full_clock_expanded\nreport_timing -delay_type min -max_paths 10 -nworst 1 -path_type full_clock_expanded\ncheck_timing -verbose"
    },
    "signoffChecklist": [
      "Confirm Hold Slack is strictly positive across all fast corners (ff_0.88v_-40c) \u2014 hold violations cannot be fixed by lowering clock speed!",
      "Verify setup slack \u2265 0.0 ps across all MCMM signoff corners.",
      "Check clock uncertainty budget includes both PLL jitter (20-40 ps) and clock tree duty-cycle distortion."
    ],
    "guidedExperiments": [
      "Experiment 1: In the STA Timing & Waveforms Studio, adjust clock period Tclk and observe Setup Slack update dynamically.",
      "Experiment 2: Introduce positive clock skew and notice setup slack improves while the setup hazard zone shifts.",
      "Experiment 3: Increase combinational delay past the threshold and watch the red VIOLATION banner trigger live."
    ]
  },
  "dig-cdc": {
    "breakdown": [
      {
        "symbol": "MTBF",
        "name": "Mean Time Between Failures",
        "unit": "years",
        "desc": "Calculated reliability expectation before a metastable event escapes into functional logic."
      },
      {
        "symbol": "t_r",
        "name": "Resolution Time",
        "unit": "ps",
        "desc": "Available settling time allocated across synchronizer flip-flops before sampling."
      },
      {
        "symbol": "\u03c4",
        "name": "Metastability Time Constant",
        "unit": "ps",
        "desc": "Inverse gain-bandwidth product of the cross-coupled inverter storage element."
      },
      {
        "symbol": "T_0",
        "name": "Aperture Parameter",
        "unit": "s",
        "desc": "Metastable capture window width; scales with technology node feature size."
      },
      {
        "symbol": "f_{clk}, f_{data}",
        "name": "Clock & Data Frequencies",
        "unit": "MHz",
        "desc": "Sampling clock rate and asynchronous data transition toggle frequency."
      }
    ],
    "workedExample": {
      "title": "2-Stage Flip-Flop Synchronizer MTBF Calculation",
      "scenario": "Calculate MTBF for an asynchronous signal (fdata = 10 MHz) entering a 1 GHz clock domain (fclk = 1000 MHz, Tclk = 1.0 ns). The 2-FF synchronizer allows resolution time tr = 1.0 ns - 0.15 ns (setup/c2q) = 850 ps. Foundry params: \u03c4 = 25 ps, T0 = 15 ps.",
      "formula": "MTBF = exp(t_r / \u03c4) / (T_0 * f_{clk} * f_{data})",
      "values": "t_r = 850 ps, \u03c4 = 25 ps, T_0 = 15e-12 s, f_{clk} = 1.0e9 Hz, f_{data} = 1.0e7 Hz",
      "calculation": "1) Exponent: t_r / \u03c4 = 850 / 25 = 34.\\n2) exp(34) = 5.8346 * 10\u00b9\u2074.\\n3) Denominator: 15e-12 * 1e9 * 1e7 = 1.5 * 10\u2075 events/sec.\\n4) MTBF (seconds) = 5.8346e14 / 1.5e5 = 3.8897 * 10\u2079 seconds.\\n5) In years: 3.8897e9 / (3600 * 24 * 365) = 123.3 years.",
      "result": "MTBF = 123.3 years with 2-FF synchronizer (exceeds the 100-year automotive reliability target).",
      "signoffJudgment": "PASSED: Reliable synchronization achieved; add a 3rd stage if target mission profile requires > 10,000 years."
    },
    "pvtSensitivity": {
      "summary": "Metastability time constant \u03c4 degrades (increases) at low voltages and cold/hot extremes, cutting MTBF exponentially.",
      "slowCorner": "ss_0.72v_125c: Reduced transconductance gm increases \u03c4 by ~20%, dropping MTBF from 123 years down to ~8 years.",
      "fastCorner": "ff_0.88v_-40c: Very high toggle rates on data nets can increase transition count, lowering MTBF."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys SpyGlass CDC / Cadence JasperGold",
      "title": "Static CDC Structural and Functional Verification",
      "tcl": "read_file -type verilog top.v\nset_parameter handle_metastability true\nrun_goal cdc/cdc_setup_check\nreport_violations -rule \"Ac_sync_group\""
    },
    "signoffChecklist": [
      "Verify all multi-bit CDC buses use Gray-code encoding or asynchronous handshaking FIFO architectures.",
      "Ensure synchronizer flip-flops are placed within a single bounding box (NDR rule) to minimize wire delay tr.",
      "Declare false paths (set_false_path -from clk_A -to clk_B) only after verifying valid synchronizer structures exist."
    ],
    "guidedExperiments": [
      "Experiment 1: In the STA Timing Studio, observe how clock skew affects the arrival and capture margins across domain crossings.",
      "Experiment 2: Simulate frequency mismatch between clk_fast and clk_slow domains.",
      "Experiment 3: Test how clock uncertainty margin shifts the setup safety window."
    ]
  },
  "dig-hdl": {
    "breakdown": [
      {
        "symbol": "P_{dyn,gated}",
        "name": "Gated Power",
        "unit": "\u03bcW",
        "desc": "Power consumed by a register bank when clock gating cuts redundant switching transitions."
      },
      {
        "symbol": "\u03b1_{eff}",
        "name": "Effective Activity",
        "unit": "ratio",
        "desc": "Toggle probability after clock enable conditioning (typically reduced from 1.0 to 0.15)."
      },
      {
        "symbol": "ICG",
        "name": "Integrated Clock Gate",
        "unit": "cell",
        "desc": "Special standard cell containing an active-low latch and AND gate to prevent output clock glitches."
      },
      {
        "symbol": "N_{bits}",
        "name": "Register Bitwidth",
        "unit": "bits",
        "desc": "Number of flip-flops sharing an ICG cell (typically 4 to 32 bits)."
      }
    ],
    "workedExample": {
      "title": "Integrated Clock Gating (ICG) Power Reduction Efficiency",
      "scenario": "A 64-bit pipeline register operates at 1.5 GHz, VDD = 0.75V, C_clk = 2.5 fF/bit. Without gating, clock pins toggle every cycle (\u03b1 = 1.0). When an ICG is inserted with 80% idle time (enable active 20% of time, \u03b1 = 0.2), calculate power savings.",
      "formula": "P = \u03b1 * C_{total} * V_{DD}^2 * f, Power Saved = P_{ungated} - P_{gated}",
      "values": "N = 64, C_{total} = 64 * 2.5e-15 = 160 fF, V_{DD} = 0.75 V, f = 1.5e9 Hz",
      "calculation": "1) Without ICG (\u03b1 = 1.0): P_{ungated} = 1.0 * 160e-15 * 0.5625 * 1.5e9 = 135.0 \u03bcW.\\n2) With ICG (\u03b1 = 0.2) + ICG overhead (8 \u03bcW): P_{gated} = (0.2 * 135.0) + 8.0 = 27.0 + 8.0 = 35.0 \u03bcW.\\n3) Net power saved: 135.0 - 35.0 = 100.0 \u03bcW (74.1% reduction).",
      "result": "Dynamic power reduced from 135 \u03bcW to 35 \u03bcW (74% savings).",
      "signoffJudgment": "PASSED: ICG insertion provides substantial power savings; satisfies bitwidth threshold rule (> 4 bits)."
    },
    "pvtSensitivity": {
      "summary": "Clock power savings compound at high voltage and fast corners where dynamic power is highest.",
      "slowCorner": "ss_0.72v_125c: Setup timing on the ICG enable pin (E-pin) is critical to prevent clock clipping.",
      "fastCorner": "ff_0.88v_-40c: Fast clock paths into the ICG require strict hold checks on enable signals."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys Design Compiler / Cadence Genus",
      "title": "Automated Integrated Clock Gating Insertion",
      "tcl": "set_clock_gating_style -control_point before -min_bitwidth 4 -max_fanout 32 -positive_edge_logic {integrated:CGLPPRX4}\ncompile_ultra -gate_clock\nreport_clock_gating -gating_efficiency"
    },
    "signoffChecklist": [
      "Verify no combinational logic glitches can propagate to the enable pin of unlatched clock gates.",
      "Confirm ICG enable setup and hold timing checks pass with dedicated constraints (set_clock_gating_check).",
      "Ensure non-blocking assignments (<=) are used strictly for all sequential RTL registers."
    ],
    "guidedExperiments": [
      "Experiment 1: In the ASIC Flow Pipeline Studio, observe how synthesis translates RTL into technology-mapped logic gates.",
      "Experiment 2: Step through stages to see how placement legalizes standard cells and clock trees.",
      "Experiment 3: Inspect how clock routing buffers are distributed across the core layout."
    ]
  },
  "fe-synth": {
    "breakdown": [
      {
        "symbol": "GTECH",
        "name": "Generic Tech Netlist",
        "unit": "netlist",
        "desc": "Technology-independent logic gate representation produced during RTL elaboration."
      },
      {
        "symbol": "Area",
        "name": "Silicon Core Area",
        "unit": "\u03bcm\u00b2",
        "desc": "Sum of standard cell footprints after boolean logic optimization and tech mapping."
      },
      {
        "symbol": "WNS",
        "name": "Worst Negative Slack",
        "unit": "ps",
        "desc": "Slack of the most critical timing path in the design (must be \u2265 0.0 ps at signoff)."
      },
      {
        "symbol": "TNS",
        "name": "Total Negative Slack",
        "unit": "ns",
        "desc": "Sum of negative slacks across all violating endpoints (indicates global timing closure difficulty)."
      }
    ],
    "workedExample": {
      "title": "Synthesis Logic Optimization & Technology Mapping Trade-Off",
      "scenario": "A 100K-gate module is synthesized using high-effort area recovery. Initial mapped area is 45,000 \u03bcm\u00b2 with WNS = +80 ps. After area reclamation, area drops to 38,200 \u03bcm\u00b2 with WNS = +15 ps.",
      "formula": "Area Reduction % = ((A_{initial} - A_{final}) / A_{initial}) * 100",
      "values": "A_{initial} = 45000 \u03bcm\u00b2, A_{final} = 38200 \u03bcm\u00b2, WNS_{final} = +15 ps",
      "calculation": "1) Delta Area = 45000 - 38200 = 6800 \u03bcm\u00b2.\\n2) Reduction % = (6800 / 45000) * 100 = 15.11%.\\n3) WNS remains positive (+15 ps), meaning zero timing degradation below signoff threshold.",
      "result": "15.1% area savings achieved while maintaining positive timing slack (WNS = +15 ps).",
      "signoffJudgment": "PASSED: Area reduction completed successfully without creating timing violations."
    },
    "pvtSensitivity": {
      "summary": "Synthesis optimization targets worst-case slow corners for setup timing and fast corners for hold anticipation.",
      "slowCorner": "ss_0.72v_125c: Drives gate up-sizing and buffer insertion to meet clock targets.",
      "fastCorner": "ff_0.88v_-40c: Synthesis tools preserve minimum logic depth on register-to-register paths to ease hold closure."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys Design Compiler (Topographical Mode)",
      "title": "Timing and Congestion Driven Synthesis",
      "tcl": "read_verilog -rtl {cpu_core.v alu.v regfile.v}\ncurrent_design cpu_core\nlink; check_design\nread_sdc constraints.sdc\ncompile_ultra -spg -scan -timing_high_effort_script\nreport_area -hierarchy; report_timing -max_paths 5"
    },
    "signoffChecklist": [
      "Check that check_design reports zero latches inferred (unless intentionally specified in RTL).",
      "Verify all unmapped GTECH gates are completely resolved to target library standard cells.",
      "Ensure no multi-driven nets or floating inputs remain in the synthesized netlist."
    ],
    "guidedExperiments": [
      "Experiment 1: In the ASIC Flow Pipeline Studio, click on Stage 1 (Logic Synthesis) to review input RTL and output mapped gates.",
      "Experiment 2: Check key EDA commands (read_verilog, compile_ultra, report_qor) and primary deliverables.",
      "Experiment 3: Step to Floorplan stage to see how synthesized netlist connectivity guides macro placement."
    ]
  },
  "fe-sdc": {
    "breakdown": [
      {
        "symbol": "create_clock",
        "name": "Master Clock Definition",
        "unit": "command",
        "desc": "Defines periodic reference waveform (period, duty cycle) at top-level port or internal PLL output pin."
      },
      {
        "symbol": "set_input_delay",
        "name": "Input Delay Constraint",
        "unit": "ps",
        "desc": "Specifies external arrival time of incoming data relative to reference clock edge."
      },
      {
        "symbol": "set_output_delay",
        "name": "Output Delay Constraint",
        "unit": "ps",
        "desc": "Specifies external setup/hold requirement of downstream receiving chip relative to reference clock edge."
      },
      {
        "symbol": "set_clock_uncertainty",
        "name": "Clock Margin Budget",
        "unit": "ps",
        "desc": "Allocates jitter, on-chip skew variation, and duty-cycle distortion margins for timing checks."
      },
      {
        "symbol": "set_false_path",
        "name": "Timing Exception",
        "unit": "command",
        "desc": "Disables timing checks on functionally impossible or asynchronously synchronized paths."
      }
    ],
    "workedExample": {
      "title": "Input Delay Budgeting for DDR Interface",
      "scenario": "A 500 MHz (Tclk = 2000 ps) interface receives data from an external PHY. External transmitter delay T_ext_max = 750 ps, PCB trace delay T_trace = 180 ps. Calculate the maximum input delay constraint.",
      "formula": "set_input_delay -max (T_{ext,max} + T_{trace}) -clock [get_clocks CLK_EXT]",
      "values": "T_{ext,max} = 750 ps, T_{trace} = 180 ps, T_{clk} = 2000 ps",
      "calculation": "1) Total external arrival delay = 750 + 180 = 930 ps.\\n2) Remaining internal time for chip logic: 2000 - 930 = 1070 ps.\\n3) Accounting for 150 ps clock uncertainty: Internal logic must complete in \u2264 920 ps.",
      "result": "set_input_delay -max 930 -clock CLK_EXT [get_ports data_in*]",
      "signoffJudgment": "PASSED: Internal arrival time budget of 920 ps is sufficient for 4 gate levels."
    },
    "pvtSensitivity": {
      "summary": "External board delays have positive temperature coefficients, demanding conservative min/max corner budgeting.",
      "slowCorner": "ss_0.72v_125c: Max input delays eat into setup margin.",
      "fastCorner": "ff_0.88v_-40c: Min input delays (e.g. 200 ps) demand hold buffers at IO pads."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys PrimeTime / Cadence Tempus",
      "title": "Complete Top-Level SDC Constraints Template",
      "tcl": "create_clock -name CORE_CLK -period 1.000 [get_ports clk_core]\nset_clock_uncertainty -setup 0.050 [get_clocks CORE_CLK]\nset_clock_uncertainty -hold 0.030 [get_clocks CORE_CLK]\nset_input_delay -max 0.350 -clock CORE_CLK [get_ports data_in*]\nset_output_delay -max 0.250 -clock CORE_CLK [get_ports data_out*]\nset_false_path -from [get_ports rst_n]"
    },
    "signoffChecklist": [
      "Run check_timing to ensure 100% of registers are properly constrained by valid clocks.",
      "Verify no unconstrained endpoints (unconstrained ports, registers with missing clocks).",
      "Ensure false paths and multi-cycle paths have formal designer signoff approval."
    ],
    "guidedExperiments": [
      "Experiment 1: In the STA Timing Studio, modify clock period and uncertainty to watch required arrival time update.",
      "Experiment 2: Simulate the effect of tight input delays on setup slack.",
      "Experiment 3: Observe how clock uncertainty margin shrinks the timing pass window."
    ]
  },
  "fe-lib": {
    "breakdown": [
      {
        "symbol": "NLDM",
        "name": "Non-Linear Delay Model",
        "unit": "model",
        "desc": "Standard 7\u00d77 lookup table characterization indexing cell propagation delay against input slew and output capacitive load."
      },
      {
        "symbol": "CCS / ECSM",
        "name": "Composite Current Source",
        "unit": "model",
        "desc": "Advanced current-source model capturing non-linear driver behavior and receiver capacitance for sub-10nm accuracy."
      },
      {
        "symbol": "Input Slew",
        "name": "Transition Time",
        "unit": "ps",
        "desc": "Time taken for input signal to transition between 10%-90% or 20%-80% voltage thresholds."
      },
      {
        "symbol": "Output Load",
        "name": "Capacitive Load",
        "unit": "fF",
        "desc": "Sum of driven pin input capacitances and distributed interconnect wire parasitics."
      }
    ],
    "workedExample": {
      "title": "2D Bi-Linear Interpolation of Cell Delay from 7x7 Table",
      "scenario": "An INV_X2 standard cell drives Cload = 18 fF with input transition Slew = 45 ps. The library table has grid points: Slew1 = 30 ps, Slew2 = 60 ps; C1 = 10 fF, C2 = 25 fF. Cell delays at corners are: D(30,10)=28 ps, D(30,25)=48 ps, D(60,10)=36 ps, D(60,25)=58 ps. Calculate the interpolated cell delay.",
      "formula": "D = (1-u)(1-v)*D11 + u*(1-v)*D21 + (1-u)*v*D12 + u*v*D22",
      "values": "u = (45 - 30)/(60 - 30) = 0.50, v = (18 - 10)/(25 - 10) = 8/15 = 0.533",
      "calculation": "1) Weights: (1-0.5)*(1-0.533)=0.2335; 0.5*(1-0.533)=0.2335; (1-0.5)*0.533=0.2665; 0.5*0.533=0.2665.\\n2) D = (0.2335 * 28) + (0.2335 * 36) + (0.2665 * 48) + (0.2665 * 58).\\n3) D = 6.538 + 8.406 + 12.792 + 15.457 = 43.19 ps.",
      "result": "Interpolated Cell Propagation Delay = 43.2 ps.",
      "signoffJudgment": "PASSED: Result falls reliably between 36 ps and 48 ps; table interpolation validated."
    },
    "pvtSensitivity": {
      "summary": "Liberty timing tables are characterized across multiple PVT corners: ss_0.72v_125c (slow), ff_0.88v_-40c (fast), tt_0.80v_25c (nominal).",
      "slowCorner": "ss_0.72v_125c: High resistance and weak saturation currents shift table entries upward by ~30%.",
      "fastCorner": "ff_0.88v_-40c: Minimum delay values shrink, requiring careful hold characterization."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys SiliconSmart / Cadence Liberate",
      "title": "Standard Cell Library Characterization Flow",
      "tcl": "set_target_library {tsmc_n7_ss_0.72v_125c.lib tsmc_n7_ff_0.88v_-40c.lib}\nread_lib tsmc_n7_ss_0.72v_125c.lib\nwrite_lib tsmc_n7_ss -format db -output tsmc_n7_ss.db\nreport_lib -cell INV_X2"
    },
    "signoffChecklist": [
      "Ensure the 7\u00d77 slew and load index tables cover the entire design operating range to avoid extrapolation errors.",
      "Verify CCS power and timing models are characterized for advanced nodes (< 16nm).",
      "Confirm state-dependent leakage values are correctly captured for multi-input logic gates."
    ],
    "guidedExperiments": [
      "Experiment 1: In the Silicon Studio STA Lab, observe how changing stage delay reflects table lookups.",
      "Experiment 2: Simulate high-load vs low-load driving conditions.",
      "Experiment 3: Observe how transition slew steepness impacts downstream propagation latency."
    ]
  },
  "fe-lef": {
    "breakdown": [
      {
        "symbol": "Tech LEF",
        "name": "Technology Rules LEF",
        "unit": "file",
        "desc": "Defines manufacturing layers, routing pitch grids, minimum metal spacing, and via generation templates."
      },
      {
        "symbol": "Macro LEF",
        "name": "Cell Abstract LEF",
        "unit": "file",
        "desc": "Abstract layout of a standard cell or IP macro containing boundary size (ORIGIN, SIZE) and pin geometries."
      },
      {
        "symbol": "OBS",
        "name": "Obstruction Layer",
        "unit": "geometry",
        "desc": "Keepout geometry inside a macro where external routing metals cannot enter to prevent short circuits."
      },
      {
        "symbol": "Track Grid",
        "name": "Routing Track Pitch",
        "unit": "nm",
        "desc": "Predefined horizontal and vertical wire tracks where routing engines deposit metal lines."
      }
    ],
    "workedExample": {
      "title": "Standard Cell Height & Routing Track Pitch Calculation",
      "scenario": "A 7-track standard cell library is designed on Metal-2 with a track pitch of 40 nm. Calculate the total standard cell height and verify site boundary compatibility.",
      "formula": "Cell Height = Number of Tracks * Metal Pitch",
      "values": "Tracks = 7, Pitch = 40 nm, Site Width = 30 nm",
      "calculation": "1) Cell Height = 7 * 40 nm = 280 nm = 0.280 \u03bcm.\\n2) Power rail VDD sits on Track 7 (half inside cell, half shared with row above = 20 nm).\\n3) Ground rail VSS sits on Track 1 (shared with row below = 20 nm).\\n4) Available routing tracks for signal pins = 5 internal tracks.",
      "result": "Standard Cell Height = 280 nm (0.28 \u03bcm); provides 5 internal signal routing tracks.",
      "signoffJudgment": "PASSED: Cell dimensions conform strictly to foundry placement site grid rules."
    },
    "pvtSensitivity": {
      "summary": "LEF files describe physical geometries and are invariant with PVT, but metal temperature coefficients affect signoff resistance.",
      "slowCorner": "125\u00b0C: High metal resistance demands wider upper-metal straps for long-distance routing.",
      "fastCorner": "-40\u00b0C: Lower resistivity slightly increases capacitance impact."
    },
    "edaCommandRecipe": {
      "tool": "Cadence Innovus / Synopsys ICC2",
      "title": "LEF Library Loading & Verification Commands",
      "tcl": "read_lef {tech.lef stdcells.lef sram_16kb.lef pll.lef}\ncheck_lef -verbose\nreport_tracks -layer M2"
    },
    "signoffChecklist": [
      "Verify cell pins have geometries touching on-grid routing tracks to prevent pin-inaccessibility traps.",
      "Ensure all macro LEFs have valid OBS keepouts covering internal memory bitcell arrays.",
      "Confirm site definition in Tech LEF matches standard cell row height exactly."
    ],
    "guidedExperiments": [
      "Experiment 1: In the Logic Gates Studio, inspect the SVG Stick Diagram to visualize metal-1 and polysilicon tracks.",
      "Experiment 2: Notice how input/output pins must align with routing pitch tracks.",
      "Experiment 3: Observe diffusion rails running continuously across cell boundaries."
    ]
  },
  "be-floorplan": {
    "breakdown": [
      {
        "symbol": "Utilization",
        "name": "Core Utilization",
        "unit": "%",
        "desc": "Ratio of total cell/macro area to available core placement area (typically 65% - 75% target)."
      },
      {
        "symbol": "Aspect Ratio",
        "name": "Die Aspect Ratio (H/W)",
        "unit": "ratio",
        "desc": "Height-to-width ratio of the die (1.0 for square chips, 0.8 to 1.5 for rectangular form factors)."
      },
      {
        "symbol": "IO Pitch",
        "name": "Bump / Pad Pitch",
        "unit": "\u03bcm",
        "desc": "Center-to-center distance between adjacent C4 micro-bumps or wire-bond pads."
      },
      {
        "symbol": "Core Margin",
        "name": "Core-to-IO Distance",
        "unit": "\u03bcm",
        "desc": "Buffer perimeter space between active core logic and chip outer IO pads for power rings."
      }
    ],
    "workedExample": {
      "title": "Die Area and Utilization Sizing for 2.4 Million Gate SoC",
      "scenario": "A physical design engineer is floorplanning an ASIC with 2,400,000 standard cells (avg cell area = 0.85 \u03bcm\u00b2) and 12 SRAM macros totaling 450,000 \u03bcm\u00b2. Target core utilization is 70% with square aspect ratio (AR = 1.0). Calculate total core area and die dimensions.",
      "formula": "Total Cell Area = (N_{cells} * A_{avg}) + A_{macros}, Core Area = Total Cell Area / Utilization",
      "values": "N_{cells} = 2.4e6, A_{avg} = 0.85 \u03bcm\u00b2, A_{macros} = 450000 \u03bcm\u00b2, Util = 0.70",
      "calculation": "1) Std cell area = 2,400,000 * 0.85 = 2,040,000 \u03bcm\u00b2.\\n2) Total silicon area = 2,040,000 + 450,000 = 2,490,000 \u03bcm\u00b2.\\n3) Core Area = 2,490,000 / 0.70 = 3,557,143 \u03bcm\u00b2 \u2248 3.557 mm\u00b2.\\n4) For square die (AR = 1.0): Core Side = sqrt(3,557,143) = 1886 \u03bcm = 1.886 mm.\\n5) Adding 40 \u03bcm core margins on all sides: Die Size = (1886 + 80) * (1886 + 80) = 1966 * 1966 \u03bcm = 3.865 mm\u00b2.",
      "result": "Core Area = 3.56 mm\u00b2, Total Die Size = 1.97 mm \u00d7 1.97 mm (3.87 mm\u00b2).",
      "signoffJudgment": "PASSED: 70% utilization provides sufficient routing space for CTS and timing buffers without congestion."
    },
    "pvtSensitivity": {
      "summary": "Floorplan dimensions dictate maximum interconnect wire lengths and global RC propagation delays.",
      "slowCorner": "125\u00b0C: Long global wires crossing a 1.9 mm die suffer high resistance, requiring repeater insertion every 250 \u03bcm.",
      "fastCorner": "-40\u00b0C: Shorter wire delays reduce hold margins on register-to-register paths near die edges."
    },
    "edaCommandRecipe": {
      "tool": "Cadence Innovus / Synopsys ICC2",
      "title": "Floorplan Initialization and IO Ring Definition",
      "tcl": "init_floorplan -core_utilization 0.70 -aspect_ratio 1.0 -core_margins_by die {40 40 40 40}\ncreate_io_ring -name IO_RING -offset 10\nwrite_floorplan initial_floorplan.def"
    },
    "signoffChecklist": [
      "Verify core utilization does not exceed 75% for designs with heavy bus traffic to prevent routing DRC blowouts.",
      "Ensure power ring widths satisfy maximum current density EM limits for peak supply current.",
      "Confirm macro keepout halos are defined around all memories (min 8-15 \u03bcm channel spacing)."
    ],
    "guidedExperiments": [
      "Experiment 1: In the ASIC Flow Pipeline Studio, select Stage 2 (Floorplanning) to see macro placement and die boundary setup.",
      "Experiment 2: Step to Stage 3 (Power Planning) to view top-metal power mesh generation.",
      "Experiment 3: Inspect how aspect ratio adjustments alter the length of global bus interconnects."
    ]
  },
  "be-macro": {
    "breakdown": [
      {
        "symbol": "Macro Halo",
        "name": "Keepout Halo",
        "unit": "\u03bcm",
        "desc": "Placement blockage perimeter surrounding an SRAM or IP macro where standard cells are forbidden."
      },
      {
        "symbol": "Channel Width",
        "name": "Macro Channel Pitch",
        "unit": "\u03bcm",
        "desc": "Space between adjacent macros reserved for routing inter-block bus nets and power delivery straps."
      },
      {
        "symbol": "Flyline",
        "name": "Netlist Flight Line",
        "unit": "vector",
        "desc": "Visual line connecting macro pins to standard cell logic, indicating dataflow direction and wire tension."
      },
      {
        "symbol": "Orientation",
        "name": "Macro Orientation",
        "unit": "enum",
        "desc": "Placement rotation (R0, R90, R180, R270, MX, MY) aligned to point pins toward the core center."
      }
    ],
    "workedExample": {
      "title": "Memory Macro Channel Width Sizing for 64-Bit Bus",
      "scenario": "Two high-speed SRAM macros are placed face-to-face. A 64-bit wide datapath bus (64 data nets + 8 control nets = 72 nets) must route through the channel on Metal-3 (routing pitch = 80 nm). 3 routing layers are available. Calculate the minimum channel width with a 30% routing congestion safety factor.",
      "formula": "W_{channel} = (N_{nets} * Pitch / Layers) * Safety_Factor",
      "values": "N_{nets} = 72, Pitch = 80 nm, Layers = 3, Safety_Factor = 1.30",
      "calculation": "1) Ideal channel width = (72 * 0.080 \u03bcm) / 3 = 5.76 / 3 = 1.92 \u03bcm.\\n2) With 30% congestion factor: 1.92 * 1.30 = 2.496 \u03bcm.\\n3) Plus two power straps (VDD/VSS, 2.5 \u03bcm each + 1.0 \u03bcm spacing): 2.496 + 7.0 = 9.496 \u03bcm.\\n4) Recommended floorplan channel width = 10.0 \u03bcm.",
      "result": "Minimum Macro Channel Width = 10.0 \u03bcm.",
      "signoffJudgment": "PASSED: 10.0 \u03bcm channel provides comfortable routing clearance for 72 nets plus robust VDD/VSS power straps."
    },
    "pvtSensitivity": {
      "summary": "Narrow macro channels create routing bottlenecks that increase coupling capacitance and crosstalk delay.",
      "slowCorner": "ss_0.72v_125c: High wire resistance in congested channels causes setup violations.",
      "fastCorner": "ff_0.88v_-40c: Rapid clock arrival at macro pins can cause hold violations on SRAM inputs."
    },
    "edaCommandRecipe": {
      "tool": "Cadence Innovus / Synopsys ICC2",
      "title": "Macro Placement, Orientation and Halos",
      "tcl": "create_keepout_margin -type hard -outer {10 10 10 10} [get_cells -hier *sram*]\nset_attribute [get_cells sram_inst_0] orientation R180\nplace_macro -legalize"
    },
    "signoffChecklist": [
      "Ensure macro pins always face inward toward the core center to minimize interconnect flyline crossings.",
      "Verify macro keepout halos are at least 10 \u03bcm on all pin sides to allow pin access via ladders.",
      "Confirm no isolated standard cells are trapped between adjacent macro boundaries (no routing dead zones)."
    ],
    "guidedExperiments": [
      "Experiment 1: In the ASIC Flow Pipeline Studio, review macro placement rules in Stage 2.",
      "Experiment 2: Observe how keepout halos prevent standard cell clustering around memory edges.",
      "Experiment 3: Step to Power Planning to see how power rings surround memory macros."
    ]
  },
  "be-power": {
    "breakdown": [
      {
        "symbol": "\u0394V_{IR}",
        "name": "Static IR Drop",
        "unit": "mV",
        "desc": "DC voltage drop caused by steady-state current flowing through resistive metal grid tracks (V = I * R)."
      },
      {
        "symbol": "DVD",
        "name": "Dynamic Voltage Drop",
        "unit": "mV",
        "desc": "AC transient supply droop caused by high simultaneous switching currents and wire inductance (L * di/dt)."
      },
      {
        "symbol": "C_{decap}",
        "name": "Decoupling Capacitance",
        "unit": "pF",
        "desc": "On-chip charge reservoir capacitors placed near switching clusters to supply local transient currents."
      },
      {
        "symbol": "R_{eff}",
        "name": "Effective PG Resistance",
        "unit": "m\u03a9",
        "desc": "Equivalent resistance from chip C4 power bumps to the local standard cell power rails."
      }
    ],
    "workedExample": {
      "title": "Decoupling Capacitor (Decap) Sizing for 500 mA Current Spike",
      "scenario": "A high-speed ALU cluster switches within a 150 ps clock edge window, drawing a peak transient current spike \u0394I = 500 mA with duration \u0394t = 120 ps. The maximum allowable supply droop is \u0394V = 35 mV on a 0.75V rail. Calculate the minimum decoupling capacitance required to hold the rail steady.",
      "formula": "C_{decap} = \u0394Q / \u0394V_{tol} = (0.5 * \u0394I_{peak} * \u0394t) / \u0394V_{tol}",
      "values": "\u0394I_{peak} = 0.500 A, \u0394t = 120e-12 s, \u0394V_{tol} = 0.035 V",
      "calculation": "1) Total transient charge spike \u0394Q = 0.5 * 0.500 A * 120e-12 s = 30.0e-12 Coulombs (30 pC).\\n2) Required Decap C = 30.0e-12 / 0.035 = 857.14e-12 F = 857.1 pF.\\n3) If standard decap cells provide 2.5 fF/\u03bcm\u00b2: Decap Silicon Footprint = 857,143 fF / 2.5 fF/\u03bcm\u00b2 = 342,857 \u03bcm\u00b2.",
      "result": "Required C_{decap} = 857 pF (distributed as filler decap cells across the core).",
      "signoffJudgment": "PASSED: Decap network successfully clamps transient supply droop to \u2264 35 mV (< 4.7% of VDD)."
    },
    "pvtSensitivity": {
      "summary": "Supply droop directly reduces transistor overdrive voltage (VGS - Vth), causing severe gate delay degradation.",
      "slowCorner": "ss_0.72v_125c: A 10% IR drop reduces effective VDD from 0.72V to 0.65V, slowing timing paths by 22%.",
      "fastCorner": "ff_0.88v_-40c: Higher currents increase di/dt noise and power ground bounce."
    },
    "edaCommandRecipe": {
      "tool": "Cadence Voltus / Synopsys RedHawk",
      "title": "Static and Dynamic IR Drop Analysis Flow",
      "tcl": "read_power_grid -pg_net VDD -voltage 0.75\nread_power_grid -pg_net VSS -voltage 0.00\nanalyze_power_grid -static -report static_ir.rpt\nanalyze_power_grid -dynamic -vcd sim.vcd -report dynamic_ir.rpt"
    },
    "signoffChecklist": [
      "Static IR drop must not exceed 2% of nominal VDD (\u2264 15 mV on 0.75V rail) across 100% of standard cells.",
      "Dynamic IR drop must not exceed 5% of nominal VDD (\u2264 37.5 mV on 0.75V rail) under peak activity vectors.",
      "Verify top-metal power straps (Metal-7, Metal-8) form a continuous low-impedance mesh."
    ],
    "guidedExperiments": [
      "Experiment 1: In the ASIC Flow Pipeline Studio, select Stage 3 (Power Planning) to view PG strap generation.",
      "Experiment 2: Review how vertical and horizontal top-metal straps create low-resistance grids.",
      "Experiment 3: Step to Stage 4 (Placement) to see how decap filler cells occupy empty layout space."
    ]
  },
  "be-placement": {
    "breakdown": [
      {
        "symbol": "HPWL",
        "name": "Half-Perimeter Wire Length",
        "unit": "\u03bcm",
        "desc": "Standard mathematical cost function in analytical placement estimating total interconnect wire length."
      },
      {
        "symbol": "Congestion",
        "name": "Routing Congestion",
        "unit": "%",
        "desc": "Ratio of required routing tracks to available routing tracks in a Gcell (must stay below 100%)."
      },
      {
        "symbol": "Legalization",
        "name": "Cell Legalization",
        "unit": "process",
        "desc": "Snaps overlapping placed standard cells into distinct, non-overlapping legal rows aligned to site grids."
      },
      {
        "symbol": "HFNS",
        "name": "High Fanout Net Synthesis",
        "unit": "process",
        "desc": "Buffer tree insertion on high-fanout control signals (resets, enables, scan lines) during placement."
      }
    ],
    "workedExample": {
      "title": "Half-Perimeter Wire Length (HPWL) Calculation for 4-Pin Net",
      "scenario": "A 4-pin datapath net connects a driver at (120, 340) to three receiver pins located at (180, 420), (240, 290), and (310, 510) (coordinates in \u03bcm). Calculate the bounding box HPWL.",
      "formula": "HPWL = (X_{max} - X_{min}) + (Y_{max} - Y_{min})",
      "values": "X = {120, 180, 240, 310}, Y = {340, 420, 290, 510}",
      "calculation": "1) X_{min} = 120 \u03bcm, X_{max} = 310 \u03bcm.\\n2) \u0394X = 310 - 120 = 190 \u03bcm.\\n3) Y_{min} = 290 \u03bcm, Y_{max} = 510 \u03bcm.\\n4) \u0394Y = 510 - 290 = 220 \u03bcm.\\n5) HPWL = \u0394X + \u0394Y = 190 + 220 = 410 \u03bcm.",
      "result": "Net HPWL = 410 \u03bcm (estimated wire capacitance \u2248 61.5 fF at 0.15 fF/\u03bcm).",
      "signoffJudgment": "PASSED: Net wirelength is within the 500 \u03bcm single-stage buffer driving capability."
    },
    "pvtSensitivity": {
      "summary": "Long wires placed without repeaters suffer quadratic delay scaling: Delay \u221d 0.69 * R * C * L\u00b2.",
      "slowCorner": "ss_0.72v_125c: High metal resistance magnifies wire delay penalties on long nets.",
      "fastCorner": "ff_0.88v_-40c: Tightly clustered cells with short wires require hold buffer padding."
    },
    "edaCommandRecipe": {
      "tool": "Cadence Innovus / Synopsys ICC2",
      "title": "Global Placement, Optimization and Congestion Map",
      "tcl": "setPlaceMode -timingDriven true -congEffort high\nplace_opt_design\nreport_congestion -hotspot\ncheckPlace -verbose"
    },
    "signoffChecklist": [
      "Check that zero cell overlap errors remain after legalizer completion.",
      "Verify peak Gcell routing congestion is strictly under 100% (target < 85% for easy detailed routing).",
      "Confirm high-fanout nets (> 32 loads) are buffered by HFNS with max transition < 150 ps."
    ],
    "guidedExperiments": [
      "Experiment 1: In the ASIC Flow Pipeline Studio, select Stage 4 (Standard Cell Placement) to see global placement.",
      "Experiment 2: Check how analytical placement minimizes wirelength before detailed legalization.",
      "Experiment 3: Step to Stage 5 (CTS) to see how clock buffers are added to the placed design."
    ]
  },
  "be-cts": {
    "breakdown": [
      {
        "symbol": "T_{skew}",
        "name": "Clock Skew",
        "unit": "ps",
        "desc": "Difference in clock arrival times between capture register and launch register (T_capture - T_launch)."
      },
      {
        "symbol": "T_{latency}",
        "name": "Insertion Delay",
        "unit": "ps",
        "desc": "Total propagation delay from clock source pin / PLL output to the clock pin of a register."
      },
      {
        "symbol": "NDR",
        "name": "Non-Default Routing Rule",
        "unit": "rule",
        "desc": "2\u00d7 width and 2\u00d7 spacing routing rule used on clock nets to halve resistance and eliminate crosstalk."
      },
      {
        "symbol": "Clock Jitter",
        "name": "Clock Period Jitter",
        "unit": "ps",
        "desc": "Cycle-to-cycle temporal variations caused by PLL noise and power supply ripple."
      }
    ],
    "workedExample": {
      "title": "Clock Skew and Latency Budgeting across H-Tree Network",
      "scenario": "A 1.2 GHz clock network (Tclk = 833 ps) distributes clock to 15,000 flip-flops across an H-tree network with 4 buffer levels. Clock insertion delay to Launch FF is T_lat,launch = 320 ps. Clock insertion delay to Capture FF is T_lat,capture = 355 ps. Calculate clock skew and its impact on Setup Slack.",
      "formula": "T_{skew} = T_{lat,capture} - T_{lat,launch}, Slack_{setup,skewed} = Slack_{base} + T_{skew}",
      "values": "T_{lat,launch} = 320 ps, T_{lat,capture} = 355 ps, Slack_{base} = +45 ps",
      "calculation": "1) T_{skew} = 355 ps - 320 ps = +35 ps (Positive Skew).\\n2) Effective clock period for setup = T_{clk} + T_{skew} = 833 + 35 = 868 ps.\\n3) New Setup Slack = 45 ps + 35 ps = +80 ps.\\n4) Hold check impact: Effective margin for hold decreases by 35 ps (Hold Slack = Slack_{hold,base} - 35 ps).",
      "result": "Clock Skew = +35 ps. Setup slack improves by +35 ps; Hold slack degrades by 35 ps.",
      "signoffJudgment": "PASSED: Skew of 35 ps is well below the 50 ps foundry target (< 6% of cycle time)."
    },
    "pvtSensitivity": {
      "summary": "On-chip variation (OCV) causes asymmetric delay scaling between divergent clock branches.",
      "slowCorner": "ss_0.72v_125c: High insertion delay increases absolute skew variation across the chip.",
      "fastCorner": "ff_0.88v_-40c: Positive clock skew easily induces hold violations on zero-logic shift register paths."
    },
    "edaCommandRecipe": {
      "tool": "Cadence Innovus / Synopsys ICC2",
      "title": "Clock Tree Synthesis Specification and Execution",
      "tcl": "create_clock_tree_spec -target_skew 0.040 -target_latency 0.350 -buf_cells {CLKBUF_X4 CLKBUF_X8}\nset_clock_routing_rules -net_type clock -rule 2W2S\nccopt_design -cts\nreport_clock_trees -summary\nreport_clock_timing -type skew"
    },
    "signoffChecklist": [
      "Verify maximum clock skew across all registers in a single synchronous domain is under 50 ps.",
      "Ensure all clock trunks and branches route on shielded top metals using 2W2S NDR rules.",
      "Confirm Clock Tree Inverters/Buffers are balanced symmetrically with uniform slew rates (< 80 ps)."
    ],
    "guidedExperiments": [
      "Experiment 1: In the STA Timing & Waveforms Studio, adjust clock skew slider from -80 ps to +80 ps.",
      "Experiment 2: Observe how positive skew extends setup slack but consumes hold safety margin.",
      "Experiment 3: Watch the capture clock waveform shift horizontally in the 3-lane SVG timing lab."
    ]
  },
  "be-routing": {
    "breakdown": [
      {
        "symbol": "T_d",
        "name": "Elmore Wire Delay",
        "unit": "ps",
        "desc": "Interconnect delay model approximating distributed RC line delay: T_d = 0.69 * R_wire * C_wire."
      },
      {
        "symbol": "Metal Pitch",
        "name": "Wiring Pitch",
        "unit": "nm",
        "desc": "Minimum center-to-center distance between adjacent parallel metal wires on a given layer."
      },
      {
        "symbol": "Via Resistance",
        "name": "Inter-Layer Contact R",
        "unit": "\u03a9",
        "desc": "Electrical resistance through vertical via contacts (e.g. 5-20 \u03a9 per via in sub-10nm nodes)."
      },
      {
        "symbol": "Antenna Ratio",
        "name": "Gate Stress Ratio",
        "unit": "ratio",
        "desc": "Ratio of connected metal wire surface area to thin gate oxide area during plasma etching."
      }
    ],
    "workedExample": {
      "title": "Distributed RC Elmore Delay for 600 \u03bcm M3 Interconnect Wire",
      "scenario": "A long signal net routes 600 \u03bcm on Metal-3 without buffers. Metal-3 characteristics: Sheet resistance R_sq = 0.25 \u03a9/sq, wire width W = 0.08 \u03bcm (Resistance R_unit = 3.125 \u03a9/\u03bcm), capacitance C_unit = 0.18 fF/\u03bcm. Driven gate output impedance R_dr = 120 \u03a9; receiver input capacitance C_rec = 4.5 fF. Calculate Elmore delay.",
      "formula": "T_d = R_{dr} * (C_{wire} + C_{rec}) + R_{wire} * (0.5 * C_{wire} + C_{rec})",
      "values": "L = 600 \u03bcm, R_{wire} = 600 * 3.125 = 1875 \u03a9, C_{wire} = 600 * 0.18e-15 = 108 fF, R_{dr} = 120 \u03a9, C_{rec} = 4.5 fF",
      "calculation": "1) Driver component: 120 * (108e-15 + 4.5e-15) = 120 * 112.5e-15 = 13.5 ps.\\n2) Wire component: 1875 * (0.5 * 108e-15 + 4.5e-15) = 1875 * (54e-15 + 4.5e-15) = 1875 * 58.5e-15 = 109.69 ps.\\n3) Total Elmore Delay: 13.5 + 109.7 = 123.2 ps.",
      "result": "Total Wire Interconnect Delay = 123.2 ps.",
      "signoffJudgment": "PASSED: Delay is acceptable; inserting an inverter repeater at 300 \u03bcm would reduce delay to 72 ps."
    },
    "pvtSensitivity": {
      "summary": "Copper interconnect resistance increases by ~0.4% per \u00b0C rise, making high-temperature corners severely resistive.",
      "slowCorner": "125\u00b0C: High wire resistance causes steep transition degradation and signal slew violations.",
      "fastCorner": "-40\u00b0C: Lower wire resistance speeds up signal transitions, heightening crosstalk noise."
    },
    "edaCommandRecipe": {
      "tool": "Cadence Innovus / Synopsys ICC2",
      "title": "NanoRoute Detailed Routing and DRC Fixing",
      "tcl": "setNanoRouteMode -quiet -routeWithTimingDriven true -routeWithSiDriven true\nrouteDesign -globalDetail\nverify_drc -limit 1000 -report drc_postroute.rpt\nverify_connectivity -report conn.rpt"
    },
    "signoffChecklist": [
      "Verify zero DRC shorts, zero opens, and zero unconnected nets remain across all metal layers.",
      "Ensure all process antenna ratio violations are resolved by inserting antenna reverse-bias diodes.",
      "Confirm preferred routing directions (Horizontal on even layers, Vertical on odd layers) are maintained."
    ],
    "guidedExperiments": [
      "Experiment 1: In the ASIC Flow Pipeline Studio, select Stage 6 (Global & Detailed Routing) to see track assignment.",
      "Experiment 2: Observe how the routing engine resolves design rule check (DRC) pin access constraints.",
      "Experiment 3: Step to Stage 7 to review physical verification DRC and LVS checks."
    ]
  },
  "so-sta": {
    "breakdown": [
      {
        "symbol": "Slack_{setup}",
        "name": "Setup Timing Slack",
        "unit": "ps",
        "desc": "T_clk + T_skew - T_unc - (T_c2q + T_comb + T_setup); must be \u2265 0 ps for timing closure."
      },
      {
        "symbol": "Slack_{hold}",
        "name": "Hold Timing Slack",
        "unit": "ps",
        "desc": "T_c2q + T_comb - (T_hold + T_skew + T_unc); must be \u2265 0 ps to prevent race conditions."
      },
      {
        "symbol": "CRPR",
        "name": "Clock Reconvergence Pessimism",
        "unit": "ps",
        "desc": "Removal of artificial mathematical pessimism on shared clock tree branches analyzed at different min/max derates."
      },
      {
        "symbol": "POCV",
        "name": "Parametric OCV",
        "unit": "sigma",
        "desc": "Statistical delay modeling representing variation as Gaussian distribution (\u03bc \u00b1 3\u03c3)."
      }
    ],
    "workedExample": {
      "title": "Comprehensive Setup and Hold Slack Calculation with CRPR",
      "scenario": "A 1.0 GHz pipeline stage (Tclk = 1000 ps) has data path delay Tc2q + Tcomb = 680 ps, Tsetup = 60 ps, Thold = 40 ps. Launch clock latency = 280 ps, Capture clock latency = 310 ps (Tskew = +30 ps). Shared clock tree portion = 200 ps with 5% OCV derate (CRPR credit = 10 ps). Clock uncertainty = 35 ps. Calculate Setup and Hold Slack.",
      "formula": "Setup: T_{clk} + T_{skew} + CRPR - T_{unc} - Arrival, Hold: Arrival - (T_{hold} + T_{skew} + T_{unc}) + CRPR",
      "values": "T_{clk} = 1000 ps, T_{skew} = 30 ps, CRPR = 10 ps, T_{unc} = 35 ps, Data Arrival = 680 ps, T_{setup} = 60 ps, T_{hold} = 40 ps",
      "calculation": "1) Setup Required Time = 1000 + 30 + 10 - 35 - 60 = 945 ps.\\n2) Setup Arrival Time = 680 ps.\\n3) Setup Slack = 945 - 680 = +265 ps (Timing MET).\\n4) Hold Required Time = 40 + 30 + 35 - 10 = 95 ps.\\n5) Hold Arrival Time = 680 ps (for max path, min path typically ~110 ps).\\n6) Assuming min path data delay = 130 ps: Hold Slack = 130 - 95 = +35 ps (Timing MET).",
      "result": "Setup Slack = +265 ps (MET), Hold Slack = +35 ps (MET).",
      "signoffJudgment": "PASSED: Both setup and hold timing closed cleanly across multi-corner signoff."
    },
    "pvtSensitivity": {
      "summary": "Multi-Corner Multi-Mode (MCMM) analyzes hundreds of scenarios combining PVT corners and functional modes.",
      "slowCorner": "ss_0.72v_125c: Limits maximum clock frequency (setup critical).",
      "fastCorner": "ff_0.88v_-40c: Enforces minimum path delay buffers to prevent hold failure."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys PrimeTime / Cadence Tempus",
      "title": "Signoff STA Timing Verification & CRPR Configuration",
      "tcl": "set_operating_conditions -analysis_type on_chip_variation\nset_timing_derate -early 0.95 -late 1.05\nset_timing_derate -cell_delay -early 0.92 -late 1.08\nset_crpr_mode -crpr_pessimism_reduction true\nreport_timing -delay_type max -nworst 1 -path_type full_clock_expanded\nreport_timing -delay_type min -nworst 1 -path_type full_clock_expanded"
    },
    "signoffChecklist": [
      "Zero setup timing violations (WNS \u2265 0.0 ps) across all operational signoff modes and corners.",
      "Zero hold timing violations (WNS \u2265 0.0 ps) \u2014 no chip can tape out with a negative hold slack!",
      "Verify CRPR is explicitly enabled to avoid false timing violations on common clock paths."
    ],
    "guidedExperiments": [
      "Experiment 1: In the STA Timing & Waveforms Studio, adjust clock period, skew, and combinational delays live.",
      "Experiment 2: Observe real-time calculation of arrival time, required time, and setup slack.",
      "Experiment 3: Push datapath delay into violation territory and watch the red warning banner trigger."
    ]
  },
  "so-si": {
    "breakdown": [
      {
        "symbol": "V_{noise}",
        "name": "Crosstalk Glitch Peak",
        "unit": "mV",
        "desc": "Spurious voltage spike induced on a quiet victim wire by switching aggressor nets."
      },
      {
        "symbol": "C_c",
        "name": "Coupling Capacitance",
        "unit": "fF",
        "desc": "Inter-wire sidewall capacitance between adjacent parallel metal routing lines."
      },
      {
        "symbol": "C_g",
        "name": "Ground Capacitance",
        "unit": "fF",
        "desc": "Capacitance from victim wire down to underlying substrate and power/ground planes."
      },
      {
        "symbol": "M",
        "name": "Miller Factor",
        "unit": "ratio",
        "desc": "Coupling multiplier: M = 0 (same direction), M = 1 (quiet victim), M = 2 (opposite direction switching)."
      }
    ],
    "workedExample": {
      "title": "Crosstalk Coupling Voltage Glitch and Miller Delay Penalty",
      "scenario": "A quiet victim net (driver resistance R_dr = 150 \u03a9, ground capacitance C_g = 20 fF) runs parallel to two fast-switching aggressor nets (coupling capacitance C_c = 12 fF). Supply VDD = 0.75V. Calculate the induced crosstalk glitch peak voltage and check against the 25% noise margin limit.",
      "formula": "V_{glitch} = V_{DD} * (C_c / (C_g + C_c))",
      "values": "V_{DD} = 0.75 V, C_c = 12 fF, C_g = 20 fF",
      "calculation": "1) Total capacitance on victim node = C_g + C_c = 20 + 12 = 32 fF.\\n2) Glitch ratio = C_c / (C_g + C_c) = 12 / 32 = 0.375.\\n3) Peak noise voltage = 0.75 * 0.375 = 0.281 V = 281.25 mV.\\n4) Allowable noise margin (25% of VDD) = 0.25 * 0.75 = 0.1875 V = 187.5 mV.\\n5) Violation margin: 281.25 mV > 187.5 mV (VIOLATION).",
      "result": "Induced Noise Glitch = 281 mV. Exceeds noise margin by 93.8 mV.",
      "signoffJudgment": "FAILED: Net requires shielding (VSS guard trace), spacing increase, or victim driver up-sizing (X2 -> X4) to reduce R_dr."
    },
    "pvtSensitivity": {
      "summary": "Opposite-direction switching doubles effective coupling capacitance (Miller Factor M = 2), causing severe delay degradation.",
      "slowCorner": "ss_0.72v_125c: High driver resistance weakens victim holding strength, amplifying glitch duration.",
      "fastCorner": "ff_0.88v_-40c: Extremely steep aggressor slews maximize capacitive displacement current (I = C * dV/dt)."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys PrimeTime-SI / Cadence Tempus-SI",
      "title": "Signal Integrity Crosstalk Delay and Glitch Analysis",
      "tcl": "set_si_options -delta_delay true -static_noise true -min_dynamic_noise true\nreport_si_bottlenecks -cost_type delay\nreport_noise -slack_lesser_than 0.0 -below noise_margin"
    },
    "signoffChecklist": [
      "Verify zero crosstalk glitch violations exceed receiver gate threshold voltage (prevent functional corruption).",
      "Confirm all long clock nets are shielded with dedicated VSS guard traces on both sides.",
      "Verify delta-delay crosstalk inflation is included in final setup and hold signoff timing runs."
    ],
    "guidedExperiments": [
      "Experiment 1: In the STA Timing Studio, observe how coupling capacitance increases effective arrival times.",
      "Experiment 2: Simulate aggressor switching in opposite direction to witness Miller effect delay explosion.",
      "Experiment 3: Test how victim driver up-sizing restores holding strength and reduces glitch voltage."
    ]
  },
  "so-pv": {
    "breakdown": [
      {
        "symbol": "DRC",
        "name": "Design Rule Check",
        "unit": "check",
        "desc": "Geometric verification confirming shapes satisfy minimum width, spacing, enclosure, and area foundry rules."
      },
      {
        "symbol": "LVS",
        "name": "Layout Versus Schematic",
        "unit": "check",
        "desc": "Topological comparison proving extracted layout connectivity exactly matches the synthesized gate netlist."
      },
      {
        "symbol": "ERC",
        "name": "Electrical Rule Check",
        "unit": "check",
        "desc": "Verifies substrate well taps, floating gates, direct power-to-ground shorts, and ESD diode protection."
      },
      {
        "symbol": "Density",
        "name": "Metal Layer Density",
        "unit": "%",
        "desc": "Requires metal coverage within 20% - 80% per window to ensure planarity during CMP polishing."
      }
    ],
    "workedExample": {
      "title": "Process Antenna Effect Ratio Calculation and Diode Sizing",
      "scenario": "A 120 \u03bcm Metal-4 route (width = 0.10 \u03bcm, area = 12.0 \u03bcm\u00b2) directly connects to the input gate of an inverter (gate area = 0.025 \u03bcm\u00b2). The foundry antenna ratio limit is 400:1. Calculate the antenna ratio and determine if an antenna diode is required.",
      "formula": "Antenna Ratio = Total Metal Area / Connected Gate Area",
      "values": "Metal Area = 12.0 \u03bcm\u00b2, Gate Area = 0.025 \u03bcm\u00b2, Limit = 400",
      "calculation": "1) Antenna Ratio = 12.0 / 0.025 = 480:1.\\n2) Comparing against rule limit: 480 > 400 (Antenna Violation by 80 units).\\n3) Diode remedy: Insert an antenna diode (diffusion area = 0.08 \u03bcm\u00b2).\\n4) Effective denominator with diode: Gate Area + (Diode Area * Weight) = 0.025 + (0.08 * 10) = 0.825 \u03bcm\u00b2.\\n5) New ratio = 12.0 / 0.825 = 14.5:1 (Clean).",
      "result": "Antenna Ratio = 480:1 (Violation). Inserting antenna diode brings ratio to 14.5:1 (Clean).",
      "signoffJudgment": "PASSED with Diode: Antenna diode provides safe charge discharge path during plasma etching."
    },
    "pvtSensitivity": {
      "summary": "DRC and LVS rules are temperature and voltage invariant, but layout dummy metal fill impacts post-fill RC extraction.",
      "slowCorner": "Dummy metal fill increases parasitic wire capacitance by 5-10%, requiring post-fill timing signoff re-validation.",
      "fastCorner": "Over-etching at wafer edges must be accounted for in optical proximity correction (OPC) models."
    },
    "edaCommandRecipe": {
      "tool": "Siemens Calibre / Synopsys IC Validator",
      "title": "Full-Chip DRC and LVS Signoff Execution",
      "tcl": "calibre -gui -drc calibre_drc.rule\ncalibre -gui -lvs calibre_lvs.rule -layout top.gds -source top.v\nreport_lvs_discrepancies -summary"
    },
    "signoffChecklist": [
      "Zero DRC violations across all base and metal layers on the final GDSII/OASIS tapeout database.",
      "Clean LVS report showing 100% net and instance count matching between schematic and layout.",
      "Metal fill density meets foundry windowed CMP specifications (typically 25% - 75% across 50\u03bcm windows)."
    ],
    "guidedExperiments": [
      "Experiment 1: In the Logic Gates Studio, review the SVG Stick Diagram to visualize layer enclosures and contacts.",
      "Experiment 2: In the ASIC Flow Pipeline Studio, select Stage 7 (DRC/LVS Verification) to inspect verification decks.",
      "Experiment 3: Step through Stage 8 (Parasitic Extraction) to see how layout geometry is converted into SPEF parasitics."
    ]
  },
  "so-em": {
    "breakdown": [
      {
        "symbol": "MTTF",
        "name": "Mean Time to Failure",
        "unit": "hours",
        "desc": "Black's equation reliability metric predicting wire lifespan before atomic void formation causes an open circuit."
      },
      {
        "symbol": "J",
        "name": "Current Density",
        "unit": "mA/\u03bcm\u00b2",
        "desc": "Electric current per unit cross-sectional metal area; must remain below foundry EM limits."
      },
      {
        "symbol": "E_a",
        "name": "Activation Energy",
        "unit": "eV",
        "desc": "Thermal energy barrier for metal atom self-diffusion (typically 0.8 - 1.0 eV for copper interconnects)."
      },
      {
        "symbol": "T",
        "name": "Junction Temperature",
        "unit": "K",
        "desc": "Operational temperature; elevated temperatures dramatically accelerate electromigration voiding."
      }
    ],
    "workedExample": {
      "title": "Black's Electromigration Current Density & Wire Width Sizing",
      "scenario": "A high-current clock buffer drives a peak RMS current I_rms = 4.2 mA. The foundry electromigration rule limit for Metal-4 at 105\u00b0C is J_max = 2.0 mA/\u03bcm. Metal-4 thickness is t = 0.15 \u03bcm. Calculate the minimum wire width required to satisfy EM reliability for a 10-year lifetime.",
      "formula": "W_{min} = I_{rms} / (J_{max} * t)",
      "values": "I_{rms} = 4.2 mA, J_{max} = 2.0 mA/\u03bcm\u00b2, t = 0.15 \u03bcm",
      "calculation": "1) Cross-sectional area required: A_{min} = I_{rms} / J_{max} = 4.2 mA / 2.0 mA/\u03bcm\u00b2 = 2.10 \u03bcm\u00b2.\\n2) Minimum wire width: W_{min} = A_{min} / t = 2.10 \u03bcm\u00b2 / 0.15 \u03bcm = 14.0 \u03bcm.\\n3) Alternative multi-track routing: Route using 4 parallel Metal-4 wires of width 3.5 \u03bcm each.",
      "result": "Minimum single-wire width = 14.0 \u03bcm (or 4 parallel tracks of 3.5 \u03bcm width).",
      "signoffJudgment": "PASSED: Multi-track strap distributes current density below the 2.0 mA/\u03bcm\u00b2 limit."
    },
    "pvtSensitivity": {
      "summary": "Electromigration degradation accelerates exponentially with temperature: MTTF \u221d exp(Ea / kT).",
      "slowCorner": "125\u00b0C: Maximum allowable current density drops by ~60% compared to 85\u00b0C operation.",
      "fastCorner": "Self-heating effect (SHE) in FinFET/GAA nodes can elevate local metal temperature 15\u00b0C above ambient."
    },
    "edaCommandRecipe": {
      "tool": "Cadence Voltus / Synopsys RedHawk",
      "title": "Signal and Power Electromigration Analysis",
      "tcl": "set_em_rules -temperature 105 -lifetime 10yr\nanalyze_power_grid -em -net VDD -report em_power.rpt\nanalyze_signal_em -report em_signal.rpt"
    },
    "signoffChecklist": [
      "Zero signal net EM violations: All clock and high-frequency data nets meet foundry current density limits.",
      "Power grid EM verification: Top-metal straps and via arrays handle worst-case steady-state DC current.",
      "Via arrays on power nets must contain redundant vias to prevent single-via open circuit failure."
    ],
    "guidedExperiments": [
      "Experiment 1: In the ASIC Flow Pipeline Studio, select Stage 3 (Power Planning) to review power mesh current limits.",
      "Experiment 2: Step to Stage 9 (Timing Signoff & Power Integrity) to view Voltus EM check outputs.",
      "Experiment 3: Observe how temperature increases drive current restrictions."
    ]
  },
  "so-tapeout": {
    "breakdown": [
      {
        "symbol": "GDSII / OASIS",
        "name": "Tapeout Format",
        "unit": "file",
        "desc": "Standard hierarchical binary stream format delivering final physical mask shapes to the semiconductor foundry."
      },
      {
        "symbol": "ECO",
        "name": "Engineering Change Order",
        "unit": "process",
        "desc": "Surgical post-routing modification fixing residual timing slacks or functional bugs using spare cells."
      },
      {
        "symbol": "Spare Cells",
        "name": "Pre-Placed Redundant Gates",
        "unit": "cells",
        "desc": "Unconnected standard cells uniformly distributed across the core layout during floorplanning for metal-only ECOs."
      },
      {
        "symbol": "Mask Layers",
        "name": "Photolithography Reticles",
        "unit": "layers",
        "desc": "Base layers (diffusion, poly, contact) vs Metal layers (metal-1 through top metal); metal-only ECOs save millions in mask costs."
      }
    ],
    "workedExample": {
      "title": "Metal-Only ECO Cost Savings vs Full Mask Re-Spin",
      "scenario": "A late functional bug in an encryption block requires swapping a 2-input AND gate for an XOR gate after base layer fabrication. The design includes 250 spare cell clusters across the core. Compare mask replacement costs between a Metal-Only ECO (replacing M1, M2, M3) and a Full Re-Spin (all 65 masks) for a 7nm node.",
      "formula": "Cost = N_{reticles} * Cost_{per_reticle}",
      "values": "N_{metal} = 3 masks, N_{total} = 65 masks, Cost_{avg_reticle} = $120,000",
      "calculation": "1) Full Re-Spin Cost = 65 * $120,000 = $7,800,000 and 14 weeks fab turnaround.\\n2) Metal-Only ECO Cost = 3 * $120,000 = $360,000 and 3 weeks fab turnaround.\\n3) Financial savings = $7,800,000 - $360,000 = $7,440,000 (95.4% savings).\\n4) Schedule savings = 14 weeks - 3 weeks = 11 weeks faster to market.",
      "result": "Metal-only ECO saves $7.44M in mask costs and accelerates delivery by 11 weeks.",
      "signoffJudgment": "PASSED: Spare cells rewired successfully via Metal-1/Metal-2 ECO routes."
    },
    "pvtSensitivity": {
      "summary": "ECO fixes must be verified across all signoff corners to ensure a fix in one corner does not induce a violation in another.",
      "slowCorner": "ss_0.72v_125c: Verify setup slack does not degrade on modified nets.",
      "fastCorner": "ff_0.88v_-40c: Check hold slack on all rewired spare cells."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys PrimeTime / Cadence Conformal ECO",
      "title": "Functional and Timing ECO Generation",
      "tcl": "read_verilog -golden rtl_rev2.v\nread_verilog -revised netlist_routed.v\ncompare\nwrite_eco_changes -format innovus -output eco_changes.tcl\n# In Innovus: source eco_changes.tcl; ecoRoute"
    },
    "signoffChecklist": [
      "Verify checksum of the tapeout GDSII/OASIS file against foundry tapeout release portal.",
      "Confirm all signoff checklists (STA, DRC, LVS, ERC, EM, IR Drop) have formal engineering management signoff.",
      "Ensure mask layer naming and data types match the target foundry process design kit (PDK) specification."
    ],
    "guidedExperiments": [
      "Experiment 1: In the ASIC Flow Pipeline Studio, select Stage 10 (Full-Chip Signoff & Tapeout) to see final deliverables.",
      "Experiment 2: Step through the entire 10-stage pipeline to review the complete RTL-to-GDSII flow.",
      "Experiment 3: Inspect key tapeout deliverables including GDSII/OASIS, dummy fill layers, and signoff logs."
    ]
  },
  "adv-finfet": {
    "breakdown": [
      {
        "symbol": "W_{eff}",
        "name": "Effective Channel Width",
        "unit": "nm",
        "desc": "3D channel conduction area: W_eff = 2 * H_fin + W_fin per fin; quantized in discrete fin counts."
      },
      {
        "symbol": "GAA / Nanosheet",
        "name": "Gate-All-Around",
        "unit": "device",
        "desc": "Transistor architecture where gate material completely surrounds 3 or 4 horizontally stacked silicon nanosheets."
      },
      {
        "symbol": "SHE",
        "name": "Self-Heating Effect",
        "unit": "\u00b0C",
        "desc": "Localized temperature rise inside narrow fins/nanosheets caused by poor thermal conductivity of surrounding low-k dielectric."
      },
      {
        "symbol": "Subthreshold Swing",
        "name": "Gate Control (SS)",
        "unit": "mV/dec",
        "desc": "Steepness of sub-threshold conduction; GAA approaches the 62 mV/decade physical limit at room temperature."
      }
    ],
    "workedExample": {
      "title": "FinFET Effective Width and Drive Current Quantization",
      "scenario": "A 5nm FinFET process features fins of height H_fin = 52 nm and thickness W_fin = 7 nm. A standard cell drive inverter uses 3 fins for NMOS and 4 fins for PMOS. Calculate the effective channel width W_eff for both transistors.",
      "formula": "W_{eff,per_fin} = 2 * H_{fin} + W_{fin}, Total W_{eff} = N_{fins} * W_{eff,per_fin}",
      "values": "H_{fin} = 52 nm, W_{fin} = 7 nm, N_{NMOS} = 3 fins, N_{PMOS} = 4 fins",
      "calculation": "1) Single fin effective width: 2 * 52 nm + 7 nm = 104 + 7 = 111 nm = 0.111 \u03bcm.\\n2) NMOS Total W_{eff} = 3 * 111 nm = 333 nm (0.333 \u03bcm).\\n3) PMOS Total W_{eff} = 4 * 111 nm = 444 nm (0.444 \u03bcm).\\n4) Effective PMOS/NMOS width ratio = 444 / 333 = 1.33 (partially compensates for hole mobility).",
      "result": "NMOS W_eff = 333 nm, PMOS W_eff = 444 nm.",
      "signoffJudgment": "PASSED: Width quantization complies strictly with discrete fin-pitch manufacturing rules."
    },
    "pvtSensitivity": {
      "summary": "Severe self-heating (SHE) in GAA nanosheets elevates local device temperature 15-20\u00b0C above substrate ambient.",
      "slowCorner": "ss_0.72v_125c: Thermal accumulation accelerates electromigration and degrades drive current.",
      "fastCorner": "ff_0.88v_-40c: Extremely high transconductance demands aggressive hold buffer padding."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys ICC2 / Cadence Innovus",
      "title": "FinFET and GAA Nanosheet Grid Placement Mode",
      "tcl": "set_app_options -name place.finfet.fin_pitch -value 0.024\nset_app_options -name place.legalize.snap_to_fin_grid -value true\nreport_finfet_parameters"
    },
    "signoffChecklist": [
      "Ensure all standard cells align strictly to integer multiples of the continuous fin pitch grid.",
      "Verify self-heating thermal derates are applied in reliability and electromigration signoff runs.",
      "Check that multi-height cells (1-fin vs 2-fin cell rows) satisfy row abutment spacing rules."
    ],
    "guidedExperiments": [
      "Experiment 1: In the MOSFET IV Studio, adjust parameters to model 3D tri-gate electrostatic channel control.",
      "Experiment 2: Observe how the steep subthreshold slope prevents short-channel DIBL leakage.",
      "Experiment 3: Examine the channel pinch-off diagram under high gate overdrive voltages."
    ]
  },
  "adv-litho": {
    "breakdown": [
      {
        "symbol": "R",
        "name": "Rayleigh Resolution",
        "unit": "nm",
        "desc": "Minimum printable pitch feature: R = k1 * (\u03bb / NA); governs lithographic limits."
      },
      {
        "symbol": "\u03bb = 13.5 nm",
        "name": "EUV Wavelength",
        "unit": "nm",
        "desc": "Extreme Ultraviolet wavelength generated by pulsing high-power CO2 laser on molten tin droplets."
      },
      {
        "symbol": "NA",
        "name": "Numerical Aperture",
        "unit": "ratio",
        "desc": "Light-gathering capability of projection optics (0.33 NA for standard EUV, 0.55 NA for High-NA EUV)."
      },
      {
        "symbol": "EPE",
        "name": "Edge Placement Error",
        "unit": "nm",
        "desc": "Total statistical variation combining mask error, optical blur, resist blur, and overlay error."
      }
    ],
    "workedExample": {
      "title": "Rayleigh Resolution Limit: 193nm Immersion vs 13.5nm EUV",
      "scenario": "Compare the minimum resolvable half-pitch resolution R between a 193nm Deep Ultraviolet immersion system (\u03bb = 193 nm, NA = 1.35, k1 = 0.28) and an Extreme Ultraviolet system (\u03bb = 13.5 nm, NA = 0.33, k1 = 0.40).",
      "formula": "R = k_1 * (\u03bb / NA)",
      "values": "DUVi: \u03bb=193 nm, NA=1.35, k1=0.28; EUV: \u03bb=13.5 nm, NA=0.33, k1=0.40",
      "calculation": "1) 193nm ArFi Resolution: R_{DUV} = 0.28 * (193 / 1.35) = 0.28 * 142.96 = 40.03 nm.\\n2) 13.5nm EUV Resolution: R_{EUV} = 0.40 * (13.5 / 0.33) = 0.40 * 40.91 = 16.36 nm.\\n3) Resolution improvement: 40.03 / 16.36 = 2.45\u00d7 finer single-exposure resolution.\\n4) High-NA EUV (NA = 0.55): R = 0.40 * (13.5 / 0.55) = 9.82 nm.",
      "result": "Single-exposure limit: 193nm Immersion = 40 nm, Standard EUV = 16.4 nm, High-NA EUV = 9.8 nm.",
      "signoffJudgment": "PASSED: EUV eliminates 4-mask SAQP quadruple patterning loops, drastically improving defect yield."
    },
    "pvtSensitivity": {
      "summary": "Photolithography process variations (dose, focus, line-edge roughness) dictate physical on-chip variation (POCV).",
      "slowCorner": "Corner variations induce line-end shortening and contact resistance spikes.",
      "fastCorner": "Over-exposure shrinks gate lengths, inflating subthreshold leakage."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys IC Validator / Siemens Calibre OPC",
      "title": "Lithography Edge Placement Error (EPE) Verification",
      "tcl": "calibre -gui -drc epe_check.rule\nset_app_options -name route.common.euv_routing_rules -value true\ncheck_lfd -min_line_width 18 -min_line_space 18"
    },
    "signoffChecklist": [
      "Verify all critical metal layers (M0, M1, M2) conform to 1D unidirectional grating design rules.",
      "Ensure stitched mask boundaries for High-NA anamorphic lenses align with macro boundaries.",
      "Confirm OPC dummy features are applied before final mask fracture tapeout."
    ],
    "guidedExperiments": [
      "Experiment 1: In the ASIC Flow Pipeline Studio, select Stage 7 (DRC/LVS) to see lithographic check decks.",
      "Experiment 2: Review how optical proximity correction (OPC) alters mask shapes to compensate for diffraction.",
      "Experiment 3: Step to Tapeout to observe GDSII fracturing into mask writing beams."
    ]
  },
  "adv-pkg": {
    "breakdown": [
      {
        "symbol": "UCIe",
        "name": "Universal Chiplet Interconnect Express",
        "unit": "spec",
        "desc": "Open industry standard defining physical die-to-die interface bandwidth, latency, and protocols."
      },
      {
        "symbol": "Micro-Bump Pitch",
        "name": "Interconnect Pitch",
        "unit": "\u03bcm",
        "desc": "Center-to-center spacing of micro-bumps (25-55 \u03bcm in 2.5D interposers, down to < 1 \u03bcm in 3D hybrid bonding)."
      },
      {
        "symbol": "Silicon Interposer",
        "name": "Passive / Active Substrate",
        "unit": "component",
        "desc": "High-density silicon or organic substrate providing sub-micron interconnect routing between adjacent chiplets (e.g. TSMC CoWoS, Intel EMIB)."
      },
      {
        "symbol": "Thermal Flux",
        "name": "Dissipation Density",
        "unit": "W/cm\u00b2",
        "desc": "Heat dissipation challenge in 3D stacked dies where top dies insulate bottom compute dies."
      }
    ],
    "workedExample": {
      "title": "2.5D Interposer Die-to-Die Bandwidth Calculation (CoWoS / UCIe)",
      "scenario": "A high-performance AI accelerator chiplet interfaces with 4 High-Bandwidth Memory (HBM3) stacks across a silicon interposer using UCIe Standard Package. Each HBM3 interface uses 1024 data lines operating at a data rate of 6.4 Gbps per pin. Calculate total aggregate memory bandwidth in Terabytes per second (TB/s).",
      "formula": "Bandwidth_{per_stack} = (N_{lines} * Data_Rate) / 8, Total Bandwidth = N_{stacks} * Bandwidth_{per_stack}",
      "values": "N_{lines} = 1024 lines, Data_Rate = 6.4e9 bps, N_{stacks} = 4 HBM3 stacks",
      "calculation": "1) Bandwidth per HBM3 stack = (1024 * 6.4 * 10\u2079 bits/s) / 8 bits/byte = 6.5536 * 10\u00b9\u00b2 bytes/s = 819.2 GB/s.\\n2) Total aggregate bandwidth = 4 * 819.2 GB/s = 3276.8 GB/s.\\n3) In Terabytes per second = 3276.8 / 1024 = 3.20 TB/s.",
      "result": "Total Aggregate Memory Bandwidth = 3.20 TB/s (3,277 GB/s).",
      "signoffJudgment": "PASSED: Provides 3.2 TB/s bandwidth with sub-2ns die-to-die latency, satisfying AI training throughput targets."
    },
    "pvtSensitivity": {
      "summary": "3D stacked chiplets suffer severe vertical thermal gradient coupling: bottom logic dies run 25\u00b0C hotter than single-die packages.",
      "slowCorner": "125\u00b0C: Die-to-die PHY drivers suffer higher resistance across silicon interposer traces.",
      "fastCorner": "-40\u00b0C: Micro-bump thermal expansion mismatch creates mechanical stress near die corners."
    },
    "edaCommandRecipe": {
      "tool": "Synopsys 3DIC Compiler / Cadence Integrity 3D-IC",
      "title": "2.5D/3D Multi-Die Interposer Co-Design and Thermal Signoff",
      "tcl": "create_3d_design -name AI_ACCEL_3DIC\nread_chiplet -name COMPUTE_DIE -def compute.def -lef compute.lef\nread_chiplet -name HBM3_STACK -def hbm3.def -lef hbm3.lef\ncreate_interposer -technology cowos_s -thickness 100\nconnect_die_to_die -bus_type ucie_standard\nanalyze_thermal -power_map thermal_grid.pwr -report thermal_3d.rpt"
    },
    "signoffChecklist": [
      "Verify micro-bump alignment and pad keepout regions (PKR) meet thermal-mechanical stress rules.",
      "Confirm die-to-die signal latency satisfies UCIe PHY timing budgets (< 2.0 ns round-trip).",
      "Run multi-die thermal integrity analysis to ensure maximum junction temperature does not exceed 105\u00b0C."
    ],
    "guidedExperiments": [
      "Experiment 1: In the ASIC Flow Pipeline Studio, select Stage 10 (Full-Chip Signoff) to review advanced packaging options.",
      "Experiment 2: Compare standard wire-bonding with silicon interposers (CoWoS) and 3D direct hybrid bonding.",
      "Experiment 3: Observe how micro-bump density scales bandwidth by orders of magnitude."
    ]
  }
};

function renderLearnTracks() {
  const container = document.getElementById('learnTrackTabs');
  if (!container) return;

  container.innerHTML = `
    <button class="track-nav-btn ${state.activeLearnTrack === 'all' ? 'active' : ''}" data-track="all">
      <span>All Tracks</span>
      <span class="track-badge-count">${LEARN_LESSONS.length}</span>
    </button>
  ` + LEARN_TRACKS.map(track => {
    const isActive = state.activeLearnTrack === track.id;
    return `
      <button class="track-nav-btn ${isActive ? 'active' : ''}" data-track="${track.id}">
        <span>${track.title}</span>
        <span class="track-badge-count">${track.count}</span>
      </button>
    `;
  }).join('');

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.track-nav-btn');
    if (!btn) return;
    container.querySelectorAll('.track-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeLearnTrack = btn.dataset.track;
    renderLearnModules();
  });
}

function renderLearnModules() {
  const grid = document.getElementById('learnModulesGrid');
  if (!grid) return;

  let lessons = LEARN_LESSONS;

  // Filter by track
  if (state.activeLearnTrack && state.activeLearnTrack !== 'all') {
    lessons = lessons.filter(l => l.trackId === state.activeLearnTrack);
  }

  // Filter by search query
  if (state.learnSearchQuery) {
    const q = state.learnSearchQuery;
    lessons = lessons.filter(l => 
      l.title.toLowerCase().includes(q) ||
      (l.subtitle && l.subtitle.toLowerCase().includes(q)) ||
      (l.topics && l.topics.some(t => t.toLowerCase().includes(q))) ||
      (l.summary && l.summary.toLowerCase().includes(q))
    );
  }

  if (lessons.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-primary);">No lessons match your search query.</p>
        <button class="btn-secondary" onclick="resetLearnFilters()" style="margin-top: 1rem;">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = lessons.map(lesson => {
    const isStudied = state.studiedLessonIds.has(lesson.id);
    const track = LEARN_TRACKS.find(t => t.id === lesson.trackId) || { badge: 'Track' };
    const guiInfo = LESSON_GUI_MAP[lesson.id];

    return `
      <article class="learn-module-card ${isStudied ? 'studied' : ''}" id="card-lesson-${lesson.id}" onclick="openLessonModal('${lesson.id}')" style="cursor: pointer;" title="Click to read full study notes & interview Q&A">
        <div>
          <div class="learn-card-header">
            <span class="module-number-tag">LESSON ${lesson.number}</span>
            <div style="display:flex; align-items:center; gap:0.4rem; flex-wrap:wrap;">
              ${guiInfo ? `<button class="btn-open-interactive" onclick="event.stopPropagation(); launchStudioGui('${guiInfo.tab}')" title="Open Interactive Simulator">${guiInfo.label}</button>` : ''}
              <span class="badge ${isStudied ? 'badge-emerald' : 'badge-cyan'}">${isStudied ? '✓ Studied' : track.badge}</span>
            </div>
          </div>
          <h3 class="learn-card-title">${lesson.title}</h3>
          <p class="learn-card-desc">${lesson.summary.substring(0, 150)}...</p>
          <div class="learn-topics-chips">
            ${(lesson.topics || []).map(topic => `<span class="learn-topic-pill">${topic}</span>`).join('')}
          </div>
        </div>
        <div class="learn-card-footer">
          <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">${lesson.duration || '20 min read'}</span>
          <button class="btn-open-lesson" onclick="event.stopPropagation(); openLessonModal('${lesson.id}')" title="Open Study Notes & Q&A">
            <span>Read Study Notes</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

window.resetLearnFilters = function() {
  state.activeLearnTrack = 'all';
  state.learnSearchQuery = '';
  const searchInput = document.getElementById('learnSearchInput');
  if (searchInput) searchInput.value = '';
  renderLearnTracks();
  renderLearnModules();
};

window.openLessonModal = function(lessonId) {
  const lesson = LEARN_LESSONS.find(l => l.id === lessonId);
  if (!lesson) {
    console.warn('Lesson not found:', lessonId);
    return;
  }

  const modal = document.getElementById('lessonModalBackdrop');
  if (!modal) {
    console.warn('Modal element #lessonModalBackdrop not found');
    return;
  }

  state.currentModalLessonId = lesson.id;
  const isStudied = state.studiedLessonIds.has(lesson.id);
  const track = LEARN_TRACKS.find(t => t.id === lesson.trackId) || { title: 'Mastery Track' };

  // Set title and subtitle
  const tagEl = document.getElementById('modalLessonTag');
  const titleEl = document.getElementById('modalLessonTitle');
  const subtitleEl = document.getElementById('modalLessonSubtitle');
  if (tagEl) tagEl.textContent = `LESSON ${lesson.number} • ${track.title}`;
  if (titleEl) titleEl.textContent = lesson.title;
  if (subtitleEl) subtitleEl.textContent = lesson.subtitle || lesson.level;

  // Toggle Studied button state
  const markStudiedBtn = document.getElementById('modalMarkStudiedBtn');
  if (markStudiedBtn) {
    markStudiedBtn.innerHTML = isStudied 
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Studied (Mark Incomplete)`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Mark as Studied`;
    markStudiedBtn.className = isStudied ? 'btn-secondary' : 'btn-primary';
    markStudiedBtn.onclick = () => toggleLessonStudied(lesson.id);
  }

  // Render initial tab (theory)
  switchModalTab('theory');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.switchModalTab = function(tabKey) {
  state.activeModalTab = tabKey || 'theory';
  const lessonId = state.currentModalLessonId;
  const lesson = LEARN_LESSONS.find(l => l.id === lessonId);
  if (!lesson) return;

  const tabsNav = document.getElementById('modalLessonTabsNav');
  if (tabsNav) {
    tabsNav.querySelectorAll('.modal-tab-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.modaltab === state.activeModalTab);
    });
  }

  const contentEl = document.getElementById('modalLessonContent');
  if (!contentEl) return;

  const guiInfo = LESSON_GUI_MAP[lesson.id] || { tab: 'inverter', label: '⚡ Launch Interactive Studio' };
  const exp = LESSON_EXPANDED_DATA[lesson.id] || {};

  if (state.activeModalTab === 'theory') {
    contentEl.innerHTML = `
      <div class="lesson-section-block">
        <div class="lesson-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>Executive Summary & Physical Foundations</span>
        </div>
        <div style="background:rgba(0, 242, 254, 0.05); border-left:3px solid var(--accent-cyan); padding:1.15rem 1.35rem; border-radius:var(--radius-md); font-size:0.96rem; color:var(--text-primary); line-height:1.7; margin-bottom:1.5rem;">
          ${lesson.summary}
        </div>

        <div class="lesson-section-title" style="margin-top:1.75rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          <span>Deep-Dive Engineering Theory & Physical Mechanisms</span>
        </div>
        <div style="color:var(--text-secondary); line-height:1.75; font-size:0.94rem;">
          ${lesson.deepDive || ''}
        </div>

        <div style="margin-top:2rem; background:var(--bg-card); border:1px solid var(--border-medium); border-radius:var(--radius-lg); padding:1.25rem 1.5rem;">
          <h4 style="color:var(--accent-cyan); font-size:1.02rem; margin-bottom:0.75rem; display:flex; align-items:center; gap:0.5rem;">
            <span>⚡ Silicon Architecture & EDA Tool Flow Impact</span>
          </h4>
          <p style="font-size:0.92rem; color:var(--text-secondary); line-height:1.65; margin-bottom:0.75rem;">
            In industrial physical design flows (Cadence Innovus / Synopsys ICC2 / PrimeTime), concepts from <strong>${lesson.title}</strong> directly dictate synthesis algorithms, placement legalizer constraints, and signoff timing closure.
          </p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.75rem; margin-top:1rem;">
            <div style="background:var(--bg-secondary); padding:0.85rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
              <strong style="color:var(--accent-cyan); font-size:0.8rem; display:block; margin-bottom:0.25rem;">Power Impact:</strong>
              <span style="font-size:0.85rem; color:var(--text-muted);">Directly impacts dynamic capacitive dissipation and subthreshold leakage budgets.</span>
            </div>
            <div style="background:var(--bg-secondary); padding:0.85rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
              <strong style="color:var(--accent-purple); font-size:0.8rem; display:block; margin-bottom:0.25rem;">Performance Impact:</strong>
              <span style="font-size:0.85rem; color:var(--text-muted);">Defines critical path setup/hold margins and maximum achievable operating frequency Fmax.</span>
            </div>
            <div style="background:var(--bg-secondary); padding:0.85rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
              <strong style="color:var(--accent-emerald); font-size:0.8rem; display:block; margin-bottom:0.25rem;">Area & Density Impact:</strong>
              <span style="font-size:0.85rem; color:var(--text-muted);">Influences cell sizing, repeater buffer counts, and overall die core utilization.</span>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (state.activeModalTab === 'formula') {
    const breakdown = exp.breakdown || [];
    const worked = exp.workedExample;
    const pvt = exp.pvtSensitivity;

    contentEl.innerHTML = `
      <div class="lesson-section-block">
        <div class="lesson-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
          <span>Primary Governing Physical & Timing Equations</span>
        </div>
        <div class="lesson-formula-callout" style="padding:1.25rem; font-size:1.05rem;">
          <code>${lesson.formula || 'N/A'}</code>
        </div>

        <h4 style="color:var(--text-primary); margin:1.75rem 0 0.75rem; font-size:1.05rem; display:flex; align-items:center; gap:0.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>Physical Variable Breakdown & SI Engineering Units</span>
        </h4>
        <div style="overflow-x:auto; margin-bottom:1.75rem;">
          <table style="width:100%; border-collapse:collapse; font-size:0.88rem; text-align:left;">
            <thead>
              <tr style="border-bottom:1px solid var(--border-medium); color:var(--text-primary); background:rgba(0,242,254,0.06);">
                <th style="padding:0.65rem 0.85rem; font-family:var(--font-mono);">Variable</th>
                <th style="padding:0.65rem 0.85rem;">Parameter Name</th>
                <th style="padding:0.65rem 0.85rem; font-family:var(--font-mono);">Units</th>
                <th style="padding:0.65rem 0.85rem;">Physical Description & Engineering Significance</th>
              </tr>
            </thead>
            <tbody>
              ${breakdown.map((row, i) => `
                <tr style="border-bottom:1px solid var(--border-subtle); background:${i%2===0?'transparent':'rgba(255,255,255,0.02)'};">
                  <td style="padding:0.65rem 0.85rem; font-family:var(--font-mono); color:var(--accent-cyan); font-weight:700;">${row.symbol}</td>
                  <td style="padding:0.65rem 0.85rem; color:var(--text-primary); font-weight:600;">${row.name}</td>
                  <td style="padding:0.65rem 0.85rem; font-family:var(--font-mono); color:var(--accent-purple);">${row.unit}</td>
                  <td style="padding:0.65rem 0.85rem; color:var(--text-secondary); line-height:1.5;">${row.desc}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        ${worked ? `
          <div style="background:var(--bg-card); border:1px solid var(--border-medium); border-radius:var(--radius-lg); padding:1.5rem; margin-bottom:1.75rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.85rem; flex-wrap:wrap; gap:0.5rem;">
              <h4 style="color:var(--accent-emerald); font-size:1.05rem; margin:0; display:flex; align-items:center; gap:0.5rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Real-World Worked Numerical Example: ${worked.title}</span>
              </h4>
              <span class="badge badge-emerald">Foundry Validated</span>
            </div>
            <p style="font-size:0.92rem; color:var(--text-primary); line-height:1.6; margin-bottom:0.75rem;">
              <strong>Scenario:</strong> ${worked.scenario}
            </p>
            <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1rem; font-family:var(--font-mono); font-size:0.84rem; color:var(--text-primary); line-height:1.6; margin-bottom:0.75rem; white-space:pre-wrap;">${worked.calculation}</div>
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem; padding-top:0.5rem; border-top:1px solid var(--border-subtle);">
              <div style="font-size:0.88rem; color:var(--accent-cyan); font-family:var(--font-mono); font-weight:700;">${worked.result}</div>
              <div style="font-size:0.85rem; color:var(--accent-emerald); font-weight:600;">${worked.signoffJudgment}</div>
            </div>
          </div>
        ` : ''}

        ${pvt ? `
          <div style="background:rgba(245, 158, 11, 0.05); border:1px solid rgba(245, 158, 11, 0.25); border-radius:var(--radius-lg); padding:1.25rem 1.5rem;">
            <h4 style="color:var(--accent-amber); font-size:0.98rem; margin-bottom:0.65rem; display:flex; align-items:center; gap:0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <span>PVT Corner Scaling & Temperature Derate Sensitivity</span>
            </h4>
            <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.6; margin-bottom:0.75rem;">${pvt.summary}</p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:0.75rem; font-size:0.86rem;">
              <div style="background:var(--bg-secondary); padding:0.75rem 1rem; border-radius:var(--radius-md); border-left:3px solid #ef4444;">
                <strong style="color:#ef4444; display:block; margin-bottom:0.2rem;">Slow Corner (ss_0.72v_125c):</strong>
                <span style="color:var(--text-muted);">${pvt.slowCorner}</span>
              </div>
              <div style="background:var(--bg-secondary); padding:0.75rem 1rem; border-radius:var(--radius-md); border-left:3px solid #3b82f6;">
                <strong style="color:#3b82f6; display:block; margin-bottom:0.2rem;">Fast Corner (ff_0.88v_-40c):</strong>
                <span style="color:var(--text-muted);">${pvt.fastCorner}</span>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  } else if (state.activeModalTab === 'interactive') {
    const experiments = exp.guidedExperiments || [
      'Experiment 1: Adjust primary input variables with the interactive sliders.',
      'Experiment 2: Observe live SVG waveform and characteristic curve updates.',
      'Experiment 3: Check pass/fail signoff metric readouts under corner variations.'
    ];

    contentEl.innerHTML = `
      <div class="lesson-section-block">
        <div class="lesson-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span>Interactive Silicon Studio & Real-Time GUI Simulation</span>
        </div>
        <div style="background:var(--bg-card); border:1px solid var(--border-medium); border-radius:var(--radius-xl); padding:2rem; text-align:center; display:flex; flex-direction:column; align-items:center; gap:1.25rem;">
          <div style="width:60px; height:60px; border-radius:50%; background:rgba(0, 242, 254, 0.15); display:flex; align-items:center; justify-content:center; color:var(--accent-cyan); font-size:1.85rem; box-shadow:0 0 24px rgba(0,242,254,0.3);">
            ⚡
          </div>
          <div>
            <span class="badge badge-cyan" style="margin-bottom:0.5rem; display:inline-block;">Live Hardware Simulation Engine</span>
            <h3 style="font-size:1.35rem; color:var(--text-primary); font-family:var(--font-heading); margin-bottom:0.35rem;">
              ${guiInfo.label}
            </h3>
            <p style="color:var(--text-secondary); max-width:580px; font-size:0.94rem; line-height:1.65; margin:0 auto;">
              Explore the real-time mathematical behavior of <strong>${lesson.title}</strong> using dynamic SVG canvas curves, live slider controls, and instant signoff metric recalculations.
            </p>
          </div>

          <div style="width:100%; max-width:620px; background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:1.25rem 1.5rem; text-align:left;">
            <h4 style="color:var(--accent-cyan); font-size:0.95rem; margin-bottom:0.75rem; display:flex; align-items:center; gap:0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              <span>Recommended Guided Engineering Experiments:</span>
            </h4>
            <ul style="padding-left:1.25rem; font-size:0.88rem; color:var(--text-secondary); line-height:1.7; margin:0;">
              ${experiments.map(expText => `<li>${expText}</li>`).join('')}
            </ul>
          </div>

          <button class="btn-primary" onclick="launchStudioGui('${guiInfo.tab}')" style="margin-top:0.5rem; padding:0.85rem 2rem; font-size:1rem; box-shadow:0 0 20px var(--accent-cyan-glow);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span>Launch Live Interactive GUI Studio ↗</span>
          </button>
        </div>
      </div>
    `;
  } else if (state.activeModalTab === 'tips') {
    const recipe = exp.edaCommandRecipe;
    const checklist = exp.signoffChecklist || [
      'Strictly enforce foundry DRC and LVS clean signoff decks.',
      'Verify timing closure across all PVT operational modes.',
      'Check power integrity and IR drop limits before mask release.'
    ];

    contentEl.innerHTML = `
      <div class="lesson-section-block">
        <div class="lesson-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span>Physical Design Practitioner Tips & Tapeout Gotchas</span>
        </div>
        <div style="background: rgba(245, 158, 11, 0.08); border-left: 3px solid var(--accent-amber); padding: 1.25rem 1.5rem; border-radius: var(--radius-md); font-size: 0.95rem; color: var(--text-primary); line-height: 1.7; margin-bottom:1.75rem;">
          ${lesson.tips || 'Follow foundry DRC/LVS rule decks strictly during signoff closure.'}
        </div>

        ${recipe ? `
          <div style="background:var(--bg-card); border:1px solid var(--border-medium); border-radius:var(--radius-lg); padding:1.25rem 1.5rem; margin-bottom:1.75rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
              <h4 style="color:var(--accent-cyan); font-size:0.98rem; margin:0; display:flex; align-items:center; gap:0.5rem;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span>Production EDA Command Recipe (${recipe.tool})</span>
              </h4>
              <span class="badge badge-purple">${recipe.title}</span>
            </div>
            <pre style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1rem; font-family:var(--font-mono); font-size:0.84rem; color:var(--text-primary); line-height:1.6; overflow-x:auto; margin:0;"><code>${recipe.tcl}</code></pre>
          </div>
        ` : ''}

        <h4 style="color:var(--text-primary); margin-bottom:0.75rem; font-size:1.05rem; display:flex; align-items:center; gap:0.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          <span>Production Signoff Verification Checklist:</span>
        </h4>
        <ul style="padding-left:1.25rem; line-height:1.8; font-size:0.92rem; color:var(--text-secondary);">
          ${checklist.map(item => `<li><strong>Check:</strong> ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  } else if (state.activeModalTab === 'interview') {
    contentEl.innerHTML = `
      <div class="lesson-section-block">
        <div class="lesson-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <span>Tier-1 Semiconductor Company Interview Questions (${(lesson.interviewQA || []).length})</span>
        </div>
        <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:1.5rem; line-height:1.6;">
          Real interview questions asked by engineering interviewers at <strong>Apple, NVIDIA, Qualcomm, TSMC, Intel, and AMD</strong> for Physical Design, STA, and CAD roles:
        </p>
        ${(lesson.interviewQA || []).map((qa, idx) => `
          <div class="lesson-qa-box" style="margin-bottom:1.5rem; background:var(--bg-card); border:1px solid var(--border-medium); border-radius:var(--radius-lg); padding:1.25rem 1.5rem;">
            <div class="lesson-qa-q" style="font-size:1rem; font-weight:700; color:var(--text-primary); margin-bottom:0.75rem; display:flex; align-items:flex-start; gap:0.65rem;">
              <span style="color:var(--accent-cyan); font-family:var(--font-mono); font-weight: 800; background:rgba(0,242,254,0.1); padding:0.15rem 0.5rem; border-radius:var(--radius-sm); font-size:0.85rem;">Q${idx + 1}</span>
              <span>${qa.q}</span>
            </div>
            <div class="lesson-qa-a" style="color:var(--text-secondary); font-size:0.93rem; line-height:1.7; padding-left:2.5rem;">
              <div style="background:rgba(16,185,129,0.06); border-left:3px solid var(--accent-emerald); padding:0.75rem 1rem; border-radius:var(--radius-sm); margin-bottom:0.65rem;">
                <strong style="color:var(--accent-emerald); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.06em; display:block; margin-bottom:0.25rem;">Core Engineering Takeaway:</strong>
                <span>${qa.a.split('.')[0]}.</span>
              </div>
              <strong style="color:var(--accent-cyan); font-size:0.78rem; text-transform:uppercase; letter-spacing:0.06em; display:block; margin-bottom:0.25rem;">In-Depth Technical Solution:</strong>
              ${qa.a}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
};

window.openLessonDrawer = window.openLessonModal;

window.closeLessonModal = function() {
  const modal = document.getElementById('lessonModalBackdrop');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.closeLessonDrawer = window.closeLessonModal;

window.toggleLessonStudied = function(lessonId) {
  if (state.studiedLessonIds.has(lessonId)) {
    state.studiedLessonIds.delete(lessonId);
    showToast('Lesson marked as incomplete');
  } else {
    state.studiedLessonIds.add(lessonId);
    showToast('Lesson completed! Progress saved.');
  }
  localStorage.setItem('educatevlsi_studied_lessons', JSON.stringify([...state.studiedLessonIds]));
  updateLearnProgress();
  renderLearnModules();
  
  // Update button in modal if currently open
  const markStudiedBtn = document.getElementById('modalMarkStudiedBtn');
  const isStudied = state.studiedLessonIds.has(lessonId);
  if (markStudiedBtn) {
    markStudiedBtn.innerHTML = isStudied 
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Studied (Mark Incomplete)`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Mark as Studied`;
    markStudiedBtn.className = isStudied ? 'btn-secondary' : 'btn-primary';
  }
};

function updateLearnProgress() {
  const total = LEARN_LESSONS.length;
  const studied = state.studiedLessonIds.size;
  const pct = Math.round((studied / total) * 100);

  const fillEl = document.getElementById('learnProgressBarFill');
  const countEl = document.getElementById('learnProgressCount');
  const badgeEl = document.getElementById('learnProgressBadge');

  if (fillEl) fillEl.style.width = `${pct}%`;
  if (countEl) countEl.textContent = `${studied} of ${total} Lessons Completed`;
  if (badgeEl) badgeEl.textContent = `${pct}% Mastered`;
}

/* ==========================================================================
   Silicon Study Vault & Reference Library (D:\EducateVLSI\Study)
   ========================================================================== */
function initStudyVault() {
  const filterNav = document.getElementById('studyVaultFilterNav');
  const searchInput = document.getElementById('studySearchInput');

  if (filterNav) {
    filterNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.track-nav-btn');
      if (!btn) return;
      filterNav.querySelectorAll('.track-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeStudyCategory = btn.dataset.cat || 'all';
      renderStudyVault();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.studySearchQuery = e.target.value.trim().toLowerCase();
      renderStudyVault();
    });
  }

  renderStudyVault();
}

function renderStudyVault() {
  const grid = document.getElementById('studyVaultGrid');
  if (!grid) return;

  let items = STUDY_VAULT_ITEMS;

  if (state.activeStudyCategory && state.activeStudyCategory !== 'all') {
    items = items.filter(it => it.category === state.activeStudyCategory);
  }

  if (state.studySearchQuery) {
    const q = state.studySearchQuery;
    items = items.filter(it =>
      it.title.toLowerCase().includes(q) ||
      it.desc.toLowerCase().includes(q) ||
      (it.meta && it.meta.some(m => m.toLowerCase().includes(q)))
    );
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        No study materials match your search query. Try resetting filters.
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(it => {
    let tagClass = 'study-tag-html';
    let btnClass = 'html-btn';
    let actionLabel = 'Launch Interactive Lab ↗';
    let iconSvg = '<polygon points="5 3 19 12 5 21 5 3"/>';

    if (it.type === 'pdf') {
      tagClass = 'study-tag-pdf';
      btnClass = 'pdf-btn';
      actionLabel = 'Open Handbook PDF ↗';
      iconSvg = '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>';
    } else if (it.type === 'video') {
      tagClass = 'study-tag-video';
      btnClass = 'video-btn';
      actionLabel = 'Watch Video Lecture ↗';
      iconSvg = '<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>';
    } else if (it.type === 'doc') {
      tagClass = 'study-tag-doc';
      btnClass = 'doc-btn';
      actionLabel = 'View Reference Guide ↗';
      iconSvg = '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>';
    }

    return `
      <article class="study-vault-card" id="card-${it.id}">
        <div>
          <div class="study-card-header">
            <span class="study-tag ${tagClass}">${it.badge}</span>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">${it.type}</span>
          </div>
          <h3 class="study-card-title">${it.title}</h3>
          <p class="study-card-desc">${it.desc}</p>
          <div class="study-meta-chips">
            ${(it.meta || []).map(m => `<span class="study-meta-pill">${m}</span>`).join('')}
          </div>
        </div>
        <div class="study-card-footer">
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">D:\\EducateVLSI\\Study</span>
          <a href="${it.file}" target="_blank" rel="noopener noreferrer" class="btn-study-launch ${btnClass}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${iconSvg}
            </svg>
            <span>${actionLabel}</span>
          </a>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   SILICON INTERACTIVE STUDIO & GUI LAB ENGINE
   ========================================================================== */
const studioState = {
  activeTab: 'inverter',
  invVin: 0.60,
  invVdd: 1.20,
  invBeta: 2.50,
  staTclk: 4.0,
  staTlaunch: 0.8,
  staTdata: 2.4,
  staTcapture: 1.0,
  staTmargin: 0.45,
  mosVgs: 1.20,
  mosVds: 1.00,
  mosVth: 0.45,
  mosVsb: 0.00,
  pipelineActiveStage: 0,
  logicGate: 'inv',
  logicInA: 0,
  logicInB: 0
};

const PIPELINE_STAGES = [
  {
    name: '1. Architecture & RTL',
    sub: 'Design Capture & Linting',
    inputs: 'System Architecture Spec, Microarchitecture Block Diagram',
    outputs: 'Synthesizable Verilog / SystemVerilog (.v, .sv)',
    edaCmd: 'SpyGlass: lint_design -effort high\nVCS: vcs -sverilog top_tb.sv',
    challenges: 'Deadlock avoidance, clock domain crossings (CDC), synthesis/simulation mismatch',
    signoff: '0 Lint errors, 0 CDC un-synchronized paths, 100% functional testbench pass'
  },
  {
    name: '2. Logic Synthesis',
    sub: 'Translation & Mapping',
    inputs: 'RTL Netlist (.v), Liberty Models (.lib), Timing Constraints (.sdc)',
    outputs: 'Gate-level Netlist (.v), Initial SDC (.sdc), Area & Power Reports',
    edaCmd: 'Synopsys DC: compile_ultra -gate_clock\nCadence Genus: syn_generic; syn_map; syn_opt',
    challenges: 'Clock gating efficiency (ICG insertion), area-timing trade-offs, arithmetic datapath mapping',
    signoff: 'Zero negative slack (WNS ≥ 0), zero unmapped GTECH gates, max transition violations clean'
  },
  {
    name: '3. Floorplanning',
    sub: 'Die Sizing & Macro Placement',
    inputs: 'Gate-level Netlist, Technology LEF, Macro LEF, IO Pin Constraints',
    outputs: 'Floorplan DEF (.def), Macro Placement Guidelines, Die Boundary Specs',
    edaCmd: 'ICC2: initialize_floorplan -core_utilization 0.65\nInnovus: init_design; planDesign',
    challenges: 'Macro flylines & routing channel blockages, macro halo keepouts, thermal hotspot distribution',
    signoff: 'Core utilization 60-70%, no overlapping macros, valid IO pad ring pitch verified'
  },
  {
    name: '4. Power Delivery (PDN)',
    sub: 'PG Rings & Mesh Straps',
    inputs: 'Floorplan DEF, Static IR Drop Budget, Technology Layer Stack',
    outputs: 'Power-grid Routed DEF, Decap Capacitor Fill Locations',
    edaCmd: 'ICC2: create_pg_ring -layers {M8 M9}\nInnovus: addRing -nets {VDD VSS}; addStripe',
    challenges: 'IR drop target (< 2% VDD), Electromigration (EM) current density limits, decap sizing',
    signoff: 'Static IR drop < 20mV across core, EM current density < Jmax across all power straps'
  },
  {
    name: '5. Cell Placement',
    sub: 'Global & Legalized Placement',
    inputs: 'Power Mesh DEF, Timing Constraints (.sdc), Liberty (.lib)',
    outputs: 'Placed DEF, Congestion Maps, High-Fanout Synthesis (HFNS) Trees',
    edaCmd: 'ICC2: create_placement -timing_driven\nInnovus: place_opt_design',
    challenges: 'Pin density congestion in routing channels, cell displacement minimization, timing legalization',
    signoff: 'Max routing congestion overflow < 1.0%, zero site overlaps, setup WNS bounded'
  },
  {
    name: '6. Clock Tree (CTS)',
    sub: 'Clock Buffering & Balancing',
    inputs: 'Placed Netlist & DEF, Clock Tree Specs (NDR, Target Skew & Latency)',
    outputs: 'Clock-routed DEF, Clock Tree Reports, Propagated Clock SDC',
    edaCmd: 'ICC2: synthesize_clock_trees -target_skew 0.05\nInnovus: clock_design -spec cts.spec',
    challenges: 'Balancing insertion delay vs skew, clock power dissipation, clock tree crosstalk shielding',
    signoff: 'Clock skew < 50ps across corners, max clock transition < 100ps, clock power < 30% total'
  },
  {
    name: '7. Routing',
    sub: 'Global & Detailed Routing',
    inputs: 'CTS DEF, Non-Default Rules (NDR), Technology DRC Rules',
    outputs: 'Fully Routed DEF, Detailed Wire SPEF (.spef), Antenna Violation Reports',
    edaCmd: 'ICC2: route_auto -global_only; route_detail\nInnovus: route_design -globalDetail',
    challenges: 'Crosstalk coupling capacitance (Miller effect), antenna ratio violations, DRC spacing & shorts',
    signoff: 'Zero routing opens, zero shorts, zero antenna ratio violations (diodes placed)'
  },
  {
    name: '8. STA Signoff & SI',
    sub: 'Multi-Corner Multi-Mode (MCMM)',
    inputs: 'Routed DEF, Extracted Parasitics SPEF (.spef), Multi-Corner .lib',
    outputs: 'Timing Signoff Reports, ECO TCL Scripts, SDF Delay Files (.sdf)',
    edaCmd: 'PrimeTime: report_timing -max_paths 50 -delay_type max_min\nTempus: report_timing -retime',
    challenges: 'Clock Reconvergence Pessimism Removal (CRPR), OCV/POCV derates, crosstalk glitch noise',
    signoff: 'WNS = 0.00ps, TNS = 0.00ps, Hold WNS = 0.00ps, Max Transition = 0, Max Cap = 0'
  },
  {
    name: '9. Physical DRC/LVS',
    sub: 'Geometric & Electrical Verification',
    inputs: 'OASIS / GDSII Layout Stream, Golden Schematic Netlist (.sp), DRC Rule Deck',
    outputs: 'Calibre DRC Results Database (RDB), LVS Match Comparison Reports',
    edaCmd: 'Calibre nmDRC: calibre -drc -hier calibre_drc.rules\nCalibre nmLVS: calibre -lvs -hier calibre_lvs.rules',
    challenges: 'Complex FinFET multi-patterning (SADP/SAQP) design rules, density gradient rules, ESD ERC',
    signoff: 'DRC Clean: 0 design rule violations; LVS Clean: "Smiles" (Schematic and Layout MATCH exactly)'
  },
  {
    name: '10. Tapeout Release',
    sub: 'Mask Delivery to Foundry',
    inputs: 'DRC/LVS Clean GDSII/OASIS, Dummy Fill Injected Database, Wafer Scribe Line Rules',
    outputs: 'Signed Off Mask Delivery Tape, Tapeout Signoff Certificate',
    edaCmd: 'ICC2: write_gds -view design -units 1000 tapeout.gds\nCalibre: calibre -drc -hier dummy_fill.rules',
    challenges: 'Optical Proximity Correction (OPC) yield optimization, wafer perimeter keepouts, mask costs',
    signoff: 'Official Foundry Tapeout Review (TRB) Passed; Mask tape sent to TSMC / Samsung / Intel'
  }
];

function initSiliconStudio() {
  const tabsBar = document.getElementById('studioTabsBar');
  if (tabsBar) {
    tabsBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.studio-tab-btn');
      if (!btn) return;
      switchStudioTab(btn.dataset.tab);
    });
  }

  // Hook CMOS Inverter Sliders
  const slVin = document.getElementById('sliderInvVin');
  const slVdd = document.getElementById('sliderInvVdd');
  const slBeta = document.getElementById('sliderInvBeta');

  if (slVin) {
    slVin.addEventListener('input', (e) => {
      studioState.invVin = parseFloat(e.target.value);
      renderInverterSim();
    });
  }
  if (slVdd) {
    slVdd.addEventListener('input', (e) => {
      studioState.invVdd = parseFloat(e.target.value);
      if (slVin) slVin.max = studioState.invVdd;
      renderInverterSim();
    });
  }
  if (slBeta) {
    slBeta.addEventListener('input', (e) => {
      studioState.invBeta = parseFloat(e.target.value);
      renderInverterSim();
    });
  }

  // Hook STA Sliders
  const slStaTclk = document.getElementById('sliderStaTclk');
  const slStaTlaunch = document.getElementById('sliderStaTlaunch');
  const slStaTdata = document.getElementById('sliderStaTdata');
  const slStaTcapture = document.getElementById('sliderStaTcapture');
  const slStaTmargin = document.getElementById('sliderStaTmargin');

  if (slStaTclk) {
    slStaTclk.addEventListener('input', (e) => {
      studioState.staTclk = parseFloat(e.target.value);
      renderStaSim();
    });
  }
  if (slStaTlaunch) {
    slStaTlaunch.addEventListener('input', (e) => {
      studioState.staTlaunch = parseFloat(e.target.value);
      renderStaSim();
    });
  }
  if (slStaTdata) {
    slStaTdata.addEventListener('input', (e) => {
      studioState.staTdata = parseFloat(e.target.value);
      renderStaSim();
    });
  }
  if (slStaTcapture) {
    slStaTcapture.addEventListener('input', (e) => {
      studioState.staTcapture = parseFloat(e.target.value);
      renderStaSim();
    });
  }
  if (slStaTmargin) {
    slStaTmargin.addEventListener('input', (e) => {
      studioState.staTmargin = parseFloat(e.target.value);
      renderStaSim();
    });
  }

  // Hook MOSFET Sliders
  const slMosVgs = document.getElementById('sliderMosVgs');
  const slMosVds = document.getElementById('sliderMosVds');
  const slMosVth = document.getElementById('sliderMosVth');
  const slMosVsb = document.getElementById('sliderMosVsb');

  if (slMosVgs) {
    slMosVgs.addEventListener('input', (e) => {
      studioState.mosVgs = parseFloat(e.target.value);
      renderMosfetSim();
    });
  }
  if (slMosVds) {
    slMosVds.addEventListener('input', (e) => {
      studioState.mosVds = parseFloat(e.target.value);
      renderMosfetSim();
    });
  }
  if (slMosVth) {
    slMosVth.addEventListener('input', (e) => {
      studioState.mosVth = parseFloat(e.target.value);
      renderMosfetSim();
    });
  }
  if (slMosVsb) {
    slMosVsb.addEventListener('input', (e) => {
      studioState.mosVsb = parseFloat(e.target.value);
      renderMosfetSim();
    });
  }

  // Initial renders
  renderInverterSim();
  renderStaSim();
  renderMosfetSim();
  renderPipelineStages();
  renderLogicGateSim();
}

window.switchStudioTab = function(tabName) {
  studioState.activeTab = tabName;
  const tabsBar = document.getElementById('studioTabsBar');
  if (tabsBar) {
    tabsBar.querySelectorAll('.studio-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
  }

  const panel = document.getElementById('studioViewportPanel');
  if (panel) {
    panel.querySelectorAll('.studio-pane').forEach(p => p.classList.remove('active'));
    const paneMap = {
      inverter: 'paneInverter',
      sta: 'paneSta',
      mosfet: 'paneMosfet',
      pipeline: 'panePipeline',
      logic: 'paneLogic'
    };
    const target = document.getElementById(paneMap[tabName]);
    if (target) target.classList.add('active');
  }

  if (tabName === 'inverter') renderInverterSim();
  if (tabName === 'sta') renderStaSim();
  if (tabName === 'mosfet') renderMosfetSim();
  if (tabName === 'pipeline') renderPipelineStages();
  if (tabName === 'logic') renderLogicGateSim();
};

/* --------------------------------------------------------------------------
   1. CMOS Inverter VTC Engine
   -------------------------------------------------------------------------- */
window.setInvPreset = function(vin) {
  studioState.invVin = vin;
  const sl = document.getElementById('sliderInvVin');
  if (sl) sl.value = vin;
  renderInverterSim();
};

function renderInverterSim() {
  const vin = studioState.invVin;
  const vdd = studioState.invVdd;
  const betaRatio = studioState.invBeta;
  const vtn = 0.35;
  const vtp = -0.35;

  const vm = (vtn + Math.sqrt(betaRatio) * (vdd - Math.abs(vtp))) / (1 + Math.sqrt(betaRatio));
  
  // Calculate Vout
  let vout;
  let regionName = 'Region C: Saturation Transition';
  let stateLabel = 'TRANSITION (META)';
  let stateClass = 'amber';

  if (vin < vtn) {
    vout = vdd;
    regionName = 'Region A: NMOS Cutoff, PMOS Linear';
    stateLabel = 'LOGIC 1 (HIGH)';
    stateClass = 'emerald';
  } else if (vin > vdd - Math.abs(vtp)) {
    vout = 0.0;
    regionName = 'Region E: NMOS Linear, PMOS Cutoff';
    stateLabel = 'LOGIC 0 (LOW)';
    stateClass = 'cyan';
  } else {
    // Sigmoid transition around VM
    const k = 14 / vdd;
    vout = vdd / (1 + Math.exp(k * (vin - vm)));
    if (vin < vm - 0.12) {
      regionName = 'Region B: NMOS Saturation, PMOS Linear';
    } else if (vin > vm + 0.12) {
      regionName = 'Region D: NMOS Linear, PMOS Saturation';
    } else {
      regionName = 'Region C: Both Transistors in Saturation (Peak Isc)';
    }
  }

  const nmH = Math.max(0, (vdd - 0.05) - (vm + 0.22)).toFixed(2);
  const nmL = Math.max(0, (vm - 0.22) - 0.05).toFixed(2);

  // Update label elements
  const lblVin = document.getElementById('lblInvVin');
  const lblVdd = document.getElementById('lblInvVdd');
  const lblBeta = document.getElementById('lblInvBeta');
  const badgeReg = document.getElementById('badgeInvRegion');
  const statVout = document.getElementById('statInvVout');
  const statState = document.getElementById('statInvState');
  const statNmH = document.getElementById('statInvNMH');
  const statNmL = document.getElementById('statInvNML');

  if (lblVin) lblVin.textContent = `${vin.toFixed(2)} V`;
  if (lblVdd) lblVdd.textContent = `${vdd.toFixed(2)} V`;
  if (lblBeta) lblBeta.textContent = `${betaRatio.toFixed(2)}x`;
  if (badgeReg) badgeReg.textContent = regionName;
  if (statVout) statVout.textContent = `${vout.toFixed(2)} V`;
  if (statState) {
    statState.textContent = stateLabel;
    statState.className = `studio-metric-val ${stateClass}`;
  }
  if (statNmH) statNmH.textContent = `${nmH} V`;
  if (statNmL) statNmL.textContent = `${nmL} V`;

  // Draw SVG VTC Curve
  const svgContainer = document.getElementById('svgInvVtcContainer');
  if (!svgContainer) return;

  const width = 460;
  const height = 230;
  const pad = 36;
  const plotW = width - pad * 2;
  const plotH = height - pad * 2;

  let pathD = '';
  const steps = 40;
  for (let i = 0; i <= steps; i++) {
    const v = (i / steps) * vdd;
    let vo;
    if (v < vtn) vo = vdd;
    else if (v > vdd - Math.abs(vtp)) vo = 0;
    else vo = vdd / (1 + Math.exp((14 / vdd) * (v - vm)));

    const x = pad + (v / vdd) * plotW;
    const y = pad + plotH - (vo / vdd) * plotH;
    pathD += (i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`);
  }

  const curX = pad + (vin / vdd) * plotW;
  const curY = pad + plotH - (vout / vdd) * plotH;
  const vmX = pad + (vm / vdd) * plotW;

  svgContainer.innerHTML = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="vtcLineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="50%" stop-color="#00f2fe" />
          <stop offset="100%" stop-color="#8b5cf6" />
        </linearGradient>
        <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#00f2fe" stop-opacity="1" />
          <stop offset="100%" stop-color="#00f2fe" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Axes -->
      <line x1="${pad}" y1="${pad + plotH}" x2="${pad + plotW}" y2="${pad + plotH}" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${pad + plotH}" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />

      <!-- Grid lines -->
      <line x1="${pad}" y1="${pad + plotH / 2}" x2="${pad + plotW}" y2="${pad + plotH / 2}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3,3" />
      <line x1="${pad + plotW / 2}" y1="${pad}" x2="${pad + plotW / 2}" y2="${pad + plotH}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3,3" />
      <line x1="${vmX}" y1="${pad}" x2="${vmX}" y2="${pad + plotH}" stroke="rgba(0, 242, 254, 0.2)" stroke-dasharray="4,4" />

      <!-- VTC Curve -->
      <path d="${pathD}" fill="none" stroke="url(#vtcLineGrad)" stroke-width="3.5" stroke-linecap="round" />

      <!-- Crosshairs for current point -->
      <line x1="${curX}" y1="${curY}" x2="${curX}" y2="${pad + plotH}" stroke="#00f2fe" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" />
      <line x1="${pad}" y1="${curY}" x2="${curX}" y2="${curY}" stroke="#00f2fe" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" />

      <!-- Operating Dot -->
      <circle cx="${curX}" cy="${curY}" r="12" fill="url(#dotGlow)" opacity="0.6" />
      <circle cx="${curX}" cy="${curY}" r="5.5" fill="#00f2fe" stroke="#050811" stroke-width="2" />

      <!-- Text annotations -->
      <text x="${pad + 6}" y="${pad + 12}" fill="#94a3b8" font-size="10" font-family="monospace">Vout = ${vdd.toFixed(1)}V</text>
      <text x="${pad + plotW - 4}" y="${pad + plotH + 18}" text-anchor="end" fill="#94a3b8" font-size="10" font-family="monospace">Vin = ${vdd.toFixed(1)}V</text>
      <text x="${vmX}" y="${pad - 8}" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="700" font-family="monospace">VM=${vm.toFixed(2)}V</text>
      <text x="${curX + 8}" y="${curY - 8}" fill="#00f2fe" font-size="11" font-weight="800" font-family="monospace">(${vin.toFixed(2)}V, ${vout.toFixed(2)}V)</text>
    </svg>
  `;
}

/* --------------------------------------------------------------------------
   2. STA Timing Slack & Waveform Lab Engine
   -------------------------------------------------------------------------- */
window.setStaPreset = function(preset) {
  if (preset === 'met') {
    studioState.staTclk = 4.0;
    studioState.staTlaunch = 0.8;
    studioState.staTdata = 2.0;
    studioState.staTcapture = 1.0;
    studioState.staTmargin = 0.45;
  } else if (preset === 'setup_viol') {
    studioState.staTclk = 3.0;
    studioState.staTlaunch = 1.2;
    studioState.staTdata = 3.2;
    studioState.staTcapture = 0.4;
    studioState.staTmargin = 0.45;
  } else if (preset === 'hold_viol') {
    studioState.staTclk = 4.0;
    studioState.staTlaunch = 0.2;
    studioState.staTdata = 0.6;
    studioState.staTcapture = 1.8;
    studioState.staTmargin = 0.35;
  } else if (preset === 'skew_opt') {
    studioState.staTclk = 3.0;
    studioState.staTlaunch = 0.6;
    studioState.staTdata = 2.6;
    studioState.staTcapture = 1.4; // useful skew +0.8ns
    studioState.staTmargin = 0.45;
  }

  // Update slider positions
  const slTclk = document.getElementById('sliderStaTclk');
  const slTlaunch = document.getElementById('sliderStaTlaunch');
  const slTdata = document.getElementById('sliderStaTdata');
  const slTcap = document.getElementById('sliderStaTcapture');
  const slTmarg = document.getElementById('sliderStaTmargin');

  if (slTclk) slTclk.value = studioState.staTclk;
  if (slTlaunch) slTlaunch.value = studioState.staTlaunch;
  if (slTdata) slTdata.value = studioState.staTdata;
  if (slTcap) slTcap.value = studioState.staTcapture;
  if (slTmarg) slTmarg.value = studioState.staTmargin;

  renderStaSim();
};

function renderStaSim() {
  const tclk = studioState.staTclk;
  const tlaunch = studioState.staTlaunch;
  const tdata = studioState.staTdata;
  const tcap = studioState.staTcapture;
  const tmarg = studioState.staTmargin;

  const tArrival = tlaunch + tdata;
  const tRequired = tclk + tcap - tmarg;
  const setupSlack = tRequired - tArrival;
  const skew = tcap - tlaunch;
  const isMet = setupSlack >= 0;

  // Update DOM labels
  const lblTclk = document.getElementById('lblStaTclk');
  const lblTlaunch = document.getElementById('lblStaTlaunch');
  const lblTdata = document.getElementById('lblStaTdata');
  const lblTcap = document.getElementById('lblStaTcapture');
  const lblTmarg = document.getElementById('lblStaTmargin');
  const badgeStatus = document.getElementById('badgeStaStatus');
  const statArr = document.getElementById('statStaArrival');
  const statReq = document.getElementById('statStaRequired');
  const statSlack = document.getElementById('statStaSetupSlack');
  const statSkew = document.getElementById('statStaSkew');
  const advisoryBox = document.getElementById('staAdvisoryBox');

  const freqMhz = Math.round(1000 / tclk);
  if (lblTclk) lblTclk.textContent = `${tclk.toFixed(2)} ns (${freqMhz} MHz)`;
  if (lblTlaunch) lblTlaunch.textContent = `${tlaunch.toFixed(2)} ns`;
  if (lblTdata) lblTdata.textContent = `${tdata.toFixed(2)} ns`;
  if (lblTcap) lblTcap.textContent = `${tcap.toFixed(2)} ns (Skew: ${skew >= 0 ? '+' : ''}${skew.toFixed(2)}ns)`;
  if (lblTmarg) lblTmarg.textContent = `${tmarg.toFixed(2)} ns`;

  if (badgeStatus) {
    badgeStatus.textContent = isMet ? 'SETUP MET' : 'SETUP VIOLATION';
    badgeStatus.className = `badge ${isMet ? 'badge-emerald' : 'badge-rose'}`;
  }
  if (statArr) statArr.textContent = `${tArrival.toFixed(2)} ns`;
  if (statReq) statReq.textContent = `${tRequired.toFixed(2)} ns`;
  if (statSlack) {
    statSlack.textContent = `${setupSlack >= 0 ? '+' : ''}${setupSlack.toFixed(2)} ns (${isMet ? 'MET' : 'VIOLATED'})`;
    statSlack.className = `studio-metric-val ${isMet ? 'emerald' : 'rose'}`;
  }
  if (statSkew) statSkew.textContent = `${skew >= 0 ? '+' : ''}${skew.toFixed(2)} ns`;

  if (advisoryBox) {
    if (isMet) {
      advisoryBox.innerHTML = `<strong>EDA Signoff Advisory:</strong> Timing constraints satisfied with a healthy setup margin of <strong>+${setupSlack.toFixed(2)} ns</strong>. Clock tree skew is well controlled (${skew >= 0 ? '+' : ''}${skew.toFixed(2)} ns). Ready for tapeout signoff.`;
    } else {
      advisoryBox.innerHTML = `<strong>EDA Critical Alert:</strong> Negative setup slack detected (<strong>${setupSlack.toFixed(2)} ns violation</strong>). Recommended Fix Sequence: 1. Swap critical data path cells to Low-Vt (LVT); 2. Insert pipeline registers; 3. Leverage useful skew by delaying capture clock leaf.`;
    }
  }

  // Draw 3-Lane SVG Waveform
  const svgContainer = document.getElementById('svgStaWaveformContainer');
  if (!svgContainer) return;

  const width = 500;
  const height = 210;
  const maxTime = Math.max(tclk + tcap + 2.0, tArrival + 1.5);
  const timeToX = (t) => 80 + (t / maxTime) * 390;

  const yL1 = 45;  // Launch CLK
  const yL2 = 105; // Data Path
  const yL3 = 165; // Capture CLK

  const xL_edge = timeToX(tlaunch);
  const xData_trans = timeToX(tlaunch + 0.2);
  const xData_arr = timeToX(tArrival);
  const xCap_edge = timeToX(tclk + tcap);
  const xHaz_start = timeToX(tRequired);

  svgContainer.innerHTML = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <!-- Background Lanes -->
      <rect x="75" y="25" width="415" height="40" fill="rgba(255,255,255,0.015)" rx="4" />
      <rect x="75" y="85" width="415" height="40" fill="rgba(255,255,255,0.025)" rx="4" />
      <rect x="75" y="145" width="415" height="40" fill="rgba(255,255,255,0.015)" rx="4" />

      <!-- Lane Labels -->
      <text x="70" y="${yL1 + 5}" text-anchor="end" fill="#94a3b8" font-size="11" font-weight="700" font-family="monospace">CLK_L</text>
      <text x="70" y="${yL2 + 5}" text-anchor="end" fill="#00f2fe" font-size="11" font-weight="700" font-family="monospace">DATA</text>
      <text x="70" y="${yL3 + 5}" text-anchor="end" fill="#a855f7" font-size="11" font-weight="700" font-family="monospace">CLK_C</text>

      <!-- Shaded Setup Hazard Zone -->
      <rect x="${xHaz_start}" y="82" width="${Math.max(1, xCap_edge - xHaz_start)}" height="106" fill="rgba(239, 68, 68, 0.18)" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.2" rx="3" />
      <text x="${xCap_edge - 4}" y="196" text-anchor="end" fill="#f87171" font-size="10" font-family="monospace">Setup Window (Tsetup+Tunc)</text>

      <!-- Launch Clock Waveform -->
      <path d="M 80 ${yL1 + 12} L ${xL_edge} ${yL1 + 12} L ${xL_edge} ${yL1 - 12} L ${timeToX(tlaunch + tclk / 2)} ${yL1 - 12} L ${timeToX(tlaunch + tclk / 2)} ${yL1 + 12} L ${timeToX(tlaunch + tclk)} ${yL1 + 12} L ${timeToX(tlaunch + tclk)} ${yL1 - 12} L ${width - 15} ${yL1 - 12}" fill="none" stroke="#60a5fa" stroke-width="2.5" />

      <!-- Data Path Transition Waveform -->
      <polygon points="80,${yL2} ${xL_edge},${yL2} ${xData_trans},${yL2 - 10} ${xData_arr},${yL2 - 10} ${xData_arr + 8},${yL2} ${xData_trans},${yL2 + 10} ${xL_edge},${yL2}" fill="rgba(0, 242, 254, 0.12)" stroke="#00f2fe" stroke-width="1.8" />
      <!-- Stable Data Bus -->
      <polygon points="${xData_arr},${yL2 - 10} ${width - 15},${yL2 - 10} ${width - 15},${yL2 + 10} ${xData_arr},${yL2 + 10} ${xData_arr - 6},${yL2}" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2" />
      <text x="${xData_arr + 12}" y="${yL2 + 4}" fill="#10b981" font-size="10" font-weight="800" font-family="monospace">DATA VALID</text>

      <!-- Capture Clock Waveform -->
      <path d="M 80 ${yL3 + 12} L ${xCap_edge} ${yL3 + 12} L ${xCap_edge} ${yL3 - 12} L ${timeToX(tclk + tcap + tclk / 2)} ${yL3 - 12} L ${timeToX(tclk + tcap + tclk / 2)} ${yL3 + 12} L ${width - 15} ${yL3 + 12}" fill="none" stroke="#c084fc" stroke-width="2.5" />

      <!-- Arrival Marker Line -->
      <line x1="${xData_arr}" y1="20" x2="${xData_arr}" y2="190" stroke="${isMet ? '#10b981' : '#ef4444'}" stroke-width="2" stroke-dasharray="4,3" />
      <circle cx="${xData_arr}" cy="${yL2}" r="5" fill="${isMet ? '#10b981' : '#ef4444'}" />
      <text x="${xData_arr}" y="15" text-anchor="middle" fill="${isMet ? '#10b981' : '#ef4444'}" font-size="10" font-weight="800" font-family="monospace">T_arrival=${tArrival.toFixed(2)}ns</text>
    </svg>
  `;
}

/* --------------------------------------------------------------------------
   3. MOSFET IV Characteristics & Channel Physics Simulator
   -------------------------------------------------------------------------- */
window.setMosVth = function(vth) {
  studioState.mosVth = vth;
  const sl = document.getElementById('sliderMosVth');
  if (sl) sl.value = vth;
  renderMosfetSim();
};

window.setMosPreset = function(preset) {
  if (preset === 'cutoff') {
    studioState.mosVgs = 0.30;
    studioState.mosVds = 0.80;
  } else if (preset === 'linear') {
    studioState.mosVgs = 1.40;
    studioState.mosVds = 0.35;
  } else if (preset === 'saturation') {
    studioState.mosVgs = 1.40;
    studioState.mosVds = 1.30;
  }

  const slVgs = document.getElementById('sliderMosVgs');
  const slVds = document.getElementById('sliderMosVds');
  if (slVgs) slVgs.value = studioState.mosVgs;
  if (slVds) slVds.value = studioState.mosVds;

  renderMosfetSim();
};

function renderMosfetSim() {
  const vgs = studioState.mosVgs;
  const vds = studioState.mosVds;
  const vth0 = studioState.mosVth;
  const vsb = studioState.mosVsb;

  const vthEff = vth0 + 0.45 * (Math.sqrt(0.6 + vsb) - Math.sqrt(0.6));
  const vov = vgs - vthEff;
  const k = 1.15; // mA/V²

  let id;
  let regime = 'SATURATION';
  let pinchDesc = 'Channel Pinched Off at Drain';

  if (vgs <= vthEff) {
    regime = 'CUTOFF';
    id = 0.001 * Math.exp((vgs - vthEff) / 0.07);
    pinchDesc = 'No Inversion Channel';
  } else if (vds < vov) {
    regime = 'LINEAR (TRIODE)';
    id = k * ((vgs - vthEff) * vds - 0.5 * vds * vds) * (1 + 0.06 * vds);
    pinchDesc = 'Continuous Inverted Channel';
  } else {
    regime = 'SATURATION';
    id = 0.5 * k * (vov * vov) * (1 + 0.06 * vds);
    pinchDesc = 'Pinched Off at Drain Edge';
  }

  // Update labels
  const lblVgs = document.getElementById('lblMosVgs');
  const lblVds = document.getElementById('lblMosVds');
  const lblVth = document.getElementById('lblMosVth');
  const lblVsb = document.getElementById('lblMosVsb');
  const badgeRegime = document.getElementById('badgeMosRegime');
  const statId = document.getElementById('statMosId');
  const statVthEff = document.getElementById('statMosVthEff');
  const statVov = document.getElementById('statMosVov');
  const statPinch = document.getElementById('statMosPinch');

  if (lblVgs) lblVgs.textContent = `${vgs.toFixed(2)} V`;
  if (lblVds) lblVds.textContent = `${vds.toFixed(2)} V`;
  if (lblVth) lblVth.textContent = `${vth0.toFixed(2)} V`;
  if (lblVsb) lblVsb.textContent = `${vsb.toFixed(2)} V`;
  if (badgeRegime) {
    badgeRegime.textContent = regime;
    badgeRegime.className = `badge ${regime === 'SATURATION' ? 'badge-cyan' : regime === 'LINEAR (TRIODE)' ? 'badge-emerald' : 'badge-amber'}`;
  }
  if (statId) statId.textContent = `${id.toFixed(3)} mA`;
  if (statVthEff) statVthEff.textContent = `${vthEff.toFixed(2)} V`;
  if (statVov) statVov.textContent = `${vov > 0 ? vov.toFixed(2) : '0.00'} V`;
  if (statPinch) statPinch.textContent = pinchDesc;

  // Render SVG Curves
  const svgContainer = document.getElementById('svgMosfetContainer');
  if (!svgContainer) return;

  const width = 460;
  const height = 230;
  const pad = 35;
  const plotW = width - pad * 2;
  const plotH = height - pad * 2;
  const maxVds = 1.8;
  const maxId = 2.4; // mA

  const vgsLevels = [0.6, 0.9, 1.2, 1.5, 1.8];
  let curvesSvg = '';

  vgsLevels.forEach(vg => {
    let d = '';
    const vov_lvl = Math.max(0, vg - vthEff);
    for (let i = 0; i <= 36; i++) {
      const v = (i / 36) * maxVds;
      let curr = 0;
      if (vg > vthEff) {
        if (v < vov_lvl) {
          curr = k * (vov_lvl * v - 0.5 * v * v) * (1 + 0.06 * v);
        } else {
          curr = 0.5 * k * (vov_lvl * vov_lvl) * (1 + 0.06 * v);
        }
      }
      const x = pad + (v / maxVds) * plotW;
      const y = pad + plotH - (curr / maxId) * plotH;
      d += (i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`);
    }
    const endX = pad + plotW;
    const endCurr = vg > vthEff ? 0.5 * k * (vov_lvl * vov_lvl) * (1 + 0.06 * maxVds) : 0;
    const endY = pad + plotH - (endCurr / maxId) * plotH;
    curvesSvg += `
      <path d="${d}" fill="none" stroke="rgba(56, 189, 248, 0.35)" stroke-width="1.8" />
      <text x="${endX - 4}" y="${endY - 4}" fill="#64748b" font-size="9" font-family="monospace">VGS=${vg.toFixed(1)}V</text>
    `;
  });

  // Current operating point
  const curX = pad + (vds / maxVds) * plotW;
  const curY = pad + plotH - (Math.min(maxId, id) / maxId) * plotH;

  svgContainer.innerHTML = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <!-- Axes -->
      <line x1="${pad}" y1="${pad + plotH}" x2="${pad + plotW}" y2="${pad + plotH}" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${pad + plotH}" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />

      <!-- Family of Curves -->
      ${curvesSvg}

      <!-- Crosshairs -->
      <line x1="${curX}" y1="${curY}" x2="${curX}" y2="${pad + plotH}" stroke="#f59e0b" stroke-dasharray="2,2" opacity="0.6" />
      <line x1="${pad}" y1="${curY}" x2="${curX}" y2="${curY}" stroke="#f59e0b" stroke-dasharray="2,2" opacity="0.6" />

      <!-- Operating Point -->
      <circle cx="${curX}" cy="${curY}" r="6" fill="#f59e0b" stroke="#050811" stroke-width="2" />
      <text x="${curX + 8}" y="${curY - 6}" fill="#fbbf24" font-size="11" font-weight="700" font-family="monospace">(${vds.toFixed(2)}V, ${id.toFixed(2)}mA)</text>
      
      <text x="${pad + 6}" y="${pad + 10}" fill="#94a3b8" font-size="10" font-family="monospace">ID (mA)</text>
      <text x="${pad + plotW - 4}" y="${pad + plotH + 18}" text-anchor="end" fill="#94a3b8" font-size="10" font-family="monospace">VDS (Volts)</text>
    </svg>
  `;
}

/* --------------------------------------------------------------------------
   4. ASIC Physical Design Flow Pipeline Engine
   -------------------------------------------------------------------------- */
function renderPipelineStages() {
  const pillsContainer = document.getElementById('pipelineStagePills');
  const detailsCard = document.getElementById('pipelineStageDetailCard');
  if (!pillsContainer || !detailsCard) return;

  const curIdx = studioState.pipelineActiveStage;
  const stage = PIPELINE_STAGES[curIdx] || PIPELINE_STAGES[0];

  pillsContainer.innerHTML = PIPELINE_STAGES.map((s, idx) => `
    <button class="pipeline-pill-btn ${idx === curIdx ? 'active' : ''}" onclick="selectPipelineStage(${idx})">
      <span>${s.name}</span>
    </button>
  `).join('');

  detailsCard.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; border-bottom:1px solid var(--border-subtle); padding-bottom:1rem;">
      <div>
        <span class="badge badge-cyan" style="margin-bottom:0.4rem; font-family:var(--font-mono);">STAGE ${curIdx + 1} OF 10</span>
        <h3 style="font-size:1.4rem; font-weight:800; color:var(--text-primary); font-family:var(--font-heading);">${stage.name}</h3>
        <p style="color:var(--text-secondary); font-size:0.92rem;">${stage.sub}</p>
      </div>
      <div style="display:flex; gap:0.5rem;">
        <button class="btn-secondary" onclick="selectPipelineStage(${Math.max(0, curIdx - 1)})" ${curIdx === 0 ? 'disabled style="opacity:0.4;"' : ''}>← Previous</button>
        <button class="btn-primary" onclick="selectPipelineStage(${Math.min(PIPELINE_STAGES.length - 1, curIdx + 1)})" ${curIdx === PIPELINE_STAGES.length - 1 ? 'disabled style="opacity:0.4;"' : ''}>Next Stage →</button>
      </div>
    </div>

    <div class="pipeline-detail-grid">
      <div class="pipeline-subbox">
        <div class="pipeline-subbox-title" style="color:var(--accent-cyan);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
          Input & Output Files
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;"><strong>Inputs:</strong> ${stage.inputs}</p>
        <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5; margin-top:0.4rem;"><strong>Outputs:</strong> ${stage.outputs}</p>
      </div>

      <div class="pipeline-subbox">
        <div class="pipeline-subbox-title" style="color:var(--accent-purple);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
          Industrial EDA Shell Commands
        </div>
        <pre style="background:#070a12; padding:0.6rem 0.8rem; border-radius:6px; font-family:var(--font-mono); font-size:0.78rem; color:#7dd3fc; overflow-x:auto;">${stage.edaCmd}</pre>
      </div>

      <div class="pipeline-subbox">
        <div class="pipeline-subbox-title" style="color:var(--accent-amber);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Physics & Architecture Challenges
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">${stage.challenges}</p>
      </div>

      <div class="pipeline-subbox">
        <div class="pipeline-subbox-title" style="color:var(--accent-emerald);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          Foundry Tapeout Signoff Gate
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">${stage.signoff}</p>
      </div>
    </div>
  `;
}

window.selectPipelineStage = function(idx) {
  studioState.pipelineActiveStage = idx;
  renderPipelineStages();
};

/* --------------------------------------------------------------------------
   5. Standard Cell Logic & Stick Layout Switcher
   -------------------------------------------------------------------------- */
window.selectLogicGate = function(gate) {
  studioState.logicGate = gate;
  const btns = document.querySelectorAll('#logicGateSelectors button');
  btns.forEach(b => {
    b.classList.toggle('active', b.textContent.toLowerCase().includes(gate.toLowerCase()));
  });
  renderLogicGateSim();
};

window.toggleLogicInput = function(pin) {
  if (pin === 'A') studioState.logicInA = studioState.logicInA === 1 ? 0 : 1;
  if (pin === 'B') studioState.logicInB = studioState.logicInB === 1 ? 0 : 1;
  renderLogicGateSim();
};

function renderLogicGateSim() {
  const gate = studioState.logicGate;
  const inA = studioState.logicInA;
  const inB = studioState.logicInB;

  const btnA = document.getElementById('btnToggleInA');
  const btnB = document.getElementById('btnToggleInB');
  if (btnA) btnA.innerHTML = `Input A: <strong style="color:var(--accent-cyan); font-size:1.1rem;">${inA}</strong>`;
  if (btnB) btnB.innerHTML = `Input B: <strong style="color:var(--accent-cyan); font-size:1.1rem;">${inB}</strong>`;

  let outVal = 0;
  let rows = [];

  if (gate === 'inv') {
    outVal = inA === 0 ? 1 : 0;
    rows = [
      { a: 0, b: '-', y: 1 },
      { a: 1, b: '-', y: 0 }
    ];
  } else if (gate === 'nand2') {
    outVal = (inA === 1 && inB === 1) ? 0 : 1;
    rows = [
      { a: 0, b: 0, y: 1 },
      { a: 0, b: 1, y: 1 },
      { a: 1, b: 0, y: 1 },
      { a: 1, b: 1, y: 0 }
    ];
  } else if (gate === 'nor2') {
    outVal = (inA === 0 && inB === 0) ? 1 : 0;
    rows = [
      { a: 0, b: 0, y: 1 },
      { a: 0, b: 1, y: 0 },
      { a: 1, b: 0, y: 0 },
      { a: 1, b: 1, y: 0 }
    ];
  } else if (gate === 'tg') {
    outVal = inB === 1 ? inA : 'Hi-Z (Tri)';
    rows = [
      { a: 0, b: 0, y: 'Hi-Z' },
      { a: 1, b: 0, y: 'Hi-Z' },
      { a: 0, b: 1, y: 0 },
      { a: 1, b: 1, y: 1 }
    ];
  } else if (gate === 'dff') {
    outVal = inA; // Q tracks D
    rows = [
      { a: 0, b: '↑', y: 0 },
      { a: 1, b: '↑', y: 1 }
    ];
  }

  // Update Badge Output
  const badgeOut = document.getElementById('badgeLogicOutput');
  if (badgeOut) {
    badgeOut.textContent = `OUT = ${outVal}`;
    badgeOut.className = `badge ${outVal === 1 || outVal === '1' ? 'badge-emerald' : 'badge-cyan'}`;
  }

  // Render Truth Table
  const tableEl = document.getElementById('logicTruthTable');
  if (tableEl) {
    tableEl.innerHTML = `
      <thead>
        <tr>
          <th>Input A</th>
          ${gate !== 'inv' ? '<th>Input B (or Clk)</th>' : ''}
          <th>Output (Y)</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => {
          const isActive = (r.a === inA) && (gate === 'inv' || r.b === inB || r.b === '-' || (gate === 'dff' && r.a === inA));
          return `
            <tr class="${isActive ? 'active-row' : ''}">
              <td>${r.a}</td>
              ${gate !== 'inv' ? `<td>${r.b}</td>` : ''}
              <td><strong>${r.y}</strong></td>
            </tr>
          `;
        }).join('')}
      </tbody>
    `;
  }

  // Render SVG Circuit Schematic & Stick Diagram
  const svgContainer = document.getElementById('svgLogicContainer');
  if (!svgContainer) return;

  const pullUpConduction = (gate === 'inv' && inA === 0) || (gate === 'nand2' && (inA === 0 || inB === 0)) || (gate === 'nor2' && inA === 0 && inB === 0);
  const pullDownConduction = !pullUpConduction;

  svgContainer.innerHTML = `
    <svg width="460" height="220" viewBox="0 0 460 220">
      <!-- VDD Rail -->
      <line x1="30" y1="25" x2="430" y2="25" stroke="#00f2fe" stroke-width="4" />
      <text x="35" y="18" fill="#00f2fe" font-size="10" font-weight="800" font-family="monospace">VDD (Power Rail)</text>

      <!-- VSS Rail -->
      <line x1="30" y1="195" x2="430" y2="195" stroke="#8b5cf6" stroke-width="4" />
      <text x="35" y="212" fill="#8b5cf6" font-size="10" font-weight="800" font-family="monospace">VSS (Ground Rail)</text>

      <!-- N-Well Region (Top Half) -->
      <rect x="50" y="30" width="360" height="70" fill="rgba(0, 242, 254, 0.05)" stroke="rgba(0, 242, 254, 0.2)" stroke-dasharray="4,4" rx="4" />
      <text x="56" y="44" fill="#38bdf8" font-size="9" font-family="monospace">N-WELL (PMOS Network)</text>

      <!-- P-Substrate Region (Bottom Half) -->
      <rect x="50" y="120" width="360" height="70" fill="rgba(139, 92, 246, 0.05)" stroke="rgba(139, 92, 246, 0.2)" stroke-dasharray="4,4" rx="4" />
      <text x="56" y="134" fill="#c084fc" font-size="9" font-family="monospace">P-SUBSTRATE (NMOS Network)</text>

      <!-- Vertical Polysilicon Gate 1 (Input A) -->
      <rect x="150" y="40" width="16" height="140" fill="${inA === 1 ? '#ef4444' : '#10b981'}" rx="2" opacity="0.85" />
      <text x="158" y="112" text-anchor="middle" fill="#050811" font-size="10" font-weight="800" font-family="monospace">A=${inA}</text>

      <!-- Vertical Polysilicon Gate 2 (Input B) -->
      ${gate !== 'inv' ? `
        <rect x="250" y="40" width="16" height="140" fill="${inB === 1 ? '#ef4444' : '#10b981'}" rx="2" opacity="0.85" />
        <text x="258" y="112" text-anchor="middle" fill="#050811" font-size="10" font-weight="800" font-family="monospace">B=${inB}</text>
      ` : ''}

      <!-- Output Node Y -->
      <line x1="330" y1="65" x2="330" y2="155" stroke="${pullUpConduction ? '#10b981' : '#00f2fe'}" stroke-width="3" />
      <circle cx="330" cy="110" r="7" fill="${outVal === 1 || outVal === '1' ? '#10b981' : '#00f2fe'}" />
      <text x="345" y="114" fill="#f8fafc" font-size="12" font-weight="800" font-family="monospace">OUTPUT Y = ${outVal}</text>

      <!-- Current Flow Arrow -->
      ${pullUpConduction ? `
        <path d="M 330 30 L 330 95" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow)" />
        <text x="335" y="45" fill="#10b981" font-size="9" font-family="monospace">PULL-UP ON (VDD)</text>
      ` : `
        <path d="M 330 185 L 330 125" stroke="#8b5cf6" stroke-width="2.5" />
        <text x="335" y="180" fill="#c084fc" font-size="9" font-family="monospace">PULL-DOWN ON (VSS)</text>
      `}
    </svg>
  `;
}


