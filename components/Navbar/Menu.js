// Menu items

import { useContext } from 'react';

import Link from 'next/link';
import ActiveLink from './Link';

import Logo from './Logo';
import Language from './Language';
import Hamburger from './Hamburger';

import { LanguageContext } from '../../context';

import json from './menu.json';

const Menu = ({ shrink, hamburgerClick, toggleSubmenu, closeMenu }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <nav className='w3-card-4'>
      <div
        id='navbar'
        className={`container navbar ${shrink ? `navbar-shrink` : ``}`}
      >
        <Language />

        <Logo />

        <Hamburger onHamburgerClick={hamburgerClick} />

        <ul className={`menu`}>
          {json.map((menuItem, i) => {
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
