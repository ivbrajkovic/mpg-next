// Zbirke - Opcenita - Section 3

import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const Section3 = ({ name, folder, data }) => {
    return (
        <div className="zbirke__section-3">
            <div className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30">
                <Fade cascsade ssrReveal>
                    {data.map &&
                        data.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    href="/zbirke/[zbirke]/[detalji]"
                                    as={`/zbirke/${name}/${item.id}`}
                                >
                                    <div key={index} className="w3-card-4">
                                        <img src={folder + item.src} />
                                    </div>
                                </Link>
                            );
                        })}
                </Fade>
            </div>
        </div>
    );
};

export default Section3;
