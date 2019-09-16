import { useEffect } from "react";
import fetchDataAsync from "../lib/fetchDataAsync";

const srcset = [
  "/static/img/postav/baner-stalnipostav-768px.jpg",
  "/static/img/postav/baner-stalnipostav-1200px.jpg",
  "/static/img/postav/baner-stalnipostav.jpg"
];

import Hero from "../components/Hero";
import Section1 from "../components/Postav/Section1";
import Section2 from "../components/Postav/Section2";

const postav = ({ lang, data }) => {
  const title = (data && data[lang] && data[lang].hero) || "";
  const section1 = (data && data[lang] && data[lang].section1) || {};
  const section2 = (data && data[lang] && data[lang].section2) || {};

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <>
      <Hero title={title} srcset={srcset} />
      <div className="container">
        <Section1 data={section1} />
        <Section2 data={section2} />
      </div>
    </>
  );
};

postav.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, "postav");
  return data;
};

export default postav;
