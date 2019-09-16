const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/:file", function(req, res, next) {
  const json = `server/db/zbirke/${req.params.file}/${req.params.file}.json`;

  console.log(
    "TCL: *********************** SERVER 1 ***************************"
  );

  fs.readFile(json, (error, file) => {
    if (error) {
      console.error(`SERVER: Read file error, ${error}`);
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

    // Read image file names
    fs.readdir(data.folder.substring(1), (error, files) => {
      if (!error) {
        data.gallery = [];
        data.banners = [];
        for (let index = 0; index < files.length; index++) {
          // Get images
          if (/^(?!.*(-tmb|baner)).*\.jpg|\.png$/gim.test(files[index])) {
            data.gallery.push(files[index]);
            continue;
            // Get banners
          } else if (/baner/gm.test(files[index])) {
            data.banners.push(files[index]);
            continue;
          }
        }
        data.gallery.sort();
        data.banners.sort();
      }
      res.json({ success: true, data: data });
    });
  });
});

router.get("/:folder/:file", function(req, res, next) {
  console.log(
    "TCL: *********************** SERVER 2 ***************************"
  );

  const folder = `server/db/zbirke/${req.params.folder}/detalji/`;
  const pattern = `${req.params.file}.json`;

  fs.readdir(folder, (error, files) => {
    if (error) {
      console.error("readFile error:", error);
      res.json({ success: false, lastError: error });
      return;
    }

    let file = files.find(file => {
      return file.includes(pattern);
    });

    if (file) {
      fs.readFile(folder + file, (error, data) => {
        if (error) {
          console.error("readFile error:", error);
          res.json({ success: false, lastError: error });
          return;
        }
        res.json({ success: true, data: JSON.parse(data) });
      });
    } else {
      res.json({ success: false, lastError: "File not found." });
    }
  });
});

module.exports = router;
