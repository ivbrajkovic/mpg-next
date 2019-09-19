// New API pages.js

const readXlsxFile = require("read-excel-file/node");
const express = require("express");
const router = express.Router();

const izdanja = require("../schema/izdanja");

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
      break;

    default:
      res.json({ success: false, lastError: "No schema specified." });
      return;
      break;
  }

  readXlsxFile(file, { schema }).then(({ rows, errors }) => {
    // readXlsxFile(file).then(rows => {
    // console.log("TCL: errors", errors);
    // console.log("TCL: rows", rows);
    res.send(rows);
  });
});

module.exports = router;
