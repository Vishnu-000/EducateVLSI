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
  initLearnAcademy();
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

    return `
      <article class="learn-module-card ${isStudied ? 'studied' : ''}" id="card-lesson-${lesson.id}">
        <div>
          <div class="learn-card-header">
            <span class="module-number-tag">LESSON ${lesson.number}</span>
            <span class="badge ${isStudied ? 'badge-emerald' : 'badge-cyan'}">${isStudied ? '✓ Studied' : track.badge}</span>
          </div>
          <h3 class="learn-card-title">${lesson.title}</h3>
          <p class="learn-card-desc">${lesson.summary.substring(0, 150)}...</p>
          <div class="learn-topics-chips">
            ${(lesson.topics || []).map(topic => `<span class="learn-topic-pill">${topic}</span>`).join('')}
          </div>
        </div>
        <div class="learn-card-footer">
          <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">${lesson.duration || '20 min read'}</span>
          <button class="btn-open-lesson" onclick="openLessonModal('${lesson.id}')">
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
  if (!lesson) return;

  const modal = document.getElementById('lessonModalBackdrop');
  if (!modal) return;

  const isStudied = state.studiedLessonIds.has(lesson.id);
  const track = LEARN_TRACKS.find(t => t.id === lesson.trackId) || { title: 'Mastery Track' };

  // Set title and subtitle
  const tagEl = document.getElementById('modalLessonTag');
  const titleEl = document.getElementById('modalLessonTitle');
  const subtitleEl = document.getElementById('modalLessonSubtitle');
  if (tagEl) tagEl.textContent = `LESSON ${lesson.number} • ${track.title}`;
  if (titleEl) titleEl.textContent = lesson.title;
  if (subtitleEl) subtitleEl.textContent = lesson.subtitle || lesson.level;

  // Build body content
  let bodyHTML = `
    <div class="lesson-section-block">
      <div class="lesson-section-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <span>Overview & Core Concept</span>
      </div>
      <p>${lesson.summary}</p>
    </div>
  `;

  if (lesson.formula) {
    bodyHTML += `
      <div class="lesson-section-block">
        <div class="lesson-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
          <span>Governing Equation & Formula</span>
        </div>
        <div class="lesson-formula-callout">
          <code>${lesson.formula}</code>
        </div>
      </div>
    `;
  }

  if (lesson.deepDive) {
    bodyHTML += `
      <div class="lesson-section-block">
        <div class="lesson-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          <span>Deep-Dive Engineering Theory</span>
        </div>
        <div>${lesson.deepDive}</div>
      </div>
    `;
  }

  if (lesson.tips) {
    bodyHTML += `
      <div class="lesson-section-block">
        <div class="lesson-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span>Physical Design Practitioner Tips</span>
        </div>
        <div style="background: rgba(245, 158, 11, 0.08); border-left: 3px solid var(--accent-amber); padding: 1rem 1.25rem; border-radius: var(--radius-md); font-size: 0.92rem; color: var(--text-primary); line-height: 1.6;">
          ${lesson.tips}
        </div>
      </div>
    `;
  }

  if (lesson.interviewQA && lesson.interviewQA.length > 0) {
    bodyHTML += `
      <div class="lesson-section-block">
        <div class="lesson-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <span>Frequently Asked Interview Questions (${lesson.interviewQA.length})</span>
        </div>
        ${lesson.interviewQA.map((qa, idx) => `
          <div class="lesson-qa-box">
            <div class="lesson-qa-q">
              <span style="color:var(--accent-cyan); font-family:var(--font-mono); font-weight: 800;">Q${idx + 1}:</span>
              <span>${qa.q}</span>
            </div>
            <div class="lesson-qa-a">
              <strong style="color:var(--text-muted); font-size:0.78rem; text-transform:uppercase; letter-spacing:0.05em; display:block; margin-bottom:0.35rem;">Technical Answer:</strong>
              ${qa.a}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const contentEl = document.getElementById('modalLessonContent');
  if (contentEl) contentEl.innerHTML = bodyHTML;

  // Toggle Studied button state
  const markStudiedBtn = document.getElementById('modalMarkStudiedBtn');
  if (markStudiedBtn) {
    markStudiedBtn.innerHTML = isStudied 
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Studied (Mark Incomplete)`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Mark as Studied`;
    markStudiedBtn.className = isStudied ? 'btn-secondary' : 'btn-primary';
    markStudiedBtn.onclick = () => toggleLessonStudied(lesson.id);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
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


