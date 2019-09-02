import React, { Component } from 'react';
// import fetch from 'isomorphic-unfetch';
// import { LanguageContext } from '../../contexts';

import json from './menu.json';
import Menu from './Menu';

// const menu = json.menu;

export default class Navbar extends Component {
    state = {
        isShrinked: false,
        language: 'hr'
    };
    // static contextType = LanguageContext;
    ticking = false;
    scrollBreakPoint = 250;
    widthBreakPoint = 1200;

    componentDidMount = () => {
        this.shrinkNavbar(window.scrollY);
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll);

    shrinkNavbar = (posY, width) => {
        const { isShrinked } = this.state;
        if (!isShrinked && posY > this.scrollBreakPoint && width < this.widthBreakPoint) {
            this.setState({ isShrinked: true });
        } else if (isShrinked && posY < this.scrollBreakPoint) {
            this.setState({ isShrinked: false });
        }
    };

    handleScroll = () => {
        // if (!this.state.ticking) {
        if (!this.ticking) {
            window.requestAnimationFrame(() => {
                this.shrinkNavbar(window.scrollY, window.innerWidth);
                // this.setState({ ticking: false });
                this.ticking = false;
            });
        }
        // this.setState({ ticking: true });
        this.ticking = true;
    };

    setLanguage = value => this.props.onChangeLanguage(value);
    setOdjel = (odjel, index) => this.props.onSetOdjel(odjel, index);

    i = 0;
    render() {
        console.log('TCL: Navbar -> render: ', ++this.i);
        // console.log('TCL: Navbar -> render -> this.context', this.context);

        return (
            // <LanguageContext.Provider value={{ lng, lngUpdate }}>
            <Menu
                // content={json ? json[this.context.language] : []}
                language={this.props.language}
                content={json ? json[this.props.language] : []}
                onChangeLanguage={this.setLanguage}
                shrink={this.state.isShrinked}
                onTest={this.props.onTest}
                onSetOdjel={this.setOdjel}
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
