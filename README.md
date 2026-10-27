# EducateVLSI — Silicon Engineering Academy & Physical Design Workstation

[![Platform](https://img.shields.io/badge/Platform-EducateVLSI-00f2fe?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@EducateVLSI)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20Vanilla%20CSS%20%7C%20ES6%20JS-8b5cf6?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/Design-Semiconductor%20Obsidian%20UI-10b981?style=for-the-badge)](WebPage/README.md)
[![Status](https://img.shields.io/badge/Status-Signoff%20Ready-cyan?style=for-the-badge)](WebPage/PROGRESS.md)

Welcome to the master workspace of **[EducateVLSI (@EducateVLSI)](https://www.youtube.com/@EducateVLSI)**. This repository houses the entire ecosystem of advanced semiconductor physical design training assets, interactive courseware, hands-on EDA lab manuals, and the production-grade **EducateVLSI Engineering Workstation**.

---

## 🗂️ Workspace Architecture & Directory Layout

```
D:\EducateVLSI
├── Study\                               # Courseware, Interactive HTML Labs & LMS Manuals (24 Assets)
│   ├── day1_cmos_foundations.html       # Day 1: Semiconductor Physics, CMOS & Logic Gates
│   ├── day2_sequential_logic.html       # Day 2: Sequential Logic, Latches vs DFFs & MTBF
│   ├── day3_power_vlsi_verilog.html     # Day 3: Dynamic Power, Leakage, Multi-Vt & Verilog
│   ├── day4_logic_synthesis.html        # Day 4: RTL Synthesis, Tech Mapping & .lib Corners
│   ├── day5_static_timing_analysis.html # Day 5: STA Mastery, 4 Timing Paths & Slack Equations
│   ├── Phase2_Part1_VLSI_Fundamentals.html            # Phase 2 Part 1: PD File Ecosystem (.lib, .lef, .sdc, .def)
│   ├── Phase2_Part2_Floorplan_Power_Placement.html    # Phase 2 Part 2: Floorplan, Power Mesh & OpenROAD Lab
│   ├── Phase2_Part3_CTS_Routing_STA_Signoff.html      # Phase 2 Part 3: CTS, M1-M9 Routing & Signoff Checks
│   ├── LMS_PD_Notes.pdf                 # Complete Physical Design Master Notes (22.7 MB)
│   ├── LMS_ICC_Lab_Manual.pdf           # Synopsys IC Compiler (ICC) Hands-On Lab Manual (5.3 MB)
│   ├── Blueprint_to_Silicon.pdf         # Complete Engineering Guide: Spec to Silicon (14.6 MB)
│   ├── LMS_Input_Files_FloorPlan.pdf    # Floorplanning Inputs & Constraints Class Notes (4.9 MB)
│   ├── DigitalDesign-CombinationalLogic.pdf           # Combinational Logic & Fast Adders (3.3 MB)
│   ├── The_Digital_Engineer_s_Toolkit.pdf             # Linux EDA Engineering Workstation Handbook (11.2 MB)
│   ├── Tcl_Presentation.pdf             # EDA TCL Scripting Slide Deck (358 KB)
│   ├── linux_notes.pdf                  # Linux System Administration for EDA Engineers (1.2 MB)
│   ├── vim-commands-cheat-sheet-by-pnap.pdf           # Terminal VIM Productivity Reference Sheet (81 KB)
│   ├── cmos.pdf                         # CMOS Fundamentals & Inverter Characteristics (885 KB)
│   ├── vlsi-design.pdf                  # VLSI Design Methodologies Handbook (950 KB)
│   ├── PD_Adv_Inputs_class.pdf          # Advanced Physical Design Inputs & MCMM Libraries (1.2 MB)
│   ├── PD_Adv_Presentatrion.pdf         # Physical Design Advanced Implementation Presentation (417 KB)
│   ├── shivas-pd-hub-extracted-content.md             # Benchmark 12-Stage Debug Matrix & 35 Formulas (32 KB)
│   ├── ASIC_Design_Flow.mp4             # ASIC RTL-to-GDSII Architecture Video (36.2 MB)
│   ├── The_Engineer_s_Toolkit.mp4       # Professional Workstation Setup Video (31.9 MB)
│   └── README.md                        # Complete catalog and guide for Study assets
│
├── WebPage\                             # Production VLSI Engineering Web Workstation
│   ├── index.html                       # Core Workstation Application Shell
│   ├── styles.css                       # Semiconductor Obsidian Design System
│   ├── app.js                           # Real-time Calculators, Flashcard Deck & Workstation Engine
│   ├── README.md                        # Web Application Architecture & Feature Documentation
│   ├── PROGRESS.md                      # Real-time Implementation Tracker & Test Logs
│   ├── study\                           # NTFS Junction -> points directly to D:\EducateVLSI\Study
│   ├── assets\                          # High-resolution channel banners, logos, and badges
│   └── data\                            # Structured JSON datasets (flashcards, curriculum)
│
└── Youtube\                             # Channel Media Archive & Raw Materials
    ├── EducateVLSI.mp4                  # Official channel introduction & overview
    ├── EducateVLSI_banner.png           # Master channel banner art
    └── flashcards.csv                   # Raw 74-card interview question/answer backup
```

---

## ⚡ Quick Start: Launching the Workstation

The EducateVLSI Workstation is engineered with a **zero-dependency, zero-build architecture**. You can launch and use it immediately using either method:

### Method 1: Instant Native Browser Access (Offline / Zero-CORS)
Double-click or open directly in any modern browser:
```
file:///D:/EducateVLSI/WebPage/index.html
```

### Method 2: Local High-Performance HTTP Server
Open PowerShell in the `WebPage` folder:
```powershell
cd D:\EducateVLSI\WebPage
python -m http.server 8088
```
Then visit:
```
http://localhost:8088/
```

---

## 🌟 Key Platform Capabilities

1. **Silicon Study Vault (`#study-vault`)**:
   - 24 live, production-grade training assets directly linked via NTFS junction from `D:\EducateVLSI\Study`.
   - Multi-category filtering: *All Materials (24)*, *5-Day Foundations (5)*, *Phase 2 PD Series (3)*, *LMS Guides & PDFs (14)*, and *Video Toolkits (2)*.
   - Real-time client-side search across titles, descriptions, and metadata chips.

2. **'LEARN' Academy: ECE to Advanced Sub-3nm**:
   - 6 structured tracks with 24 in-depth lessons spanning semiconductor physics to TSMC N3 / Intel 18A GAA nanosheets and 2.5D/3D chiplets (UCIe).
   - Interactive study notes modal drawer with mathematical formulas, deep semiconductor theory, practitioner tips, and 72+ verified interview Q&As.

3. **12 Live Physical Design Calculation Engines**:
   - Dynamic switching power ($P = \alpha C V^2 f$).
   - Core & die area estimation ($A = \sum A_{cell} / \text{Util}$).
   - Setup slack ($T_{clk} + T_{skew} - T_{unc} - (T_{cq} + T_{data} + T_{setup})$).
   - Hold slack ($T_{cq} + T_{data} - (T_{skew} + T_{hold} + T_{unc})$).
   - Clock skew across tree endpoints.
   - Decap charge reservoir sizing ($\Delta Q / \Delta V$).
   - Maximum operating frequency ($F_{max} = 1 / T_{min}$).
   - Antenna ratio & diode protection ($A_{metal} / A_{gate}$).
   - Clock uncertainty budget ($\text{Jitter} + \text{Skew} + \text{Margin}$).
   - Interconnect wire resistance & Elmore $0.69RC$ delay.
   - Dynamic switching charge decap sizing.
   - Crosstalk coupling delay penalty ($0.69 R_{dr} \cdot (C_g + M \cdot C_c)$).

4. **EDA Debug Center & 10-Point Priority Triage**:
   - 10-point prioritized violation hierarchy: Connectivity → Floorplan → Power Grid → Congestion → Setup → Hold → DRVs → SI/Crosstalk → IR Drop → DRC/LVS.
   - Real EDA error signatures from Cadence Innovus (`ENCPL-1234`), Cadence Voltus (`VOLT-8801`, `VOLT-9002`), Synopsys ICC2 (`ICC2-4501`), PrimeTime (`PT-2201`), and Siemens Calibre (`LVS-101`, `DRC-M2.SP`).

5. **74-Deck ASIC & PD Interview Flashcards**:
   - 3D tactile card flip with keyboard shortcuts (`Space`, `←`, `→`, `M`), mastery tracking, and category filters.

6. **Production TCL Script Builder & Tapeout Signoff Checklists**:
   - Flow-based script generation for floorplan, power mesh, placement, CTS, and routing.
   - Multi-stage signoff checklists with live progress tracking and automated signoff readiness scoring.

---

## 👥 Community & Instructor Channels

- **YouTube**: [@EducateVLSI](https://www.youtube.com/@EducateVLSI)
- **Primary Workstation Codebase**: `D:\EducateVLSI\WebPage`
- **Course Library**: `D:\EducateVLSI\Study`
