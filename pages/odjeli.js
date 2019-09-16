import { useEffect, useState } from "react";
import fetchDataAsync from "../lib/fetchDataAsync";

import Hero from "../components/Hero";
// import Spinner from "../components/Spinner/Spinner";
import Section6 from "../components/Odjeli/Section6";
import Section7 from "../components/Odjeli/Section7";
// import Footer from '../components/Footer';

const srcset = [
  "/static/img/odjeli/baner-odjeli-768px.jpg",
  "/static/img/odjeli/baner-odjeli-1200px.jpg",
  "/static/img/odjeli/baner-odjeli.jpg"
];

// let submenuItems = null;

const Odjel = ({ lang, odjel, onSetOdjel, success, data }) => {
  // const [odjel, setOdjel] = useState(props.odjel);

  // useEffect(() => {
  //   submenuItems = document.querySelectorAll(
  //     "#navbar .submenu--2-list .nav_submenu-items"
  //   );
  //   submenuItems &&
  //     submenuItems.forEach((item, index) => {
  //       item.keyIndex = index;
  //       item.addEventListener("click", onSubmenuItemClick);
  //     });

  //   // fetchDataAsync(null, "odjeli").then(data => setDbData(data));

  //   return () => {
  //     submenuItems &&
  //       submenuItems.forEach((item, index) => {
  //         item.removeEventListener("click", onSubmenuItemClick);
  //       });
  //   };
  // }, []);

  // const onSubmenuItemClick = e => {
  //   changeOdjel(e.srcElement.keyIndex);
  // };

  const changeOdjel = value => {
    // if (data && data.section7 && data.section7[value]) setOdjel(value);
    // else alert("Odjel nije u zapisima.");
    onSetOdjel("/odjeli", value);
  };

  let i = 0;
  console.log("TCL: Odjeli -> render: ", ++i);

  // const lang = props.lang;
  // const data = (props.success && props.data) || [];
  const section6 = (success && data && data.section6) || {};
  const section7 = (success && data && data.section7) || [];
  const title = (success && data && data[lang] && data[lang].hero) || "";

  return (
    <div>
      <Hero title={title} srcset={srcset} />
      {/* {(dbData && (
        <> */}
      <Section6
        lang={lang}
        odjel={odjel}
        data={section6}
        onChangeOdjel={changeOdjel}
      />
      <Section7 lang={lang} odjel={odjel} data={section7} />
      {/* </>
      )) || (
        <div className="m-t-120 d-flex justify-center">
          <Spinner />
        </div>
      )} */}
    </div>
  );
};

Odjel.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, "odjeli");
  return data;
};

export default Odjel;
