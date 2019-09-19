//  Get data from excel file

const readXlsxFile = require("read-excel-file/node");

const schemaIzdanja = {
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

function getExcelData(file, schema) {
  // const file = "static/img/izdanja/izdanja MGP.xlsx";

  let sch = {};
  switch (schema) {
    case "izdanja":
      sch = schemaIzdanja;
      break;
  
    default:
      break;
  }
  
  // File path.
  return readXlsxFile(file, { sch });
  
  // readXlsxFile(file, { schema }).then(({ rows, errors }) => {
  // });
}

module.exports = getExcelData;
