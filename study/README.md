# EducateVLSI — Silicon Study Vault & Physical Design Course Assets

Welcome to the **EducateVLSI Course Assets & Silicon Reference Library** (`D:\EducateVLSI\Study`). This directory contains 24 production-grade technical training assets, interactive HTML laboratories, Synopsys ICC lab manuals, official LMS physical design notes, and video toolkits developed for **[EducateVLSI (@EducateVLSI)](https://www.youtube.com/@EducateVLSI)**.

---

## 📑 Catalog of Course Assets (24 Items)

| Asset Name | Type | Size | Category | Description |
| :--- | :---: | :---: | :---: | :--- |
| **`day1_cmos_foundations.html`** | HTML Lab | 68 KB | Foundations | Semiconductor Physics, CMOS Inverter VTC, Noise Margins & 10-Q Quiz |
| **`day2_sequential_logic.html`** | HTML Lab | 93 KB | Foundations | Sequential Logic, Latches vs DFFs, Setup/Hold Windows & MTBF |
| **`day3_power_vlsi_verilog.html`** | HTML Lab | 99 KB | Foundations | Power Dissipation ($P = \alpha C V^2 f$), Leakage, Multi-Vt & Verilog RTL |
| **`day4_logic_synthesis.html`** | HTML Lab | 112 KB | Foundations | RTL Synthesis, Tech Mapping, Cell Drive Strengths & .lib PVT Corners |
| **`day5_static_timing_analysis.html`** | HTML Lab | 122 KB | Foundations | STA Mastery, 4 Timing Path Types, MMMC, OCV Derating & Timing Reports |
| **`Phase2_Part1_VLSI_Fundamentals.html`** | HTML Lab | 70 KB | Phase 2 PD | Digital Fundamentals, Drive Strengths X1-X8 & Full PD File Ecosystem |
| **`Phase2_Part2_Floorplan_Power_Placement.html`** | HTML Lab | 76 KB | Phase 2 PD | Floorplan Anatomy, Die Sizing, Power Mesh, IR Drop & OpenROAD Lab |
| **`Phase2_Part3_CTS_Routing_STA_Signoff.html`** | HTML Lab | 110 KB | Phase 2 PD | CTS Skew/Latency, M1-M9 Metal Stackup, PrimeTime Reports & Signoff |
| **`LMS_PD_Notes.pdf`** | PDF Manual | 22.7 MB | LMS Guides | Master 22.7 MB Physical Design Training Handbook (Netlist to GDSII) |
| **`LMS_ICC_Lab_Manual.pdf`** | PDF Manual | 5.3 MB | LMS Guides | Synopsys IC Compiler (ICC) Step-by-Step Hands-On Laboratory Exercises |
| **`Blueprint_to_Silicon.pdf`** | PDF Manual | 14.6 MB | LMS Guides | Complete Engineering Guide: Architecture, RTL, Physical Design & Foundry |
| **`LMS_Input_Files_FloorPlan.pdf`** | PDF Manual | 4.9 MB | LMS Guides | Floorplan Inputs: IO Pin Ordering, Macro Halos & PG Mesh Sizing |
| **`DigitalDesign-CombinationalLogic.pdf`** | PDF Manual | 3.3 MB | LMS Guides | Combinational Logic Architecture, High-Speed Adders & ALU Datapaths |
| **`Tcl_Presentation.pdf`** | PDF Deck | 358 KB | LMS Guides | EDA TCL Scripting Slide Deck: Syntax, Lists, Regex & Tool Automation |
| **`The_Digital_Engineer_s_Toolkit.pdf`** | PDF Manual | 11.2 MB | LMS Guides | Practical Engineering Handbook: Workstations, Automation & Debugging |
| **`linux_notes.pdf`** | PDF Manual | 1.2 MB | LMS Guides | Linux EDA Environment Administration, Shell Configuration & Processes |
| **`vim-commands-cheat-sheet-by-pnap.pdf`** | PDF Sheet | 81 KB | LMS Guides | VIM Editor Productivity Reference Sheet for EDA Terminal Work |
| **`cmos.pdf`** | PDF Manual | 885 KB | LMS Guides | CMOS Fundamentals, Transistor Equations, Inverter VTC & Layout |
| **`vlsi-design.pdf`** | PDF Manual | 950 KB | LMS Guides | VLSI Design Methodologies, Hierarchy, Clock Distribution & Standard Cells |
| **`PD_Adv_Inputs_class.pdf`** | PDF Manual | 1.2 MB | LMS Guides | Physical Design Advanced Inputs: MCMM Timing Libraries & UPF Intents |
| **`PD_Adv_Presentatrion.pdf`** | PDF Deck | 417 KB | LMS Guides | Physical Design Advanced Implementation Executive Presentation Deck |
| **`shivas-pd-hub-extracted-content.md`** | Markdown | 32 KB | Reference | Industry Benchmark: 12-Stage Debug Matrix & 35 EDA Formulas |
| **`ASIC_Design_Flow.mp4`** | MP4 Video | 36.2 MB | Videos | Full Architectural Video Tutorial on the RTL-to-GDSII ASIC Flow |
| **`The_Engineer_s_Toolkit.mp4`** | MP4 Video | 31.9 MB | Videos | Video Tutorial on Professional EDA Workstation Setup & Terminal Tools |

---

## 🏛️ Course Structure Breakdown

### 1. 5-Day Foundation Masterclass (Interactive HTML Modules)
These self-contained interactive web modules combine deep-dive theory, animated diagrams, interactive formula cards, and self-assessment quizzes:

- **Day 1: Semiconductor Physics, CMOS & Logic Gates** (`day1_cmos_foundations.html`)
  - Crystal lattice of Silicon, intrinsic vs. extrinsic doping ($N_A, N_D$).
  - Drift and diffusion carrier transport, built-in potential $V_0$, depletion width $W$.
  - MOSFET operation: cutoff, linear ($V_{DS} < V_{GS} - V_{TH}$), and saturation ($V_{DS} \ge V_{GS} - V_{TH}$).
  - CMOS Inverter Voltage Transfer Characteristics (VTC), noise margins ($NM_L = V_{IL} - V_{OL}$, $NM_H = V_{OH} - V_{IH}$).
  - Interactive 10-Question Knowledge Check.

- **Day 2: Sequential Logic & Timing** (`day2_sequential_logic.html`)
  - Bistable multivibrators, cross-coupled NAND/NOR SR latches.
  - Level-sensitive D-latch transparency hazards and race conditions.
  - Master-Slave edge-triggered D flip-flop architecture.
  - Setup time ($t_{setup}$), hold time ($t_{hold}$), and clock-to-Q delay ($t_{cq}$).
  - Metastability physics and Mean Time Between Failures equation:
    $$\text{MTBF} = \frac{e^{t_r / \tau}}{T_0 \cdot f_{clk} \cdot f_{data}}$$
  - 2-FF and 3-FF synchronizers for Clock Domain Crossing (CDC).

- **Day 3: Power Dissipation, VLSI Flow & Verilog RTL** (`day3_power_vlsi_verilog.html`)
  - Dynamic switching power:
    $$P_{dynamic} = \alpha \cdot C_L \cdot V_{DD}^2 \cdot f$$
  - Short-circuit power dissipation ($I_{sc} \cdot V_{DD}$).
  - Static leakage mechanisms: subthreshold leakage ($I_{sub} \propto e^{(V_{GS}-V_{TH})/n V_t}$), gate oxide tunneling, and reverse-biased junction leakage.
  - Multi-Vt optimization (HVT for leakage paths, LVT/ULVT for critical timing paths).
  - Integrated Clock Gating (ICG) cell insertion to eliminate redundant clock tree power.
  - Synthesizable Verilog HDL guidelines: blocking (`=`) vs. non-blocking (`<=`) assignments.

- **Day 4: Logic Synthesis — RTL to Gate Netlist** (`day4_logic_synthesis.html`)
  - Three phases of logic synthesis: Translation (GTECH netlist), Optimization, and Technology Mapping.
  - Technology mapping to standard cell libraries with varying drive strengths (X1, X2, X4, X8).
  - Liberty (`.lib`) timing models: Non-Linear Delay Models (NLDM), Composite Current Source (CCS), and Effective Current Source Models (ECSM).
  - PVT corners (Process, Voltage, Temperature): Slow-Slow (SS) for setup, Fast-Fast (FF) for hold.
  - Synopsys Design Constraints (SDC): `create_clock`, `set_clock_uncertainty`, `set_input_delay`, `set_output_delay`, `set_false_path`.

- **Day 5: Static Timing Analysis — Reading the Fabric of Time** (`day5_static_timing_analysis.html`)
  - Register-to-register, input-to-register, register-to-output, and input-to-output timing paths.
  - Setup constraint equation:
    $$T_{clk} + T_{skew} - T_{uncertainty} \ge T_{cq} + T_{comb,max} + T_{setup}$$
  - Hold constraint equation:
    $$T_{cq} + T_{comb,min} \ge T_{skew} + T_{hold} + T_{uncertainty}$$
  - On-Chip Variation (OCV), Advanced OCV (AOCV), and Parametric OCV (POCV).
  - Reading and parsing real PrimeTime STA timing reports.

---

### 2. 10-Day Phase 2 Advanced Physical Design Series
- **Phase 2 · Part 1: VLSI & Digital Fundamentals & File Ecosystem** (`Phase2_Part1_VLSI_Fundamentals.html`)
  - Standard cell drive strengths and fanout-of-4 (FO4) delay.
  - Complete Physical Design File Ecosystem:
    - `.lib`: Timing, power, and noise characterization lookup tables.
    - `.lef`: Technology LEF (metal rules, spacing, pitch) and Macro LEF (abstract boundary and pins).
    - `.sdc`: Design timing constraints.
    - `.def`: Design Exchange Format (placed instances, nets, tracks, rows).
    - `.spef`: Standard Parasitic Exchange Format ($R$ and $C$ parasitics).
    - `.gds` / `.oas`: Mask layout geometric data.

- **Phase 2 · Part 2: Floorplan, Power Planning & Placement** (`Phase2_Part2_Floorplan_Power_Placement.html`)
  - Core and die area estimation:
    $$\text{Core Area} = \frac{\sum \text{Cell Areas}}{\text{Core Utilization}}$$
  - Aspect ratio selection ($\text{Height} / \text{Width}$) and IO bump pad pitch.
  - Macro placement guidelines: dataflow alignment, peripheral grouping, keepout halos.
  - Power Delivery Network (PDN): PG rings, top-metal straps, and IR drop budgeting.
  - Standard cell placement: Global placement, congestion mitigation, high-fanout net synthesis (HFNS), and legalization.
  - Interactive OpenROAD/OpenLane DEF lab parser.

- **Phase 2 · Part 3: CTS, Routing, STA & Signoff** (`Phase2_Part3_CTS_Routing_STA_Signoff.html`)
  - Clock Tree Synthesis (CTS): Inverter/buffer trees, clock latency, clock skew, and Non-Default Rules (NDR).
  - Interconnect routing: Metal layer stackup (M1-M9), global routing (GCells), track assignment, and detailed grid routing.
  - Design Rule Violations (DRV): Max transition, max capacitance, and antenna ratio violations.
  - Physical Signoff: Design Rule Checking (DRC), Layout Versus Schematic (LVS), Electrical Rule Checking (ERC), Electromigration (EM), and Dynamic Voltage Drop (DVD).

---

### 3. Master LMS Textbooks & Lab Manuals (PDFs)
- **`LMS_PD_Notes.pdf`** (22.7 MB): Official 22.7 MB comprehensive training handbook detailing the full ASIC physical design flow from netlist import to tapeout.
- **`LMS_ICC_Lab_Manual.pdf`** (5.3 MB): Complete Synopsys IC Compiler (ICC) step-by-step hands-on laboratory manual covering:
  - Floorplanning and boundary setup.
  - Power mesh creation (`synthesize_fp_rail`, `commit_fp_rail`).
  - Pre-placement checks and `place_opt`.
  - Clock Tree Synthesis and optimization (`clock_opt`).
  - Signal routing and post-route timing optimization (`route_opt`).
- **`Blueprint_to_Silicon.pdf`** (14.6 MB): Architectural blueprint handbook: from high-level specification down to wafer foundry fabrication.
- **`LMS_Input_Files_FloorPlan.pdf`** (4.9 MB): Classroom training notes on floorplan inputs, IO constraints, macro halos, and power grid calculation.
- **`DigitalDesign-CombinationalLogic.pdf`** (3.3 MB): Combinational logic theory, fast adder architectures, and multiplier circuits.
- **`The_Digital_Engineer_s_Toolkit.pdf`** (11.2 MB): Practical engineering handbook on workstation tools, Linux environments, and script debugging.
- **`Tcl_Presentation.pdf`** (358 KB): Slide deck on EDA TCL programming, syntax, lists, arrays, regex parsing, and report automation.
- **`linux_notes.pdf`** (1.2 MB): Linux system administration and shell scripting for chip design engineers.
- **`vim-commands-cheat-sheet-by-pnap.pdf`** (81 KB): VIM editor quick reference sheet.
- **`cmos.pdf`** (885 KB): CMOS fundamentals, transistor equations, and inverter characteristics.
- **`vlsi-design.pdf`** (950 KB): Foundational textbook on VLSI design methodologies.
- **`PD_Adv_Inputs_class.pdf`** (1.2 MB): Advanced physical design inputs and MCMM libraries.
- **`PD_Adv_Presentatrion.pdf`** (417 KB): Physical design executive presentation deck.
- **`shivas-pd-hub-extracted-content.md`** (32 KB): Physical design benchmark extractions, 12-stage violation matrix, and 35 EDA calculators.

---

### 4. Video Toolkits
- **`ASIC_Design_Flow.mp4`** (36.2 MB): Full architectural video breakdown of the RTL-to-GDSII ASIC design flow.
- **`The_Engineer_s_Toolkit.mp4`** (31.9 MB): Professional video tutorial on workstation setup, Linux terminal efficiency, and EDA automation.

---

## 🔗 Connection to EducateVLSI Workstation

This directory (`D:\EducateVLSI\Study`) is directly linked to the **EducateVLSI Web Application** via an NTFS directory junction:

```
D:\EducateVLSI\WebPage\study  ───(NTFS Junction)───>  D:\EducateVLSI\Study
```

This junction ensures:
1. **Zero Storage Duplication**: No multi-megabyte PDF or MP4 files need to be copied.
2. **Instant Browser Access**: Every HTML lab, PDF manual, and video tutorial launches seamlessly from the Silicon Study Vault section of the workstation (`index.html#study-vault`) whether loaded via `file:///` or via an HTTP server (`http://localhost:8088/`).

---

## 👥 Maintained By

- **EducateVLSI Channel**: [youtube.com/@EducateVLSI](https://www.youtube.com/@EducateVLSI)
- **Workstation Application**: `D:\EducateVLSI\WebPage`
