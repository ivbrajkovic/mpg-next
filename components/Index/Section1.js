// Section1.js

// import Fade from "react-reveal/Fade";
import isLocalImage from "../../lib/isLocalImage";

const Section1 = ({ lang, folder, data }) => {
  const title = data[lang] && data[lang].title;
  const header = data[lang] && data[lang].header;
  const content = data[lang] && data[lang].content;

  return (
    // <Fade delay={250} ssrReveal>

    <div data-aos="fade" data-aos-duration="1000">
      <section className={`container m-t-xs-20-xl-40 text-center section-1`}>
        <div className="w3-card-4 d-grid">
          <div className="item-1">
            <img
              className="img-flex"
              src={isLocalImage(data.src) ? `${folder}${data.src}` : data.src}
            />
          </div>
          <article className="item-2">
            <h2 className="p-0-20 post-title content-1-light1">{title}</h2>
            <section className="p-xs-20-l-40">
              <h1 className="header-1">{header}</h1>
              <p className="content-1">{content}</p>
            </section>
          </article>
        </div>
      </section>
    </div>

    // </Fade>
  );
};

export default Section1;
