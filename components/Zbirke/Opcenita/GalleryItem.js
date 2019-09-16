// Opcenita - section2 - gallery

const GalleryItem = ({ index, thumb, large, style }) => (
  <div style={style} key={index}>
    <div className="w3-card-4 expand-on-hover">
      <a href={large} className="glightbox">
        <img className="img-cover" src={thumb} alt={thumb} />
      </a>
    </div>
  </div>
);

export default GalleryItem;
