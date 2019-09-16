// Zbirke - Detaljna - Section 3

const Section3 = ({ folder, data }) => {
  return (
    <div className="m-t-xs-20-xl-40 zbirke-detalji__section-3">
      <div className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30">
        {data &&
          data.map &&
          data.map((item, index) => (
            <a href={folder + item} className="glightbox">
              <img
                key={index}
                className="w3-card-4 expand-on-hover"
                src={`${folder}${item}`.replace(
                  /(.*)(\.jpg|\.png)/gm,
                  "$1-tmb$2"
                )}
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default Section3;
