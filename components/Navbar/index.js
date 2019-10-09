// Navbar - index
// import Router from 'next/router';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import Menu from './Menu';

const widthBreakPoint = 1200;

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-100px'
};

const Navbar = () => {
  // console.log('TCL: Navbar -> render()');

  const [shrink, setShrink] = useState(false);

  ///////////////////////////////////////////////////////////////////////
  // Observer related functions
  //
  const observerRef = useRef();
  const { pathname } = useRouter();

  useEffect(() => {
    console.log('TCL: Navbar -> useEffect 1', useEffect);
    observerRef.current = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (window.innerWidth < widthBreakPoint) {
          setShrink(!entry.isIntersecting);
        } else setShrink(false);
      });
    }, options);

    return () => {
      observerRef.current.disconnect();
      // console.log('TCL: observer -> disconnect()', observerRef.current);
    };
  }, []);

  useEffect(() => {
    // console.log("TCL: Navbar -> useEffect 2", useEffect)
    const hero = document.getElementById('hero');
    hero && observerRef.current.observe(hero);

    return () => {
      observerRef.current.disconnect();
      // console.log('TCL: observer -> disconnect()', observerRef.current);
    };
  }, [pathname]);
  //
  ///////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////
  // Dropdown related functions
  //
  const arrowsRef = useRef([]);
  const hamburgerRef = useRef();

  useEffect(() => {
    // console.log('TCL: Navbar -> useEffect 3', useEffect);
    hamburgerRef.current = document.querySelector('.hamburger');
    arrowsRef.current = document.querySelectorAll('.dropdown-small');
  }, []);

  const closeMenu = () => {
    // console.log('TCL: closeMenu -> closeMenu', closeMenu);
    hamburgerRef.current.classList.remove('is-active');
    arrowsRef.current.forEach(item => item.classList.remove('open'));
  };

  const hamburgerClick = () => {
    // console.log('TCL: hamburgerClick -> hamburgerClick', hamburgerClick);
    if (hamburgerRef.current.classList.contains('is-active')) {
      closeMenu();
    } else hamburgerRef.current.classList.add('is-active');
  };

  const toggleSubmenu = e => {
    // console.log('TCL: Navbar -> toggleSubmenu', toggleSubmenu);
    if (e.currentTarget.classList.contains('open')) {
      e.currentTarget.classList.remove('open');
    } else {
      arrowsRef.current.forEach(item => item.classList.remove('open'));
      e.currentTarget.classList.add('open');
    }
  };
  //
  ///////////////////////////////////////////////////////////////////////

  return (
    <Menu
      shrink={shrink}
      toggleSubmenu={toggleSubmenu}
      hamburgerClick={hamburgerClick}
      closeMenu={closeMenu}
    />
  );
};

export default Navbar;
