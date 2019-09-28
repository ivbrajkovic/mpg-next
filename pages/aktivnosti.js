// Aktivnosti page

import { useState, useRef, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

const srcset = [
  '/static/img/aktivnosti/baner-aktivnosti-768px.jpg',
  '/static/img/aktivnosti/baner-aktivnosti-1200px.jpg',
  '/static/img/aktivnosti/baner-aktivnosti.jpg'
];

import Hero from '../components/Hero';
// import Section1 from "../components/Index/Section1";
import Ukratko from '../components/Aktivnosti/Ukratko';
import Detalji from '../components/Aktivnosti/Detalji';

const urls = {
  hr:
    'http://e-computing.hr/eCMS/ws/wsecms.asmx/GetNovostiKategorijeTopNJSON?WebStranicaID=13&KategorijaID=13&TopN=10',
  en:
    'http://e-computing.hr/eCMS/ws/wsecms.asmx/GetNovostiKategorijeTopNJSON?WebStranicaID=13&KategorijaID=13&TopN=10'
};

const titles = {
  hr: 'aktivnosti',
  en: 'activities'
};

const MAX_AKTIVNOSTI = 2;
const folder = '/static/img/aktivnosti/';

const aktivnosti = ({ lang, data }) => {
  const [detalji, setDetalji] = useState(false);
  const [list, setList] = useState([]);
  const itemRef = useRef();

  useEffect(() => {
    async function getData() {
      const res = await fetch(urls[lang]);
      const data = await res.json();
      setList(data);
      AOS.refreshHard();
    }
    getData();
  }, [lang]);

  useEffect(() => {
    AOS.refreshHard();
  }, [detalji]);

  // const loadMoreContent = async () => {
  //   // if (data.length > countRef.current) {
  //   //   const tmp = data.slice(
  //   //     countRef.current,
  //   //     countRef.current + numOfItemmsToAdd
  //   //   );
  //   //   // console.log("TCL: loadMoreContent -> tmp", tmp);
  //   //   countRef.current += numOfItemmsToAdd;
  //   //   setList(list => [...list, ...tmp]);
  //   // }

  //   const data = await fetchDataAsync(
  //     null,
  //     `/api/new?page=aktivnosti&from=${list.length + 1}&to=${list.length + 2}`
  //   );
  //   setList(list => [...list, ...data.data.section1]);

  //   AOS.refreshHard();
  // };

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
      <Hero title={titles[lang]} srcset={srcset} />
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
          // loadMore={loadMoreContent}
          hasMore={list.length < MAX_AKTIVNOSTI}
          // hasMore={data.length > list.length}
          // loader={loader}
          // loader={<h1>Loading ...</h1>}
          // className="d-grid"
        >
          {list.map((item, index) => {
            return (
              <div
                style={{ cursor: 'pointer' }}
                className='container'
                onClick={() => showDetalji(item)}
              >
                <Ukratko
                  key={index}
                  lang={lang}
                  folder={folder}
                  data={item}
                  animation='fade-up'
                  duration='1000'
                />
              </div>
            );
          })}
        </InfiniteScroll>
      )}
    </>
  );
};

export default aktivnosti;
