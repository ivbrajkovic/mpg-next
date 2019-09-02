// OdjelItem.js

const OdjelItem = ({ odjel }) => {
    // switch (current) {
    //     case 0:
    //         return <h1>Odjel 1</h1>;
    //     case 1:
    //         return <h1>Odjel 2</h1>;
    //     case 2:
    //         return <h1>Odjel 3</h1>;
    // }

    return (
        odjel &&
        odjel.map((item, index) => {
            return (
                <div class="menu-item w3-card-4" key={index}>
                    <img class="img-cover" src={item.src} alt="" srcset="" />
                    <div class="header-3 m-0">{item.title}</div>
                </div>
            );
        })
    );
};

export default OdjelItem;
