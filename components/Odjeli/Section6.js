// Section6.js

const Section6 = ({ lang, odjel, data, onChangeOdjel }) => {

  const changeOdjel = value => onChangeOdjel(value);

  return (
    <section
      style={{ minHeight: 100 }}
      className="container m-t-xs-20-xl-40 gap-xs-20-xl-30 odjeli__section-6__menu"
      data-aos="fade"
      data-aos-duration="1000"
    >
      {data[lang] &&
        data[lang].map((title, index) => {
          return (
            <div key={index} className="dummy-needed-for-fade">
              <div
                className={`m-0 header-3 w3-card-4 expand-on-hover odjeli__section-6__menu-item${
                  odjel == index ? " active" : ""
                }`}
                onClick={() => changeOdjel(index)}
              >
                {title}
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Section6;
