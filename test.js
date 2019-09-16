var docxParser = require("docx-parser");

docxParser.parseDocx("word2.docx", function(data) {
  console.log(data);
  console.log(data.includes("\t"));
  console.log(data.includes("\n"));
});
