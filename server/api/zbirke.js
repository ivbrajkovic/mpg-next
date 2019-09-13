const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/:file", function(req, res, next) {
  // const regex = /[^-]+?(?=\.json)/gm;
  // const regex = /-([^-]*)(?=\.json)/;
  // const regex = new RegExp(`-${req.params.id}.json`);
  const folder = `server/db/zbirke/${req.params.file}/`;
  const pattern = `${req.params.file}.json`;

  console.log("TCL: SERVER 1");

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

        // Parse JSON file
        data = JSON.parse(data);

        if (data.folder && data.gallery && data.gallery.folder) {
          let folder = `${data.folder}${data.gallery.folder}`;

          fs.readdir(folder.substring(1), (error, files) => {
            if (!error) {
              data.gallery.src = files
                .filter(file => /\.jpg|\.png/.test(file))
                .sort();
            }
            res.json({ success: true, data: data });
          });
        } else {
          res.json({ success: true, data: data });
        }
      });
    } else {
      res.json({ success: false, lastError: "SERVER: File not found." });
    }
  });
});

router.get("/:folder/:file", function(req, res, next) {
  console.log("TCL: SERVER 2");

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
