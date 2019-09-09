// Zbirke - naslovna

import Link from 'next/link';

const Section1 = ({ lang, data }) => {
    const FOLDER = '/static/img/odjeli/zbirke/mini/';

    const name = (data && data.name) || '';
    const section1 = (data && data.section1 && data.section1[lang]) || [];
    const section2 = (data && data.section2) || [];

    return (
        <div className="container">
            <div className="zbirke__section-1">
                <div className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30 justify-xs-center-l-left grid-xs-1fr-l-3fr">
                    <div className="item-1">
                        <div className="header">
                            {section1.header &&
                                section1.header.map &&
                                section1.header.map((item, index) => <p key={index}>{item}</p>)}
                        </div>
                    </div>
                    <div className="item-2">
                        <div className="content">
                            <p>{section1.content && section1.content[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="zbirke__section-2">
                <div className="content">
                    {section1.content &&
                        section1.content.map &&
                        section1.content.map((item, index) => {
                            if (item.startsWith('- ')) return <ul key={index}>{item}</ul>;
                            else return <p key={index}>{item}</p>;
                        })}
                </div>
            </div>
            <div className="zbirke__section-3">
                <div className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30">
                    {section2.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                href="/zbirke/[zbirke]/[detalji]"
                                as={`/zbirke/${name}/${item.id}`}
                                // as={`/zbirke/detalji/${name}-${index}`}
                            >
                                <div key={index} className="w3-card-4">
                                    <img src={FOLDER + item.src} />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Section1;
