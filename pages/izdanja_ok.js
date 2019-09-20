// Izdanja page

import { useEffect, useState, useRef } from "react";
// import fetchDataAsync from "../lib/fetchDataAsync";
import fetch from "isomorphic-unfetch";
import Izdanje from "../components/izdanja/IzdanjaItem";

const srcset = [
  "/static/img/aktivnosti/baner-aktivnosti-768px.jpg",
  "/static/img/aktivnosti/baner-aktivnosti-1200px.jpg",
  "/static/img/aktivnosti/baner-aktivnosti.jpg"
];

// import Hero from "../components/Hero";
// import Section1 from "../components/Index/Section1";
const folder = "static/img/izdanja/";

// const loadIzdanja = (item, num) => {
//   let arr = [];
//   for (let index = 1; index < num; index++) {
//     const element = num;
//   }
// };

const izdanja = ({ lang, data }) => {
  const [listIzdanja, setlistIzdanja] = useState(data.slice(0, 5));
  const tickingRef = useRef(false);
  const countRef = useRef(5);

  console.log("TCL: izdanja -> listIzdanja", listIzdanja);

  useEffect(() => {
    window.addEventListener("scroll", onBottomOfPage);

    // AOS.refreshHard();

    return () => window.removeEventListener("scroll", onBottomOfPage);
  }, []);

  const onBottomOfPage = () => {
    if (!tickingRef.current) {
      window.requestAnimationFrame(function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
          loadMoreContent();
        tickingRef.current = false;
      });
    }
    tickingRef.current = true;
  };

  const loadMoreContent = () => {
    if (data.length > countRef.current) {
      const tmp = data.slice(countRef.current, countRef.current + 5);
      countRef.current += 5;
      setlistIzdanja(list => [...list, ...tmp]);
    }
  };

  return (
    <>
      <div className="container izdanje-page">
        {listIzdanja.map((item, index) => {
          return <Izdanje folder={folder} item={item} key={index} />;
        })}
      </div>
    </>
  );
};

izdanja.getInitialProps = async function(context) {
  console.log(
    "TCL: ******************* FETCH DATA ASYNC ***********************"
  );
  console.log("TCL: fetchDataAsync -> process.browser:", process.browser);

  let baseUrl = "";
  if (typeof window === "undefined") {
    baseUrl = `${context.req.protocol}://${context.req.get("host")}`;
  }
  const url = `${baseUrl}/api/new?page=izdanja`;
  console.log("TCL: fetchDataAsync -> url", url);

  const res = await fetch(url);
  const data = await res.json();

  return { data: data };
};

export default izdanja;
