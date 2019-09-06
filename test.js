var TweenMax = require('gsap');

var o = {
    value: 0
};

TweenMax.to(o, 0.2, {
    value: 50,
    repeat: 50,
    yoyo: true,
    onUpdate: function() {
        console.log('value - ', o.value);
    }
});
