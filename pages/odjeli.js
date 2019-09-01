// import fetch from 'isomorphic-unfetch';
// import Layout from '../components/Layout.js';
import Hero from '../components/Hero';
import Section6 from '../components/Odjeli/Section6';
import Section7 from '../components/Odjeli/Section7';

// import '../scss/style.scss';

// const banner = {
//     small: 'https://via.placeholder.com/575x500',
//     medium: 'https://via.placeholder.com/991x500',
//     large: 'https://via.placeholder.com/1199x500',
//     xlarge: 'https://via.placeholder.com/1600x500'
// };

import { PureComponent } from 'react';

export default class Odjeli extends PureComponent {
    state = {
        current: 0
    };

    // static async getInitialProps({ req }) {
    //     return { page: '/odjeli' };
    // }
    changeOdjel = value => {
        if (this.props.data.odjeli[value])
            this.setState({
                current: value
            });
        else alert('Odjel nije u zapisima.');
    };

    i = 0;
    render() {
        console.log('TCL: Odjeli -> render: ', ++this.i);
        // console.log('TCL: Odjeli -> this.props', this.props.data);

        const { data } = this.props;
        const { current } = this.state;

        if (!data) return <h1>Error, no data.</h1>;

        // if (data.banner)
        return (
            <>
                <Hero banner={data.banner[0]} />
                <Section6
                    current={current}
                    titles={data.section1}
                    onChangeOdjel={this.changeOdjel}
                />
                <Section7 odjel={data.odjeli[current]} />
                'This is odjeli.html';
            </>
        );
        return <h1>Loading</h1>;
    }
}

// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();

//     console.log(`Show data fetched. Count: ${data.length}`);

//     return {
//         shows: data.map(entry => entry.show)
//     };
// };
