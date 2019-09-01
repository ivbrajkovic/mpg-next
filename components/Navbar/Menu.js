// import ActiveLink from './ActiveLink';
import Link from './Link';
import Language from './Language';

import { withRouter } from 'next/router';

const Menu = ({ router, ...props }) => {
    const { shrink, content: menu, onChangeLanguage, onChangeRoute, onTest } = props;

    return (
        <nav className="w3-card-4">
            <div
                id="navbar"
                className={`container navbar f-xl-18 ${shrink ? `navbar-shrink` : ``}`}
            >
                <Language
                    language={props.language}
                    onChangeLanguage={data => onChangeLanguage(data)}
                    onTest={onTest}
                />

                <div className="logo">
                    <img src="static/img/logo/logo.png" alt="MGP logo" />
                </div>

                <div className="hamburger hamburger--collapse">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </div>

                <div className="menu-lists">
                    {menu.map((menuItem, index) => {
                        return (
                            <Link activeClassName="active" href={menuItem.href} key={index}>
                                <a className="menu-items">
                                    {/* <ActiveLink
                                    route={menuItem.href}
                                    className="menu-items" 
                                    activeClassName="active"
                                    onChangeRoute={onChangeRoute}
                                    key={index}*/}
                                    {menuItem.title}
                                    {menuItem.hasSubmenu && (
                                        <>
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
                                        </>
                                    )}
                                    {/* </ActiveLink> */}
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default withRouter(Menu);
