// New API pages.js

const readXlsxFile = require("read-excel-file/node");
const express = require("express");
const router = express.Router();

const izdanja = require("../schema/izdanja");
const getJsonData = require("../lib/getJsonData");

let file = "";
let schema = {};

router.get("/", function(req, res, next) {
  console.log(
    "TCL: *********************** SERVER PAGES ***************************"
  );
  console.log("TCL: SERVER -> req.query: ", req.query);

  const page = req.query.page || "";
  switch (page) {
    case "izdanja":
      schema = izdanja;
      file = "static/img/izdanja/izdanja MGP.xlsx";
      readXlsxFile(file, { schema }).then(({ rows, errors }) => {
        res.send(rows);
      });
      break;

    case "usluge":
      const json = `server/db/usluge/usluge.json`;
      getJsonData(res, json);
      break;

    default:
      res.json({ success: false, lastError: "No schema specified." });
      return;
      break;
  }
});

module.exports = router;
