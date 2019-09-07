// var TweenMax = require('gsap');

// var o = {
//     value: 0
// };

// TweenMax.to(o, 0.2, {
//     value: 50,
//     repeat: 50,
//     yoyo: true,
//     onUpdate: function() {
//         console.log('value - ', o.value);
//     }
// });

let va = 'ivn';
let regex = /-(.*)\./;
let regex2 = /[^-]+?(?=\.bjson)/;
let file = 'tdfsv-bs s-ivan.json';

let matches = regex2.exec(file);
console.log(matches);
