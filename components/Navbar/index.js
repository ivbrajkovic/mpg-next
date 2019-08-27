import React, { Component } from 'react';
// import Link from 'next/link';
// import './navbar.scss';
import json from './menu.json';
import Menu from './menu';

const menu = json.menu;

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShrinked: false,
            ticking: false
        };
        this.scrollBreakPoint = 250;
        this.handleScroll = this.handleScroll.bind(this);
        this.shrinkNavbar = this.shrinkNavbar.bind(this);
    }

    shrinkNavbar(position) {
        const { isShrinked } = this.state;

        if (!isShrinked && position > this.scrollBreakPoint) {
            this.setState({ isShrinked: true });
        } else if (isShrinked && position < this.scrollBreakPoint) {
            this.setState({ isShrinked: false });
        }
    }

    handleScroll() {
        const { isShrinked, ticking } = this.state;
        // console.log('TCL: Navbar -> handleScroll -> isShrinked', isShrinked);
        // console.log('TCL: Navbar -> handleScroll -> ticking', ticking);

        if (!ticking) {
            window.requestAnimationFrame(() => {
                this.shrinkNavbar(window.scrollY);
                this.setState({ ticking: false });
            });
        }
        this.setState({ ticking: true });
    }

    componentDidMount() {
        this.shrinkNavbar(window.scrollY);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return <Menu menu={menu} shrink={this.state.isShrinked}></Menu>;
    }
}
