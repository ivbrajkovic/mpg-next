const Section1 = props => {
    // console.log('TCL: props', props);
    return (
        <section className="container m-t-xs-20-xl-40 text-center section-1">
            <div className="w3-card-4 d-grid">
                <div className="item-1">
                    <img className="img-flex" src="/static/img/post/post-big.png" />
                </div>
                <article className="item-2">
                    <h2 className="p-0-20 f-xs-18 post-title content-1-light">
                        Lorem ipsum dolor sit.
                    </h2>
                    <section className="p-20">
                        <h1 className="f-xs-32 f-m-22 f-l-30 f-xl-36 header-1">
                            {props.content.header}
                        </h1>
                        <p className="f-xs-18 content-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
                            delectus praesentium, amet necessitatibus obcaecati doloremque odio
                            harum deleniti officiis, quod nesciunt rem
                        </p>
                    </section>
                </article>
            </div>
        </section>
    );
};

export default Section1;
