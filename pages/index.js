// Home page

import { useEffect, useState } from "react";
// import { Transition } from 'react-transition-group';
// import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

import fetchDataAsync from "../lib/fetchDataAsync";
import preloadImages from "../lib/preloadImages";
import isLocalImage from "../lib/isLocalImage";

import Hero from "../components/Hero";
import Spinner from "../components/Spinner/Spinner";
import Section1 from "../components/Index/Section1";
import Section2 from "../components/Index/Section2";
import Section3 from "../components/Index/Section3";
import Section4 from "../components/Index/Section4";
import Section5 from "../components/Index/Section5";

const srcset = [
  "/static/img/pocetna/baner-pocetna-768px.jpg",
  "/static/img/pocetna/baner-pocetna-1200px.jpg",
  "/static/img/pocetna/baner-pocetna.jpg"
];

let buttons = null;

const Index = ({ lang, success, data }) => {
  console.log("TCL: Index -> success", success);
  // const [dbData, setDbData] = useState();
  const [loaded, setLoaded] = useState(false);

  // const lang = props.lang;
  // const data = (props.success && props.data) || [];
  // const data = (dbData && dbData.success && dbData.data) || [];
  const folder = (success && data && data.folder) || "";
  const slides = (success && data && data.slides) || [];

  const section1 = (success && data && data.section1) || [];
  const section2 = (success && data && data.section2) || [];
  const section3 = (success && data && data.section3) || [];
  const section4 = (success && data && data.section4) || {};
  const section5 = (success && data && data.section5) || {};

  useEffect(() => {
    ripplet.defaultOptions.color = "rgba(255, 255, 255, .2)";
    buttons = document.querySelectorAll(".btn");
    buttons &&
      buttons.forEach(btn => {
        btn.addEventListener("mousedown", ripplet);
      });

    // fetchDataAsync(null, "index").then(data => {
    //   if (data && data.success) {
    //     const folder = (data.data && data.data.folder) || "";
    //     let image =
    //       (data.data && data.data.section1 && data.data.section1.src) || "";

    const image =
      (success && data && data.section1 && data.section1.src) || null;
    // preload post-big image
    image &&
      preloadImages([isLocalImage ? folder + image : image]).then(value =>
        // setDbData(data)
        setLoaded(true)
      );

    //     );
    //   } else setDbData(data);
    // });

    return () => {
      buttons &&
        buttons.forEach(btn => {
          btn.removeEventListener("mousedown", ripplet);
        });
    };
  }, []);

  let i = 0;
  console.log("TCL: Index -> render: ", ++i);

  return (
    // <Transition in={inProp} timeout={duration} mountOnEnter unmountOnExit>
    // <div style={{ minHeight: "90vh" }}>
    <div>
      <Hero move srcset={srcset} />
      {(loaded && (
        <>
          <Section1 lang={lang} folder={folder} data={section1} />
          <Section2 lang={lang} folder={folder} data={section2} />
          <Section3 lang={lang} folder={folder} data={section3} />
          <Section4
            lang={lang}
            folder={folder}
            data={section4}
            slides={slides}
          />
          <Section5 lang={lang} folder={folder} data={section5} />

          {/* <Section1 lang={lang} folder={folder} data={section1} />
            <Section2 lang={lang} folder={folder} data={section2} />
            <Section3 lang={lang} folder={folder} data={section3} />
            <Section4 lang={lang} folder={folder} data={section4} slides={slides} />
            <Section5 lang={lang} folder={folder} data={section5} /> */}
        </>
      )) || (
        <div className="m-t-120 d-flex justify-center">
          <Spinner />
        </div>
      )}
    </div>
    // {/* // </Transition> */}
  );
};

Index.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, "index");
  // const data = {};
  // data.data = {};
  // data.data.banners = [
  //   "/static/img/pocetna/baner-pocetna-768px.jpg",
  //   "/static/img/pocetna/baner-pocetna-1200px.jpg",
  //   "/static/img/pocetna/baner-pocetna.jpg"
  // ];
  return data;
};

export default Index;
