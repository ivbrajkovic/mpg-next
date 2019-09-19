// var docxParser = require("docx-parser");

// docxParser.parseDocx("word2.docx", function(data) {
//   console.log(data);
//   console.log(data.includes("\t"));
//   console.log(data.includes("\n"));
// });

const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

const schema = {
  "Broj fotke": {
    prop: "fotka",
    type: Number
  },
  "Ime izdanja": {
    prop: "izdanje",
    type: String
  },
  Vrsta: {
    prop: "vrsta",
    type: String
  },
  "godina izdanja": {
    prop: "godina",
    type: String
  }
};

const file = "static/img/izdanja/izdanja MGP.xlsx";

// Readable Stream.
// readXlsxFile(fs.createReadStream(file, { schema })).then(({ rows, errors }) => {
readXlsxFile(file, { schema }).then(({ rows, errors }) => {
  console.log("TCL: errors", errors);
  console.log("TCL: rows", rows);
  console.log("TCL: rows", JSON.stringify(rows));
});
