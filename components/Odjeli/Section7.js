// Section7.js

// import OdjelItem from './OdjelItem';

const Section7 = ({ odjel }) => {
    return (
        <div className="container m-t-xs-20-xl-40 section-7">
            {/* <OdjelItem odjel={odjel} /> */}
            {odjel &&
                odjel.map((item, index) => {
                    return (
                        <div className="menu-item w3-card-4" key={index}>
                            <img className="img-cover" src={item.src} alt="" />
                            <div className="header-3 m-0">{item.title}</div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Section7;
