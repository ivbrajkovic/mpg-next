import { useEffect } from "react";
import fetchDataAsync from "../lib/fetchDataAsync";

const srcset = [
  "/static/img/kontakt/baner-kontakt-768px.jpg",
  "/static/img/kontakt/baner-kontakt-1200px.jpg",
  "/static/img/kontakt/baner-kontakt.jpg"
];

import Hero from "../components/Hero";
// import Section1 from "../components/Index/Section1";

const kontakt = ({ lang, data }) => {
  const title = (data && data.hero && data.hero[lang]) || "";
  // const folder = (data && data.folder) || "";
  // const section1 = (data && data.section1) || [];

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <>
      <Hero title={title} srcset={srcset} />
    </>
  );
};

// kontakt.getInitialProps = async function(context) {
//   const data = await fetchDataAsync(context, "kontakt");
//   return data;
// };

export default kontakt;
