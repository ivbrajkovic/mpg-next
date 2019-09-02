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
        current: 0
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
        if (this.props.data.odjeli[value])
            this.setState({
                current: value
            });
        else alert('Odjel nije u zapisima.');
    };

    i = 0;
    render() {
        console.log('TCL: Odjeli -> render: ', ++this.i);

        const { current } = this.state;
        const data = this.props.data ? this.props.data : {};
        const odjel = data.odjeli ? data.odjeli[current] : [];
        const title = data.banners ? data.banners[0] : '';

        return (
            <>
                <Hero title={title} banner={banners[0]} />
                <Section6 current={current} data={data.section1} onChangeOdjel={this.changeOdjel} />
                <Section7 odjel={odjel} />
            </>
        );
    }
}
