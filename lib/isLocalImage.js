const isLocalImage = image => {
  return !(image.startsWith("http") || image.startsWith("HTTP") || false);
};

export default isLocalImage;
