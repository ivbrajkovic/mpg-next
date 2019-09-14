// preloadImages.js

function preloadImages(images) {
  let loader = function(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      // img.onerror = err => reject(err);
      img.onerror = err => console.error("Preload image failed.", err);
      // img.onerror = () => resolve("Error liading image.");
      img.src = src;
    });
  };

  let loaders = [];
  images.forEach(image => loaders.push(loader(image)));

  return Promise.all(loaders);
}

export default preloadImages;
