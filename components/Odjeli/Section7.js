// Section7.js

import { useState } from 'react';
// import OdjelItem from './OdjelItem';

const Section7 = ({ lang, data }) => {
    const [fadeInBottom, setFadeInBottom] = useState(false);
    let imagesLoaded = 0;
    let itemsCount = 0;

    const onImageLoad = e => {
        // console.log('TCL: imageLoaded -> e', e.target);
        // e.target.parentElement.style.animationDelay = `${delay}ms`;

        if (itemsCount === ++imagesLoaded) {
            // console.log('Num of menu-item images: ', imagesLoaded);
            for (let index = 0; index < itemsCount; index++) {
                const element = document.getElementById(`odjeli-menu-item-${index}`);
                if (element) element.style.animationDelay = `${index * 100}ms`;
            }
            setFadeInBottom(true);
        }
    };

    return (
        // <div className={`container m-t-xs-20-xl-40 section-7 ${hidden ? ' hidden' : ''}`}>
        <div
            className={`container m-t-xs-20-xl-40 section-7${
                fadeInBottom ? ' fade-in-bottom' : ''
            }`}
        >
            {data.map((item, index) => {
                itemsCount++;
                return (
                    // <OdjelItem
                    //     lang={lang}
                    //     item={item}
                    //     key={index}
                    //     index={index}
                    //     placeholder={'https://via.placeholder.com/350x350'}
                    //     onImageLoaded={incrementCount}
                    // />
                    <div
                        id={`odjeli-menu-item-${index}`}
                        className="menu-item w3-card-4"
                        key={index}
                    >
                        <img className="img-cover" src={item.src} onLoad={e => onImageLoad(e)} />
                        <div className="header-3 m-0">{item[lang]}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Section7;
