// import fetch from 'isomorphic-unfetch';
// import Layout from '../components/Layout.js';
import Hero from '../components/Hero';
import Section6 from '../components/Section-6';

// import '../scss/style.scss';

const banner = {
    small: 'https://via.placeholder.com/575x500',
    medium: 'https://via.placeholder.com/991x500',
    large: 'https://via.placeholder.com/1199x500',
    xlarge: 'https://via.placeholder.com/1600x500'
};

import React, { Component } from 'react';

export default class Odjeli extends Component {
    static async getInitialProps({ req }) {
        return { page: 'odjeli' };
    }

    i = 0;
    render() {
        console.log('TCL: Odjeli -> render: ', ++this.i);
        // console.log('TCL: Odjeli -> this.props', this.props.text);

        console.log('TCL: render -> this.props', this.props);
        const { text } = this.props;

        if (text.banner)
            return (
                <div>
                    <Hero banner={text.banner.first} />
                    'This is odjeli.html';
                </div>
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
