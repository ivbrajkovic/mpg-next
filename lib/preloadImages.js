// preloadImages.js

async function preloadImages(images) {
    let loader = function(src) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(src);
            img.onerror = err => reject(err);
            img.src = src;
            // img = null;
            // console.log('TCL: loader -> img', img);
        });
    };

    let loaders = [];
    images.forEach(image => loaders.push(loader(image.src)));

    return Promise.all(loaders);
}

export default preloadImages;
