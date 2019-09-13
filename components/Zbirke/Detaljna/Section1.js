// Zbirke - Detaljna - Section 1

const Section1 = ({ folder, title, image, audio, video }) => {
  return (
    <div className="m-t-xs-20-xl-40 zbirke-detalji__section-1">
      <div className="header-2 header">{title}</div>
      <div className="d-grid gap-xs-20-xl-30 justify-xs-center-l-left">
        <div className="item-1">
          <img
            className="img-cover w3-card-4"
            src={`${folder}${image}`}
            // src={`${folder}${image}`.replace(/(.*)(\.jpg|\.png)/gm, "$1-tmb$2")}
          />
        </div>
        <div className="item-2 w3-card-4">
          <img
            className="img-cover"
            src="https://via.placeholder.com/800x600"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
