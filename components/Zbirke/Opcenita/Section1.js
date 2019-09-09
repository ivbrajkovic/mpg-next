// Zbirke - Opcenita - Section 1

const Section1 = ({ data }) => {
    return (
        <div className="zbirke__section-1">
            <div className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30 justify-xs-center-l-left grid-xs-1fr-l-3fr">
                <div className="item-1">
                    <div className="header">
                        {data.header &&
                            data.header.map &&
                            data.header.map((item, index) => <p key={index}>{item}</p>)}
                    </div>
                </div>
                <div className="item-2">
                    <div className="content-1">
                        <p>{data.content && data.content[0]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
