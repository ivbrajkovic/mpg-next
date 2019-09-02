// Section3.js

const Section3 = ({ lang, data }) => (
    <section className="m-t-xs-20-xl-40 p-20-0 w3-card-4 text-center section-3">
        <div className="container d-grid">
            {data &&
                data.map((item, index) => {
                    return (
                        <article className="post-info" key={index}>
                            <header className="m-b-10">
                                <img src={item.src} />
                                <h1 className="d-inl-blok header-4">
                                    {item[lang] && item[lang].header}
                                </h1>
                            </header>
                            <p className="m-b-10 content-3 f-xl-22">
                                {item[lang] && item[lang].content1}
                            </p>
                            <p className="content-4">{item[lang] && item[lang].content2}</p>
                        </article>
                    );
                })}
        </div>
    </section>
);

export default Section3;
