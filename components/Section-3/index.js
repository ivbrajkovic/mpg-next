// Section3.js

const Section3 = props => (
    <section className="m-t-xs-20-xl-40 p-20-0 w3-card-4 text-center section-3">
        <div className="container d-grid">
            {props.content.map((v, i) => {
                return (
                    <article className="post-info" key={i}>
                        <header className="m-b-10">
                            <img src={v.src} />
                            <h1 className="d-inl-blok header-4">{v.header}</h1>
                        </header>
                        <p className="m-b-10 content-3 f-xl-22">{v.content1}</p>
                        <p className="content-4">{v.content2}</p>
                    </article>
                );
            })}
        </div>
    </section>
);

export default Section3;
