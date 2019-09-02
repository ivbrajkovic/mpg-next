import { PureComponent } from 'react';
import Hero from '../components/Hero';
import Section1 from '../components/Index/Section1';
import Section2 from '../components/Index/Section2';
import Section3 from '../components/Index/Section3';
import Section4 from '../components/Index/Section4';
import Section5 from '../components/Index/Section5';

const banners = [
    {
        small: 'static/img/banner/baner-pocetna-768px.jpg',
        medium: 'static/img/banner/baner-pocetna-1200px.jpg',
        large: 'static/img/banner/baner-pocetna-1200px.jpg',
        xlarge: 'static/img/banner/baner-pocetna.jpg'
    },
    {
        small: 'static/img/banner/baner-pocetna-okastelu.jpg',
        medium: 'static/img/banner/baner-pocetna-okastelu.jpg',
        large: 'static/img/banner/baner-pocetna-okastelu.jpg',
        xlarge: 'static/img/banner/baner-pocetna-okastelu.jpg'
    }
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

        const data = this.props.data ? this.props.data : {};

        return (
            <div>
                <Hero title={data.banners ? data.banners[0] : null} banner={banners[0]} />
                <Section1 data={data.section1} />
                <Section2 data={data.section2} />
                <Section3 data={data.section3} />
                <Section4 data={data.section4} />
                <Section5 data={data.section5} banner={banners[1]} />
            </div>
        );
    }
}
