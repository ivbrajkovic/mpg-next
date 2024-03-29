// Hero

import { useState, useEffect } from "react";
// import Fade from "react-reveal/Fade";

const Hero = ({ title, srcset, move }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image =
      window.innerWidth < 992
        ? srcset[0]
        : window.innerWidth >= 992 && window.innerWidth < 1200
        ? srcset[1]
        : srcset[2];

    // console.log("TCL: Hero -> image", image);
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = image;
  }, []);

  // console.log("TCL: Hero -> loaded", loaded);
  return (
    // <Fade ssrReveal delay={loaded}>
    <section
      id="hero"
      className={`w3-card-4 banner hero fade${loaded ? " fade-active" : ""}`}
    >
      <img
        className={`img-cover${loaded && move ? " kenburns-top-right" : ""}`}
        src={srcset[0]}
        srcSet={`${srcset[0]} 992w, 
            ${srcset[1]} 1200w, 
            ${srcset[2]} 1600w`}
        // onload={() => {
        //   alert("loaded");
        //   setLoaded(true);
        // }}
      />
      <div className="container pos-relative">
        <h1 className="m-b-xs-20-xl-40 w-100 hero-header">{title}</h1>
      </div>
    </section>
    // </Fade>
  );
};

export default Hero;
