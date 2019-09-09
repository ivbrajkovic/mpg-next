// Zbirke - Detaljna - Section 2

const Section2 = ({ data }) => {
    return (
        <div className="m-t-xs-20-xl-40 content-1 zbirke-detalji__section-2">
            {data.map && data.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    );
};

export default Section2;
