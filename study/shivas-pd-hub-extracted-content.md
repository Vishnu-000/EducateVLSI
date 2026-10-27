# Shiva's PD Hub — Extracted Learning Content

Source: https://shivas-pd-hub.lovable.app/ (extracted 25 Oct 2026)
Answers are condensed into study-note form; questions, formulas, commands and structure are kept as on the site.

## Coverage

| Captured fully | Captured partly | Not captured |
|---|---|---|
| Home, Learn index, Floorplanning topic, Debug Center (stage list, priority table, error DB), Tools, Interview (all Q&A), Calculators, STA Suite, Checklists, Aptitude, Jobs, AI page, Lab overview | Debug Center stage details (only Stage 01 body), EM/IR (table of contents only, sections collapsed), Lab (overview and env only, tabs are dynamic) | 13 other Learn topic pages (blocked by the fetch tool), `/resume`, `/mock-interview`, `/notes`, `/companies` (empty or gated when fetched), Analyzer results |

To get the missing pages, open each one in a browser and paste the text, or send screenshots.

---

## 1. Site structure and links

**Nav:** Learn · Linux Lab · Jobs · Tools · Debug · Interview · Mock AI · Resume · Aptitude · Calculators · STA Suite · Report Analyzer · EM/IR Analysis · Checklists · Companies · Notes · AI (`/ai`) · Sign in (`/auth`)

**Home claims:** 13+ core PD topics · 8 EDA tools · 1000+ interview questions

**Home cards:**
- Learning module: RTL-to-GDSII (floorplan, power plan, placement, CTS, routing, STA, signoff)
- Debug Center: stage playbook with root causes, industry fixes, tool commands
- Linux & open-source lab: OpenLane, OpenROAD, Yosys, SKY130 in the browser
- Tool tutorials: Innovus, ICC2, Tempus, PrimeTime, Voltus, Calibre
- Interview prep: beginner to expert Q&A across STA, IR/EM, CTS, floorplan
- Job portal: filters, tracking, AI matching
- PD calculators: utilization, IR drop, slack, fanout, wire resistance
- Checklists: floorplan, CTS, routing, signoff, tapeout
- Shiva's PD notes: curated notes and interview questions (sign-in required)
- AI assistant: PD, EM/IR, STA, Innovus, TCL (Gemini and GPT)

**Community links:**
- WhatsApp: https://chat.whatsapp.com/L7kPjbiGONi2iJkHOdstPn
- YouTube: https://www.youtube.com/@shivasPDhub
- LinkedIn: https://www.linkedin.com/in/shivaprasad-sevarthi
- Instagram: https://www.instagram.com/pd_engineer_vlsi
- Notes download (Floorplanning page): https://drive.google.com/drive/folders/1iynSPGp28dSkeG8SYTOK32gL6caZBizM

---

## 2. Learn: curriculum (14 topics)

| Group | Topic | Summary | Tips / Qs |
|---|---|---|---|
| Foundation | Introduction to VLSI Physical Design (`/learn/intro-vlsi-pd`) | Bridging logic synthesis to silicon layout | 4 / 3 |
| Foundation | RTL to GDSII Flow (`/learn/rtl-to-gdsii`) | End-to-end flow overview with hand-offs | 3 / 2 |
| Backend | Floorplanning (`/learn/floorplanning`) | Die size, macro placement, pin planning, blockages | 4 / 3 |
| Backend | Power Planning (`/learn/power-planning`) | Building the PG mesh for IR-clean delivery | 3 / 2 |
| Backend | Placement (`/learn/placement`) | Global and detailed placement for timing and congestion | 3 / 2 |
| Backend | Clock Tree Synthesis (`/learn/cts`) | Balanced clock delivery, minimum skew and insertion delay | 3 / 3 |
| Backend | Routing (`/learn/routing`) | Global and detailed routing meeting DRC and timing | 3 / 2 |
| Signoff | Static Timing Analysis (`/learn/sta`) | Setup, hold, MCMM | 2 / 3 |
| Signoff | EM / IR Analysis (`/learn/em-ir`) | Electromigration and IR drop signoff | 2 / 2 |
| Signoff | Physical Verification (`/learn/physical-verification`) | DRC, LVS, ERC, antenna, density | 2 / 2 |
| Signoff | Signoff Flow (`/learn/signoff`) | Timing, IR, EM, PV gates before tapeout | 2 / 2 |
| Advanced | ECO Flow (`/learn/eco`) | Functional and timing ECOs | 2 / 1 |
| Fundamentals | Digital Electronics (`/learn/digital-electronics`) | Number systems, gates, combinational and sequential circuits | 5 / 3 |
| Fundamentals | CMOS Design Fundamentals (`/learn/cmos`) | MOSFET operation, inverter, static/dynamic power, standard cells | 5 / 3 |

**Topic page template:** Overview · Objectives · Theory · Flow Diagram · Images · Videos · Best Practices · Common Mistakes · Industry Examples · FAQs · Interview Qs · MCQs · References · Related · Ask AI. Buttons: Mark complete, Bookmark, Download notes, Ask AI.

### 2.1 Floorplanning (full page)

**Overview.** Floorplanning defines the physical skeleton of the chip: die/core dimensions, macro locations, IO pins, PG skeleton and blockages. It is the single biggest lever for downstream PPA.

**Objectives**
- Compute die/core area and utilization
- Place macros to minimize wire length and congestion
- Plan IO pins for package and signal integrity
- Set halos and blockages correctly

**Theory**
- Utilization = std-cell area / core area (target 60–75%)
- Aspect ratio = height / width
- Macro placement: group related macros, keep channels wide, avoid narrow slivers
- Halos: keep-out around macros to help routing pin access
- Blockages: hard (no cells), soft (only optimization), partial (density)
- Pin planning: match top-level connectivity and package escape

**Diagram**
```
+------------------ DIE ------------------+
| IO ring                                 |
|  +------------- CORE -------------+    |
|  | [SRAM]  [SRAM]                  |    |
|  | [MAC ]  std-cells   [PLL]       |    |
|  | [SRAM]                          |    |
|  +---------------------------------+    |
+-----------------------------------------+
```

**Best practices**
- Start at 60–75% utilization
- Group related macros; avoid narrow channels
- Place high-fanout macros close to their consumers
- Macro halos of at least 2–3 routing tracks

**Common mistakes**
- Macros in the middle of the core create routing barriers
- Under-sizing the die leads to congestion and IR issues
- Forgetting pin blockages under macros

**Industry examples:** SRAM arrays along one edge with common power straps; PLL isolated with a guard ring and analog blockage.

**FAQs**
- *Choosing aspect ratio?* Match package/IO constraints; usually 1.0 unless routing or timing demands otherwise.
- *Utilization too low?* Wastes area and leakage; add logic or shrink the die.

**Interview questions**
- Beginner: What are aspect ratio and utilization? What are hard vs soft blockages?
- Intermediate: How do you decide macro orientation? Explain pin-access issues at advanced nodes.
- Advanced: Describe your floorplan iteration loop and QoR feedback.

**MCQs**
1. Typical initial utilization is: <40% / **60–75%** / 90–100% / >100%
2. A halo around a macro is: power ring / **keep-out for cells** / clock buffer / metal blockage layer

**References:** Innovus Floorplan Guide (cadence.com), Google image search links, YouTube channel.
**Related:** Power Planning, Placement, Introduction to VLSI PD.

---

## 3. Debug Center

Tool filters: All · Innovus · Voltus · ICC2 · Calibre LVS · Calibre DRC · Innovus CTS · PrimeTime
Tabs per stage: Errors & causes · Industry fix · Best practices · Commands · Tips · References

### 3.1 The 12 stages

| # | Stage | Issues | Level | Flow position | Purpose |
|---|---|---|---|---|---|
| 01 | Design Import / Netlist Read | 3 | Foundational | 8% | Resolve connectivity and library problems before optimization |
| 02 | Floorplanning | 5 | Intermediate | 17% | Violations introduced here are expensive to repair later |
| 03 | Power Planning | 4 | Intermediate | 25% | Reliable VDD/VSS connectivity before placement |
| 04 | Placement | 4 | Intermediate | 33% | Control density, congestion, wire length, electrical rules |
| 05 | CTS | 4 | Advanced | 42% | Balance arrival, latency, slew, clock rules |
| 06 | Routing | 3 | Advanced | 50% | Manufacturing rules, opens, shorts, antenna, route demand |
| 07 | Timing Analysis (STA) | 2 | Advanced | 58% | Treat setup and hold separately; validate across MCMM |
| 08 | Signal Integrity | 2 | Advanced | 67% | Reduce coupling-driven timing and noise |
| 09 | IR Drop Analysis | 2 | Signoff | 75% | Static and dynamic voltage loss |
| 10 | Electromigration | 1 | Signoff | 83% | Current density within lifetime limits |
| 11 | Physical Verification | 3 | Signoff | 92% | Manufacturable and matches intended connectivity |
| 12 | Signoff Checks | 1 | Signoff | 100% | Full release checklist before tapeout |

### 3.2 Stage 01 detail (Design Import / Netlist Read)

| Issue | Example | Root causes |
|---|---|---|
| Unresolved references | `ERROR: Cell AOI22_X1 not found` | Missing .lib; missing LEF; wrong search path; wrong library version |
| Black-box cells | — | Macro LEF exists but Verilog model is missing |
| Duplicate cell definition | — | Same library loaded more than once |

### 3.3 Debugging priority order

| # | Violation | Why first |
|---|---|---|
| 1 | Connectivity errors | Missing cells, unresolved refs, opens, shorts must be fixed before optimization |
| 2 | Floorplan issues | A poor floorplan propagates into placement, CTS, routing |
| 3 | Power connectivity | Every cell needs reliable power before timing optimization |
| 4 | Severe congestion | Can make routing impossible and worsen timing |
| 5 | Setup timing | Meeting frequency is the main performance objective |
| 6 | Hold timing | Finalized after setup because setup fixes can create hold violations |
| 7 | Transition, capacitance, fanout | Improve signal quality, prevent later timing issues |
| 8 | Signal integrity | Addressed after routing stabilizes |
| 9 | IR drop and EM | Validated near signoff |
| 10 | DRC/LVS and manufacturing | Must be clean before release |

### 3.4 Tool error database (8 entries)

| Tool | Code | Issue | Root cause | Debug | Fix |
|---|---|---|---|---|---|
| Innovus | ENCPL-1234 | Placement congestion overflow | High local pin density or over-utilization | Inspect congestion map; check macro halos and channels | Placement blockages, larger halo, downsize dense modules, re-floorplan |
| Voltus | VOLT-8801 | Static IR drop exceeds budget | Weak PG mesh, missing straps, insufficient decap | Run static IR, view drop map, find weak nodes | Add upper-metal straps, insert decap, widen rails |
| Voltus | VOLT-9002 | Dynamic IR hotspot | Simultaneous switching in a region | Correlate VCD activity with drop map | Local decap, spread switching cells, boost PG |
| ICC2 | ICC2-4501 | Legalization failed: cell overlap | Over-utilization or blocked rows | `check_legality`; inspect overlap markers | Reduce utilization, remove blockage, resize macros |
| Calibre LVS | LVS-101 | Short between VDD and VSS | Misrouted stripe or missing via cut | Trace in LVS RVE; inspect PG mesh | Correct routing/via; re-run LVS |
| Calibre DRC | DRC-M2.SP | Metal2 spacing violation | Router pushed wire too close in congestion | Zoom to marker; check nearby nets | Reroute with wider-spacing NDR; move blockage |
| Innovus CTS | CTS-7003 | Skew target not met | Uneven sink loading or long insertion branch | Report clock tree; per-sink latency | Rebalance with useful skew, adjust NDR, partition clock |
| PrimeTime | PT-2201 | Setup violation on critical path | Long comb path, wrong SDC, no useful skew | `report_timing -path_type full` | Size up, restructure logic, useful-skew ECO |

---

## 4. Interview Q&A (condensed)

### Inputs, outputs, methodology
- **Inputs and outputs of a PD tool.**
  - Inputs: tech file (.tf/.techlef); physical libs (LEF/GDS or CEL/FRAM); timing, logic and power libs (.lib/.db); TDF/IO file (pad/pin order, VDD/VSS pads); SDC; optional PDEF/DEF.
  - Outputs: SDF; parasitics (SPEF/DSPF); post-route netlist; GDS; DEF.
- **Sanity checks.** Netlist quality checks: floating pins, unconstrained pins, undriven inputs, unloaded outputs, direction mismatches, multiple drivers, tie-cell connectivity.
- **Starting a floorplan.** Read netlist, .lib, LEF and SDC; set chip size and aspect ratio; allocate power routing; place hard macros; reserve std-cell area.
- **Flat vs hierarchical.** Flat suits small and medium ASICs (better area use). Hierarchical suits very large designs with real hierarchy.

### Floorplan
- **Macro placement guidelines.**
  - Place macros at the periphery.
  - Use flight lines to minimize pin-to-pin distance.
  - Leave routing channels.
  - Use trial-route congestion maps.
  - Remove dead zones.
  - Reserve power-network space.
- **Pins on the wrong sides.** If pins ignore actual traffic direction, later stages get detours and congestion.
- **Macro spacing.** Channel = (pins × pitch) / (metal layers / 2), plus margin for straps and buffers.
- **Aligning macros.** OK if they talk only to each other; otherwise keep channels.
- **90°/270° macro orientation.** Technology-dependent; at 45 nm and below poly orientation must match std cells.
- **Cells between IO and core boundary.** No; that space is for the power ring.
- **Core utilization.** Std-cell area / core area, typically 60–75% pre-CTS.

### Power planning
- **Layers for rings/stripes.** Top metals: thicker, lower resistance, better EM capability, leave lower layers for signals.

### Placement and congestion
- **Congestion types.** Macro corners without blockages, narrow channels, high local utilization, AOI/OAI clusters, high pin density, too many buffers, crisscrossed IO.
- **Fixing congestion.** Lower utilization, add blockages, congestion-driven placement, restructure high-fanout nets.
- **Physical cells.**
  - End-cap: terminates rows, handles boundary well DRC.
  - Well-tap: prevents latch-up.
  - Decap: handles dynamic IR.
  - Filler: continuity of wells and implants.

### Routing
- **NDR.** Typically double width and double spacing on critical nets (clocks): double spacing reduces crosstalk, double width reduces EM. It costs area.
- **Why not route before CTS.** Clock and high-fanout nets are unbalanced until CTS; route clocks first, then data.
- **Antenna violation.** Charge on floating metal exceeds the gate ratio; fix with jumpers or diodes.

### STA and timing closure
- **Setup/hold.** Setup: data stable before the clock edge. Hold: data stable after it.
- **Setup check at placement.** Yes; hold is meaningless with an ideal clock.
- **Hold not before CTS.** Hold depends on clock-path delay, which only exists after CTS.
- **Setup before CTS, hold after.** Same reasoning; the ideal-clock data delay is nearly always above hold, so hold is not meaningful yet.
- **Fixing setup.** Upsize, swap HVT→LVT, buffer long nets, pin swap, cloning, useful skew.
- **Fixing hold.** Insert delay cells, downsize, LVT→HVT, shift clocks.
- **Max/min corner.** Setup is pessimistic at max delays; hold is pessimistic at min delays.
- **Setup and hold on the same endpoints.** Possible when a long path and a short path both exist.
- **Derates.**
  - Setup: data path derated ~8–15%, no clock derate.
  - Hold: clock path derated ~8–15%, no data derate.
  - Derate comes from vendor guidance and PVT variation.
  - Do not derate both paths (over-pessimistic).
- **Signoff corners.** Worst, best, typical.
- **Wire load models.** From the library vendor, chosen by block area.
- **Buffer location in a failing reg-to-reg path.** Prefer resizing first; if a buffer is needed, insert near the capture flop (a launch-side buffer affects other paths).
- **Setup violation after placement.** Often not alarming; check macro/module placement, use bounds, raise effort, iterate.
- **Path groups.** Guide the optimizer so it does not focus only on worst violators; separate I/O paths from internal ones.
- **False paths.** Paths never captured in normal operation (reset, test, async, static config); declare with `set_false_path` after spec/CDC review.
- **MMMC.** Multi-mode multi-corner files let one run cover all modes, corners and views.
- **Timing DRVs.** Max transition, max capacitance, max fanout. Fixes: upsize drivers, buffer long nets, use LVT, split fanout, clone.
- **Max-cap check.** `report_constraint -all_violators`.
- **OCV/AOCV/POCV.** Flat derate / depth-and-distance-based / statistical per-cell.

### CTS
- **Why buffers in the clock tree.** Balance skew and keep transition and drive.
- **Insertion delay.** Source-to-sink clock latency.
- **Skew.** Arrival difference between two sinks.
- **Clock-gating paths.** Tighter because the gate sits early in the tree (window = period − tree delay), and a failure affects a whole bank of flops.

### Crosstalk
- **What.** Switching on one net disturbs another through coupling capacitance (delta delay, glitches).
- **Avoiding.** Spacing, more vias, shielding, buffering the victim.
- **Shielding.** Shield tied to VDD/VSS turns the coupling cap into a constant cap.
- **Spacing.** Reduces coupling capacitance directly.
- **Victim buffering.** Stronger drive and shorter segments.

### Power, IR, EM
- **HVT/LVT.** HVT on positive-slack paths (saves leakage); LVT only where closure is hard.
- **IR drop importance.** Sets the real voltage at cells; ignoring it makes timing optimistic.
- **IR and congestion together.** Spread macros and cells, add straps, use blockages.
- **Static vs dynamic IR.** Static: average current. Dynamic: switching activity (decap, reduce toggle).
- **Static IR inputs.** Grid definition, tech R, cell current/power data, placed design, average current.
- **EM.** Atom migration from current; manage with wider wires, vias, splitting nets, lower current density. Black's equation: MTTF ∝ 1/Jⁿ · exp(Ea/kT).

### Other
- **GDSII.** Binary hierarchical layout format (Calma, 1971; GDSII 1978) handed to the fab for masks.
- **Metal-only ECO.** Use pre-placed spare cells and re-route in metal only.

**AI Question Generator:** pick Beginner, Intermediate or Expert and press Generate (the page links to Mock Interview).

---

## 5. Calculators (35)

Every calculator has Steps, Copy result, Share, PDF, Sample, Reset.

| Category | Calculator | Formula |
|---|---|---|
| Synthesis | Dynamic Power | P = α·C·V²·f |
| | Leakage Power | P = I_leak × V |
| | Frequency from Period | f = 1/T |
| Floorplanning | Utilization | (Cell area / Core area) × 100 |
| | Core Area | Std cell area / Utilization |
| | Aspect Ratio | Width / Height |
| | Die Area | Core + IO + Margin |
| Power Planning | Current from Power | I = P/V |
| | Voltage Drop | V = I·R |
| | Resistance | R = ρL/A |
| | Current Density | J = I/A |
| Placement | HPWL | (Xmax−Xmin) + (Ymax−Ymin) |
| | Placement Density | Placed cell area / Placement area |
| | Congestion | Demand / Capacity |
| CTS | Clock Skew | T_capture − T_launch |
| | Clock Latency | Source + Network |
| | Clock Uncertainty | Jitter + Skew (+ Margin) |
| | Slew | t90 − t10 |
| Routing | RC Delay | τ = R·C |
| | Elmore Delay | Σ(Rᵢ × Cᵢ) |
| | Capacitance | C = ε·A/d |
| | Wire Resistance | R = ρL/(W·T) |
| STA | Setup Slack | Required − Arrival |
| | Hold Slack | Arrival − Required |
| | Fanout | Load pins / Drivers |
| Signal Integrity | Total Coupling Cap | Cg + Cc |
| | Crosstalk Delay | R·(Cg + k·Cc) |
| Electromigration | EM Current Density | J = I/A (vs limit) |
| | Black's Equation | MTTF = A·J⁻ⁿ·exp(Ea/kT) |
| IR Drop | Static IR | V = I·R, % of supply |
| | Dynamic IR | V = L·di/dt + I·R |
| Power Integrity | Total Power | Dynamic + Internal + Leakage |
| | Power Density | Power / Area |
| Antenna | Antenna Ratio | Metal area / Gate area |
| DRC | Metal Density | Metal area / Window area |

**Engineering notes**
- Dynamic power is quadratic in V; voltage scaling is the strongest lever, then clock gating and capacitance.
- Leakage rises exponentially with temperature and lower Vt; HVT swapping is the standard recovery.
- Typical start utilization is 60–75%.
- A skew that is positive helps setup and hurts hold.
- HPWL is exact for 2- and 3-pin nets, a lower bound for larger nets.
- 0.69·RC approximates the 50% delay of a single-pole RC network.
- Elmore is an upper bound on 50% delay.
- A miller factor between 0 and 2 scales the coupling cap.
- A 10 °C rise can roughly halve EM MTTF.
- Decap placement is the primary fix for dynamic IR hotspots.
- Antenna fixes: jump to a higher layer, add a diode, split the net.
- Metal fill meets minimum density; slotting handles maximum density.

**Interview questions embedded**
- Why dynamic power ∝ V² but leakage ~ linear in V?
- How does clock gating reduce α and what does it do to the clock tree?
- Why prefer aspect ratio near 1?
- What happens when utilization is too high?
- Why do placers optimize HPWL instead of Steiner length?
- What to do when a region shows >100% congestion?
- Difference between global and local skew? How does useful skew close timing?
- Why are clock transitions kept tighter than data transitions?
- Why is wire delay dominant at advanced nodes? Why is Elmore pessimistic?
- Why low-k dielectrics?
- Top five setup fixes in order?
- Why can hold only be fixed with delay?
- What is the Miller factor, and when is it 2?
- Difference between average, RMS and peak EM limits?
- Explain each term in Black's equation; why n = 2 for void nucleation?
- Why does decap help dynamic but not static IR?
- What causes antenna damage; how does a diode fix it?
- Why do foundries enforce both min and max metal density?

---

## 6. STA Suite (29 calculators)

Tabs: Calculators · Report Analyzer · PVT / MMMC · Commands · Interview · Notes
Filters: All · Clocking · Slack · Path · Delay · Variation · Exceptions · IO

| Group | Calculator | Formula |
|---|---|---|
| Clocking | Clock Frequency / Clock Period | f = 1/T, T = 1/f |
| | Clock Uncertainty | Jitter + Skew + OCV + Margin |
| | Clock Skew | Capture latency − Launch latency |
| | Clock Latency | Source + Network |
| | Clock Slew | t90 − t10 |
| | Clock Jitter | RJ + DJ (ps) |
| Slack | Setup Slack (expanded) | Required − Arrival |
| | Hold Slack (expanded) | Arrival − Required |
| | Data Arrival Time | Launch latency + Clk→Q + Cell + Net + Interconnect |
| | Required Arrival Time | T + Capture latency − Setup − Uncertainty |
| | Timing Margin | Slack − Engineering margin |
| | CRPR / CPPR | Corrected slack = Slack + CRPR credit |
| Path delay | Cell Delay (NLDM/CCS) | Intrinsic + load term + slew term |
| | Net Delay (Elmore) | Σ(Rᵢ × Cᵢ) |
| | Launch / Capture Clock Path Delay | Source latency + Tree delay |
| | Path Delay (multi-stage) | Clk→Q + ΣCell + ΣNet |
| | Logic Depth Estimator | Levels × Avg stage delay |
| Variation | Setup → Min Period / Fmax | T ≥ Clk→Q + Comb + Net + Setup + Uncertainty + Skew |
| | Hold Equation → Margin | Clk→Q + Min delay > Hold + Uncertainty + Skew |
| | OCV Derate | Nominal × Derate |
| | AOCV Derate | f(depth, distance) |
| | POCV Derate | Nominal + (Sigma × Variation) |
| Exceptions | Multi-Cycle Path | Required = Period × MCP |
| | False Path Checker | `set_false_path -from -to` |
| IO | Input Delay | Input delay + internal delay |
| | Output Delay | Required = Period − Output delay |

**Notes captured**
- Setup: Arrival = launch latency + Clk→Q + comb + net; Required = T + capture latency − setup − uncertainty.
- NLDM interpolates a 2-D (slew, load) table; CCS models the driver as a current source.
- CRPR removes double counting of the shared clock path.
- AOCV reduces pessimism because deeper paths average out variation.
- A setup MCP of N normally needs a hold MCP of N−1.
- Declaring a false path skips setup and hold checks; prefer `set_clock_groups` or `set_max_delay` when the path is real but relaxed.

---

## 7. Tool tutorials (8 tools)

| Tool | Topics | Example |
|---|---|---|
| Cadence Innovus | Setup; read_mmmc, read_design; place_design, opt_design; clock_design, route_design; Debug | `read_mmmc mmmc.tcl; read_physical -lef *.lef; init_design; place_design; clock_design; route_design` |
| Cadence Tempus | Signoff STA; SI analysis; ECO fixing | `read_sdc *.sdc; report_timing -check_type setup` |
| Cadence Voltus | Static IR; Dynamic IR; EM; PGV | `read_power_intent -1801 upf; set_power_analysis_mode -method static; report_power_rail_results` |
| Synopsys ICC2 | Setup; create_mw_lib; compile_ultra; route_opt | `create_mw_lib; import_designs; compile_ultra; route_opt; write_gds` |
| PrimeTime | report_timing; SI; ECO | `read_verilog netlist.v; link_design; read_sdc constraints.sdc; report_timing -delay max` |
| Fusion Compiler | RTL2GDS integrated flow | `compile_fusion -source rtl -to gds` |
| Calibre DRC/LVS | nmDRC; LVS; PERC | `calibre -drc -hier drc.rules; calibre -lvs -hier lvs.rules` |
| Ansys RedHawk | Static IR; Dynamic IR; EM | `setup_analysis -mode dynamic; run_analysis; report_ir` |

The page says deep-dive tutorials are still being added. Check these examples against vendor docs before relying on them (the ICC2, Fusion Compiler and RedHawk lines look non-standard).

---

## 8. EM/IR Analysis course (43 sections)

Only the table of contents and Section 1 were readable (the rest was collapsed).

**Foundations:** 1 EM/IR Fundamentals · 2 PDN · 3 Electrical Fundamentals · 13 Power Analysis · 26 EM/IR vs DRC vs LVS vs STA
**IR drop:** 4 IR Drop · 5 Static IR · 6 Dynamic IR · 11 Static vs Dynamic · 12 IR and Timing
**Electromigration:** 7 EM · 8 Types of EM · 9 Via EM · 10 Current Density
**Mitigation:** 14 Decap Cells · 15 IR Fixes · 16 EM Fixes
**Debugging:** 17 Local vs Global IR · 18 Macro Blockage and IR · 19 Power Connectivity · 30 IR Violation Example · 31 EM Violation Example · 32 How a Senior EM/IR Engineer Debugs · 33 Common Real-World Problems
**Advanced:** 20 PGV · 21 GDS and Layer Map · 22 SPICE Corners and Netlists · 23 Temperature · 24 Package Effects · 25 Power Gating · 36 Worst IR vs Worst EM · 37 Electrothermal · 38 Advanced-Node EM/IR
**Flow and tools:** 27 EM/IR Flow · 28 Voltus Flow · 29 Voltus Reports · 34 Voltus Rail Errors · 35 "Power grid merging failed for net VDD/VDDM/VSS"
**Signoff:** 39 Signoff Checklist · 40 Formula Summary · 43 Important Accuracy Rules
**Interview:** 41 Interview Questions · 42 Real-World Scenarios

**Section 1 summary**
- EM/IR verifies the PDN delivers stable voltage (IR drop) and that wires and vias survive the product lifetime (EM).
- IR drop: V = I×R, instantaneous, slows cells. EM: reliability wear-out, opens (voids) or shorts (hillocks), measured against a current-density limit.
- Analogy: the PDN is a water network (top metals are mains, stripes and rails are street pipes, cells are houses).
- Planned at floorplan, early static IR after placement, signoff (static + dynamic IR, power/signal EM) after routing and extraction.
- At 0.6–0.9 V supplies, tens of millivolts are a large fraction of the timing margin.

---

## 9. Linux and open-source VLSI Lab

**Tabs:** Dashboard · Terminal · Linux Course · EDA Tools · PDKs · Verilog Projects · 15 Labs · Flow Stages · Reports

**Stats:** 10 Linux lessons · 10 EDA tools · 5 open PDKs · 10 Verilog projects

**Lab sections:** Linux Lab · RTL Lab · Synthesis · Floorplanning · Power Planning · Placement · CTS · Routing · Extraction · Timing · DRC · LVS · GDS Viewer · Reports · Projects · Interview Practice · Learning Progress · Certificates

**Tools covered:** Yosys, OpenROAD, OpenLane, Magic, KLayout, Netgen, OpenSTA
**PDKs:** SKY130, GF180, ASAP7 (plus two others not named in the captured text)

**Environment (Ubuntu 24.04 LTS):** build-essential, gcc, g++, make, cmake, ninja-build, swig, git, wget, curl, unzip, zip, python3, python3-pip, perl, tcl, tk, vim, nano, htop, tree, jq, rsync

**~/.bashrc template**
```bash
export PDK_ROOT=/opt/pdks
export PDK=sky130A
export STD_CELL_LIBRARY=sky130_fd_sc_hd
export OPENLANE_ROOT=/opt/openlane
export OPENROAD_EXE=$(command -v openroad)
export MAGIC_TECH=$PDK_ROOT/$PDK/libs.tech/magic/sky130A.tech
export KLAYOUT_HOME=$PDK_ROOT/$PDK/libs.tech/klayout
export PATH=$OPENLANE_ROOT/scripts:$PATH
```

**Important note on the page:** the terminal is an in-browser emulator with a virtual filesystem. Real tool commands are documented so you can paste them into a real Ubuntu/WSL machine. A real per-user container needs a separate backend.

---

## 10. Checklists

| Stage | Items |
|---|---|
| Floorplan | Die/core area finalized · Utilization 60–75% · Macro placement reviewed · IO pins placed and legal · PG rings/straps drawn · Blockages and halos set · Early congestion clean |
| CTS | Clock uncertainty set · NDR on clock nets · Target skew/latency met per corner · No hold violations post-CTS · Clock tree report reviewed |
| Routing | Zero DRC/LVS in block · Antenna clean · Congestion < 1% · Timing WNS/TNS on target · PG shorts resolved |
| Signoff | MCMM STA clean · Static IR < budget · Dynamic IR < budget · EM < limits · DRC/LVS/ERC clean · All waivers documented |
| Tapeout | GDSII with correct layer map · Foundry checklist signed · Metadata/README archived · Scripts and DB backed up · Signoff reports frozen |

---

## 11. Aptitude and reasoning

Sections: Quantitative Aptitude · Logical Reasoning · Verbal Ability · Data Interpretation
Practice topics (IndiaBIX): Numbers, Percentage, Time & Work, Time & Distance, Probability, Permutation & Combination, Profit & Loss, Simple & Compound Interest
Main link: https://www.indiabix.com/aptitude/questions-and-answers/

| Q | Question | Options | Answer |
|---|---|---|---|
| 1 | Train 150 m crosses a pole in 15 s; speed (km/h)? | 30 / 36 / 45 / 54 | 36 |
| 2 | If 20% of A = 25% of B, A:B? | 4:5 / 5:4 / 3:4 / 2:3 | 5:4 |
| 3 | A does a job in 12 days, B in 18; together? | 6.5 / 7.2 / 8 / 9 | 7.2 days |
| 4 | Probability of sum 7 on two dice? | 1/6 / 1/8 / 5/36 / 7/36 | 1/6 |
| 5 | CI on ₹10,000, 2 yrs, 10% p.a.? | 2000 / 2100 / 2200 / 2400 | 2100 |

(The site hides the answers behind "Show solution"; the answers above are my own working.)

---

## 12. Job portal resources

**Role filters:** Physical Design, RTL Design, ASIC Design, FPGA, Verification, DFT, STA, PDN/Power Integrity, Analog Layout, Analog Design, Mixed Signal, Embedded Systems, Firmware, Device Engineering, Process Engineering, Validation, CAD/EDA, Packaging, RF & Microwave, Silicon Validation, Product Engineering, Test Engineering, Graduate/Fresher, Internship.

**Sample PD-relevant roles listed**

| Role | Company | Location | Exp | Pay |
|---|---|---|---|---|
| Physical Design Engineer | Intel | Bangalore | 2–6 yrs | ₹18–32 LPA |
| Senior PD Engineer, Block Owner | NVIDIA | Hyderabad | 5–10 | ₹35–60 LPA |
| Fresher Physical Design Engineer | LTTS | Mysore | 0–2 | ₹5–8 LPA |
| VLSI Intern, Physical Design | Wipro | Bangalore | 0–1 | — |
| Graduate Engineer Trainee, VLSI | Cyient | Hyderabad | 0–1 | ₹4–6 LPA |
| Physical Design Lead | HCLTech | Chennai | 8–15 | ₹35–55 LPA |
| Contract PD Engineer | Accenture | Remote | 4–12 | — |
| Physical Verification Engineer | TSMC | Bangalore | 2–8 | — |
| STA Engineer | Qualcomm | Bangalore | 3–8 | ₹22–40 LPA |
| Power Integrity / PDN Engineer | AMD | Bangalore | 3–9 | — |

**Search portals:** LinkedIn Jobs, Naukri, Indeed, Foundit, Glassdoor, Wellfound, Instahyre, Cutshort, Hirist (pre-filled with "VLSI physical design", India).

**Career pages (35):** Intel, NVIDIA, AMD, Qualcomm, Broadcom, MediaTek, Samsung Semiconductor, Micron, Texas Instruments, NXP, Renesas, Synopsys, Cadence, Siemens EDA, Marvell, GlobalFoundries, TSMC, Silicon Labs, Infineon, STMicroelectronics, Microchip, Analog Devices, ARM, Apple, Google, Amazon Lab126, Tata Electronics, Sankalp Semiconductor, Cyient, LTTS, Wipro, Infosys, HCLTech, Capgemini, Accenture.

---

## 13. AI tools

- **Shiva's PD AI (`/ai`):** model choices Gemini 3 Flash (fast), Gemini 2.5 Pro (deep), GPT-5 Mini (balanced), GPT-5 (best).
  - Starter prompts: "Explain useful skew with an example", "Write a TCL script to report top 20 setup violations in Innovus", "How to fix Voltus static IR drop hotspot?", "Difference between AOCV and POCV".
- **Report Analyzer (`/analyzer`):** stages (Floorplan, Power Planning, Placement, CTS, Routing, STA, DRC, LVS, IR Drop, EM, Signal Integrity, Power Analysis, Signoff). Tool types (Innovus, Tempus, Voltus, ICC2, PrimeTime, StarRC, RedHawk, Calibre, Generic). Input up to 60,000 characters. Result tabs: Overview, Key Metrics, Violations, Root Cause, Mitigation, Debug Flow, Senior Engineer Analysis, Search, Before vs After.
- **Mock Interview and Resume ATS:** advertised (AI mock interviews, resume review with ATS score) but their pages did not load for me.
