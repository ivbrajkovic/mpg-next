// Aktivnosti - Detalji

const btnClose = {
  float: "right",
  cursor: "pointer"
};

const Detalji = ({ lang, folder, data, onCloseDetalji }) => {
  return (
    <div className="container">
      <h2 className="p-0-20 post-title content-1-light1">
        <div style={btnClose} onClick={() => onCloseDetalji()}>
          X
        </div>
        {data[lang].title}
      </h2>
      <h1 className="header-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        dolore!
      </h1>
      {data.src}
    </div>
  );
};

export default Detalji;
