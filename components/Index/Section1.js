// Section1.js

const Section1 = ({ lang, data }) => {
    const title = data[lang] && data[lang].title;
    const header = data[lang] && data[lang].header;
    const content = data[lang] && data[lang].content;
    const src = '/static/img/pocetna/post-big.png';

    return (
        <section
            style={{ minHeight: 350 }}
            // className={`container m-t-xs-20-xl-40 text-center section-1 hidden${
            className={`container m-t-xs-20-xl-40 text-center section-1${title ? ' fade-in' : ''}`}
        >
            <div className="w3-card-4 d-grid">
                <div className="item-1">
                    <img className="img-flex" src={src} />
                </div>
                <article className="item-2">
                    <h2 className="p-0-20 post-title content-1-light1">{title}</h2>
                    <section className="p-20">
                        <h1 className="header-1">{header}</h1>
                        <p className="content-1">{content}</p>
                    </section>
                </article>
            </div>
        </section>
    );
};

export default Section1;
