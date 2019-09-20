// Izdanja page

import { useState, useRef, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import fetchDataAsync from "../lib/fetchDataAsynNew";
import preloadImages from "../lib/preloadImages";
// import fetch from "isomorphic-unfetch";

import Hero from "../components/Hero";
import IzdanjaItem from "../components/izdanja/IzdanjaItem";
import Spinner from "../components/Spinner/Spinner";

const srcset = [
  "/static/img/izdanja/baner-izdanja-768px.jpg",
  "/static/img/izdanja/baner-izdanja-1200px.jpg",
  "/static/img/izdanja/baner-izdanja.jpg"
];

const numOfItemmsToAdd = 3;
const folder = "static/img/izdanja/";
const loader = (
  <div className="m-t-xs-20-xl-40 d-flex justify-center">
    <Spinner />
  </div>
);
const izdanja = ({ lang, data }) => {
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState(data.slice(0, numOfItemmsToAdd));
  const countRef = useRef(numOfItemmsToAdd);

  useEffect(() => {
    const images =
      (data &&
        data.slice &&
        data.slice(0, numOfItemmsToAdd).map(item => {
          return `${folder}${
            item.fotka > 9 ? item.fotka : "0" + item.fotka
          }.jpg`;
        })) ||
      [];
    preloadImages(images)
      .then(() => setLoaded(true))
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

  useEffect(() => {
    AOS.refreshHard();
  }, [loaded]);

  return (
    <>
      <Hero title="izdanja" srcset={srcset} />
      {(loaded && (
        <div className="container izdanja-page">
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMoreContent}
            hasMore={data.length > list.length}
            loader={loader}
            // loader={<h1>Loading ...</h1>}
            // className="d-grid"
          >
            {list.map((item, index) => {
              return <IzdanjaItem folder={folder} item={item} key={index} />;
            })}
          </InfiniteScroll>
        </div>
      )) ||
        loader}
    </>
  );
};

izdanja.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, "/api/new?page=izdanja");
  return { data: data };
};

export default izdanja;
