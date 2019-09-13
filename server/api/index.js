const express = require("express");
const router = express.Router();
const fs = require("fs");
// const fsPromises = require('fs').promises;

router.get("/:folder", function(req, res, next) {
  console.log("TCL: SERVER 3");

  const file = `server/db/${req.params.folder}/${
    req.query.file ? req.query.file : req.params.folder
  }.json`;

  fs.readFile(file, (error, data) => {
    console.log("TCL: SERVER -> index ->  data", data);
    if (error) {
      console.error("readFile error:", error);
      res.json({ success: false, lastError: error });
      return;
    }

    if (data.gallery) {
      const folder = `${data.folder}${data.gallery}`;
      console.log("TCL: SERVER -> index -> folder", folder);

      fs.readdir(``, (error, files) => {
        data = JSON.parse(data);
        if (!error)
          data.gallery.src = files.filter(file => /\.jpg||\.png/.test(file));
        res.json({ success: true, data: data });
      });
    } else res.json({ success: true, data: JSON.parse(data) });
  });
});

module.exports = router;

// router.get('/:cmp/:lng', function(req, res, next) {
// console.log('TCL server: req', req);

// if (!req.params.cmp || !req.params.lng) {
// if (!req.params.folder || !req.params.file) {
//     console.error('readFile error: Invalid argument');
//     res.json({ success: false, lastError: 'Invalid params' });
//     return;
// }

// fs.readFile(`db/${req.params.cmp}.json`, (error, data) => {
//     if (error) {
//         console.error('readFile error:', error);
//         res.json({ success: false, data: error });
//         return;
//     }
//     res.json(JSON.parse(data));
// });

//const lng = req.params.lng || 'HR';
// if (!/HR|hr|ENG|eng|IT|it/.test(lng)) {
//     res.json({ success: false, data: 'Invalid argument' });
//     return;
// }
// console.log('TCL: req.params.folder', req.params.folder);
// console.log('TCL: req.query.file', req.query.file);

// let file;
// if (req.params.folder && req.query.file)
//     file = `server/db/${req.params.folder}/${req.query.file}.json`;
// else file = `server/db/${req.params.folder}.json`;
