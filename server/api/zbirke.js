const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:file', function(req, res, next) {
    // const regex = /[^-]+?(?=\.json)/gm;
    // const regex = /-([^-]*)(?=\.json)/;
    // const regex = new RegExp(`-${req.params.id}.json`);
    const folder = `server/db/zbirke/${req.params.file}/`;
    console.log('TCL: folder', folder);
    const pattern = `${req.params.file}.json`;
    console.log('TCL: pattern', pattern);

    fs.readdir(folder, (error, files) => {
        if (error) {
            console.error('readFile error:', error);
            res.json({ success: false, lastError: error });
            return;
        }

        let file = files.find(file => {
            return file.includes(pattern);
        });

        if (file) {
            fs.readFile(folder + file, (error, data) => {
                if (error) {
                    console.error('readFile error:', error);
                    res.json({ success: false, lastError: error });
                    return;
                }
                res.json({ success: true, data: JSON.parse(data) });
            });
        } else {
            res.json({ success: false, lastError: 'File not found.' });
        }
    });
});

router.get('/:folder/:file', function(req, res, next) {
    const folder = `server/db/zbirke/${req.params.folder}/detalji/`;
    console.log('TCL: folder', folder);
    const pattern = `${req.params.file}.json`;
    console.log('TCL: pattern', pattern);

    fs.readdir(folder, (error, files) => {
        if (error) {
            console.error('readFile error:', error);
            res.json({ success: false, lastError: error });
            return;
        }

        let file = files.find(file => {
            return file.includes(pattern);
        });

        if (file) {
            fs.readFile(folder + file, (error, data) => {
                if (error) {
                    console.error('readFile error:', error);
                    res.json({ success: false, lastError: error });
                    return;
                }
                res.json({ success: true, data: JSON.parse(data) });
            });
        } else {
            res.json({ success: false, lastError: 'File not found.' });
        }
    });
});

module.exports = router;
