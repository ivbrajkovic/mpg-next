import React, { Component } from 'react';
// import fetch from 'isomorphic-unfetch';
// import fetchDataAsync from '../lib/fetchDataAsync';
// import { LanguageCondata } from '../condatas';

import Hero from '../components/Hero';
import Section1 from '../components/Section-1';
import Section2 from '../components/Section-2';
import Section3 from '../components/Section-3';
import Section4 from '../components/Section-4';
import Section5 from '../components/Section-5';

export default class index extends Component {
    buttons = [];

    // static async getInitialProps() {
    //     return { page: '/index' };
    // }

    componentDidMount = () => {
        ripplet.defaultOptions.color = 'rgba(255, 255, 255, .2)';
        this.buttons = document.querySelectorAll('.btn');
        this.buttons.forEach(btn => {
            btn.addEventListener('mousedown', ripplet);
        });
    };

    componentWillUnmount() {
        this.buttons.forEach(btn => {
            btn.removeEventListener('mousedown', ripplet);
        });
    }

    //shouldComponentUpdate(nextProps, nextState) {
    // console.log('TCL: shouldComponentUpdate -> nextState', nextState);
    // console.log('TCL: shouldComponentUpdate -> nextProps', nextProps);
    // console.log('TCL: index -> shouldComponentUpdate -> language', language);

    // if (this.props.language != nextProps.language) return true;

    // return false;
    //return true;

    // console.log(
    //     'TCL: shouldComponentUpdate -> update is required: ',
    //     this.state.language != nextState.language
    // );
    // return true;
    // console.log('TCL: shouldComponentUpdate -> nextState.language', nextState.language);
    // console.log('TCL: shouldComponentUpdate -> this.state.language', this.state.language);
    // return this.state.language != nextState.language;
    //return true;
    //}

    fetchData = lang => {
        this.setState({ loading: true });

        fetch(`/api/index/${lang}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    loading: false,
                    language: lang,
                    success: true,
                    data: data
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    language: lang,
                    success: false,
                    data: err
                });
                console.log(`fetch error: ${err}`);
            });
    };

    i = 0;
    render() {
        console.log('TCL: index -> render: ', ++this.i);
        // console.log('TCL: index -> this.props', this.props);

        const { data } = this.props;
        if (!data) return <h1>Error, no data.</h1>;

        if (data.banner)
            return (
                <div>
                    {/* <button onClick={() => this.condata.updateLanguage('en')}>test</button> */}
                    <Hero banner={data.banner.first} />
                    <Section1 content={data.section1} />
                    <Section2 content={data.section2} />
                    <Section3 content={data.section3} />
                    <Section4 content={data.section4} />
                    <Section5 banner={data.banner.second} content={data.section5} />
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

// export default Index;
