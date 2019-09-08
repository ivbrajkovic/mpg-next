// Zbirke - Zvona - naslovna

const Zvona = ({ data }) => {
    const mini = (data && data.section3) || [];

    return (
        <div className="container">
            <div className="header"></div>
            <div className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30 justify-xs-center-l-left zbirke-zvona__section-1">
                <div className="item-1">
                    <img
                        className="img-cover"
                        src="/static/img/zbirke/zvona/galerija/1993a.jpg"
                        alt=""
                        srcset=""
                    />
                </div>
                <div className="item-2">
                    <img
                        className="img-cover"
                        src="https://via.placeholder.com/800x600"
                        alt=""
                        srcset=""
                    />
                </div>
            </div>
            <div className="m-t-xs-20-xl-40 zbirke-zvona__section-2">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, placeat
                    earum. Voluptatibus excepturi delectus voluptate temporibus sit ipsam minima
                    necessitatibus modi nisi beatae illum natus consectetur fugiat vitae error,
                    quidem asperiores id odit, accusantium eaque maxime quod nulla eligendi
                    blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit, saepe sit, ipsam commodi similique, beatae blanditiis itaque ut
                    deleniti sunt ratione esse delectus nobis nostrum veritatis quos facere harum
                    cumque? Commodi atque doloremque dicta soluta mollitia voluptatibus qui minus
                    pariatur animi recusandae hic fugit, necessitatibus sit temporibus? Suscipit,
                    ullam delectus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, placeat
                    earum. Voluptatibus excepturi delectus voluptate temporibus sit ipsam minima
                    necessitatibus modi nisi beatae illum natus consectetur fugiat vitae error,
                    quidem asperiores id odit, accusantium eaque maxime quod nulla eligendi
                    blanditiis?
                </p>
            </div>
            <div className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30 justify-xs-center-l-left grid-xs-1fr-l-3fr zbirke-zvona__section-3">
                {mini.map((item, index) => {
                    return (
                        <div>
                            <img src="https://via.placeholder.com/350" alt="" srcset="" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Zvona;
