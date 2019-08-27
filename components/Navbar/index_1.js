import React, { Component } from 'react';
import Link from 'next/link';
// import './navbar.scss';

import json from './menu.json';
const menu = json.menu;

const Navbar = props => {
    return (
        <nav className="w3-card-4">
            <div id="navbar" className="container navbar f-xl-18">
                <div className="language">
                    <div className="active">HR</div> | <div>EN</div> | <div>IT</div>
                </div>

                <div className="logo">
                    <img src="static/img/logo/logo.png" alt="MGP logo" />
                </div>

                <div className="hamburger hamburger--collapse">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </div>

                <div className="menu-lists">
                    {menu.map((menu, index) => {
                        if (!menu.hasSubmenu) {
                            return (
                                <Link href={menu.href} key={index}>
                                    <a className="menu-items">{menu.title}</a>
                                </Link>
                            );
                        } else {
                            return (
                                <Link href={menu.href} key={index}>
                                    <a className="menu-items">
                                        {menu.title}
                                        <div className="dropdown"></div>
                                        <div className="submenu-lists submenu--1-list">
                                            {menu.submenu.map((submenu, index) => {
                                                return (
                                                    <div className="nav_submenu-items" key={index}>
                                                        {submenu}
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
};

export default Navbar;
