// Section1.js

const Section1 = ({ data }) => {
    const title = data && data.title;
    const header = data && data.header;
    const content1 = data && data.content1;
    const src = '/static/img/post/post-big.png';
    // console.log('TCL: (src, title, header, content1:)', src, title, header, content1);

    return (
        <section className="container m-t-xs-20-xl-40 text-center section-1">
            <div className="w3-card-4 d-grid">
                <div className="item-1">
                    <img className="img-flex" src={src} />
                </div>
                <article className="item-2">
                    <h2 className="p-0-20 f-xs-18 post-title content-1-light">{title}</h2>
                    <section className="p-20">
                        <h1 className="f-xs-32 f-m-22 f-l-30 f-xl-36 header-1">{header}</h1>
                        <p className="f-xs-18 content-1">{content1}</p>
                    </section>
                </article>
            </div>
        </section>
    );
};

export default Section1;
