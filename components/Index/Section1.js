// Section1.js

// import { useEffect, useRef } from 'react';
// import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import Fade from "react-reveal/Fade";
import isLocalImage from "../../lib/isLocalImage";

const Section1 = ({ lang, folder, data }) => {
  const title = data[lang] && data[lang].title;
  const header = data[lang] && data[lang].header;
  const content = data[lang] && data[lang].content;
  //   const src = `${folder}post-big.png`;

  // const elementRef = useRef(null);
  // useEffect(() => {
  //     elementRef.current.style.setProperty('animation-delay', `0ms`);
  //     elementRef.current.classList.add('fade-in--active');
  //     //return () => elementRef.current.classList.remove('fade-in--active');
  // }, []);

  return (
    <Fade delay={250} ssrReveal>
      <section
        // ref={elementRef}
        // style={{ minHeight: 300 }}
        // className={`container m-t-xs-20-xl-40 text-center section-1 hidden${
        // className={`container m-t-xs-20-xl-40 text-center section-1${title ? ' fade-in' : ''}`}
        // className={`container m-t-xs-20-xl-40 text-center section-1 fade-in`}
        className={`container m-t-xs-20-xl-40 text-center section-1`}
      >
        <div className="w3-card-4 d-grid">
          <div className="item-1">
            {/* <img className="img-flex" src={`${folder}${data.src}`} /> */}
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
    </Fade>
  );
};

export default Section1;
