// Section7.js

import { useState, useEffect } from 'react';
import Link from 'next/link';
import preloadImages from '../../lib/preloadImages.js';
import './style.scss';

const PostLink = props => (
    <div>
        <Link href={`/zbirke?id=${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </div>
);

const Section7 = ({ lang, data }) => {
    const [grid, setGrid] = useState(data);
    const [show, setShow] = useState(true);

    // const gridRef = useRef();

    const DELAY = 50;
    const DURATION = 350;

    const loadImages = data => {
        preloadImages(data || [])
            .then(() => {
                setGrid(data);
                setTimeout(() => setShow(true), 10);
            })
            .catch(err => console.log('TCL: Section7 -> loadImages -> err():', err));
    };

    useEffect(() => {
        if (data.length > 0) {
            setShow(false);
            setTimeout(() => loadImages(data), grid.length * DELAY + DURATION);
        }
    }, [data]);

    return (
        <div
            // ref={gridRef}
            className={`container m-t-xs-20-xl-40 gap-xs-20-xl-30 section-7${show ? '' : ' hide'}`}
        >
            {grid &&
                grid.map((item, index) => {
                    return (
                        // <Link key={index} href={`/zbirke?id=${item.id}`}>
                        <Link key={index} href="/zbirke/[id]" as={`/zbirke/${item.id}`}>
                            <div
                                style={{ transitionDelay: `${index * DELAY}ms` }}
                                className="menu-item w3-card-4"
                            >
                                <img className="img-cover" src={item.src} />
                                <div className="header-3 m-0">{item[lang]}</div>
                            </div>
                        </Link>

                        // <div
                        //     key={index}
                        //     style={{ transitionDelay: `${index * DELAY}ms` }}
                        //     className="menu-item w3-card-4"
                        // >
                        //     <img className="img-cover" src={item.src} />
                        //     <div className="header-3 m-0">{item[lang]}</div>
                        // </div>
                    );
                })}
        </div>
    );
};

export default Section7;
