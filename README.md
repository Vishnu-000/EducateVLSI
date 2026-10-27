# EducateVLSI — Advanced Semiconductor & Physical Design Engineering Workstation

[![Platform](https://img.shields.io/badge/Platform-EducateVLSI-00f2fe?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@EducateVLSI)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20Vanilla%20CSS%20%7C%20ES6%20JS-8b5cf6?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Design](https://img.shields.io/badge/Design-Semiconductor%20Obsidian%20UI-10b981?style=for-the-badge)](#aesthetics--design-system)
[![Status](https://img.shields.io/badge/Status-Signoff%20Ready-cyan?style=for-the-badge)](PROGRESS.md)
[![Live Site](https://img.shields.io/badge/GitHub%20Pages-Live%20Deploy-00f2fe?style=for-the-badge&logo=github)](https://vishnu-000.github.io/EducateVLSI/)

Official open-source engineering workstation and learning platform for **[EducateVLSI (@EducateVLSI)](https://www.youtube.com/@EducateVLSI)**. Designed specifically for VLSI, ASIC, and Semiconductor Physical Design engineers, students, and EDA developers transitioning from foundational Electronics and Communication Engineering (ECE) to sub-3nm Gate-All-Around (GAA) tapeouts.

---

## 📑 Table of Contents
1. [Platform Overview & Vision](#platform-overview--vision)
2. [Key Feature Matrix](#key-feature-matrix)
3. ['LEARN' Academy: ECE to VLSI-PD Curriculum (24 Modules)](#learn-academy-ece-to-vlsi-pd-curriculum)
4. [Silicon Study Vault & Reference Library (24 Assets)](#silicon-study-vault--reference-library)
5. [12 Live Physical Design Calculation Engines](#12-live-physical-design-calculation-engines)
6. [EDA Debug Center & 10-Point Priority Playbook](#eda-debug-center--10-point-priority-playbook)
7. [Production-Grade TCL Generator](#production-grade-tcl-generator)
8. [Tapeout Signoff Checklists](#tapeout-signoff-checklists)
9. [74+ ASIC & PD Interview Flashcards](#74-asic--pd-interview-flashcards)
10. [SEO Architecture, Schema.org & Sitemap](#seo-architecture-schemaorg--sitemap)
11. [Aesthetics & Design System](#aesthetics--design-system)
12. [Getting Started & Local Execution](#getting-started--local-execution)
13. [Hosting & Deployment Guide](#hosting--deployment-guide)

---

## Platform Overview & Vision

Modern semiconductor design demands an interdisciplinary mastery spanning transistor physics, standard cell libraries (.lib / LEF), logic synthesis, floorplanning, Clock Tree Synthesis (CTS), routing, Static Timing Analysis (STA), crosstalk noise, signal integrity, and FinFET/GAA sub-wavelength lithography.

**EducateVLSI** bridges this gap with an ultra-responsive, zero-dependency engineering workstation:
- **Foundations-to-Signoff Learning**: Complete structured pathway from PN junctions to TSMC N3 / Intel 18A technologies.
- **Production-Grade Utilities**: 12 real-time calculators, TCL automation scripts, and error diagnostics based on actual Synopsys ICC2, PrimeTime, and Cadence Innovus design flows.
- **Integrated Study Vault**: Direct access to 5-day interactive HTML masterclasses, 10-day Phase 2 RTL-to-GDSII series, Synopsys ICC lab manuals, and 22MB+ official LMS handbooks.
- **High-Yield Interview Prep**: 74 flashcards with 3D tactile flip and 72+ verified interview questions with deep technical rationales.
- **Zero-Friction Access**: Works offline out-of-the-box via `file://` or any static HTTP server with zero build tooling required.

---

## Key Feature Matrix

| Module | Core Capability | Highlights |
| :--- | :--- | :--- |
| **Top Workstation Ribbon** | Real-time EDA status bar | Displays active PDK (`TSMC N7 / SkyWater 130nm`), timing corners (`ss_0.72v_125c_rcworst`), and shell readiness |
| **'LEARN' Academy** | 6-track, 24-lesson curriculum | Deep-dive theory, formula callouts, practitioner tips, and 72+ technical interview questions |
| **Silicon Study Vault** | Complete engineering resource hub | 24 live assets: 5-Day Foundations labs, 3 Phase-2 modules, ICC lab manuals, LMS notes & video toolkits |
| **12 PD Calculators** | 12 live mathematical engines | Dynamic power, core util, setup/hold slack, clock skew, Elmore delay, EM, IR drop, uncertainty budget, wire RC, decap sizing & crosstalk |
| **Debug Center** | 12-stage EDA troubleshooter & triage | 10-point prioritized violation hierarchy, root cause analysis, and fixes for Innovus, ICC2, Voltus, Calibre & PrimeTime |
| **Interview Flashcards** | 74 high-yield flashcard deck | 3D tactile card flip, category filtering, search, keyboard shortcuts (`Space`, `←`, `→`, `M`), mastery tracking |
| **TCL Script Gen** | Interactive flow generator | Generates syntax-checked TCL for floorplanning, power rings, CTS constraints, and post-route timing optimization |
| **Tapeout Checklists** | Comprehensive signoff matrix | Stage-by-stage verification checks with dynamic progress scoring and signoff readiness badges |
| **SEO & Crawling** | Search Engine Discoverability | JSON-LD Structured Data, OpenGraph, Twitter Cards, `sitemap.xml`, and `robots.txt` |

---

## 'LEARN' Academy: ECE to VLSI-PD Curriculum

The **'LEARN' Academy** provides a complete university-to-industry curriculum organized into 6 specialized tracks with 24 extensive modules:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        'LEARN' ACADEMY PATHWAY                         │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 1. ECE & Physics   │ 2. Digital Logic   │ 3. ASIC Front-End            │
│  • PN Junction     │  • Datapath Adders │  • Logic Synthesis           │
│  • MOSFET IV & DIBL│  • Latches vs FFs  │  • SDC Timing Constraints    │
│  • CMOS Inverter   │  • CDC & Metastab. │  • Liberty (.lib) Models     │
│                    │  • Synthesizable   │  • Physical LEF Models       │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ 4. Physical Design │ 5. Signoff & SI    │ 6. Sub-7nm & Chiplets        │
│  • Floorplanning   │  • STA & Setup/Hold│  • 3D FinFET & Gate-All-Around│
│  • Power Mesh      │  • Signal Integrity│  • EUV High-NA Litho         │
│  • Placement/HFNS  │  • DRC, LVS & ERC  │  • 2.5D/3D Chiplets (UCIe)   │
│  • CTS & Skew      │  • EM & IR Signoff │                              │
│  • Routing & DFM   │  • ECOs & Tapeout  │                              │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

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
* **Canonical URL**: `https://vishnu-000.github.io/EducateVLSI/`
* **Robots Directives**: `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`
* **OpenGraph**: High-resolution 1200x630 social card (`assets/EducateVLSI_BannerImage.jpg`)
* **Twitter / X Cards**: Large image card with summary
* **JSON-LD Structured Data**:
  * `WebSite` Schema
  * `WebApplication` Schema
  * `Course` Schema
* **Sitemap**: [`sitemap.xml`](sitemap.xml) indexing 14 endpoints including all interactive HTML labs.
* **Robots Configuration**: [`robots.txt`](robots.txt) declaring sitemap endpoint.

---

## Aesthetics & Design System

* **Base**: Ultra-dark `#030712` (Semiconductor Obsidian)
* **Accents**: Electric Cyan `#00f2fe`, Violet `#8b5cf6`, Emerald `#10b981`, Coral Red `#ef4444`
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

### Deploying with Firebase Hosting
The repository includes a pre-configured [`firebase.json`](firebase.json) with `public: "."`:
```powershell
cd D:\EducateVLSI\WebPage
firebase deploy --only hosting
```

### Deploying with GitHub Pages
1. Push to your repository: `git push origin main`
2. In GitHub repository **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **`main`** / **`/ (root)`**.

---

## 👥 Contributors & Community

- **Instructor**: [EducateVLSI YouTube Channel](https://www.youtube.com/@EducateVLSI)
- **Repository**: [https://github.com/Vishnu-000/EducateVLSI](https://github.com/Vishnu-000/EducateVLSI)
