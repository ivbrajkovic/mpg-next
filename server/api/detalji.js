// Zbirke - detalji

const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/:name/:id", function(req, res, next) {
  const file = `server/db/zbirke/${req.params.name}/detalji/${req.params.id}.json`;
  console.log("TCL: SERVER 4");

  if (req.params.name && req.params.id) {
    fs.readFile(file, (error, data) => {
      if (error) {
        console.error("myfile does not exist");
        res.json({ success: false, lastError: error });
        return;
      }
      res.json({ success: true, data: JSON.parse(data) });
    });
  } else {
    res.json({ success: false, lastError: error });
  }
});

module.exports = router;

// res.json(params);

//
// const regex = /[^-]+?(?=\.json)/gm;
// const regex = /-([^-]*)(?=\.json)/;
// const regex = new RegExp(`-${req.params.id}.json`);
// const folder = 'server/db/zbirke/';
// const pattern = `-${req.params.id}.json`;

// fs.readdir(folder, (error, files) => {
//     if (error) {
//         console.error('readFile error:', error);
//         res.json({ success: false, lastError: error });
//         return;
//     }

//     let file = files.find(file => {
//         return file.includes(pattern);
//     });

// fs.readFile(folder + file, (error, data) => {
//     if (error) {
//         console.error('readFile error:', error);
//         res.json({ success: false, lastError: error });
//         return;
//     }
//     res.json({ success: true, data: JSON.parse(data) });
// });
