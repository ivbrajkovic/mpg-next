// section5.js

import Fade from 'react-reveal/Fade'; // Importing Fade effect

const banner = [
    // 'static/img/pocetna/baner-pocetna-okastelu.jpg',
    'static/img/pocetna/baner-pocetna-okastelu.jpg',
    'static/img/pocetna/baner-pocetna-okastelu.jpg',
    'static/img/pocetna/baner-pocetna-okastelu.jpg'
];

const Section5 = ({ lang, data }) => {
    const header = data[lang] && data[lang].header;
    const content = data[lang] && data[lang].content;
    return (
        <Fade fraction={0.3} ssrReveal>
            <section className="m-t-xs-20-xl-40 p-relative text-center section-5">
                <div className="container p-0 banner w3-card-4 item-1">
                    <img
                        className="img-cover"
                        src={banner[0]}
                        srcSet={`${banner[0]} 575w, ${banner[0]} 991w, ${banner[1]} 1199w, ${
                            banner[2]
                        } 1600w`}
                    />
                </div>

                <div className="container p-0 item-2">
                    <Fade right delay={800} ssrReveal>
                        <div className="p-20 w3-card-4 float-right hide">
                            <h1 className="m-b-10 header-2-light">{header}</h1>
                            <p className="m-b-20 content-1-light">{content}</p>
                            <div className="btn-container">
                                <button className="btn btn-light f-m-18">VIŠE</button>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </Fade>
    );
};

export default Section5;
