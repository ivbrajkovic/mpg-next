// Povjest page

import { useEffect, useState } from 'react';
import preloadImages from '../lib/preloadImages';
import showSpinner from '../lib/showSpinner';

import Hero from '../components/Hero';
import GalleryItem from '../components/Gallery/GalleryItem';

const srcset = [
  '/static/img/povijest/baner-kontakt-768px.jpg',
  '/static/img/povijest/baner-kontakt-1200px.jpg',
  '/static/img/povijest/baner-kontakt.jpg'
];

const urls = {
  hr:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=102&JezikID=1',
  en:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=102&JezikID=2'
};

const DELAY = 50;

const povjest = ({ lang }) => {
  const [data, setData] = useState();
  const [hero, setHero] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(urls[lang]);
      const data = await res.json();
      // setData(data);

      setHero(data.Naziv);
      setData(null);

      for await (let p of parseDataGenerator(data.Tekst)) {
        setData(v => (v && [...v, p]) || p);
        // console.log('TCL: getData -> p', p);
      }
    }
    getData();
  }, [lang]);

  useEffect(() => {
    AOS.refreshHard();
    lightbox.reload();
  }, [data]);

  async function* parseDataGenerator(data) {
    const lv1 = data.split('**newline**');

    let key = 0;
    for (let i = 0; i < lv1.length; i++) {
      const ret = [];
      const lv2 = lv1[i].split('**gallery**');

      for (let j = 0; j < lv2.length; j++) {
        if (j == 0)
          // Push conetnt
          ret.push(
            <div
              key={key++}
              className='container m-t-xs-20-xl-40 content-1'
              data-aos='fade'
              data-aos-duration='1000'
              dangerouslySetInnerHTML={{ __html: lv2[0] }}
            ></div>
          );
        else if (j == 1) {
          // Get gallery from local folder
          const path = lv2[1].substring(0, lv2[1].indexOf('**/gallery**'));
          const res = await fetch(`/api/gallery?folder=${path}`);
          const data = await res.json();

          const thumbs =
            (data.data &&
              data.data.map(item =>
                item.replace(/(.*)(\.jpg|\.png)/gim, '$1-tmb$2')
              )) ||
            [];

          // Preload images
          const preload = await preloadImages(thumbs);
          // console.log('TCL: function*parseDataGenerator -> preload', preload);

          // Push gallery
          ret.push(
            <div key={key++} data-aos=''>
              <div className='container m-t-xs-20-m-40 d-grid xs-2-col-l-3-col gap-xs-20-xl-30 gallery-fade-bottom'>
                {data.data &&
                  data.data.map((item, index) => {
                    return (
                      <GalleryItem
                        key={index}
                        // thumb={item.replace(/(.*)(\.jpg|\.png)/gim, '$1-tmb$2')}
                        thumb={thumbs[index]}
                        large={item}
                        style={{ transitionDelay: `${index * DELAY}ms` }}
                      />
                    );
                  })}
              </div>
            </div>
          );
        }
      }
      // console.log('TCL: function* parseDataGenerator -> ret[i]', ret[i]);
      yield ret;
    }
  }

  return (
    <div className='povjest-page'>
      {(data && (
        <>
          {/* // Hero */}
          <Hero title={hero} srcset={srcset} />
          {/* // Content from CMS */}
          {data}
        </>
      )) ||
        // Show loading spinner
        showSpinner('m-t-xs-20-xl-40 d-flex justify-center')}
    </div>
  );
};

export default povjest;
