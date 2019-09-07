import { useEffect } from 'react';
// import fetch from 'isomorphic-unfetch';
import fetchDataAsync from '../lib/fetchDataAsync';

import Hero from '../components/Hero';
import Section1 from '../components/Index/Section1';
import Section2 from '../components/Index/Section2';
import Section3 from '../components/Index/Section3';
import Section4 from '../components/Index/Section4';
import Section5 from '../components/Index/Section5';

const banner1 = [
    'static/img/pocetna/baner-pocetna-768px.jpg',
    'static/img/pocetna/baner-pocetna-1200px.jpg',
    'static/img/pocetna/baner-pocetna-1200px.jpg',
    'static/img/pocetna/baner-pocetna.jpg'
];

const banner2 = [
    'static/img/pocetna/baner-pocetna-okastelu.jpg',
    'static/img/pocetna/baner-pocetna-okastelu.jpg',
    'static/img/pocetna/baner-pocetna-okastelu.jpg',
    'static/img/pocetna/baner-pocetna-okastelu.jpg'
];

const Index = props => {
    let buttons = null;

    useEffect(() => {
        ripplet.defaultOptions.color = 'rgba(255, 255, 255, .2)';
        buttons = document.querySelectorAll('.btn');
        buttons &&
            buttons.forEach(btn => {
                btn.addEventListener('mousedown', ripplet);
            });
        return () => {
            buttons &&
                buttons.forEach(btn => {
                    btn.removeEventListener('mousedown', ripplet);
                });
        };
    }, []);

    let i = 0;
    console.log('TCL: Index -> render: ', ++i);

    const lang = props.lang;
    const data = props.data && props.data.success ? props.data.data['index'] : [];
    const hero = data.hero && data.hero[lang] ? data.hero[lang] : [];
    const section1 = data.section1 ? data.section1 : [];
    const section2 = data.section2 ? data.section2 : [];
    const section3 = data.section3 ? data.section3 : [];
    const section4 = data.section4 ? data.section4 : {};
    const section5 = data.section5 ? data.section5 : {};

    return (
        <div>
            <Hero title={hero[0]} banner={banner1} />
            <Section1 lang={lang} data={section1} />
            <Section2 lang={lang} data={section2} />
            <Section3 lang={lang} data={section3} />
            <Section4 lang={lang} data={section4} />
            <Section5 lang={lang} data={section5} banner={banner2} />
        </div>
    );
};

Index.getInitialProps = async function({ req }) {
    const data = await fetchDataAsync(req, 'index');
    return data;
};

export default Index;
