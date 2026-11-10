const { gateMessage, gateScript, MAX_CHARS } = require("./_gate");

let used = 0; // best-effort per-instance cap so a public demo cannot burn the credits
const CAP = 400;

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const { kind, text } = body;
  if (!["message", "script"].includes(kind) || typeof text !== "string" || !text.trim())
    return res.status(400).json({ error: "Send {kind: 'message'|'script', text}" });
  if (text.length > MAX_CHARS) return res.status(413).json({ error: `Max ${MAX_CHARS} characters` });
  if (++used > CAP) return res.status(429).json({ error: "Demo limit reached, run it locally (see README)." });
  try {
    const out = kind === "message" ? await gateMessage(text) : await gateScript(text);
    res.status(200).json(out);
  } catch (e) {
    res.status(502).json({ error: e.message, detail: e.detail || null });
  }
};
