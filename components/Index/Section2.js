// Section2.js

const Section2 = ({ lang, data }) => (
    <section className="container m-t-xs-20-xl-40 gap-xs-20-x-l40 d-grid text-center section-2">
        {data &&
            data.map((item, index) => {
                return (
                    <article className="w3-card-4 post" key={index}>
                        <img className="img-flex" src={item.src} />
                        <h2 className="p-0-20 content-2 post-title content-1-light">
                            {item[lang] && item[lang].title}
                        </h2>
                        <section className="p-20">
                            <h1 className="header-3">{item[lang] && item[lang].header}</h1>
                            <p className="content-2">{item[lang] && item[lang].content}</p>
                        </section>
                    </article>
                );
            })}
    </section>
);

export default Section2;
