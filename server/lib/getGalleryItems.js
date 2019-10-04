//  Get gallery items

const fs = require('fs');

function getGalleryItems(res, folder) {
  console.log(
    'TCL: ****************** SERVER: getGalleryItems() **********************'
  );

  const gallery = [];

  fs.readdir(folder, (error, files) => {
    // Send error
    if (error) {
      console.log(
        'TCL: ****************** SERVER: getGalleryItems() **********************\n' +
          'TCL: Error:',
        error
      );
      res.json({ success: false, lastError: error });
      return;
    }

    for (let index = 0; index < files.length; index++) {
      if (/^(?!.*(-tmb|baner)).*\.jpg|\.png$/gim.test(files[index])) {
        gallery.push(`/${folder}/${files[index]}`);
        continue;
      }
    }

    // Send success
    res.json({ success: true, data: gallery });
  });
}

module.exports = getGalleryItems;
