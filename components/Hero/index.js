// hero component

// import { useEffect } from 'react';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import hero from './hero.json';

const Hero = ({ title, page }) => {
    console.log('TCL: Hero -> title', title);
    const baseUrl = (hero[page] && hero[page].baseUrl) || '';
    const images = (hero[page] && hero[page].src) || '';

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
                    src={baseUrl + images[0]}
                    // srcSet={`${src[0]} 575w, ${src[1]} 991w, ${src[2]} 1199w, ${src[2]} 1600w`}
                    srcSet={`${baseUrl + images[0]} 991w, ${baseUrl + images[1]} 1199w, ${baseUrl +
                        images[2]} 1600w`}
                />
                <div className="container">
                    <h1 className="hero-header">{title}</h1>
                </div>
            </section>
        </Fade>
    );
};

export default Hero;
