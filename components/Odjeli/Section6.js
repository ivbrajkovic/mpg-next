// Section6.js

import Fade from 'react-reveal/Fade';

const Section6 = ({ lang, odjel, data, onChangeOdjel }) => {
    // const titles = data ? data : [];

    const changeOdjel = value => onChangeOdjel(value);

    return (
        <Fade cascade ssrReveal>
            <section
                style={{ minHeight: 100 }}
                className="container m-t-xs-20-xl-40 gap-xs-20-xl-30 odjeli__section-6__menu"
            >
                {data[lang] &&
                    data[lang].map((title, index) => {
                        return (
                            <div key={index} className="dummy-needed-for-fade">
                                <div
                                    className={`m-0 header-3 w3-card-4 expand-on-hover odjeli__section-6__menu-item${
                                        odjel == index ? ' active' : ''
                                    }`}
                                    onClick={() => changeOdjel(index)}
                                >
                                    {title}
                                </div>
                            </div>
                        );
                    })}
            </section>
        </Fade>
    );
};

export default Section6;
