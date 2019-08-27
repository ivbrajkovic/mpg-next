// import fetch from 'isomorphic-unfetch';
// import Layout from '../components/Layout.js';
import Hero from '../components/Hero';
import Section1 from '../components/Section-1';
import Section2 from '../components/Section-2';
import Section3 from '../components/Section-3';
import Section4 from '../components/Section-4';
import Section5 from '../components/Section-5';

// import '../scss/style.scss';

const banner1 = {
    small: 'https://via.placeholder.com/575x500',
    medium: 'https://via.placeholder.com/991x500',
    large: 'https://via.placeholder.com/1199x500',
    xlarge: 'https://via.placeholder.com/1600x500'
};

const banner2 = {
    small: 'https://via.placeholder.com/575x500',
    medium: 'https://via.placeholder.com/991x500',
    large: 'https://via.placeholder.com/1199x500',
    xlarge: 'https://via.placeholder.com/1600x500'
};

import React, { Component } from 'react';

export default class index extends Component {
    btns = [];

    componentDidMount = () => {
        ripplet.defaultOptions.color = 'rgba(255, 255, 255, .2)';
        this.btns = document.querySelectorAll('.btn');
        // const btns = document.querySelectorAll('.btn');
        this.btns.forEach(btn => {
            btn.addEventListener('mousedown', ripplet);
        });
    };

    componentWillUnmount() {
        this.btns.forEach(btn => {
            btn.removeEventListener('mousedown', ripplet);
        });
    }

    render() {
        return (
            <div>
                <Hero title={''} banner={banner1} />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 banner={banner1} />
            </div>
        );
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

// export default Index;
