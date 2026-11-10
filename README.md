# AgentGate: Helpdesk release desk

**Fix the ticket. Don't inherit its instructions.**

A working prototype for IT helpdesk reviewers. Clocked Guard quarantines poisoned tickets, Protect creates a minimum-data handoff, and Inspect evaluates a proposed repair against a fixed approved scope. A human review step is separate from model judgment.

**Live demo:** https://agentgate-inky.vercel.app

Built from scratch on November 10, 2026 for the Clocked Build Challenge. Entered for Best Overall and Best Use of Protect / Guard / Inspect. AI-assisted implementation. No real employee data is used.

## Try it in 60 seconds

1. In **Ticket intake**, run **Poisoned VPN article**. Guard's verdict blocks or holds release; source evidence is highlighted.
2. Run **Private employee ticket**. Protect replaces identifiers, including a custom employee ID. Expand findings, review the candidate, tick the review box, and download the handoff. The export excludes the original ticket and raw findings.
3. In **Repair review**, compare **Repair with security disabled** with **Local printer repair**. The first is blocked/held; the second can become eligible for human change review. Switch the scope to **Read-only VPN diagnostics** and run the printer repair again: context changes what is permitted.
4. Change any input after checking. The old release result is invalidated. Nothing is ever executed.

A live model may vary. If the service fails, the app holds release rather than silently passing content.

## Why this is more than three API buttons

- Guard's `verdict` and `injection` signal drive BLOCK/HOLD/eligibility. It receives `source: content` and a helpdesk-specific policy, not ticket text promoted into instructions.
- Protect's `entities` and `anonymized_text` drive the only releasable ticket payload. The app verifies returned Unicode spans, rejects inconsistent transformations and detected values left in the output, and holds low-confidence findings. It requests catalog types plus a custom employee-ID type.
- Inspect receives one of two server-side approved scopes. Its verdict and both risk signals determine whether a script may enter human change review. A benign result never authorizes execution.
- No content is exported for BLOCK/HOLD. Input and scope edits invalidate the old decision. Exports are local JSON review packets, not messages, ticket writes, shell commands or authenticated approval records.

This is an **incremental workflow prototype**, not a novel detector or a production security boundary. It does not connect to a downstream LLM, Teams, EasyVista, SharePoint or a live host.

## Evidence and the honest miss

| Check | Result, one run on Nov 10, 2026 | Interpretation |
|---|---|---|
| Deterministic policy/API tests | 35/35 passed | Covers missing/invalid verdicts, missing transformed text, low confidence, leaked detected values, Unicode offsets, malformed JSON, input limits and unavailable configuration |
| Live development set | 14/14 expected decisions | Hand-written synthetic examples; 2 redaction cases also check named values are removed |
| Fixed-policy challenge set | 7/8 expected decisions | One false positive: a legitimate human-facing printer instruction was blocked |
| Tiny keyword baseline | 10/14 development, 3/8 challenge | Decision-only comparison, not full redaction performance or a competitive detector benchmark |

Development-set median end-to-end latency was **333 ms** from the test environment, including network time. This is not a service-level promise, browser latency, or Clocked's model-only time.

Read [development results](public/benchmark.json), [challenge results](public/challenge-benchmark.json), [test inputs](test/cases.json), and the [research and decision report](docs/research.md). The cases were written by the builder, are small, English/Hinglish-heavy, and do not establish generalization or production efficacy. BLOCK or HOLD counts as success for unsafe inputs. The challenge policy was not retuned after the miss.

## Run locally

Requires Node.js 22 or newer. No third-party runtime packages.

```sh
git clone https://github.com/Pritahi/agentgate-clocked.git
cd agentgate-clocked
export CLOCKED_API_KEY='your-own-key'
npm run dev
# open http://localhost:3000
npm test
# Live tests consume your included Clocked credits:
npm run benchmark
npm run benchmark:challenge
```

Create your own free Clocked account and use the current challenge code only if eligible. No purchase is required. Never put keys in the browser, source control or exported review packets.

### Deploy to Vercel

Import this repository, choose the Node.js project preset, and set `CLOCKED_API_KEY` as a server-side environment variable for production. Static files are in `public/`; the serverless handler is `api/gate.js`. The key must be configured for every deployment. Local server: `server.js`.

## Architecture

```text
Browser review desk
  | POST /api/gate: synthetic text, kind, fixed scope identifier
  v
Server: validate size/schema -> best-effort in-memory rate cap
  |-- ticket -> Guard + Protect in parallel -> validate result -> policy
  |-- script -> Inspect with server-owned scope -> validate result -> policy
  v
BLOCK / HOLD: no candidate export
REDACT / ALLOW: candidate shown -> explicit local review -> JSON download
```

Policies and pure decision functions: `api/_gate.js`. Backend transport: `api/_clocked.js`. UI and stale-result invalidation: `public/app.js`. No source-content logging, database or persistence is implemented. Browser input and results remain in page memory until reload or navigation. Clocked processes the submitted text, including raw identifiers, so use synthetic content on the public demo.

## Failures and limits

- Default API thresholds remain 0.5. Additional application review bands are conservative **unvalidated policy choices**: Guard holds benign scores ≥0.35 and blocks scores ≥0.65; injection verdicts always block. Inspect requires benign plus both risk signals <0.2 for release eligibility.
- Detector failure, timeout (12 seconds), missing fields or inconsistent PII spans prevents release. No automatic retries are implemented.
- Maximum 6,000 Unicode characters per request. Per-instance cap: 400 requests; per-IP cap: 12/minute. These in-memory controls reset on cold starts and are **not a global abuse or credit budget**. Account overage remains $0; included credits can still be exhausted. Production would need durable shared limits, authentication and monitoring.
- Findings can miss personal data, passwords, API keys or indirect sensitive facts. A clean verdict is not proof of safety. Response findings themselves are sensitive.
- Exported review checkbox is local and unauthenticated. Production needs server-side identities, immutable audit records, permissions and least-privilege tools.
- No PDF/image support, sandbox, script execution, real ticket integration, adversarial benchmark, customer interview or independently measured ROI.

## Research influence and credits

The implementation uses Node/browser built-ins and Clocked; no comparator source code was copied. Source inspection informed the need for review states and reproducibility, not a claim of equivalent capability.

- [Official challenge, rubric and judges](https://clocked.rezolve.ai/challenge)
- [Clocked API documentation](https://clocked.rezolve.ai/docs)
- [Rezolve.ai: Gesa support workflow](https://www.rezolve.ai/case-studies/gesa-credit-union) (vendor case study, not independent efficacy evidence)
- [Snyk: Jira/Cursor indirect injection](https://labs.snyk.io/resources/cursor-jira-mcp-vulnerability-explained/) (unrelated product; not a claim about Rezolve.ai)
- [OWASP: prompt injection mitigations](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [NVIDIA's winner account](https://developer.nvidia.com/blog/hackathon-winners-bring-agentic-ai-to-life-with-the-nvidia-nemo-agent-toolkit/) and [OpenCodeReview source](https://github.com/victortong-git/open-code-review)

Full provenance, alternatives, rubric self-audit and unknowns are in [docs/research.md](docs/research.md).
