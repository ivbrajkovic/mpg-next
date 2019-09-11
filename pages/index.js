// Home page

import { useEffect } from 'react';
// import { Transition } from 'react-transition-group';
// import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

import fetchDataAsync from '../lib/fetchDataAsync';

// import Hero from '../components/Hero';
import Section1 from '../components/Index/Section1';
import Section2 from '../components/Index/Section2';
import Section3 from '../components/Index/Section3';
import Section4 from '../components/Index/Section4';
import Section5 from '../components/Index/Section5';

// const folder = '/static/img/pocetna/';
// const srcset = ['baner-pocetna-1200px.jpg', 'baner-pocetna-1200px.jpg', 'baner-pocetna.jpg'];
// const hero = {};
// hero.srcset = srcset.map(src => folder + src);

const Index = props => {
    let buttons = null;

    // const duration = 300;
    // const defaultStyle = {
    //     transition: `opacity ${duration}ms ease-in-out`,
    //     opacity: 0
    // };

    // const transitionStyles = {
    //     entering: { opacity: 1 },
    //     entered: { opacity: 1 },
    //     exiting: { opacity: 0 },
    //     exited: { opacity: 0 }
    // };

    useEffect(() => {
        ripplet.defaultOptions.color = 'rgba(255, 255, 255, .2)';
        buttons = document.querySelectorAll('.btn');
        console.log('TCL: buttons', buttons);
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
    const data = (props.success && props.data) || [];
    const folder = (data && data.folder) || '';
    // hero.title = (data && data.hero && data.hero[lang]) || '';

    const section1 = data.section1 ? data.section1 : [];
    const section2 = data.section2 ? data.section2 : [];
    const section3 = data.section3 ? data.section3 : [];
    const section4 = data.section4 ? data.section4 : {};
    const section5 = data.section5 ? data.section5 : {};

    // section4 && (section4.slides = (data && data.slides) || []);

    return (
        // <Transition in={inProp} timeout={duration} mountOnEnter unmountOnExit>
        <>
            {/* <Hero data={hero} /> */}
            <Section1 lang={lang} folder={folder} data={section1} />
            <Section2 lang={lang} folder={folder} data={section2} />
            <Section3 lang={lang} folder={folder} data={section3} />
            <Section4 lang={lang} folder={folder} data={section4} />
            <Section5 lang={lang} folder={folder} data={section5} />
        </>
        // </Transition>
    );
};

Index.getInitialProps = async function(context) {
    const data = await fetchDataAsync(context, 'index');
    return data;
};

export default Index;
