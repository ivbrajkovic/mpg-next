// Section6.js

import Fade from 'react-reveal/Fade';

const Section6 = ({ lang, odjel, data, onChangeOdjel }) => {
    // const titles = data ? data : [];

    const changeOdjel = value => onChangeOdjel(value);

    return (
        <Fade cascade>
            <section
                style={{ minHeight: 100 }}
                className="container m-t-xs-20-xl-40 gap-xs-20-xl-30 section-6"
            >
                {data[lang] &&
                    data[lang].map((title, index) => {
                        return (
                            <div
                                className={`header-3 m-0 w3-card-4 menu-item${
                                    odjel == index ? ' active' : ''
                                }`}
                                key={index}
                                onClick={() => changeOdjel(index)}
                            >
                                {title}
                            </div>
                        );
                    })}
            </section>
        </Fade>
    );
};

export default Section6;
