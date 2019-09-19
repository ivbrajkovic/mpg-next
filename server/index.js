// Server

const express = require("express");
const next = require("next");
const fs = require("fs");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use("/api/new", require("./api/pages.js"));
  server.use("/api", require("./api"));
  server.use("/api/zbirke", require("./api/zbirke.js"));
  server.use("/api/zbirke/detalji", require("./api/detalji.js"));

  // server.get('/', (req, res) => {
  //     console.log('TCL: server - > req.url', req.url);

  //     fs.readFile(`db/menu.json`, (error, data) => {
  //         if (error) {
  //             console.error('readFile error:', error);
  //             return app.render(req, res, '/', { success: false, data: error });
  //         }
  //         return app.render(req, res, '/', { data: JSON.parse(data) });
  //     });
  // });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
