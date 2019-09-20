// Get Image path from gallery

export default function getFilesFromGallery(folder, gallery) {
  // const thumb =
  //   gallery.map &&
  //   gallery.map(item => {
  //     return `${folder}${item}`.replace(/(.*)(\.jpg|\.png)/gim, "$1-tmb$2");
  //   });

  const thumbs = [];
  const large = [];

  gallery.forEach(item => {
    thumbs.push(`${folder}${item}`.replace(/(.*)(\.jpg|\.png)/gim, "$1-tmb$2"));
    large.push(`${folder}${item}`);
  });

  return [thumbs, large];
}
