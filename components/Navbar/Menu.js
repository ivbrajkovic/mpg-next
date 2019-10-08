// Menu items

import { useState, useRef, useEffect } from 'react';

import Language from './Language';
import ActiveLink from './Link';
import Link from 'next/link';

import Logo from './Logo';
import Hamburger from './Hamburger';

const Menu = ({ lang, shrink, menu, onChangeLanguage }) => {
  const setLanguage = value => onChangeLanguage(value);

  const arrowsRef = useRef([]);
  const hamburgerRef = useRef();

  useEffect(() => {
    hamburgerRef.current = document.querySelector('.hamburger');
    arrowsRef.current = document.querySelectorAll('.dropdown-small');
  }, []);

  const closeMenu = () => {
    hamburgerRef.current.classList.remove('is-active');
    console.log('TCL: closeMenu -> hamburgerRef.current', hamburgerRef.current);
    arrowsRef.current.forEach(item => item.classList.remove('open'));
  };

  const hamburgerClick = () => {
    if (hamburgerRef.current.classList.contains('is-active')) {
      closeMenu();
    } else hamburgerRef.current.classList.add('is-active');
  };

  const toggleSubmenu = e => {
    if (e.currentTarget.classList.contains('open')) {
      e.currentTarget.classList.remove('open');
    } else {
      arrowsRef.current.forEach(item => item.classList.remove('open'));
      e.currentTarget.classList.add('open');
    }
  };

  return (
    <nav className='w3-card-4'>
      <div
        id='navbar'
        className={`container navbar ${shrink ? `navbar-shrink` : ``}`}
      >
        <Language language={lang} onChangeLanguage={setLanguage} />

        <Logo />

        <Hamburger onHamburgerClick={hamburgerClick} />

        <ul className={`menu`}>
          {menu.map((menuItem, i) => {
            return (
              <li key={i}>
                <ActiveLink
                  activeClassName='active'
                  href={menuItem.href}
                  as={menuItem.as}
                >
                  <a onClick={() => closeMenu()}>{menuItem[lang]}</a>
                </ActiveLink>

                {menuItem.hasSubmenu && (
                  <>
                    <div className='dropdown-large' />

                    <div
                      // ref={el => arrowsRef.current.push(el)}
                      className={`dropdown-small`}
                      onClick={e => toggleSubmenu(e)}
                    />

                    <ul className={`submenu`}>
                      {menuItem.submenu.map((submenuItem, j) => {
                        return (
                          <Link
                            href={submenuItem.href}
                            as={submenuItem.as}
                            key={j}
                          >
                            <li
                              style={{ animationDelay: 575 + 125 * j + 'ms' }}
                            >
                              <a onClick={() => closeMenu()}>
                                {submenuItem[lang]}
                              </a>
                            </li>
                          </Link>
                        );
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
