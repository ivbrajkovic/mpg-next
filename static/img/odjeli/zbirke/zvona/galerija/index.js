const fs = require("fs");

fs.readdir(".", (error, files) => {
  let f;
  if (!error) f = files.filter(file => /(\.jpg|\.png)/.test(file));
  console.log(f.sort());
});
