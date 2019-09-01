import React, { Component } from 'react';
// import fetch from 'isomorphic-unfetch';

// import { LanguageContext } from '../../contexts';

import Menu from './Menu';

import json from './menu.json';
// const menu = json.menu;

export default class Navbar extends Component {
    state = {
        isShrinked: false,
        language: 'hr'
    };
    // static contextType = LanguageContext;
    ticking = false;
    scrollBreakPoint = 250;

    componentDidMount = () => {
        // Shrink navbar on scroll
        this.shrinkNavbar(window.scrollY);
        window.addEventListener('scroll', this.handleScroll);
    };

    componentDidUpdate(prevProps) {
        // console.log(
        //     'TCL: Navbar -> componentDidUpdate -> this.state.language',
        //     this.state.language
        // );
        // console.log(
        //     'TCL: Navbar -> componentDidUpdate -> this.context.language',
        //     this.context.language
        // );
        // if (!this.state.language === this.context.language) {
        // }
    }

    componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll);

    shrinkNavbar = position => {
        const { isShrinked } = this.state;
        if (!isShrinked && position > this.scrollBreakPoint) {
            this.setState({ isShrinked: true });
        } else if (isShrinked && position < this.scrollBreakPoint) {
            this.setState({ isShrinked: false });
        }
    };

    handleScroll = () => {
        // if (!this.state.ticking) {
        if (!this.ticking) {
            window.requestAnimationFrame(() => {
                this.shrinkNavbar(window.scrollY);
                // this.setState({ ticking: false });
                this.ticking = false;
            });
        }
        // this.setState({ ticking: true });
        this.ticking = true;
    };

    // lngUpdate = lng => this.setState({ lng: lng });

    changeLanguage = data => {
        console.log('TCL: Navbar -> changeLanguage -> data', data);
    };

    i = 0;
    render() {
        // const lngUpdate = this.lngUpdate;
        // const lng = this.state.lng;

        console.log('TCL: Navbar -> render: ', ++this.i);
        // console.log('TCL: Navbar -> render -> this.context', this.context);

        // if (!json[this.context.language]) {
        // }

        return (
            // <LanguageContext.Provider value={{ lng, lngUpdate }}>
            <Menu
                // content={json ? json[this.context.language] : []}
                language={this.props.language}
                content={json ? json[this.props.language] : []}
                // content={json ? json[this.context.language] : []}
                onChangeLanguage={value => this.props.onChangeLanguage(value)}
                shrink={this.state.isShrinked}
                onChangeRoute={value => this.props.onChangeRoute(value)}
                onTest={this.props.onTest}
            />
            // <Menu
            //     content={json ? json[this.context.language] : []}
            //     shrink={this.state.isShrinked}
            // />
            // <Menu content={json ? json[this.state.lng] : []} shrink={this.state.isShrinked} />
            // </LanguageContext.Provider>
        );
        // return <h1>Hello from menu</h1>;
    }
}
