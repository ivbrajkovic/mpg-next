import { PureComponent } from 'react';
import Hero from '../components/Hero';
import Section6 from '../components/Odjeli/Section6';
import Section7 from '../components/Odjeli/Section7';

const banners = [
    {
        small: 'static/img/banner/baner-odjeli-768px.jpg',
        medium: 'static/img/banner/baner-odjeli-1200px.jpg',
        large: 'static/img/banner/baner-odjeli-1200px.jpg',
        xlarge: '/static/img/banner/baner-odjeli.jpg'
    }
];

export default class Odjeli extends PureComponent {
    state = {
        odjel: 0
    };

    submenuItems = null;

    componentDidMount = () => {
        this.submenuItems = document.querySelectorAll(
            '#navbar .submenu--2-list .nav_submenu-items'
        );
        this.submenuItems &&
            this.submenuItems.forEach((item, index) => {
                item.keyIndex = index;
                item.addEventListener('click', this.onSubmenuItemClick);
            });
    };

    componentWillUnmount = () => {
        this.submenuItems &&
            this.submenuItems.forEach((item, index) => {
                item.removeEventListener('click', this.onSubmenuItemClick);
            });

        document.removeEventListener;
    };

    onSubmenuItemClick = e => {
        this.changeOdjel(e.srcElement.keyIndex);
    };

    changeOdjel = value => {
        // console.log('TCL: Odjeli -> value', value);
        if (this.props.data.section7[value])
            this.setState({
                odjel: value
            });
        else alert('Odjel nije u zapisima.');
    };

    i = 0;
    render() {
        console.log('TCL: Odjeli -> render: ', ++this.i);
        // console.log('TCL: Odjeli -> render -> this.props.lang:', this.props.lang);
        // console.log('TCL: Odjeli -> render -> this.props.data', this.props.data);

        const lang = this.props.lang;
        const { odjel } = this.state;

        const data = this.props.data ? this.props.data : {};
        const hero = data.hero && data.hero[lang] ? data.hero[lang] : [];
        const section6 = data.section6 ? data.section6 : {};
        const section7 = data.section7 && data.section7[odjel] ? data.section7[odjel] : [];

        return (
            <>
                <Hero title={hero[0]} banner={banners[0]} />
                <Section6
                    lang={lang}
                    odjel={odjel}
                    data={section6}
                    onChangeOdjel={this.changeOdjel}
                />
                <Section7 lang={lang} data={section7} />
            </>
        );
    }
}
