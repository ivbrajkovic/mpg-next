import React, { Component } from 'react';
import Link from 'next/link';
// import './navbar.scss';

const menu = [
    'O nama',
    'Odjeli i zbirke',
    'Aktivnosti',
    'Stalni postav',
    'Edukacija',
    'Knjižnica',
    'Izdanja'
];
const subMenu1 = ['Pazinski kaštel', 'Povjest MGP', 'Djelatnici', 'Dokumenti', 'Usluge', 'Kontakt'];
const subMenu2 = ['Kultutrno-povjesni odjel', 'Povjesni odjel', 'Galerijski odjel'];

export default class Navbar extends Component {
    clicked = value => e => {
        // console.log('TCL: Navbar -> message', e.target.children);
        this.props.OnClickedHandler(value);
    };

    render() {
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
                        <Link href="/index">
                            <a className="menu-items" onClick={this.clicked('')}>
                                {menu[0]}
                                <div className="dropdown"></div>
                                <div className="submenu-lists submenu--1-list">
                                    {subMenu1.map((value, index) => {
                                        return (
                                            <div className="nav_submenu-items" key={index}>
                                                {value}
                                            </div>
                                        );
                                    })}
                                </div>
                            </a>
                        </Link>
                        <Link href="/odjeli">
                            <a className="menu-items" onClick={this.clicked(menu[1])}>
                                {menu[1]}
                                <div className="dropdown"></div>
                                <div className="submenu-lists submenu--2-list">
                                    {subMenu2.map((value, index) => {
                                        return (
                                            <div className="nav_submenu-items" key={index}>
                                                {value}
                                            </div>
                                        );
                                    })}
                                </div>
                            </a>
                        </Link>
                        <a href="#" className="menu-items" onClick={this.clicked(menu[2])}>
                            {menu[2]}
                        </a>
                        <a href="#" className="menu-items" onClick={this.clicked(menu[3])}>
                            {menu[3]}
                        </a>
                        <a href="#" className="menu-items" onClick={this.clicked(menu[4])}>
                            {menu[4]}
                        </a>
                        <a href="#" className="menu-items" onClick={this.clicked(menu[5])}>
                            {menu[5]}
                        </a>
                        <a href="#" className="menu-items" onClick={this.clicked(menu[6])}>
                            {menu[6]}
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}
