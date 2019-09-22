// Menu items

// import { withRouter } from 'next/router';
import { useState } from "react";

import Language from "./Language";
import ActiveLink from "./Link";
import Link from "next/link";

const Menu = ({ lang, shrink, menu, onChangeLanguage, onTest, onSetOdjel }) => {
  const [isActive, setIsActive] = useState(false);

  const setLanguage = value => onChangeLanguage(value);
  const setOdjel = (path, index) => onSetOdjel(path, index);

  const closeMenu = () => isActive && setIsActive(false);

  let submenu = 1;
  console.log("TCL: Menu -> render", submenu);

  return (
    <nav className="w3-card-4">
      <div
        id="navbar"
        className={`container navbar f-xl-18 ${shrink ? `navbar-shrink` : ``}`}
      >
        <Language
          language={lang}
          onChangeLanguage={setLanguage}
          onTest={onTest}
        />

        <div className="logo">
          <Link href="/">
            <img src="/static/img/logo.png" alt="MGP logo" />
          </Link>
        </div>

        <div
          className={`hamburger hamburger--collapse${(isActive &&
            " is-active") ||
            ""}`}
          onClick={() => setIsActive(isActive => !isActive)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>

        <ul className={`menu${(isActive && " is-open") || ""}`}>
          {menu.map((menuItem, i) => {
            return (
              <li key={i}>
                <ActiveLink activeClassName="active" href={menuItem.href}>
                  <a onClick={() => closeMenu()}>{menuItem[lang]}</a>
                </ActiveLink>

                {menuItem.hasSubmenu && (
                  <>
                    <div className="dropdown"></div>
                    {/* <div>&#9662;</div> */}
                    {/* <div>&#8964;</div> */}
                    <ul className={`submenu submenu-${submenu++}`}>
                      {menuItem.submenu.map((submenuItem, j) => {
                        const node =
                          menuItem.href === "/odjeli" ? (
                            <li
                              key={j}
                              // className="submenu-items"
                              onClick={() => {
                                setOdjel("/odjeli", j);
                                closeMenu();
                              }}
                              style={{ animationDelay: 575 + 125 * j + "ms" }}
                            >
                              <a>{submenuItem[lang]}</a>
                            </li>
                          ) : (
                            <Link href={submenuItem.href} key={j}>
                              <li
                                style={{ animationDelay: 575 + 125 * j + "ms" }}
                              >
                                <a onClick={() => closeMenu()}>
                                  {submenuItem[lang]}
                                </a>
                              </li>
                            </Link>
                          );
                        return node;
                      })}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
