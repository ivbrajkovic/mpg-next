// Gallery Item with thumb

const GalleryItem = ({ index, thumb, large, style }) => (
  <div key={index} style={style}>
    <div className="w3-card-4 expand-on-hover thumb-container">
      <a href={large} className="glightbox">
        <img className="img-cover" src={thumb} alt={thumb} />
      </a>
    </div>
  </div>
);

export default GalleryItem;
