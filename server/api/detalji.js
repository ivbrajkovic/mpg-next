// Zbirke - detalji

const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/:name/:id", function(req, res, next) {
  const json = `server/db/zbirke/${req.params.name}/detalji/${req.params.id}.json`;
  console.log(
    "TCL: *********************** SERVER 3 ***************************"
  );

  console.log("SERVER file:", json);

  // if (req.params.name && req.params.id) {
  fs.readFile(json, (error, file) => {
    if (error) {
      console.error("myfile does not exist");
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
      return;
    }

    const folder = data.folder.substring(1);

    // Get banners
    fs.readdir(folder, (error, files) => {
      if (!error) {
        data.banners = [];
        for (let index = 0; index < files.length; index++) {
          if (/baner/gm.test(files[index])) {
            data.banners.push(files[index]);
            continue;
          }
        }
        data.banners.sort();
      }

      // Get gallery
      fs.readdir(`${folder}detalji/`, (error, files) => {
        if (!error) {
          data.gallery = [];
          for (let index = 0; index < files.length; index++) {
            if (/^(?!.*(-tmb|baner)).*\.jpg|\.png$/gm.test(files[index])) {
              data.gallery.push(files[index]);
              continue;
            }
          }
          data.gallery.sort();
        }
        res.json({ success: true, data: data });
      });
    });
  });
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
