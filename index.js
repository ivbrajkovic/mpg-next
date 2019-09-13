// List all files in a directory in Node.js recursively in a synchronous fashion
var fs = fs || require("fs");

files = fs.readdirSync(".");

files.forEach(function(file) {
  console.log(
    "TCL: file " + file + "directory: " + fs.statSync(file).isDirectory()
  );
  // if (fs.statSync(dir + file).isDirectory()) {
  //   filelist = walkSync(dir + file + "/", filelist);
  // } else {
  //   filelist.push(file);
  // }
});
