// hero component

// import { useEffect } from 'react';
import Fade from "react-reveal/Fade"; // Importing Zoom effect
// import hero from './hero.json';

const Hero = ({ title, folder, srcset }) => {
  //     useEffect(() => {
  //         const el = document.getElementById('hero');
  //         el && el.classList.add('fade-in');
  //     }, []);

  return (
    <Fade ssrReveal>
      <section className="w3-card-4 banner hero">
        <img
          className="img-cover kenburns-top-right"
          // className="img-cover"
          src={`${folder}${srcset[0]}`}
          srcSet={`${folder}${srcset[0]} 992w, ${folder}${
            srcset[1]
          } 1200w, ${folder}${srcset[2]} 1600w`}
        />
        <div className="container">
          <h1 className="hero-header">{title}</h1>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
