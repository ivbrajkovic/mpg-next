//  Get data from excel file

const fs = require("fs");

function getJsonData(res, json) {
  console.log(
    "TCL: ****************** SERVER: getJsonData() **********************"
  );

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
    const isGallery = data.isGallery;

    // Return if no banner or slider
    if (!(isBanner || isSlider || isGallery)) {
      res.json({ success: true, data: data });
      return;
    }

    fs.readdir(data.folder.substring(1), (error, files) => {
      if (!error) {
        isBanner && (data.banners = []);
        isSlider && (data.slides = []);
        isGallery && (data.gallery = []);

        for (let index = 0; index < files.length; index++) {
          // Get banners
          if (isBanner && /baner/gim.test(files[index])) {
            data.banners.push(files[index]);
            continue;
            // Get slides
          } else if (isSlider && /slider/gim.test(files[index])) {
            data.slides.push(files[index]);
            continue;
          } else if (
            isGallery &&
            /^(?!.*(-tmb|baner)).*\.jpg|\.png$/gim.test(files[index])
          ) {
            data.gallery.push(files[index]);
            continue;
          }
        }

        // data.gallery.sort();
        isBanner && data.banners.sort();
      }
      res.json({ success: true, data: data });
    });
  });
}

module.exports = getJsonData;
