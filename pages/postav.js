// Stalni postav

import { useEffect, useLayoutEffect, useState } from "react";

import Spinner from "../components/Spinner/Spinner";
import fetchDataAsync from "../lib/fetchDataAsync";
import preloadImages from "../lib/preloadImages";

const srcset = [
  "/static/img/postav/baner-stalnipostav-768px.jpg",
  "/static/img/postav/baner-stalnipostav-1200px.jpg",
  "/static/img/postav/baner-stalnipostav.jpg"
];

import Hero from "../components/Hero";
import Section1 from "../components/Postav/Section1";
import Section2 from "../components/Postav/Section2";

const postav = ({ lang, data }) => {
  const folder = (data && data.folder) || "";
  const title = (data && data[lang] && data[lang].hero) || "";
  let gallery = (data && data.gallery) || [];
  gallery = gallery.map(item => folder + item);

  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    preloadImages(gallery)
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
      <div className="container postav-page">
        <Section1 lang={lang} data={data} />
        {(loaded && <Section2 lang={lang} data={data} />) || (
          <div className="m-t-xs-20-xl-40 d-flex justify-center">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

postav.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, "postav");
  return data;
};

export default postav;
