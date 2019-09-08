const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:id', function(req, res, next) {
    // const regex = /[^-]+?(?=\.json)/gm;
    // const regex = /-([^-]*)(?=\.json)/;
    // const regex = new RegExp(`-${req.params.id}.json`);
    const folder = 'server/db/zbirke/';
    const pattern = `-${req.params.id}.json`;

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
