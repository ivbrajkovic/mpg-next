import React, { Component } from 'react';
// import fetch from 'isomorphic-unfetch';
// import fetchDataAsync from '../lib/fetchDataAsync';
// import { LanguageContext } from '../contexts';

import Hero from '../components/Hero';
import Section1 from '../components/Section-1';
import Section2 from '../components/Section-2';
import Section3 from '../components/Section-3';
import Section4 from '../components/Section-4';
import Section5 from '../components/Section-5';

export default class index extends Component {
    buttons = [];

    static async getInitialProps() {
        return { page: 'index' };
    }

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

    // static getDerivedStateFromProps(props, state) {
    //     console.log('TCL: getDerivedStateFromProps -> state', state);
    //     console.log('TCL: getDerivedStateFromProps -> props', props);
    //     return null;
    // }

    shouldComponentUpdate(nextProps, nextState) {
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
        return true;
    }

    componentDidUpdate(prevProps) {
        // console.log('TCL: componentDidUpdate -> prevProps', prevProps);
        // console.log(
        //     `TCL: componentDidUpdate -> language update required: ${this.state.language !==
        //         this.context.language}`
        // );
        // console.log('TCL: this.context.language', this.context.language);
        // if (this.state.language !== this.context.language) {
        // if (!this.context.data[this.context.language]) {
        //     console.log('componentDidUpdate fetching data ...');
        // let lang = this.context.language;
        // let data = await fetchDataAsync(false, this.context.language);
        // this.context.updateData(this.context.language, data);
        // this.setState({
        //     language: this.context.language
        // });
        //     // this.setState({
        //     //     language: this.context.language,
        //     //     data: data.data
        //     // });
        //     // this.setState(state => {
        //     //     let stateData = state.data;
        //     //     stateData[lang] = fetchData.data[lang];
        //     //     return {
        //     //         language: lang,
        //     //         data: stateData
        //     //     };
        //     // });
        // }
    }

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

        const { text } = this.props;

        if (text.banner)
            return (
                <div>
                    {/* <button onClick={() => this.context.updateLanguage('en')}>test</button> */}
                    <Hero banner={text.banner.first} />
                    <Section1 content={text.section1} />
                    <Section2 content={text.section2} />
                    <Section3 content={text.section3} />
                    <Section4 content={text.section4} />
                    <Section5 banner={text.banner.second} content={text.section5} />
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
