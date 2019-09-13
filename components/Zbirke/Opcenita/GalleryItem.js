// Opcenita - section2 - gallery

const GalleryItem = ({ index, item, style }) => (
  <div style={style} key={index}>
    <div className="w3-card-4 expand-on-hover">
      <img className="img-cover" src={item} />
    </div>
  </div>
);

export default GalleryItem;
