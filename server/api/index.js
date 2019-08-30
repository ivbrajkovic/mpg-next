const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:cmp/:lng', function(req, res, next) {
    // console.log('TCL server: req', req);

    if (!req.params.cmp || !req.params.lng) {
        console.error('readFile error: Invalid argument');
        res.json({ success: false, lastError: 'Invalid params' });
        return;
    }

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

    fs.readFile(`db/${req.params.cmp}-${req.params.lng.toUpperCase()}.json`, (error, data) => {
        if (error) {
            console.error('readFile error:', error);
            res.json({ success: false, lastError: error });
            return;
        }
        res.json({ success: true, data: JSON.parse(data) });
    });
});

module.exports = router;
