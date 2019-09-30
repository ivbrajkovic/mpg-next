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

const gallery = [
  'IMG_9777.JPG',
  'IMG_9778.JPG',
  'IMG_9779.JPG',
  'kasyel jama 1.JPG',
  'kasyel jama 2.JPG',
  'kasyel jama 3.JPG',
  'kasyel jama 4.JPG',
  'kasyel jama 6.JPG',
  'kasyel jama 7.JPG',
  'kasyel jama 8.JPG',
  'kasyel jama 9.JPG',
  'kasyel jama 10.JPG',
  'kasyel jama 11.JPG',
  'kasyel jama 12.JPG',
  'kasyel jama 13.JPG',
  'kasyel jama 15.JPG',
  'kasyel jama 17.JPG',
  'kasyel jama 18.JPG',
  'Pazin Kastel JD 18.jpg',
  'Pazin Kastel ulaz JD 18.jpg'
];

const urls = {
  hr:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=101&JezikID=1',
  en:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=101&JezikID=2'
};

const DELAY = 50;
const folder = '/static/img/kastel/';

const kastel = ({ lang }) => {
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
    <div className='kastel-page'>
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

export default kastel;
