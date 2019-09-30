// Knjiznica page

import { useEffect, useState } from 'react';
// import preloadImages from '../lib/preloadImages';
import showSpinner from '../lib/showSpinner';

import Hero from '../components/Hero';
// import GalleryItem from '../components/Gallery/GalleryItem';

const srcset = [
  '/static/img/knjiznica/baner-knjiznica-768px.jpg',
  '/static/img/knjiznica/baner-knjiznica-1200px.jpg',
  '/static/img/knjiznica/baner-knjiznica.jpg'
];

// const gallery = [
//   '001.JPG',
//   '002.JPG',
//   'F 83-2019.JPG',
//   'F 84-2019.JPG',
//   'F 85-2019.JPG',
//   'F 86-2019.JPG',
//   'F 87-2019.JPG',
//   'Motovun1.jpg',
//   'Motovun2.jpg',
//   'Motovun3.jpg',
//   'Motovun4.jpg',
//   'ožujak_lov na blago.jpg',
//   'ožujak_lov.jpg'
// ];

const urls = {
  hr:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=109&JezikID=1',
  en:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=109&JezikID=2'
};

// const DELAY = 50;
// const folder = '/static/img/edukacija/';

const knjiznica = ({ lang }) => {
  const [data, setData] = useState();
  // const [loaded, setLoaded] = useState(false);

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
      setData(data);
    }
    getData();
  }, [lang]);

  useEffect(() => {
    AOS.refreshHard();
    lightbox.reload();
  }, [data]);

  return (
    <div className='edukacija-page'>
      {(data && (
        <>
          {/* // Hero */}
          <Hero title={data.Naziv} srcset={srcset} />
          {/* // Content from CMS */}
          <div
            className='container m-t-xs-20-xl-40 content-1'
            data-aos='fade'
            data-aos-duration='1000'
            dangerouslySetInnerHTML={{ __html: data.Tekst }}
          ></div>
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

export default knjiznica;
