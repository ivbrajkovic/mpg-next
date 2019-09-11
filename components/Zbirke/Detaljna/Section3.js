// Zbirke - Detaljna - Section 3

const Section3 = ({ data }) => {
    return (
        <div className="m-t-xs-20-xl-40 zbirke-detalji__section-3">
            <div className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30 justify-xs-center-l-left grid-xs-1fr-l-3fr">
                {data.map &&
                    data.map((item, index) => (
                        <div key={index} className="w3-card-4">
                            <img src={item} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Section3;
