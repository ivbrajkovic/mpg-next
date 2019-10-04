// Gallery API, retereive all images from folder

const express = require('express');
const router = express.Router();

const getGalleryItems = require('../lib/getGalleryItems');

router.get('/', function(req, res, next) {
  console.log(
    'TCL: *********************** SERVER GALLERY API ***************************'
  );

  console.log('TCL: SERVER -> req.query: ', req.query);

  const folder = req.query.folder;

  if (folder) getGalleryItems(res, folder);
  else {
    console.log(
      'TCL: ****************** SERVER GALLERY API: FAILED ***********************'
    );
    res.json({ success: false, lastError: error });
  }
});

module.exports = router;
