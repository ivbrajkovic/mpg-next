// hero component

// import { useEffect } from 'react';
import hero from './hero.json';

const Hero = ({ lang, page, title, banner }) => {
    // const src = banner ? banner : [];
    const baseUrl = hero[page].baseUrl;
    const images = hero[page].src;
    const title1 = hero[page].title[lang];

    //     useEffect(() => {
    //         const el = document.getElementById('hero');
    //         el && el.classList.add('fade-in');
    //     }, []);

    return (
        <section id="hero" className="w3-card-4 banner hero">
            <img
                // className="img-cover kenburns-top-right"
                className="img-cover"
                src={baseUrl + images[0]}
                // srcSet={`${src[0]} 575w, ${src[1]} 991w, ${src[2]} 1199w, ${src[2]} 1600w`}
                srcSet={`${baseUrl + images[0]} 991w, ${baseUrl + images[1]} 1199w, ${baseUrl +
                    images[2]} 1600w`}
            />
            <h1 className="hero-header">{title1}</h1>
        </section>
    );
};

export default Hero;
