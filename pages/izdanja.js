// import { useEffect } from "react";
// import fetchDataAsync from "../lib/fetchDataAsync";
import fetch from "isomorphic-unfetch";

const srcset = [
  "/static/img/aktivnosti/baner-aktivnosti-768px.jpg",
  "/static/img/aktivnosti/baner-aktivnosti-1200px.jpg",
  "/static/img/aktivnosti/baner-aktivnosti.jpg"
];

// import Hero from "../components/Hero";
// import Section1 from "../components/Index/Section1";
const folder = "static/img/izdanja/";

const izdanja = ({ lang, data }) => {
  console.log("TCL: izdanja -> data", data);
  // const title = (data && data.hero && data.hero[lang]) || "";
  // const folder = (data && data.folder) || "";
  // const section1 = (data && data.section1) || [];

  // useEffect(() => {
  //   AOS.refreshHard();
  // }, []);

  return (
    <>
      <div className="container izdanje-page">
        {data &&
          data.map &&
          data.map((item, index) => {
            return (
              <div className="m-b-xs-20-xl-40 izdanje-item">
                <div className="item-1">
                  <h1 className="header-3"></h1>
                  <p className="content-2"></p>
                  <p className="content-2"></p>
                </div>
                <div className="item-2">
                  <img src={folder + item.fotka + ".jpg"} alt="" srcset="" />
                </div>
              </div>
            );
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
