import { PureComponent } from 'react';
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

export default class index extends PureComponent {
    buttons = null;

    componentDidMount = () => {
        ripplet.defaultOptions.color = 'rgba(255, 255, 255, .2)';
        this.buttons = document.querySelectorAll('.btn');
        this.buttons &&
            this.buttons.forEach(btn => {
                btn.addEventListener('mousedown', ripplet);
            });
    };

    componentWillUnmount() {
        this.buttons &&
            this.buttons.forEach(btn => {
                btn.removeEventListener('mousedown', ripplet);
            });
    }

    i = 0;
    render() {
        console.log('TCL: index -> render: ', ++this.i);
        // console.log('TCL: index -> render -> this.props.lang:', this.props.lang);
        // console.log('TCL: index -> render -> this.props.data', this.props.data);

        const lang = this.props.lang;

        const data = this.props.data ? this.props.data : {};
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
    }
}
