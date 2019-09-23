// New API pages.js

const readXlsxFile = require('read-excel-file/node');
const express = require('express');
const router = express.Router();
const fsPromises = require('fs').promises;

const izdanja = require('../schema/izdanja');
const getJsonData = require('../lib/getJsonData');

let files = {
  izdanja: 'static/img/izdanja/izdanja MGP.xlsx',
  usluge: `server/db/usluge/usluge.json`,
  aktivnosti: `server/db/aktivnosti/aktivnosti.json`,
  kastel: 'server/db/kastel/kastel.json'
};

let schema = {};

router.get('/', function(req, res, next) {
  console.log(
    'TCL: *********************** SERVER PAGES ***************************'
  );
  console.log('TCL: SERVER -> req.query: ', req.query);

  const page = req.query.page || '';
  switch (page) {
    case 'izdanja':
      schema = izdanja;
      readXlsxFile(files[page], { schema }).then(({ rows, errors }) => {
        res.send(rows);
      });
      break;

    case 'usluge':
      getJsonData(res, files[page]);
      break;

    case 'kastel':
      getJsonData(res, files[page]);
      break;

    case 'aktivnosti':
      const from = +req.query.from || 0;
      const to = +req.query.to || 0;

      fsPromises
        .readFile(files[page])
        .then(file => {
          const data = JSON.parse(file);
          // const resData = data.section1.filter(item => {
          data.section1 = data.section1.filter(item => {
            return item.id >= from && item.id < to;
          });
          res.json({ success: true, data: data });
          // res.json({ success: true, data: resData });
        })
        .catch(err => res.json({ success: false, lastError: err }));
      break;

    default:
      res.json({ success: false, lastError: 'No schema specified.' });
      return;
      break;
  }
});

module.exports = router;
