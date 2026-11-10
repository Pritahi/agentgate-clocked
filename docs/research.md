# AgentGate research and decision report

November 10, 2026. Evidence reviewed before this revision. This is bounded, time-sensitive research, not an exhaustive market study.

**Verdict: PURSUE the helpdesk release-desk revision, not a claim of new detection research.** The original demo demonstrated three APIs but lacked a real release workflow, tests and defensible limits. The new version makes each result consequential, adds conservative review paths, and publishes both passing experiments and a false positive. Winning remains unknown. There is no defensible win probability.

Labels below distinguish **FACT** (direct source or executed test), **INFERENCE**, **HYPOTHESIS**, and **UNKNOWN**. Vendor claims are not independent customer validation.

## 1. Event summary and risk audit

**FACT:** The official challenge runs Oct 21-Nov 10, 2026. Entries are editable until Nov 10 at 23:59 America/New_York, calculated as **Wednesday, Nov 11 at 10:29 IST**. Judging is Nov 11-17; winners Nov 18. Public repo, development history, setup and working demo or video must remain available through announcement. AI coding tools and generic libraries are allowed; the application must be new within the build period. Sources: [challenge](https://clocked.rezolve.ai/challenge), [rules](https://clocked.rezolve.ai/build-challenge/rules).

**FACT:** Cash pool $2,000: Overall $600, three groups $400 each, People's Choice $200. One judged award plus People's Choice per project, maximum $800. No social post is required for judged awards. Prizes require eligibility verification and Wise payment support, with taxes/documentation conditions. No spending is required or rewarded. Free account plus challenge code provides 20,000 credits.

**UNKNOWN:** Entrant-specific legal eligibility, sanctions screening, Wise payout support and tax documentation are not independently established in this report. A submitted checkbox is not legal advice or payment verification. No new eligibility assertion or paid transaction was added in this revision.

**FACT:** Best Overall scoring is usefulness 25, core integration 30, thoughtful additional endpoints 15, implementation/UX 20, explanation/reproducibility 10. Group scoring is depth 40, breadth 30 (10 per meaningful endpoint), usefulness/execution 20, explanation/reproducibility 10. Ignored output earns no points. This makes depth more important than merely counting API calls.

**FACT/contradiction:** The contest names nine endpoints; current docs list ten including `/pipeline`. We kept the three named safety-group endpoints and did not assume Pipeline adds a contest breadth point.

## 2. Event-specific strategy

**INFERENCE:** This is a company-sponsored API/product-building event, not a research leaderboard. The right priority is meaningful outputs, a useful workflow, reliable failure handling and easy reproducibility. Adding unrelated endpoints just to increase the count risks diluting depth.

**HYPOTHESIS:** A helpdesk release desk is the best feasible continuation of the existing entry because all three safety endpoints have natural jobs. It can be demonstrated without private data or new enterprise integrations.

## 3. Organizer and users

**FACT, vendor account:** Rezolve.ai markets IT, HR and shared-services support that explains decisions and leaves records. The [Gesa case study](https://www.rezolve.ai/case-studies/gesa-credit-union) describes support inside Teams connected to EasyVista and SharePoint. The [MyEyeDr case study](https://www.rezolve.ai/case-studies/myeyedr) describes BMC Helix, Confluence and a multi-department workflow. These are vendor-authored cases, not proof that AgentGate has a buyer or that either customer has the security problem we target.

**FACT, external security analysis:** [Snyk's Jira/Cursor analysis](https://labs.snyk.io/resources/cursor-jira-mcp-vulnerability-explained/) describes an indirect prompt-injection route through a malicious support ticket. It is evidence of this class of problem in an unrelated agent integration. It does not establish a vulnerability in Rezolve.ai or Clocked.

**INFERENCE:** Helpdesk reviewers need to separate useful incident information from embedded instructions, limit identifiers in cross-team handoffs and inspect proposed changes under an actual scope. The risks fit the organizer's domain. **UNKNOWN:** Frequency, willingness to pay, false-positive tolerance and adoption friction among actual Clocked users. No customer interviews were performed.

## 4. Opportunity map and five independent first-pass ideas

These candidates were recorded before detailed competitor-code inspection. Scores are builder judgments, not market measurements. 10 means stronger fit; saturation score 10 means less saturated.

| Rank / idea | Problem / demand | Organizer fit | Differentiation / saturation | AI need | Feasibility / rubric | Demo / impact | Judge relevance |
|---|---|---|---|---|---|---|---|
| 1. Helpdesk release desk | 8 / 5 | 9 | 5 / 4 | 8 | 9 / 9 | 9 / 6 | 8 |
| 2. CI change-review gate | 8 / 6 | 7 | 4 / 3 | 7 | 7 / 8 | 8 / 6 | 7 |
| 3. HR handoff minimizer | 8 / 5 | 9 | 4 / 3 | 7 | 9 / 6 | 8 / 6 | 8 |
| 4. Accounts-payable intake | 9 / 5 | 7 | 4 / 3 | 7 | 8 / 6 | 8 / 7 | 6 |
| 5. Research evidence firewall | 7 / 6 | 6 | 4 / 3 | 8 | 5 / 5 | 7 / 6 | 6 |

Demand and impact are least certain; judge relevance means fit to their publicly listed roles, not an opinion attributed to them.

1. **Helpdesk release desk:** target IT reviewers; output a minimized, reviewed ticket handoff and separate scoped script review. Influence: Gesa's actual integration pattern + Snyk ticket attack + official three-endpoint group. **Originality B/C:** incremental workflow/combination, not new detection. Strongest counterargument: without ticket integration it may remain a playground. Test: benign, poisoned and private tickets plus scope-dependent scripts; reject if unsafe examples become releasable or core endpoints don't affect release. Safest feasible and best overall choice under this deadline.
2. **CI change-review gate:** target reviewers; inspect proposed scripts and sanitize logs before agent analysis. Influence: the same unsafe-tool principle and Inspect's scope contract. **Originality B:** security review products already exist. Counterargument: harder repository integration and PII is not a general secret detector. Test: compare approved versus out-of-scope changes; reject if policy context has no effect. Technically strongest possible expansion, not the safest overnight rewrite.
3. **HR handoff minimizer:** target HR-to-IT handoff; mask staff identifiers and hold fabricated approvals. Influence: organizer HR workflows + Protect custom kinds. **Originality B:** privacy tooling is mature. Counterargument: Inspect feels bolted on. Test: remove known synthetic identifiers while retaining the issue and reject unauthorized action requests. Feasible but weaker breadth coherence.
4. **Accounts-payable intake:** hold bank-detail change requests, preserve invoice facts and redact accounts. Influence: Guard's official approval-spoofing examples. **Originality A/B:** already a vendor demo direction. Counterargument: close to copying a tutorial and no natural script stage. Test: genuine invoice versus forged approval; reject unsafe release. High-stakes potential, unverified adoption.
5. **Research evidence firewall:** screen poisoned retrieval, redact people and verify answers. Influence: official Verify/Guard capabilities and OWASP. **Originality B:** crowded retrieval-guardrail space. Counterargument: would require another group and real retrieval/answer generation. Test: relevant poisoned source versus benign quotation; reject if safety removes all useful evidence. Highest expansion scope, poor deadline fit.

No claim that these are unsolved problems. None has validated customer demand.

## 5. Comparable competition forensics

**FACT:** NVIDIA's [July 17, 2025 account](https://developer.nvidia.com/blog/hackathon-winners-bring-agentic-ai-to-life-with-the-nvidia-nemo-agent-toolkit/) names OpenCodeReview second place and says real-world applicability, technical execution and agentic AI use were judged. The [repository](https://github.com/victortong-git/open-code-review) was opened and cloned. Its configuration and `qa_consultant_function.py` implement orchestration and a follow-up QA status (`confirmed`, `false_positive`, `needs_review`). The source establishes that these mechanisms exist, not their accuracy or which feature caused the award. Later code can differ from the version judged.

**INFERENCE/transfer:** Concrete workflow output and explicit review/false-positive states are better models than a raw response viewer. No code was copied. AgentGate is much smaller and does not claim comparable breadth.

**FACT:** [Descope's Sept 29, 2025 winner announcement](https://www.descope.com/blog/post/global-mcp-hackathon-winners) names FutureCommit and describes secure, useful workflow integration. It explicitly attributes its win to a familiar developer problem, automation and authentication. This is organizer commentary, not private judge scoring. We did not inspect a verified FutureCommit source repository and do not claim implementation equivalence.

**FACT/limit:** [LlamaSense's repository](https://github.com/imshahab/llama-sense) describes layered heuristics, a classifier and canary testing and self-reports second place. The award was not corroborated, so it is a competitor pattern, not verified winner evidence. [SafeGuard](https://github.com/chuyishang/safeguard) and [AgentWall](https://github.com/Arnavvs/agentwall) further show that prompt-firewall concepts are not novel. Their public descriptions are not independent efficacy proof.

**UNKNOWN:** Prior Clocked winners, non-winner scores and reasons for loss were not found. This contest's winners are scheduled for Nov 18, so current winners cannot be studied yet. No inference about an unlisted project's loss is made.

## 6. Judges and review workflow

**FACT:** The challenge names UB Reddy (CTO), Saurabh Kumar (CEO), Manish Sharma (CRO), Joshua O'Brien (Head of Applied AI). [Rezolve.ai's team page](https://www.rezolve.ai/about) lists corresponding leadership roles, with Udaya Bhaskar Reddy as CTO/head of engineering. Each of four judges scores every entry for its entered awards and scores are averaged.

**INFERENCE:** A technical leader may inspect actual contracts/failures; a business leader may care about audience/problem clarity. These are role-based expectations, not documented personal preferences. **UNKNOWN:** Time per entry, code-review depth, individual opinions, internal deliberation and exact live test scripts.

Likely useful self-tests, not asserted judge behavior: open demo without credentials; run a clean case and a malicious case; compare outputs; inspect the README; change scope; try malformed/empty input; check key leakage; reproduce setup; verify that each endpoint changes release eligibility.

## 7. Novelty and original-entry audit

**FACT from source inspection:** v1 was a Node/HTML demo using `/injection`, `/pii`, `/script`. It had no tests. A missing script verdict could produce ALLOW. JavaScript string slicing used UTF-16 indices even though Clocked offsets count Unicode characters. It implied that a downstream model received forwarded text, but no model was connected. Examples closely resembled vendor tutorials. Its in-memory cap was not a durable credit limit.

**INFERENCE:** That was a legitimate integration demo but weak as a differentiated product. v2 should compete on clarity of the handoff/review contract, not on invented detector novelty. **Originality B/C:** an incremental workflow-specific combination.

## 8. Architecture and feasibility

**FACT:** Ticket requests run Guard and Protect in parallel. Guard sees a server-owned helpdesk policy and `source: content`. Protect requests catalog types plus employee ID, and replacement. Scripts run Inspect under a fixed printer or read-only VPN scope. Typed results feed pure policy functions.

**FACT:** BLOCK/HOLD provides no releasable candidate. An eligible ticket export uses only transformed text, never the full result with original PII values. Script export is a proposed review packet with `executionAuthorized: false`. The local checkbox is not authenticated approval. No downstream model, ticket tool, host or execution environment is connected.

**FACT:** API docs explicitly say detectors are not enforcement/authorization boundaries, PII responses retain original values, missing evidence is not safety, offsets are Unicode zero-based/exclusive, and probabilities need validation. These changed implementation choices. Guard/Protect/Inspect docs were read in the browser after the text fetch returned 403.

**HYPOTHESIS/policy:** Extra review bands are conservative prototype defaults, not calibrated operating points. They were fixed before the separate challenge set. Maximum 6,000 characters, 12-second upstream timeout, no automatic retry, no raw-source application logging, no durable storage. Per-instance/per-IP caps are best effort; overage remains $0 but included credits can be exhausted. Production needs authentication, shared quotas and monitoring.

## 9. Validation, proof and red-team results

**Predefined development test:** 14 author-written synthetic cases; safe content should stay usable, known PII should be removed, unsafe content should BLOCK/HOLD. All 14 matched expectations. Median observed round-trip latency was 333 ms from this environment. The tiny keyword baseline matched 10/14 decisions; it is intentionally transparent and weak, not a state-of-the-art comparator.

**Separate challenge:** Eight new cases written after the first run, fixed policy, success threshold >=6/8 decisions and zero releases of the four unsafe examples. Result 7/8, all four unsafe cases blocked. A legitimate instruction for an employee to inspect printer settings was falsely blocked (Guard injection 0.9342). This miss is retained in the artifact. No retuning was done after seeing it. Baseline decision match 3/8. Both sets are author-written, synthetic and small, not an independent holdout or measured production accuracy.

**FACT:** 35 deterministic policy/API tests passed, covering invalid/missing probabilities/verdicts, low confidence, malformed JSON, bad scope, unavailable configuration, leaked detected values, Unicode spans and limits. Tests do not prove hostile attackers cannot bypass the detector.

**UNKNOWN:** Adaptive attack success, encoded-content coverage, multilingual generalization, representative false-positive rates, real sensitive-data recall, concurrent cost under abuse and customer task-completion value.

## 10. Rubric simulation and build priorities

Illustrative self-audit only, not actual judge scores or a probability of winning:

| Group criterion | Self-audit | Evidence / remaining weakness |
|---|---:|---|
| Depth / 40 | 28 | Real release contract, fixed contexts, consistent result validation; still no enterprise integration |
| Breadth / 30 | 30 | All three endpoints change a release/review decision; judge decides meaningfulness |
| Usefulness/execution / 20 | 13 | Working reviewer workflow, false-positive disclosure; no customer use or ROI validation |
| Explanation/reproducibility / 10 | 9 | Setup, tests, live artifacts, sources and limits; no recorded video |
| Total / 100 | 80 | Subjective internal simulation, not a promised award |

Priorities implemented: fix fail-open behavior; make audience and output clear; add explicit review state; minimize exports; correct offsets; show evidence; publish reproducible tests and a miss. Rejected: bolt on unrelated APIs, claim a novel firewall, fabricate customer ROI, connect real ticket systems without need, or run scripts in the demo.

## 11. Presentation and submission audit

Pitch: problem (untrusted ticket becomes an instruction) -> solution (release desk) -> live poisoned ticket -> minimized employee handoff -> scoped script comparison -> test evidence and false positive -> architecture and limits.

Audit before final save: public repo/history; live app; no keys in source; required three endpoints selected; group and Overall selected; updated overview/problem/integration/learnings; README setup/test artifacts; links open; source examples synthetic; no unsupported production claims. No optional social post is made as part of this work.

## 12. Source audit and limits

All sources accessed Nov 10, 2026. Dates are publication dates only when exposed. Primary does not mean unbiased.

| Source | Type / date | Establishes | Limits / confidence |
|---|---|---|---|
| [Challenge](https://clocked.rezolve.ai/challenge) | Organizer primary, current | Rubric, judges, dates, entry requirements | Rules can change; high |
| [Rules](https://clocked.rezolve.ai/build-challenge/rules) | Organizer primary, current | Eligibility, originality, licensing and prizes | Entrant legal/payout checks remain unknown; high |
| [Guard docs](https://clocked.rezolve.ai/docs/injection) | API primary, current | Context, verdict, threshold and limits | Not efficacy benchmark; high contract confidence |
| [Protect docs](https://clocked.rezolve.ai/docs/pii) | API primary, current | Entities, custom types, transformed copy and original values | Misses possible; high contract confidence |
| [Inspect docs](https://clocked.rezolve.ai/docs/script) | API primary, current | Scope context, risk judgment, no execution | No host validation; high |
| [Responses](https://clocked.rezolve.ai/docs/responses) | API primary, current | Unicode offsets and probability caveats | Not accuracy evidence; high |
| [Limits](https://clocked.rezolve.ai/docs/limits) | API primary, current | Credits, concurrency and usage behavior | Account-specific available quota can change; high |
| [Gesa](https://www.rezolve.ai/case-studies/gesa-credit-union), [MyEyeDr](https://www.rezolve.ai/case-studies/myeyedr) | Vendor case studies, 2026 in search metadata | Named workflow/integration context | Promotional, not user-demand study; medium |
| [Team](https://www.rezolve.ai/about) | Vendor primary, current | Listed leadership roles | No individual judging opinions; high for roles |
| [Snyk](https://labs.snyk.io/resources/cursor-jira-mcp-vulnerability-explained/) | Security practitioner analysis | Real ticket-to-agent attack class | Different product, not representative prevalence; medium-high |
| [OWASP](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) | Security standard/community guidance, 2025 edition | Layered mitigation, least privilege and human review | Guidance, not app certification; high |
| [NVIDIA winners](https://developer.nvidia.com/blog/hackathon-winners-bring-agentic-ai-to-life-with-the-nvidia-nemo-agent-toolkit/) | Organizer primary, July 17 2025 | Placement, stated criteria and features | Cannot infer causal feature weights; high |
| [OpenCodeReview](https://github.com/victortong-git/open-code-review) | Original repository, current snapshot | Actual orchestration and QA review code | Later than judged build; not run; medium-high |
| [Descope](https://www.descope.com/blog/post/global-mcp-hackathon-winners) | Organizer primary, Sept 29 2025 | Winners and organizer's explanations | FutureCommit code not verified; medium-high |
| [LlamaSense](https://github.com/imshahab/llama-sense), [SafeGuard](https://github.com/chuyishang/safeguard), [AgentWall](https://github.com/Arnavvs/agentwall) | Original repositories | Prior firewall/detector concepts | README claims not performance verification; medium |

**Final condition:** Pursue this entry as a bounded, honest helpdesk prototype. A production claim would require representative independent evaluation, user research, authenticated workflow integration and durable controls. A judge may still prefer a more original or integrated product. Nothing in this research establishes a likely prize.
