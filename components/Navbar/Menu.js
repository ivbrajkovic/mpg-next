// Menu items

import { useState, useRef, useEffect } from 'react';

import Language from './Language';
import ActiveLink from './Link';
import Link from 'next/link';

const Menu = ({ lang, shrink, menu, onChangeLanguage, onTest, onSetOdjel }) => {
  // const [isActive, setIsActive] = useState(false);
  const navRef = useRef();
  const dropdownRef = useRef();
  const menuRef = useRef();
  // const submenuRef = useRef();

  useEffect(() => {
    dropdownRef.current = navRef.current.querySelectorAll('.dropdown-small');
    menuRef.current = navRef.current.querySelector('.menu');
    // submenuRef.current = navRef.current.querySelectorAll('.submenu');
  }, []);

  const setOdjel = (path, index) => onSetOdjel(path, index);
  const setLanguage = value => onChangeLanguage(value);

  const hamburgerClick = e => {
    if (e.currentTarget.classList.contains('is-active')) {
      e.currentTarget.classList.remove('is-active');
      menuRef.current.classList.remove('is-open');
    } else {
      e.currentTarget.classList.add('is-active');
      menuRef.current.classList.add('is-open');
    }
  };

  const closeMenu = () => {
    // isActive && setIsActive(false);
    e.currentTarget.classList.remove('open');
    e.currentTarget.nextSibling.classList.remove('open');
    menuRef.current;
  };

  const toggleDropdown = e => {
    if (e.currentTarget.classList.contains('open')) {
      e.currentTarget.classList.remove('open');
      e.currentTarget.nextSibling.classList.remove('open');
    } else {
      dropdownRef.current.forEach(item => item.classList.remove('open'));
      e.currentTarget.classList.add('open');
      e.currentTarget.nextSibling.classList.add('open');
    }
  };

  return (
    <nav className='w3-card-4'>
      <div
        ref={navRef}
        id='navbar'
        className={`container navbar f-xl-18 ${shrink ? `navbar-shrink` : ``}`}
      >
        <Language
          language={lang}
          onChangeLanguage={setLanguage}
          onTest={onTest}
        />

        <div className='logo'>
          <Link href='/'>
            <img src='/static/img/logo.png' alt='MGP logo' />
          </Link>
        </div>

        <div
          className={`hamburger hamburger--collapse`}
          // className={`hamburger hamburger--collapse${(isActive &&
          //   ' is-active') ||
          //   ''}`}
          onClick={e => {
            hamburgerClick(e);
            // setIsActive(isActive => !isActive);
          }}
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </div>

        <ul className={`menu`}>
          {/* <ul className={`menu${(isActive && ' is-open') || ''}`}> */}
          {menu.map((menuItem, i) => {
            return (
              <li key={i}>
                <ActiveLink activeClassName='active' href={menuItem.href}>
                  <a>{menuItem[lang]}</a>
                  {/* <a onClick={() => closeMenu()}>{menuItem[lang]}</a> */}
                </ActiveLink>

                {menuItem.hasSubmenu && (
                  <>
                    <div className='dropdown-large'></div>
                    <div
                      className={`dropdown-small`}
                      onClick={e => toggleDropdown(e)}
                    ></div>
                    {/* <div>&#9662;</div> */}
                    {/* <div>&#8964;</div> */}
                    {/* <ul className={`submenu submenu-${i}`}> */}
                    <ul className={`submenu`}>
                      {menuItem.submenu.map((submenuItem, j) => {
                        const node =
                          menuItem.href === '/odjeli' ? (
                            <li
                              key={j}
                              onClick={() => {
                                setOdjel('/odjeli', j);
                                // closeMenu();
                              }}
                              style={{ animationDelay: 575 + 125 * j + 'ms' }}
                            >
                              <a>{submenuItem[lang]}</a>
                            </li>
                          ) : (
                            <Link href={submenuItem.href} key={j}>
                              <li
                                style={{ animationDelay: 575 + 125 * j + 'ms' }}
                              >
                                <a>
                                  {/* <a onClick={() => closeMenu()}> */}
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
