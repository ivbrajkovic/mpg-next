// Zbirke - Opcenita - Section 2

const Section2 = ({ data }) => {
    return (
        <div className="zbirke__section-2">
            <div className="content-1">
                {data.map &&
                    data.map((item, index) => {
                        if (item.startsWith('- ')) return <ul key={index}>{item}</ul>;
                        else return <p key={index}>{item}</p>;
                    })}
            </div>
        </div>
    );
};

export default Section2;
