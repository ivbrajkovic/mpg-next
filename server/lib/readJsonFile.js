//  Get data from excel file

const fs = require("fs").promises;

async function readJsonFile(json) {
  console.log(
    "TCL: *********************** readJsonFile ***************************"
  );

  // try {
  const file = await fs.readFile(json);
  const data = JSON.parse(file);
  return data;
  // } catch (error) {
  //   return error;
  // }
}

// module.exports = readJsonFile;

readJsonFile("server/db/aktivnosti/aktivnosti.json")
  .then(data => console.log(data))
  .catch(err => console.log(err));
