// Local dev server: node server.js (needs CLOCKED_API_KEY in the environment)
const http = require("http"), fs = require("fs"), path = require("path");
const gate = require("./api/gate");
http.createServer((req, res) => {
  if (req.url === "/api/gate") {
    let b = ""; req.on("data", (c) => (b += c));
    req.on("end", () => {
      req.body = b;
      res.status = (c) => ((res.statusCode = c), res);
      res.json = (o) => (res.setHeader("Content-Type", "application/json"), res.end(JSON.stringify(o)));
      gate(req, res);
    });
    return;
  }
  const f = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
  fs.readFile(f, (e, d) => (e ? (res.statusCode = 404, res.end("nf")) : res.end(d)));
}).listen(3000, () => console.log("http://localhost:3000"));
