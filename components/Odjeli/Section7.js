// Section7.js

import { useState, useEffect, useLayoutEffect } from 'react';
// import Zoom from 'react-reveal/Zoom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import Fade from 'react-reveal/Fade';

import Link from 'next/link';
import preloadImages from '../../lib/preloadImages.js';

import './style.scss';

// const PostLink = props => (
//     <div>
//         <Link href={`/zbirke?id=${props.id}`}>
//             <a>{props.id}</a>
//         </Link>
//     </div>
// );

const Section7 = ({ lang, odjel, data }) => {
    const groupProps = {
        appear: true,
        enter: true,
        exit: false
    };

    const [grid, setGrid] = useState([[]]);
    // const [show, setShow] = useState(true);

    // const gridRef = useRef();

    const DELAY = 50;
    const TIMEOUT = 1000;
    // const DURATION = 450;
    const FOLDER = '/static/img/odjeli/';

    const loadImages = data => {
        let imgs = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                imgs.push(`${FOLDER}${data[i][j].src}`);
            }
        }

        console.log('TCL: imgs', imgs);

        preloadImages(imgs)
            .then(() => {
                setGrid(data);
                // setTimeout(() => setShow(true), 10);
            })
            .catch(err => console.log('TCL: Section7 -> loadImages -> err():', err));
    };

    useLayoutEffect(() => {
        loadImages(data);
    }, []);

    // useLayoutEffect(() => {
    //     if (data.length > 0) {
    //         setShow(false);
    //         setTimeout(() => loadImages(data), grid.length * DELAY + DURATION);
    //     }
    // }, [data]);

    // useLayoutEffect(() => {
    //     if (grid.length > 0) setGrid([]);
    //     // setTimeout(() => setGrid(data), 10);
    //     // return () => {
    //     //     cleanup
    //     // };
    // }, [data]);

    // useEffect(() => {
    //     loadImages(data);
    // }, [odjel]);

    // useEffect(() => {
    //     setTimeout(() => setGrid(data), 1000);
    // }, [data]);

    // <div
    //     // ref={gridRef}
    //     className={`container m-t-xs-20-xl-40 gap-xs-20-xl-30 odjeli__section-7`}
    //     // className={`container m-t-xs-20-xl-40 gap-xs-20-xl-30 odjeli__section-7${
    //     //     show ? '' : ' hide'
    //     // }`}
    // ></div>

    // <Fade cascade delay={100}>
    return (
        <div
        // ref={gridRef}
        // className={`container m-t-xs-20-xl-40 gap-xs-20-xl-30 odjeli__section-7__menu`}
        // className={`container m-t-xs-20-xl-40 gap-xs-20-xl-30 odjeli__section-7${
        //     show ? '' : ' hide'
        // }`}
        >
            <TransitionGroup
                {...groupProps}
                className={`container m-t-xs-20-xl-40 gap-xs-20-xl-30 odjeli__section-7__menu`}
            >
                {grid[odjel].map((item, index) => {
                    return (
                        // <Link key={index} href={`/zbirke?id=${item.id}`}>
                        // <Link
                        //     key={index}
                        //     href={{ pathname: '/zbirke', query: { id: item.id } }}
                        //     as={`/zbirke/${item.id}`}
                        // >
                        // <Fade key={item.src} className="menu-item w3-card-4">
                        <CSSTransition
                            // appear
                            // mountOnEnter
                            // unmountOnExit
                            key={item.src}
                            timeout={TIMEOUT}
                            classNames="fade"
                        >
                            <div
                                key={item.src}
                                style={{ transitionDelay: `${index * DELAY}ms` }}
                                className="w3-card-4 odjeli__section-7__menu-item"
                            >
                                <Link href="/zbirke/[id]" as={`/zbirke/${item.id}`}>
                                    <div>
                                        <img className="img-cover" src={FOLDER + item.src} />
                                        <div className="header-3 m-0">{item[lang]}</div>
                                    </div>
                                </Link>
                            </div>
                        </CSSTransition>
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
            </TransitionGroup>
        </div>
    );
};

export default Section7;
