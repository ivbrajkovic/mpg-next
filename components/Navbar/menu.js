import React, { Component } from 'react';
import Link from './Link';
import Language from './Language';

export default class Nav extends Component {
    render() {
        const menuContent = this.props.content;
        return (
            <nav className="w3-card-4">
                <div
                    id="navbar"
                    className={`container navbar f-xl-18 ${
                        this.props.shrink ? `navbar-shrink` : ``
                    }`}
                >
                    <Language />

                    <div className="logo">
                        <img src="static/img/logo/logo.png" alt="MGP logo" />
                    </div>

                    <div className="hamburger hamburger--collapse">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>

                    <div className="menu-lists">
                        {menuContent.map((menuItem, index) => {
                            if (!menuItem.hasSubmenu) {
                                return (
                                    <Link activeClassName="active" href={menuItem.href} key={index}>
                                        <a className="menu-items">{menuItem.title}</a>
                                    </Link>
                                );
                            } else {
                                return (
                                    <Link activeClassName="active" href={menuItem.href} key={index}>
                                        <a className="menu-items">
                                            {menuItem.title}
                                            <div className="dropdown"></div>
                                            <div className="submenu-lists submenu--1-list">
                                                {menuItem.submenu.map((submenuItem, index) => {
                                                    return (
                                                        <div
                                                            className="nav_submenu-items"
                                                            key={index}
                                                        >
                                                            {submenuItem.title}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </a>
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </div>
            </nav>
        );
    }
}
