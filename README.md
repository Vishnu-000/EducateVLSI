# EducateVLSI — Advanced Semiconductor & Physical Design Engineering Workstation

[![Platform](https://img.shields.io/badge/Platform-EducateVLSI-00f2fe?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@EducateVLSI)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20Vanilla%20CSS%20%7C%20ES6%20JS-8b5cf6?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Design](https://img.shields.io/badge/Design-Semiconductor%20Obsidian%20UI-10b981?style=for-the-badge)](#aesthetics--design-system)
[![Status](https://img.shields.io/badge/Status-Phase%206%20Complete-cyan?style=for-the-badge)](PROGRESS.md)
[![Live Site](https://img.shields.io/badge/Firebase%20Hosting-educate--vlsi.web.app-orange?style=for-the-badge&logo=firebase)](https://educate-vlsi.web.app)
[![Silicon Studio](https://img.shields.io/badge/Silicon%20Studio-5%20Interactive%20GUIs-00f2fe?style=for-the-badge)](#silicon-interactive-studio--gui-lab)
[![Curriculum](https://img.shields.io/badge/Curriculum-25%20Modules%20%7C%20125%20Study%20Tabs-10b981?style=for-the-badge)](#learn-academy-ece-to-vlsi-pd-curriculum)

Official open-source engineering workstation and learning platform for **[EducateVLSI (@EducateVLSI)](https://www.youtube.com/@EducateVLSI)**. Designed specifically for VLSI, ASIC, and Semiconductor Physical Design engineers, students, and EDA developers transitioning from foundational Electronics and Communication Engineering (ECE) to sub-3nm Gate-All-Around (GAA) tapeouts.

---

## 📑 Table of Contents
1. [Platform Overview & Vision](#platform-overview--vision)
2. [Key Feature Matrix](#key-feature-matrix)
3. [Silicon Interactive Studio & GUI Lab (5 Live Simulators)](#silicon-interactive-studio--gui-lab)
4. ['LEARN' Academy & 5-Dimension Study Engine (25 Lessons, 125 Tabs)](#learn-academy-ece-to-vlsi-pd-curriculum)
5. [Mobile UI/UX Architecture & Responsive Engineering](#mobile-uiux-architecture--responsive-engineering)
6. [Silicon Study Vault & Reference Library (24 Assets)](#silicon-study-vault--reference-library)
7. [12 Live Physical Design Calculation Engines](#12-live-physical-design-calculation-engines)
8. [EDA Debug Center & 10-Point Priority Playbook](#eda-debug-center--10-point-priority-playbook)
9. [Production-Grade TCL Generator](#production-grade-tcl-generator)
10. [Tapeout Signoff Checklists](#tapeout-signoff-checklists)
11. [74+ ASIC & PD Interview Flashcards](#74-asic--pd-interview-flashcards)
12. [SEO Architecture, Schema.org & Sitemap](#seo-architecture-schemaorg--sitemap)
13. [Aesthetics & Design System](#aesthetics--design-system)
14. [Getting Started & Local Execution](#getting-started--local-execution)
15. [Hosting & Deployment Guide](#hosting--deployment-guide)

---

## Platform Overview & Vision

Modern semiconductor design demands an interdisciplinary mastery spanning transistor physics, standard cell libraries (.lib / LEF), logic synthesis, floorplanning, Clock Tree Synthesis (CTS), routing, Static Timing Analysis (STA), crosstalk noise, signal integrity, and FinFET/GAA sub-wavelength lithography.

**EducateVLSI** bridges this gap with an ultra-responsive, zero-dependency engineering workstation:
- **Silicon Interactive Studio & GUI Lab**: 5 real-time analytical & SVG hardware simulation engines (Inverter VTC, STA timing waveforms, MOSFET IV curves, 10-stage ASIC pipeline, and logic gates stick layout).
- **Foundations-to-Signoff Learning**: 25 in-depth modules organized into 6 tracks with 125 rich study tabs spanning physics, mathematical SI unit breakdowns, worked examples, and Tier-1 interview questions.
- **Production-Grade Utilities**: 12 real-time calculators, TCL automation scripts, and error diagnostics based on actual Synopsys ICC2, PrimeTime, and Cadence Innovus design flows.
- **Integrated Study Vault**: Direct access to 5-day interactive HTML masterclasses, 10-day Phase 2 RTL-to-GDSII series, Synopsys ICC lab manuals, and 22MB+ official LMS handbooks.
- **High-Yield Interview Prep**: 74 flashcards with 3D tactile flip and 75+ verified interview questions with deep technical rationales.
- **Mobile-First Experience**: Flawlessly optimized from narrow 320px mobile screens to 4K desktop viewports with native bottom sheets and zero page jitter.
- **Zero-Friction Access**: Works offline out-of-the-box via `file://` or any static HTTP server with zero build tooling required.

---

## Key Feature Matrix

| Module | Core Capability | Highlights |
| :--- | :--- | :--- |
| **Silicon Interactive Studio** | 5 Analytical & SVG Hardware Simulators | Inverter VTC carrier simulator, 3-lane STA timing waveform lab, MOSFET IV pinch-off curves, 10-stage ASIC flow stepper, and logic gate stick diagrams |
| **'LEARN' Academy** | 6-track, 25-lesson comprehensive curriculum | 125 study tabs: Core Theory, Governing Formulas & SI Units, Interactive Studio bridges, PD Practitioner Tips with TCL recipes, and Tier-1 Q&A |
| **Mobile UI/UX System** | Touch-optimized responsive interface | App-native bottom sheets (94vh), backdrop blur overlay with body scroll locking, fluid clamp typography, and non-overlapping telemetry strip |
| **Top Workstation Ribbon** | Real-time EDA status telemetry | Displays active PDK (`TSMC N7 / SkyWater 130nm`), timing corners (`ss_0.72v_125c_rcworst`), and shell readiness |
| **Silicon Study Vault** | Complete engineering resource hub | 24 live assets: 5-Day Foundations labs, 3 Phase-2 modules, ICC lab manuals, LMS notes & video toolkits |
| **12 PD Calculators** | 12 live mathematical engines | Dynamic power, core util, setup/hold slack, clock skew, Elmore delay, EM, IR drop, uncertainty budget, wire RC, decap sizing & crosstalk |
| **Debug Center** | 12-stage EDA troubleshooter & triage | 10-point prioritized violation hierarchy, root cause analysis, and fixes for Innovus, ICC2, Voltus, Calibre & PrimeTime |
| **Interview Flashcards** | 74 high-yield flashcard deck | 3D tactile card flip, category filtering, search, keyboard shortcuts (`Space`, `←`, `→`, `M`), mastery tracking |
| **TCL Script Gen** | Interactive flow generator | Generates syntax-checked TCL for floorplanning, power rings, CTS constraints, and post-route timing optimization |
| **Tapeout Checklists** | Comprehensive signoff matrix | Stage-by-stage verification checks with dynamic progress scoring and signoff readiness badges |
| **SEO & Crawling** | Search Engine Discoverability | JSON-LD Structured Data, OpenGraph, Twitter Cards, `sitemap.xml`, and `robots.txt` |

---

## Silicon Interactive Studio & GUI Lab

The workstation integrates an interactive hardware simulation environment featuring 5 real-time analytical simulators built entirely with pure client-side SVG rendering and zero external dependencies:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   SILICON INTERACTIVE STUDIO & GUI LAB                 │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 1. CMOS Inverter   │ 2. STA Waveforms   │ 3. MOSFET IV Physics         │
│  • Non-linear VTC  │  • 3-Lane Diagram  │  • Family of Curves          │
│  • Carrier Drift   │  • Slack Hazard    │  • Pinch-off Visualization   │
│  • Noise Margins   │  • Clock Skew Lab  │  • Triode / Saturation       │
├────────────────────┴────────────────────┼──────────────────────────────┤
│ 4. ASIC 10-Stage Pipeline Flow          │ 5. Standard Cell Logic       │
│  • RTL -> GDSII Flow Stepper            │  • INV, NAND2, NOR2, XOR2    │
│  • Inputs, Outputs & Critical Failures  │  • Dynamic Truth Tables      │
│  • Real EDA Tool Command Signatures     │  • SVG Stick Layouts         │
└─────────────────────────────────────────┴──────────────────────────────┘
```

### 1. CMOS Inverter VTC & Carrier Simulator
* **Real-Time VTC Curves**: Analytically calculates $V_{OH}, V_{OL}, V_{IH}, V_{IL}$, and switching threshold $V_M$ as input voltage $V_{in}$ slides from $0.0\text{V}$ to $1.0\text{V}$.
* **Dynamic Noise Margins**: Continuously computes $NM_L = V_{IL} - V_{OL}$ and $NM_H = V_{OH} - V_{IH}$.
* **Carrier Drift Visualizer**: Live schematic showing electron and hole conduction channels in NMOS/PMOS as gate potential transitions.
* **$W_p/W_n$ Sizing Presets**: Explore balanced ($W_p/W_n = 2.5$), high-speed ($3.0$), and minimum-area ($1.0$) configurations.

### 2. STA Timing Slack & Waveform Lab
* **3-Lane Dynamic Waveforms**: Interactive SVG timing diagrams displaying Launch Clock, Data Arrival at Register D-pin, and Capture Clock.
* **Real-Time Setup Slack Equation**:
  $$\text{Slack}_{setup} = (T_{clk} + T_{skew} - T_{unc}) - (T_{c2q} + T_{comb} + T_{setup})$$
* **Hazard Zone Highlighting**: Setup violation danger window dynamically highlights in red when data arrival encroaches into the setup aperture.
* **Interactive Parameters**: Clock period $T_{clk}$, clock skew $T_{skew}$, combinational datapath delay $T_{comb}$, and clock uncertainty budget $T_{unc}$.

### 3. MOSFET IV Physics & Channel Regime Simulator
* **Family of Curves**: Real-time analytical generation of $I_{DS}-V_{DS}$ curves across 5 gate bias steps ($V_{GS} = 0.2\text{V}, 0.4\text{V}, 0.6\text{V}, 0.8\text{V}, 1.0\text{V}$).
* **Active Operating Point**: Pulsating indicator tracking the active bias point along the curve.
* **Dynamic Regime Badge**: Identifies whether the transistor is in **Cutoff**, **Linear / Triode**, or **Saturation / Pinch-off**.
* **SVG Pinch-Off Diagram**: Live cross-section showing channel inversion depth and depletion zone widening near the drain.

### 4. ASIC Physical Design 10-Stage Flow Explorer
* **10 Sequential Pipeline Stages**:
  1. *Logic Synthesis* $\to$ 2. *Floorplanning* $\to$ 3. *Power Planning* $\to$ 4. *Placement* $\to$ 5. *CTS* $\to$ 6. *Routing* $\to$ 7. *DRC/LVS Verification* $\to$ 8. *Parasitic Extraction* $\to$ 9. *Timing Signoff* $\to$ 10. *Tapeout*.
* **Comprehensive Metadata**: Displays Stage Goal, Input Deliverables, Output Deliverables, Production EDA Commands (Innovus / ICC2), and Critical Failure Modes for each stage.

### 5. Standard Cell Logic & Stick Layout Switcher
* **6 Standard Gates**: Inverter (`INV`), `NAND2`, `NOR2`, `AND2`, `OR2`, and `XOR2`.
* **Dynamic Truth Table**: Highlights the active row corresponding to user-toggled input states ($A=0,1$; $B=0,1$).
* **Switch State Summary**: Instant readout of NMOS pull-down and PMOS pull-up conduction states.
* **SVG Stick Diagram**: Visualizes diffusion rails, polysilicon gates, metal-1 interconnects, and contact vias.

---

## 'LEARN' Academy: ECE to VLSI-PD Curriculum

The curriculum spans 6 tracks and 25 extensive modules. Clicking any module card opens the **Interactive Lesson Study Drawer**, providing a 5-dimension technical deep-dive across 125 total study tabs:

### The 5 Study Dimensions:
1. **`📖 Core Theory`**: Executive briefing, foundational semiconductor physics, silicon physical architecture, EDA tool flow integration, and PPA design trade-offs.
2. **`📐 Formulas & Math`**:
   * Governing equations in high-contrast monospace blocks.
   * **Physical Variable Breakdown Table**: Every symbol defined with physical meaning and official SI engineering units.
   * **Real-World Worked Numerical Examples**: Concrete foundry scenarios (e.g. SkyWater 130nm substrate isolation, 5nm FinFET drive currents, 32-bit Kogge-Stone vs RCA delays, 2-stage synchronizer MTBF, ICG power savings, Black's EM equation wire sizing) with step-by-step substitution and signoff judgments.
   * **PVT Corner Sensitivity Matrix**: Parameter shifts between slow (`ss_0.72v_125c`) and fast (`ff_0.88v_-40c`) corners, plus temperature inversion effects.
3. **`⚡ Interactive GUI Lab`**: Direct bridge to the corresponding Silicon Studio simulator panel with 3 guided engineering experiment challenges.
4. **`💡 PD Practitioner Tips`**:
   * Practical tapeout gotchas from real-world tapeouts.
   * **Production EDA Command Recipes**: Syntax-checked TCL command blocks for Cadence Innovus, Synopsys ICC2, and PrimeTime.
   * **Signoff Verification Checklist**: Strict signoff criteria before mask generation.
5. **`🎯 Interview Q&A`**: Real interview questions asked by engineering interviewers at **Apple, NVIDIA, Qualcomm, TSMC, Intel, and AMD** with Core Engineering Takeaways and In-Depth Technical Solutions.

### Curriculum Module Sitemap:
| Track | Module ID | Title | Formula / Key Concept | Studio GUI |
| :--- | :--- | :--- | :--- | :---: |
| **Track 1: ECE & Physics** | `ece-pn` | Semiconductor Physics & PN Junction Diodes | $V_0 = V_t \cdot \ln(N_A N_D / n_i^2)$ | 🔬 MOSFET / Junction |
| | `ece-mosfet` | MOSFET Transistor Operating Physics | $I_{DS,sat} = \frac{1}{2}\mu C_{ox}\frac{W}{L}(V_{GS}-V_{th})^2$ | 🔬 MOSFET IV Curves |
| | `ece-cmos-inverter` | CMOS Inverter & Power Dissipation | $P = \alpha C_L V_{DD}^2 f + I_{sc}V_{DD} + I_{leak}V_{DD}$ | ⚡ Inverter VTC |
| **Track 2: Digital Logic** | `dig-comb` | Combinational Datapaths & Adders | Kogge-Stone vs Brent-Kung vs CLA | 🔌 Logic Gates |
| | `dig-seq` | Sequential Logic: Latches vs Flip-Flops | $T_{clk} \ge T_{c2q} + T_{comb} + T_{setup} - T_{skew}$ | 🔌 Sequential DFF |
| | `dig-cdc` | Clock Domain Crossing (CDC) & FIFOs | $\text{MTBF} = \frac{e^{t_r/\tau}}{T_0 f_{clk} f_{data}}$ | ⏱️ STA Waveforms |
| | `dig-hdl` | Synthesizable Verilog & RTL Best Practices | Integrated Clock Gating (ICG) Efficiency | 🗺️ ASIC Pipeline |
| **Track 3: ASIC Flow** | `fe-synth` | Logic Synthesis & Technology Mapping | Area-delay optimization curves | 🗺️ ASIC Pipeline |
| | `fe-sdc` | SDC Timing Constraints Decoded | `create_clock`, `set_input_delay`, False Paths | ⏱️ STA Waveforms |
| | `fe-lib` | Standard Cell Timing Models (.lib) | NLDM 7x7 Lookup Table Bi-Linear Interpolation | ⏱️ STA Waveforms |
| | `fe-lef` | Physical Abstraction: Tech & Macro LEF | Routing pitch grids, OBS keepout layers | 🔌 Logic & Layout |
| **Track 4: Physical Design** | `be-floorplan` | Floorplanning & Die Architecture | $\text{Util} = \frac{\sum A_{cells}}{\text{Core Area}}$, Aspect Ratio | 🗺️ ASIC Pipeline |
| | `be-macro` | Macro Placement & Keepout Halos | Dataflow orientation, channel pitch | 🗺️ ASIC Pipeline |
| | `be-power` | Power Distribution Network (PDN) & Decap | Static & Dynamic IR Drop, $C_{decap} = \Delta Q / \Delta V$ | 🗺️ ASIC Pipeline |
| | `be-placement` | Cell Placement, Legalization & HFNS | Half-Perimeter Wire Length ($\text{HPWL}$) | 🗺️ ASIC Pipeline |
| | `be-cts` | Clock Tree Synthesis (CTS) & Skew | $T_{skew} = T_{lat,capture} - T_{lat,launch}$, 2W2S NDR | ⏱️ STA Waveforms |
| | `be-routing` | Global & Detailed Routing, DRC | Elmore Delay $T_d = 0.69 R_{wire} C_{wire}$ | 🔌 Detailed Routing |
| **Track 5: Signoff & SI** | `so-sta` | Static Timing Analysis (STA) & MCMM | Setup/Hold Slack, CRPR, OCV derates | ⏱️ STA Waveforms |
| | `so-si` | Signal Integrity, Crosstalk & Glitch | Miller Coupling Factor $M \in [0, 2]$, $\Delta V_{noise}$ | ⏱️ STA Waveforms |
| | `so-pv` | Physical Verification: DRC, LVS & Antenna | Antenna Ratio $\le 400:1$, Gate area protection | 🔌 Layout & DRC |
| | `so-em` | Electromigration & Power Integrity | Black's Equation $\text{MTTF} \propto \frac{1}{J^n}\exp(\frac{E_a}{kT})$ | 🗺️ ASIC Pipeline |
| | `so-tapeout` | ECOs & GDSII/OASIS Tapeout Signoff | Metal-only ECOs, Spare cells, Mask fracturing | 🗺️ ASIC Pipeline |
| **Track 6: Advanced Nodes** | `adv-finfet` | FinFET, Gate-All-Around (GAA) & 3nm | $W_{eff} = 2H_{fin} + W_{fin}$, Self-Heating (SHE) | 🔬 FinFET / GAA |
| | `adv-litho` | EUV Photolithography & Multi-Patterning | Rayleigh Resolution $R = k_1 \frac{\lambda}{\text{NA}}$, EPE | 🗺️ ASIC Pipeline |
| | `adv-pkg` | 2.5D/3D Chiplets, Interposers & UCIe | TSMC CoWoS, Intel EMIB, Hybrid Bonding | 🗺️ ASIC Pipeline |

---

## Mobile UI/UX Architecture & Responsive Engineering

The workstation has been meticulously re-engineered for mobile viewports (320px to 768px) while maintaining the desktop workstation aesthetic:

* **App-Native Bottom Sheet Modal**: On screens $< 768\text{px}$, the lesson study notes modal automatically transforms into a 94vh bottom sheet with top-rounded corners, a sticky drag header, and smooth touch-scrolling.
* **Glassy Backdrop & Scroll Locking**: The mobile navigation drawer is supported by `.mobile-nav-backdrop` (`backdrop-filter: blur(12px)`) and automatically locks background body scrolling (`body.nav-drawer-open`) to eliminate scroll stutter.
* **Non-Overlapping Telemetry Strip**: Re-engineered `.floating-tech-chip chip-1` and `chip-2` from absolute coordinates over the channel banner into an organized horizontal `.hero-tech-chips-bar` situated cleanly between the banner and the channel info, keeping the EducateVLSI banner artwork 100% visible and centered.
* **Zero Horizontal Overflow**: Bounded all layout containers with `overflow-x: hidden`, `max-width: 100vw`, and fluid `clamp()` typography to prevent horizontal scrollbars on narrow screens.
* **Fluid Auto-Fit Grids**: All workstation cards (`.flashcards-grid`, `.calculators-grid`, `.debug-errors-grid`, `.learn-modules-grid`, `.study-vault-grid`) use fluid CSS grids (`minmax(min(100%, 320px), 1fr)`).

---

## Silicon Study Vault & Reference Library

Hosted inside [`study/`](study/), the platform serves 24 production-grade educational assets:

### 1. 5-Day Foundation Masterclass (Interactive HTML Modules)
- **Day 1: Semiconductor Physics, CMOS & Logic Gates** (`study/day1_cmos_foundations.html`): Silicon lattice, doping, MOSFET $V_{TH}$ & 3 operating regions, CMOS inverter VTC, noise margins, standard gates, and 10-Q quiz.
- **Day 2: Sequential Logic & Timing** (`study/day2_sequential_logic.html`): Cross-coupled latches, transparency hazards, master-slave edge-triggered DFF, setup/hold windows, and metastability MTBF equation.
- **Day 3: Power Dissipation, VLSI Flow & Verilog RTL** (`study/day3_power_vlsi_verilog.html`): Dynamic power ($P = \alpha C V^2 f$), subthreshold leakage, Multi-Vt strategy, integrated clock gating (ICG), and synthesizable Verilog.
- **Day 4: Logic Synthesis — RTL to Gate Netlist** (`study/day4_logic_synthesis.html`): Translation, logic optimization, technology mapping, drive strength (X1/X2/X4), Liberty (.lib) PVT corners, and SDC constraints.
- **Day 5: Static Timing Analysis — Reading the Fabric of Time** (`study/day5_static_timing_analysis.html`): Reg-to-reg paths, 4 path types, unateness, MMMC analysis, OCV/AOCV/POCV derating, clock uncertainty budget, and report reading.

### 2. Phase 2 Advanced Physical Design Series
- **Phase 2 · Part 1: VLSI & Digital Fundamentals & File Ecosystem** (`study/Phase2_Part1_VLSI_Fundamentals.html`): Standard cell drive strengths (X1–X8), timing waveforms, full RTL-to-GDSII flow, complete PD file ecosystem (.lib, .lef, .sdc, .def, .spef, .gds).
- **Phase 2 · Part 2: Floorplan, Power Planning & Placement** (`study/Phase2_Part2_Floorplan_Power_Placement.html`): Floorplan anatomy, die area estimation, power mesh rings/stripes, IR drop, global/legalized placement, and OpenROAD hands-on lab.
- **Phase 2 · Part 3: CTS, Routing, STA & Signoff** (`study/Phase2_Part3_CTS_Routing_STA_Signoff.html`): Clock Tree Synthesis skew/latency, routing metal stackup (M1–M9), global vs detailed routing, real PrimeTime STA reports, signoff checklist.

### 3. Master LMS Textbooks, Lab Manuals & Handbooks (PDFs)
- **Synopsys IC Compiler (ICC) Lab Manual** (`study/LMS_ICC_Lab_Manual.pdf` — 5.3 MB): Step-by-step practical lab exercises in Synopsys ICC shell.
- **Complete Physical Design Notes** (`study/LMS_PD_Notes.pdf` — 22.7 MB): Official 22.7 MB comprehensive training handbook from netlist to tapeout.
- **Blueprint to Silicon Masterclass Guide** (`study/Blueprint_to_Silicon.pdf` — 14.6 MB): Architecture, RTL, synthesis, and foundry flow.
- **Floorplan Design Inputs & Constraints** (`study/LMS_Input_Files_FloorPlan.pdf` — 4.9 MB): IO pin ordering, macro halo spacing, and PG grid sizing.
- **Digital Design — Combinational Logic** (`study/DigitalDesign-CombinationalLogic.pdf` — 3.3 MB): Adders, multipliers, and ALU datapaths.
- **EDA TCL Scripting Presentation** (`study/Tcl_Presentation.pdf` — 358 KB): Practical TCL programming for EDA tools.
- **The Digital Engineer’s Toolkit Handbook** (`study/The_Digital_Engineer_s_Toolkit.pdf` — 11.2 MB): Workstation setup, shell automation, and debugging.
- **Linux EDA Environment & VIM Reference** (`study/linux_notes.pdf` & `study/vim-commands-cheat-sheet-by-pnap.pdf`): Shell administration & VIM quick reference.
- **CMOS & VLSI Architecture Handbooks** (`study/cmos.pdf`, `study/vlsi-design.pdf`, `study/PD_Adv_Inputs_class.pdf`, `study/PD_Adv_Presentatrion.pdf`).
- **Benchmark Extractions & Triage Matrix** (`study/shivas-pd-hub-extracted-content.md` — 32 KB).

### 4. Video Toolkits
- **ASIC Design Flow Video Tutorial** (`study/ASIC_Design_Flow.mp4` — 36.2 MB)
- **The Engineer’s Toolkit Video Tutorial** (`study/The_Engineer_s_Toolkit.mp4` — 31.9 MB)

---

## 12 Live Physical Design Calculation Engines

All calculators update interactively with zero page reloads:

1. **Dynamic Power Consumption**: $P_{dyn} = \alpha \cdot C_L \cdot V_{DD}^2 \cdot f$
2. **Core & Die Area Estimator**: $\text{Core Area} = \frac{\sum A_{cells}}{\text{Utilization}}$
3. **Setup Slack (Max Delay)**: $\text{Slack}_{setup} = (T_{clk} + T_{skew} - T_{unc}) - (T_{cq} + T_{comb} + T_{setup})$
4. **Hold Slack (Min Delay)**: $\text{Slack}_{hold} = (T_{cq} + T_{comb}) - (T_{skew} + T_{hold} + T_{unc})$
5. **Clock Skew Calculator**: $T_{skew} = T_{latency,capture} - T_{latency,launch}$
6. **Decoupling Capacitor (Decap) Sizing**: $C_{decap} = \frac{\Delta Q}{\Delta V} = \frac{I_{peak} \cdot \Delta t}{\Delta V}$
7. **Maximum Operating Frequency ($F_{max}$)**: $F_{max} = \frac{1}{T_{cq} + T_{comb} + T_{setup} - T_{skew} + T_{unc}}$
8. **Antenna Ratio Check**: $\text{Ratio} = \frac{\text{Metal Area}}{\text{Gate Area}}$
9. **Clock Uncertainty Budget**: $T_{unc} = T_{jitter} + T_{skew} + T_{margin}$
10. **Interconnect Wire Resistance & Elmore Delay**: $R_{wire} = \rho \cdot \frac{L}{W \cdot t}$, $\text{Delay} \approx 0.69 \cdot R_{wire} \cdot C_{wire}$
11. **Decap Charge Reservoir Sizing**: $C_{decap} = \frac{\Delta I \cdot \Delta t}{\Delta V_{allowable}}$
12. **Crosstalk Coupling Delay Penalty**: $\Delta t \approx 0.69 \cdot R_{driver} \cdot (C_g + M \cdot C_c)$

---

## EDA Debug Center & 10-Point Priority Playbook

Structured around the industry-standard 10-point debug hierarchy:

1. **Connectivity & Netlist Syntax**
2. **Floorplan & Macro Placement**
3. **Power Grid & PG Straps**
4. **Congestion & Pin Density**
5. **Setup Timing (Max Delay)**
6. **Hold Timing (Min Delay)**
7. **Design Rule Violations (DRVs)**
8. **Signal Integrity (SI) & Crosstalk**
9. **IR Drop & Dynamic Voltage Drop (DVD)**
10. **Physical Signoff (DRC/LVS/ERC)**

Includes exact tool error signatures for Cadence Innovus (`ENCPL-1234`), Voltus (`VOLT-8801`, `VOLT-9002`), Synopsys ICC2 (`ICC2-4501`), PrimeTime (`PT-2201`), and Siemens Calibre (`LVS-101`, `DRC-M2.SP`).

---

## SEO Architecture, Schema.org & Sitemap

The application implements modern web search engine standards:
* **Canonical URL**: `https://educate-vlsi.web.app/`
* **Robots Directives**: `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`
* **OpenGraph**: High-resolution 1200x630 social card (`assets/EducateVLSI_BannerImage.jpg`)
* **Twitter / X Cards**: Large image card with summary
* **JSON-LD Structured Data**:
  * `WebSite` Schema
  * `WebApplication` Schema
  * `Course` Schema
* **Sitemap**: [`sitemap.xml`](sitemap.xml) indexing all 14 endpoints including all interactive HTML labs.
* **Robots Configuration**: [`robots.txt`](robots.txt) declaring sitemap endpoint.

---

## Aesthetics & Design System

* **Base**: Ultra-dark `#030712` (Semiconductor Obsidian)
* **Accents**: Electric Cyan `#00f2fe`, Violet `#8b5cf6`, Emerald `#10b981`, Coral Red `#ef4444`, Amber `#fbbf24`
* **Card Style**: Glassmorphism (`backdrop-filter: blur(16px)`), subtle glowing borders, interactive lift transitions.
* **Typography**: Clean monospace callouts for EDA commands and mathematical equations with KaTeX/LaTeX formatting.

---

## Getting Started & Local Execution

### Native Browser Launch (Zero Installation)
Double click or open [`index.html`](index.html) directly in any modern browser:
```
file:///D:/EducateVLSI/WebPage/index.html
```

### Local Dev Server
```powershell
cd D:\EducateVLSI\WebPage
python -m http.server 8088
```
Visit `http://localhost:8088/` in your browser.

---

## Hosting & Deployment Guide

### Deploying with Firebase Hosting (Production Edge CDN)
The repository includes a pre-configured [`firebase.json`](firebase.json) with `public: "."`:
```powershell
cd D:\EducateVLSI\WebPage
firebase deploy --only hosting
```
Live Production URL: **`https://educate-vlsi.web.app`**

### Deploying with GitHub Pages
1. Push to your repository: `git push origin main`
2. In GitHub repository **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **`main`** / **`/ (root)`**.

---

## 👥 Contributors & Community

- **Lead Engineer & Instructor**: [EducateVLSI YouTube Channel](https://www.youtube.com/@EducateVLSI)
- **Primary Repository**: [https://github.com/Vishnu-000/EducateVLSI](https://github.com/Vishnu-000/EducateVLSI)
- **Production Deployment**: [https://educate-vlsi.web.app](https://educate-vlsi.web.app)
