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

const gallery = [
  'Informativna ploča -Narodni muzej Pazin-, 1956., inv. br. 638.jpg',
  'Narodni muzej Pazin - otvorenje stalnog postava etnografije, 1961., inv. br. 95.jpg',
  'Narodni muzej Pazin - otvorenje stalnog postava etnografije, 1961., inv. br. 96.jpg',
  'Oznaka za muzej, 1980., inv. br. 5162.jpg'
];

const urls = {
  hr:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=102&JezikID=1',
  en:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=102&JezikID=2'
};

const DELAY = 50;
const folder = '/static/img/povijest/';

const povijest = ({ lang }) => {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const images = gallery.map(
      item => folder + item.replace(/(.*)(\.jpg|\.png)/gim, '$1-tmb$2')
    );
    preloadImages(images)
      .then(() => setLoaded(true))
      .catch(err =>
        console.log('TCL: Stalni postav -> preloadImages -> err():', err)
      );
  }, []);

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
  }, [loaded]);

  return (
    <div className='povijest-page'>
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

      {data && loaded && (
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
      )}
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

export default povijest;
