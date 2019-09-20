// Izdanje component

const IzdanjaItem = ({ folder, item }) => {
  return (
    <div
      className="m-t-xs-20-xl-40 w3-card-4 izdanja-item"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="item-1">
        <h1 className="header-3">{item.izdanje}</h1>
        <p className="content-2">{item.vrsta}</p>
        <p className="content-2">God. izdanja: {item.godina}</p>
      </div>
      <div className="item-2">
        <img
          // className="img-cover"
          src={`${folder}${item.fotka > 9 ? item.fotka : "0" + item.fotka}.jpg`}
          alt=""
        />
      </div>
    </div>
  );
};

export default IzdanjaItem;
