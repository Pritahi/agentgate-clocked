# AgentGate

A safety gate that sits between untrusted content and an AI assistant, built for the Clocked Build Challenge.

- **Guard (`/injection`)** screens inbound email, tickets and pages. A hit blocks the content before the model sees it.
- **Protect (`/pii`)** finds personal data and returns a masked copy. The assistant only gets the masked text.
- **Inspect (`/script`)** reads a script the agent wants to run against the approved scope and flags anything outside it, with the offending lines highlighted.

Every call changes what the app does: BLOCK, REDACT (forward masked text) or ALLOW.

## Run it
```
export CLOCKED_API_KEY=...   # free account at clocked.rezolve.ai, code CLOCKEDHACKATHON
node server.js               # http://localhost:3000
```
Deploys as-is to Vercel (`api/` functions + `public/`). The key is read only from the `CLOCKED_API_KEY` env var, never stored in the repo. Policies for Guard and Inspect are in `api/_gate.js`.

Data used in the demo is synthetic. Started and built on Nov 10, 2026.
