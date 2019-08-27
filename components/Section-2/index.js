const data = [
    {
        src: '/static/img/post/post-1.png',
        title: 'Lorem ipsum dolor',
        header: 'Lorem ipsum dolor',
        content1:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae iste eligendi voluptatum',
        content2: ''
    },
    {
        src: '/static/img/post/post-1.png',
        title: 'Lorem ipsum dolor',
        header: 'Lorem ipsum dolor',
        content1:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae iste eligendi voluptatum',
        content2: ''
    },
    {
        src: '/static/img/post/post-1.png',
        title: 'Lorem ipsum dolor',
        header: 'Lorem ipsum dolor',
        content1:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae iste eligendi voluptatum',
        content2: ''
    }
];

const Section2 = props => {
    return (
        <section className="container m-t-xs-20-xl-40 gap-xs-20-x-l40 d-grid text-center section-2">
            {data.map((v, i) => {
                return (
                    <article className="w3-card-4 post" key={i}>
                        <img className="img-flex" src={v.src} />
                        <h2 className="p-0-20 content-2 post-title content-1-light">{v.title}</h2>
                        <section className="p-20">
                            <h1 className="header-3">{v.header}</h1>
                            <p className="content-2">{v.content1}</p>
                        </section>
                    </article>
                );
            })}
        </section>
    );
};

export default Section2;
