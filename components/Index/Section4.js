// section4.js

const Section4 = ({ lang, data }) => {
    const header = data[lang] && data[lang].header;
    const content = data[lang] && data[lang].content;

    const slides = [
        'static/img/pocetna/slider/slider-pocetna-zbirke-1.jpg',
        'static/img/pocetna/slider/slider-pocetna-zbirke-2.jpg',
        'static/img/pocetna/slider/slider-pocetna-zbirke-3.jpg',
        'static/img/pocetna/slider/slider-pocetna-zbirke-4.jpg'
    ];

    return (
        <section className="container m-t-xs-20-xl-40 p-0 text-center section-4">
            <div className="w3-card-4 d-grid">
                <div className="item-1">
                    <img className="img-flex" src={slides[0]} />
                </div>
                <div className="p-20 p-relative d-flex d-column justify-center item-2">
                    <h1 className="header-2">{header}</h1>
                    <p className="content-1">{content}</p>
                    <div className="btn-container">
                        <button className="btn btn-dark f-m-18">VIŠE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
