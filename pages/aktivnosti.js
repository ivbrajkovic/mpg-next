import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";

import fetchDataAsync from "../lib/fetchDataAsynNew";

const srcset = [
  "/static/img/aktivnosti/baner-aktivnosti-768px.jpg",
  "/static/img/aktivnosti/baner-aktivnosti-1200px.jpg",
  "/static/img/aktivnosti/baner-aktivnosti.jpg"
];

import Hero from "../components/Hero";
import Section1 from "../components/Index/Section1";
import Detalji from "../components/Aktivnosti/Detalji";

const aktivnosti = ({ lang, data }) => {
  const title = (data && data.hero && data.hero[lang]) || "";
  const folder = (data && data.folder) || "";
  const section1 = (data && data.section1) || [];

  const [detalji, setDetalji] = useState(false);
  const [list, setList] = useState(section1);
  const itemRef = useRef();

  useEffect(() => {
    // AOS.refreshHard();
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [detalji]);

  const loadMoreContent = async () => {
    // if (data.length > countRef.current) {
    //   const tmp = data.slice(
    //     countRef.current,
    //     countRef.current + numOfItemmsToAdd
    //   );
    //   // console.log("TCL: loadMoreContent -> tmp", tmp);
    //   countRef.current += numOfItemmsToAdd;
    //   setList(list => [...list, ...tmp]);
    // }

    const data = await fetchDataAsync(
      null,
      `/api/new?page=aktivnosti&from=${list.length + 1}&to=${list.length + 2}`
    );
    setList(list => [...list, ...data.data.section1]);

    AOS.refreshHard();
  };

  const showDetalji = item => {
    itemRef.current = item;
    setDetalji(true);
  };

  const closeDetalji = () => {
    setDetalji(false);
    // AOS.refreshHard();
  };

  return (
    <>
      <Hero title={title} srcset={srcset} />
      {(detalji && (
        <Detalji
          lang={lang}
          folder={folder}
          data={itemRef.current}
          onCloseDetalji={() => closeDetalji()}
        />
      )) || (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreContent}
          hasMore={list.length < 4}
          // hasMore={data.length > list.length}
          // loader={loader}
          // loader={<h1>Loading ...</h1>}
          // className="d-grid"
        >
          {list.map((item, index) => {
            return (
              <div
                style={{ cursor: "pointer" }}
                className="container"
                onClick={() => showDetalji(item)}
              >
                {/* <Link href="/aktivnosti/[id]" as={`/aktivnosti/${item.id}`}>
                <a> */}
                <Section1
                  key={index}
                  lang={lang}
                  folder={folder}
                  data={item}
                  animation="fade-up"
                  duration="1000"
                />
                {/* </a> */}
                {/* </Link> */}
              </div>
            );
          })}
        </InfiniteScroll>
      )}
    </>
  );
};

aktivnosti.getInitialProps = async function(context) {
  // const data = await fetchDataAsync(context, "aktivnosti");
  const data = await fetchDataAsync(
    context,
    "/api/new?page=aktivnosti&from=1&to=3"
  );
  return data;
};

export default aktivnosti;
