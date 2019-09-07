import { useEffect, useState } from 'react';
import fetchDataAsync from '../lib/fetchDataAsync';

import Hero from '../components/Hero';
import Section6 from '../components/Odjeli/Section6';
import Section7 from '../components/Odjeli/Section7';
// import Section7gsap from '../components/Odjeli/Section7gsap';

const banners = [
    'static/img/odjeli/baner-odjeli-768px.jpg',
    'static/img/odjeli/baner-odjeli-1200px.jpg',
    'static/img/odjeli/baner-odjeli-1200px.jpg',
    'static/img/odjeli/baner-odjeli.jpg'
];

const Odjel = props => {
    const [odjel, setOdjel] = useState(props.odjel);
    let submenuItems = null;

    useEffect(() => {
        submenuItems = document.querySelectorAll('#navbar .submenu--2-list .nav_submenu-items');
        submenuItems &&
            submenuItems.forEach((item, index) => {
                item.keyIndex = index;
                item.addEventListener('click', onSubmenuItemClick);
            });

        return () => {
            submenuItems &&
                submenuItems.forEach((item, index) => {
                    item.removeEventListener('click', onSubmenuItemClick);
                });
            // document.removeEventListener;
        };
    }, []);

    const onSubmenuItemClick = e => {
        changeOdjel(e.srcElement.keyIndex);
    };

    const changeOdjel = value => {
        // console.log('TCL: Odjeli -> value', value);

        console.log('TCL: props.data', props.data);
        if (props.data.data['odjeli'].section7[value]) setOdjel(value);
        else alert('Odjel nije u zapisima.');
    };

    let i = 0;
    console.log('TCL: Odjeli -> render: ', ++i);
    // console.log('TCL: Odjeli -> render -> this.props.lang:', this.props.lang);
    // console.log('TCL: Odjeli -> render -> this.props.data', this.props.data);

    const lang = props.lang;
    const data = props.data && props.data.success ? props.data.data['odjeli'] : [];
    console.log('TCL: Odjel -> data', data);
    const hero = data.hero && data.hero[lang] ? data.hero[lang] : [];
    const section6 = data.section6 ? data.section6 : {};
    const section7 = data.section7 && data.section7[odjel] ? data.section7[odjel] : [];

    // if (!this.props.loading)
    return (
        <>
            <Hero title={hero[0]} banner={banners} />
            <Section6 lang={lang} odjel={odjel} data={section6} onChangeOdjel={changeOdjel} />
            <Section7 lang={lang} data={section7} />
        </>
    );
    // else return <h1>Loading ...</h1>;
};

Odjel.getInitialProps = async function({ req }) {
    const data = await fetchDataAsync(req, 'odjeli');
    return data;
};

export default Odjel;
