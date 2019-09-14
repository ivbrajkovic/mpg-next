// Hero

import Fade from "react-reveal/Fade";

const Hero = ({ title, srcset, move }) => (
  <Fade ssrReveal>
    <section className="w3-card-4 banner hero">
      <img
        className={`img-cover${move ? " kenburns-top-right" : ""}`}
        src={srcset[0]}
        srcSet={`${srcset[0]} 992w, 
            ${srcset[1]} 1200w, 
            ${srcset[2]} 1600w`}
      />
      <div className="container">
        <h1 className="hero-header">{title}</h1>
      </div>
    </section>
  </Fade>
);

export default Hero;
