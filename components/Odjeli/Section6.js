// Section6.js

const Section6 = ({ current, data, onChangeOdjel }) => {
    // const titles = data ? data : [];

    const changeOdjel = value => onChangeOdjel(value);

    return (
        <section className="container m-t-xs-20-xl-40 section-6">
            {data &&
                data.map((title, index) => {
                    return (
                        <div
                            className={`header-3 m-0 w3-card-4 menu-item${
                                current == index ? ' active' : ''
                            }`}
                            key={index}
                            onClick={() => changeOdjel(index)}
                        >
                            {title}
                        </div>
                    );
                })}
        </section>
    );
};

export default Section6;
