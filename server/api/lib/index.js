// function checkLng(req) {
//     const lng = req.params.lng || 'HR';

//     if (!/HR|hr|ENG|eng|IT|it/.test(lng)) {
//         res.json({ success: false, data: 'Invalid argument' });
//         return false;
//     }

//     fs.readFile(`db/index_${lng.toUpperCase()}.json`, (error, data) => {
//         if (error) {
//             console.error('readFile error:', error);
//             res.json({ success: false, data: error });
//             return false;
//         }
//         res.json(JSON.parse(data));
//     });
// }

// module.exports = {
//     checkLng
// };
