// Navbar - index

import { useState, useEffect } from "react";

import json from "./menu.json";
import Menu from "./Menu";

const Navbar = props => {
  const [isShrinked, setIsShrinked] = useState(false);

  useEffect(() => {
    const widthBreakPoint = 1200;

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-100px"
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

    observer.observe(document.getElementById("hero"));

    // const navbar = document.get
    // document.querySelector(".hamburger").addEventListener(
    //   "click",
    //   function() {
    //     this.classList.toggle("is-active");
    //   },
    //   false
    // );
    return () => observer.disconnect();
  }, []);

  const setLanguage = value => props.onChangeLanguage(value);
  const setOdjel = (path, index) => props.onSetOdjel(path, index);

  let i = 0;
  console.log("TCL: Navbar -> render: ", ++i);

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
