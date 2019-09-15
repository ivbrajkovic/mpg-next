const express = require("express");
const router = express.Router();
const fs = require("fs");
// const fsPromises = require('fs').promises;

router.get("/:folder", function(req, res, next) {
  console.log(
    "TCL: *********************** SERVER 2 ***************************"
  );

  const json = `server/db/${req.params.folder}/${
    req.query.file ? req.query.file : req.params.folder
  }.json`;

  console.log("SERVER file:", json);

  fs.readFile(json, (error, file) => {
    if (error) {
      console.error(`SERVER: Read file error ${error}`);
      res.json({ success: false, lastError: error });
      return;
    }

    // Parse JSON file
    let data = {};
    try {
      data = JSON.parse(file);
    } catch (error) {
      console.error(`SERVER: Error parsing json file, ${error}`);
      res.json({ success: false, lastError: error });
      return;
    }

    if (!data.folder) {
      console.error("SERVER: folder not specified");
      res.json({
        success: true,
        data: data,
        lastError: "folder not specified"
      });
    }

    const isBanner = data.isBanner;
    const isSlider = data.isSlider;

    // Return if no banner or slider
    if (!(isBanner || isSlider)) {
      res.json({ success: true, data: data });
      return;
    }

    fs.readdir(data.folder.substring(1), (error, files) => {
      if (!error) {
        isBanner && (data.banners = []);
        isSlider && (data.slides = []);

        for (let index = 0; index < files.length; index++) {
          // Get banners
          if (isBanner && /baner/gm.test(files[index])) {
            data.banners.push(files[index]);
            continue;
            // Get slides
          } else if (isSlider && /slider/gm.test(files[index])) {
            data.slides.push(files[index]);
            continue;
          }
        }

        // data.gallery.sort();
        isBanner && data.banners.sort();
      }
      res.json({ success: true, data: data });
    });
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
