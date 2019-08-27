const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/:cmp/:lng', function(req, res, next) {
    if (!req.params.cmp || !req.params.lng) {
        console.error('readFile error: Invalid argument');
        res.json({ success: false, data: 'Invalid argument' });
        return;
    }

    //const lng = req.params.lng || 'HR';
    // if (!/HR|hr|ENG|eng|IT|it/.test(lng)) {
    //     res.json({ success: false, data: 'Invalid argument' });
    //     return;
    // }

    fs.readFile(`db/${req.params.cmp}-${req.params.lng.toUpperCase()}.json`, (error, data) => {
        if (error) {
            console.error('readFile error:', error);
            res.json({ success: false, data: error });
            return;
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;
