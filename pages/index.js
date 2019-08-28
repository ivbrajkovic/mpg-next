import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
// import Layout from '../components/Layout.js';
import Hero from '../components/Hero';
import fetchDataAsync from '../lib/fetchDataAsync';

import Section1 from '../components/Section-1';
import Section2 from '../components/Section-2';
import Section3 from '../components/Section-3';
import Section4 from '../components/Section-4';
import Section5 from '../components/Section-5';

// import '../scss/style.scss';

// const banner1 = {
//     small: 'https://via.placeholder.com/575x500',
//     medium: 'https://via.placeholder.com/991x500',
//     large: 'https://via.placeholder.com/1199x500',
//     xlarge: 'https://via.placeholder.com/1600x500'
// };

// const banner2 = {
//     small: 'https://via.placeholder.com/575x500',
//     medium: 'https://via.placeholder.com/991x500',
//     large: 'https://via.placeholder.com/1199x500',
//     xlarge: 'https://via.placeholder.com/1600x500'
// };

// let textData = {};
// async function fetchDataAsync(language) {
//     try {
//         const res = await fetch(`http://127.0.0.1:3000/api/index/${language}`);
//         const data = await res.json();
//         return { data: data };
//         // this.setState({ data: data });
//     } catch (err) {
//         return { err };
//         // this.setState({ data: { error: `rror in fetching data ${err}` } });
//     }
// }

export default class index extends Component {
    state = {
        loading: false,
        language: 'hr'
    };
    btns = [];

    static async getInitialProps({ req }) {
        let data = await fetchDataAsync(req, 'en');
        return data;
    }

    fetchData = language => {
        this.setState({ loading: true });

        fetch(`/api/index/${language}`)
            .then(res => res.json())
            .then(data => {
                //this.setState({ content: data });
                //this.textData = data;
                // console.log('TCL: index fetchData -> textData', this.textData);
                this.setState({
                    loading: false,
                    data: data
                });
            })
            .catch(err => console.log(`fetch error: ${err}`));
    };

    componentDidMount = () => {
        // this.fetchData('hr');

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
        // let loading = this.state.loading;
        console.log('TCL: pages -> index -> render');

        // if (loading) return <h2>Loading...</h2>;
        // return <h2>{this.state.loading ? 'loading...' : 'not loading'}</h2>;
        // else
        // let banner = this.props.data.banner.first;
        return (
            <div>
                <Hero title={'test'} banner={this.props.data.banner.first} />
                <Section1 content={this.props.data.section1} />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 banner={this.props.data.banner.second} />
            </div>
        );
        // return null;
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
