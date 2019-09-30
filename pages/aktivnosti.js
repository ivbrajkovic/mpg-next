// Aktivnosti page

import { useState, useRef, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import preloadImages from '../lib/preloadImages';

const srcset = [
  '/static/img/aktivnosti/baner-aktivnosti-768px.jpg',
  '/static/img/aktivnosti/baner-aktivnosti-1200px.jpg',
  '/static/img/aktivnosti/baner-aktivnosti.jpg'
];

import Hero from '../components/Hero';
// import Section1 from "../components/Index/Section1";
import Ukratko from '../components/Aktivnosti/Ukratko';
// import Detalji from '../components/Aktivnosti/Detalji';
import Detalji from '../components/Novosti/Detalji';

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
const folderNovosti = '/static';

const aktivnosti = ({ lang, data }) => {
  const [detalji, setDetalji] = useState(false);
  const [list, setList] = useState([]);
  const itemRef = useRef();

  useEffect(() => {
    // async function getData() {
    //   const res = await fetch(urls[lang]);
    //   const data = await res.json();
    //   setList(data);
    //   AOS.refreshHard();
    // }
    // getData();

    async function getNovosti(url) {
      const res = await fetch(url);
      const data = await res.json();
      console.log('TCL: getNovosti -> data', data);

      const slike = [];
      data &&
        data.forEach &&
        data.forEach(item => {
          console.log('TCL: getNovosti -> item', item);
          item.SlikaPath = folderNovosti + item.SlikaPath;
          slike.push(item.SlikaPath);
        });

      console.log('TCL: getNovosti -> slike', slike);
      slike &&
        preloadImages(slike).then(value => {
          setList(data);
        });
    }
    getNovosti(urls[lang]);
  }, [lang]);

  useEffect(() => {
    AOS.refreshHard();
  }, [list]);

  const showDetalji = item => {
    itemRef.current = item;
    setDetalji(true);
  };

  const closeDetalji = () => {
    setDetalji(false);
  };

  return (
    <>
      <Hero title={titles[lang]} srcset={srcset} />
      {(detalji && (
        <Detalji data={itemRef.current} onCloseDetalji={() => closeDetalji()} />
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
                <div data-aos='fade' data-aos-duration='1000'>
                  <section
                    className={`container m-t-xs-20-xl-40 text-center section-1`}
                  >
                    <div className='w3-card-4 d-grid'>
                      <div className='item-1'>
                        <img className='img-flex' src={item.SlikaPath} />
                      </div>
                      <article className='item-2'>
                        <h2 className='p-0-20 post-title content-1-light1'>
                          {item.Naslov2 || '- Datum izložbe -'}
                        </h2>
                        <section className='p-xs-20-l-40'>
                          <h1 className='header-1'>{item.Naslov1}</h1>
                          <p
                            className='content-1'
                            dangerouslySetInnerHTML={{
                              __html: item.KratkiTekst1
                            }}
                          ></p>
                        </section>
                      </article>
                    </div>
                  </section>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
      )}
    </>
  );
};

export default aktivnosti;
