// Povjest page

import { useEffect, useState } from 'react';
import preloadImages from '../lib/preloadImages';
import showSpinner from '../lib/showSpinner';

import Hero from '../components/Hero';
import GalleryItem from '../components/Gallery/GalleryItem';

const srcset = [
  '/static/img/kastel/baner-pazinski-kastel-768px.jpg',
  '/static/img/kastel/baner-pazinski-kastel-1200px.jpg',
  '/static/img/kastel/baner-pazinski-kastel.jpg'
];

const urls = {
  hr:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=101&JezikID=1',
  en:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=101&JezikID=2'
};

const DELAY = 50;
// const folder = '/static/img/kastel/';

const kastel = ({ lang }) => {
  const [data, setData] = useState();
  const [hero, setHero] = useState();
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const images = gallery.map(
  //     item => folder + item.replace(/(.*)(\.jpg|\.png)/gim, '$1-tmb$2')
  //   );
  //   preloadImages(images)
  //     .then(() => setLoaded(true))
  //     .catch(err =>
  //       console.log('TCL: Stalni postav -> preloadImages -> err():', err)
  //     );
  // }, []);

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
    // const ret = [];
    const lv1 = data.split('**eNewline**');

    let key = 0;
    for (let i = 0; i < lv1.length; i++) {
      const ret = [];
      const lv2 = lv1[i].split('**eGallery**');

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
    // setData(ret);
  }

  return (
    <div className='kastel-page'>
      {(data && (
        <>
          {/* // Hero */}
          <Hero title={hero} srcset={srcset} />
          {/* // Content from CMS */}
          {data}
        </>
      )) ||
        showSpinner('m-t-xs-20-xl-40 d-flex justify-center')}

      {/* {data && loaded && (
        <div data-aos=''>
          <div className='container m-t-xs-20-xl-40 d-grid xs-2-col-l-3-col gap-xs-20-xl-30 gallery-fade-bottom'>
            {gallery.map((item, index) => {
              return (
                <GalleryItem
                  key={index}
                  thumb={
                    folder + item.replace(/(.*)(\.jpg|\.png)/gim, '$1-tmb$2')
                  }
                  large={folder + item}
                  style={{ transitionDelay: `${index * DELAY}ms` }}
                />
              );
            }) || showSpinner('m-t-xs-20-xl-40 d-flex justify-center')}
          </div>
        </div>
      )} */}
    </div>
  );
};

// povjest.getInitialProps = async function(context) {
// const data = await fetchDataAsync(context, '/api/new?page=kastel');
// const res = await fetch(
//   'http://e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaJSON?WebStranicaID=13&StranicaID=102'
// );
// const data = await res.text();
// // const data = await res.json();
// console.log('TCL: getInitialProps -> data', data);

//   return 'data';
// };

export default kastel;
