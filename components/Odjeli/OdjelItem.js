// OdjelItem.js

// import { useRef } from 'react';

const OdjelItem = ({ lang, item, id, placeholder, onImageLoaded }) => {
    // console.log('TCL: OdjelItem -> menuItem', menuItem);

    function onload(id) {
        onImageLoaded();
        // console.log('TCL: onload -> index', id);
        // const el = document.getElementById(id);
        // if (el) {
        //     el.style.visibility = 'visible';
        //     el.style.opacity = '1';
        //     el.style.transition = 'opacity 1s ease-out';
        // }
    }

    // setInterval(() => {
    //     console.log('TCL: OdjelItem -> menuItem', menuItem);
    // }, 1000);
    // menuItem.current.getElementById('w');

    // const show = {
    //     visibility: 'visible',
    //     opacity: 1,
    //     transition: 'opacity 1s ease-out'
    // };

    // const hide = {
    //     visibility: 'hidden',
    //     opacity: 0
    //     transition: 'visibility 0s 2s, opacity 2s linear'
    // };

    // const id = `odjeli-menu-item-${index}`;

    return (
        <div id={id} style={hide} className="menu-item w3-card-4">
            {/* <img className="img-cover" src={item.src} /> */}
            <img className="img-cover" src={item.src} onLoad={() => onload(id)} />
            <div className="header-3 m-0">{item[lang]}</div>
        </div>
    );
};

export default OdjelItem;
