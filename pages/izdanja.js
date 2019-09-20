// Izdanja page

import { useState, useRef, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import preloadImages from "../lib/preloadImages";
import fetch from "isomorphic-unfetch";

import Hero from "../components/Hero";
import IzdanjaItem from "../components/izdanja/IzdanjaItem";

const srcset = [
  "/static/img/izdanja/baner-izdanja-768px.jpg",
  "/static/img/izdanja/baner-izdanja-1200px.jpg",
  "/static/img/izdanja/baner-izdanja.jpg"
];

const numOfItemmsToAdd = 3;
const folder = "static/img/izdanja/";

const izdanja = ({ lang, data }) => {
  const [list, setList] = useState(data.slice(0, numOfItemmsToAdd));
  const countRef = useRef(numOfItemmsToAdd);

  useEffect(() => {
    const images =
      (data && data.slice && data.slice(0, numOfItemmsToAdd)) || [];
    preloadImages(images)
      .then(() => setList(true))
      .catch(err =>
        console.log("TCL: Stalni postav -> preloadImages -> err():", err)
      );
  }, [data]);

  // console.log("TCL: izdanja -> listIzdanja", listIzdanja);

  const loadMoreContent = () => {
    if (data.length > countRef.current) {
      const tmp = data.slice(
        countRef.current,
        countRef.current + numOfItemmsToAdd
      );
      // console.log("TCL: loadMoreContent -> tmp", tmp);
      countRef.current += numOfItemmsToAdd;
      setList(list => [...list, ...tmp]);
    }
  };

  return (
    <>
      <Hero title="izdanja" srcset={srcset} />
      <div className="container izdanja-page">
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreContent}
          hasMore={true}
          loader={<h1>Loading ...</h1>}
          // className="d-grid"
        >
          {list.map((item, index) => {
            return <IzdanjaItem folder={folder} item={item} key={index} />;
          })}
        </InfiniteScroll>
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
