// Thin wrapper around the Clocked HTTP API. The key lives only in the CLOCKED_API_KEY env var.
const crypto = require("crypto");
const BASE = "https://clocked.rezolve.ai/clocked";

async function clocked(endpoint, body) {
  const key = process.env.CLOCKED_API_KEY;
  if (!key) throw new Error("CLOCKED_API_KEY is not set");
  const res = await fetch(`${BASE}/${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      "Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(`Clocked ${endpoint} failed (${res.status})`);
    err.detail = data;
    throw err;
  }
  return data;
}
module.exports = { clocked };
