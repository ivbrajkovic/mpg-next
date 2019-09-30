// Navbar - index
// import Router from 'next/router';

import { useState, useEffect, useRef } from 'react';

import json from './menu.json';
import Menu from './Menu';

const Navbar = props => {
  const [isShrinked, setIsShrinked] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    const widthBreakPoint = 1200;

    const options = {
      root: null,
      threshold: 0,
      rootMargin: '-100px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // console.log("isIntersecting: ", entry.isIntersecting);

        // if (entry.isIntersecting) {
        //   if (window.innerWidth < widthBreakPoint) {
        //     setIsShrinked(true);
        //   }
        //   setIsShrinked(false);
        // } else setIsShrinked(false);

        if (window.innerWidth < widthBreakPoint) {
          setIsShrinked(!entry.isIntersecting);
        } else setIsShrinked(false);

        // setIsShrinked(isShrinked => {
        //   if (isShrinked) return false;
        // });
      });
    }, options);
    observerRef.current = observer;

    return () => {
      observerRef.current.disconnect();
      // console.log('TCL: observer -> disconnect()', observerRef.current);
    };
  }, []);

  useEffect(() => {
    // console.log('TCL: observer -> new', observerRef.current);

    const el = document.getElementById('hero');
    el && observerRef.current.observe(el);

    // const navbar = document.get
    // document.querySelector(".hamburger").addEventListener(
    //   "click",
    //   function() {
    //     this.classList.toggle("is-active");
    //   },
    //   false
    // );
    return () => {
      observerRef.current.disconnect();
      console.log('TCL: observer -> disconnect()', observerRef.current);
    };
  }, [props]);

  const setLanguage = value => props.onChangeLanguage(value);
  const setOdjel = (path, index) => props.onSetOdjel(path, index);

  let i = 0;
  console.log('TCL: Navbar -> render: ', ++i);

  return (
    <Menu
      lang={props.lang}
      menu={json || []}
      onChangeLanguage={setLanguage}
      shrink={isShrinked}
      onTest={props.onTest}
      onSetOdjel={setOdjel}
    />
  );
};

export default Navbar;
