// Zbirke - Opcenita - Section 3

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import preloadImages from '../../../lib/preloadImages';
import Link from 'next/link';
// import Fade from 'react-reveal/Fade';

const DELAY = 50;

const Section3 = ({ name, folder, data }) => {
    const [grid, setGrid] = useState([]);
    const firstRef = useRef(true);
    const gridRef = useRef();

    // Wait for preload images
    useLayoutEffect(() => {
        let imgs = [];
        for (let i = 0; i < data.length; i++) {
            imgs.push(`${folder}${data[i].src}`);
        }

        preloadImages(imgs)
            .then(() => setGrid(data))
            .catch(err => console.log('TCL: Section7 -> loadImages -> err():', err));
    }, [data]);

    // When grid change add transition in effect
    useEffect(() => {
        if (!firstRef.current) gridRef.current.classList.add('fade-bottom-active');
        else firstRef.current = false;
    }, [grid]);

    return (
        <div className="zbirke__section-3">
            <div ref={gridRef} className="m-t-xs-20-xl-40 d-grid gap-xs-20-xl-30 fade-bottom">
                {/* <Fade delay={250} mountOnEnter={true} appear={true} cascsade ssrReveal> */}
                {grid.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            href="/zbirke/[zbirke]/[detalji]"
                            as={`/zbirke/${name}/${item.id}`}
                        >
                            <div style={{ transitionDelay: `${index * DELAY}ms` }}>
                                <div className="w3-card-4 expand-on-hover">
                                    <img src={folder + item.src} />
                                </div>
                            </div>
                        </Link>
                    );
                })}
                {/* </Fade> */}
            </div>
        </div>
    );
};

export default Section3;
