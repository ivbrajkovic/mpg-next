// hero component

import { useEffect } from 'react';

const Hero = ({ title, banner }) => {
    const src = banner ? banner : [];
    //     useEffect(() => {
    //         const el = document.getElementById('hero');
    //         el && el.classList.add('fade-in');
    //     }, []);

    return (
        <section id="hero" className="w3-card-4 banner hero">
            <img
                // className="img-cover kenburns-top-right"
                className="img-cover"
                src={src[0]}
                srcSet={`${src[0]} 575w, ${src[1]} 991w, ${src[2]} 1199w, ${src[3]} 1600w`}
            />
            <h1 className="header">{title}</h1>
        </section>
    );
};

export default Hero;
