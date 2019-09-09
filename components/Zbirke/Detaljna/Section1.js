// Zbirke - Detaljna - Section 1

const Section2 = ({ title, folder, data }) => {
    return (
        <div className="m-t-xs-20-xl-40 zbirke-detalji__section-1">
            <div className="header-2 header">{title}</div>
            <div className="d-grid gap-xs-20-xl-30 justify-xs-center-l-left">
                <div className="item-1">
                    <img className="img-cover" src={folder + data.pic} />
                </div>
                <div className="item-2">
                    <img className="img-cover" src="https://via.placeholder.com/800x600" />
                </div>
            </div>
        </div>
    );
};

export default Section2;
