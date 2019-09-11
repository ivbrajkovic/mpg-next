// Section3

import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

const srcs = [
    'static/img/info-lokacija.png',
    'static/img/info-rvrijeme.png',
    'static/img/info-ulaznice.png'
];

const Section3 = ({ lang, data }) => (
    <section className="m-t-xs-20-xl-40 panel-xs-20-l-40 w3-card-4 text-center section-3">
        <Zoom fraction={0.3} cascade ssrReveal>
            <div className="container d-grid">
                {data &&
                    data.map((item, index) => {
                        return (
                            <article className="post-info" key={index}>
                                <header className="m-b-15">
                                    {/* <img src={item.src} /> */}
                                    <img src={srcs[index]} />
                                    <h1 className="d-inl-blok header-4">
                                        {item[lang] && item[lang].header}
                                    </h1>
                                </header>
                                <p className="m-b-10 content-3 f-xl-22">
                                    {item[lang] && item[lang].content1}
                                </p>
                                <p className="m-b-0 content-4">
                                    {item[lang] && item[lang].content2}
                                </p>
                            </article>
                        );
                    })}
            </div>
        </Zoom>
    </section>
);

export default Section3;
