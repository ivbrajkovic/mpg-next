// Izdanja page

import { useEffect, useLayoutEffect, useState } from "react";

import fetchDataAsync from "../lib/fetchDataAsynNew";
import preloadImages from "../lib/preloadImages";
import getContentFromJson from "../lib/getContentFromJson";
import getFilesFromGallery from "../lib/getFilesFromGallery";

import Hero from "../components/Hero";
import GalleryItem from "../components/Gallery/GalleryItem";
import Spinner from "../components/Spinner/Spinner";

const srcset = [
  "/static/img/usluge/baner-usluge-768px.jpg",
  "/static/img/usluge/baner-usluge-1200px.jpg",
  "/static/img/usluge/baner-usluge.jpg"
];

const folder = "static/img/usluge/";
const loader = (
  <div className="m-t-xs-20-xl-40 d-flex justify-center">
    <Spinner />
  </div>
);

const text = {
  hr: {
    hero: "usluge",
    info: {
      reception: "recepcija"
    },
    form: {
      name: "ime",
      email: "email",
      telephone: "telefon",
      message: "poruka",
      btn: "pošalji"
    }
  },
  en: {
    hero: "services",
    info: {
      reception: "reception"
    },
    form: {
      name: "name",
      email: "email",
      telephone: "telephone",
      message: "message",
      btn: "send"
    }
  }
};

const izdanja = ({ lang, data }) => {
  // console.log("TCL: izdanja -> data", data);

  const folder = (data && data.folder) || "";
  const gallery = (data && data.gallery) || "";

  const title = (data && data[lang] && data[lang].hero) || "";
  const section1 = (data && data[lang] && data[lang].section1) || [];
  const section2 = (data && data[lang] && data[lang].section2) || [];
  const section3 = (data && data[lang] && data[lang].section3) || [];

  const [thumbs, larges] = getFilesFromGallery(folder, gallery);
  // console.log("TCL: izdanja -> thumbs", thumbs);
  // console.log("TCL: izdanja -> large", large);

  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    preloadImages(thumbs)
      .then(() => setLoaded(true))
      .catch(err =>
        console.log("TCL: Stalni postav -> preloadImages -> err():", err)
      );
  }, []);

  useEffect(() => {
    AOS.refreshHard();
    lightbox.reload();
  }, [loaded]);

  return (
    <>
      <Hero title={title} srcset={srcset} />
      {(loaded && (
        <div className="container usluge-page">
          <h1 className="m-t-xs-20-xl-40 header-3">{section1.title}</h1>
          <div className="content-1">
            {getContentFromJson(section1.content)}
          </div>
          <div className="d-grid gap-xs-20-xl-30">
            {thumbs
              .filter(thumb =>
                thumb.toLowerCase().includes(section1.src.toLowerCase())
              )
              .map((item, index) => (
                <img src={item} key={index} />
              ))}
          </div>
          <div className="m-t-xs-20-xl-40 content-1">
            {getContentFromJson(section2.content)}
          </div>
          <div className="d-grid gap-xs-20-xl-30">
            {larges
              .filter(large =>
                large.toLowerCase().includes(section2.src.toLowerCase())
              )
              .map((item, index) => (
                // <img src={item} key={index} />
                <GalleryItem
                  key={index}
                  thumb={item.replace(/(.*)(\.jpg|\.png)/gim, "$1-tmb$2")}
                  large={item}
                  // style={{ transitionDelay: `${index * DELAY}ms` }}
                />
              ))}
          </div>
          <div className="m-t-xs-20-xl-40 content-1">
            {getContentFromJson(section3.content)}
          </div>
        </div>
      )) ||
        loader}
    </>
  );
};

izdanja.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, "/api/new?page=usluge");
  return data;
};

export default izdanja;
