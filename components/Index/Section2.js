// Section2

// import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import isLocalImage from "../../lib/isLocalImage";

const Section2 = ({ lang, folder, data }) => (
  // <Zoom ssrReveal cascade>
  <section
    // ref={elementRef}
    className="container m-t-xs-20-xl-40 gap-xs-20-xl-40 d-grid text-center section-2"
  >
    {data &&
      data.map((item, index) => {
        return (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay={100 * index}
          >
            <article className="w3-card-4 post">
              {/* <img className="img-flex" src={item.src} /> */}
              <img
                className="img-flex"
                src={isLocalImage(item.src) ? `${folder}${item.src}` : item.src}
              />
              <h2 className="p-0-20 content-2 post-title content-1-light">
                {item[lang] && item[lang].title}
              </h2>
              <section className="p-20">
                <h1 className="header-3">{item[lang] && item[lang].header}</h1>
                <p className="content-2">{item[lang] && item[lang].content}</p>
              </section>
            </article>
          </div>
        );
      })}
  </section>
  // {/* </Zoom> */}
);

export default Section2;
