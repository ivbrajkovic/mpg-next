// Zbirke - Opcenita - Section 4

const Section4 = ({ data }) => {
  const header = (data.header && data.header.split("\\n")) || [];
  const text = (data.content && data.content.split("\\n")) || [];

  return (
    <div
      className="m-t-xs-20-xl-40 zbirke__section-1"
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-delay="1000"
    >
      <div className="float-right">
        <div className="header">
          {header.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div className="content-1">
        {text.map((item, index) => {
          return (
            <>
              {((item.startsWith("-") ||
                item.startsWith("−") ||
                item.startsWith("–")) && (
                <div className="list-item" key={index}>
                  {item.substring(1)}
                </div>
              )) || <p key={index}>{item}</p>}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
