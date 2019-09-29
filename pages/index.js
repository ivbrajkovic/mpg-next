// Home page

import { useEffect, useState } from 'react';
// import { Transition } from 'react-transition-group';
// import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

import fetchDataAsync from '../lib/fetchDataAsync';
import preloadImages from '../lib/preloadImages';
import isLocalImage from '../lib/isLocalImage';

import Hero from '../components/Hero';
import Spinner from '../components/Spinner/Spinner';
import Section1 from '../components/Index/Section1';
import Section2 from '../components/Index/Section2';
import Section3 from '../components/Index/Section3';
import Section4 from '../components/Index/Section4';
import Section5 from '../components/Index/Section5';

const srcset = [
  '/static/img/pocetna/baner-pocetna-768px.jpg',
  '/static/img/pocetna/baner-pocetna-1200px.jpg',
  '/static/img/pocetna/baner-pocetna.jpg'
];

const glavnaNovost = {
  hr:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetNovostiKategorijeJezikTopNJSON?WebStranicaID=13&KategorijaID=11&JezikID=1&TopN=1',
  en:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetNovostiKategorijeJezikTopNJSON?WebStranicaID=13&KategorijaID=11&JezikID=2&TopN=1'
};

const novosti = {
  hr:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetNovostiKategorijeJezikTopNJSON?WebStranicaID=13&KategorijaID=1&JezikID=1&TopN=3',
  en:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetNovostiKategorijeJezikTopNJSON?WebStranicaID=13&KategorijaID=1&JezikID=2&TopN=3'
};

const folderNovosti = '/static/img/Novosti/';

let buttons = null;

const Index = ({ lang, success, data }) => {
  const [loaded, setLoaded] = useState(false);

  const folder = (success && data && data.folder) || '';
  const slides = (success && data && data.slides) || [];

  // const section1 = (success && data && data.section1) || [];
  // const section2 = (success && data && data.section2) || [];
  const section3 = (success && data && data.section3) || [];
  const section4 = (success && data && data.section4) || {};
  const section5 = (success && data && data.section5) || {};

  const [section1, setSection1] = useState();
  const [section2, setSection2] = useState();

  useEffect(() => {
    // ripplet.defaultOptions.color = "rgba(255, 255, 255, .2)";
    buttons = document.querySelectorAll('.btn');
    buttons &&
      buttons.forEach(btn => {
        btn.addEventListener('mousedown', ripplet);
      });

    return () => {
      buttons &&
        buttons.forEach(btn => {
          btn.removeEventListener('mousedown', ripplet);
        });
    };
  }, [loaded]);

  useEffect(() => {
    async function getGlavnaNovost() {
      const res = await fetch(glavnaNovost[lang]);
      const data = await res.json();

      if (data && data[0]) {
        const slika = data[0].SlikaPath1;
        // const slika = data[0].SlikaPath;
        if (slika) {
          preloadImages([folderNovosti + slika]).then(value => {
            data[0].SlikaPath = folderNovosti + data.SlikaPath;
            setSection1(data[0]);
          });
        } else {
          data[0].SlikaPath = 'https://via.placeholder.com/555x321';
          setSection1(data[0]);
        }
      }
    }
    getGlavnaNovost();

    // async function getNovosti(url) {
    //   const res = await fetch(url);
    //   const data = await res.json();

    //   if (data) {
    //     const slike = data.forEach(item => folderNovosti + item.SlikaPath);
    //     if (slike) {
    //       preloadImages([folderNovosti + slika]).then(value => {
    //         data[0].SlikaPath = folderNovosti + data.SlikaPath;
    //         setSection1(data[0]);
    //       });
    //     } else {
    //       data[0].SlikaPath = 'https://via.placeholder.com/555x321';
    //       setSection1(data[0]);
    //     }
    //   }
    // }
    // getNovosti(glavnaNovost[lang]);
    // const image =
    //   (success && data && data.section1 && data.section1.src) || null;
    // console.log('TCL: Index -> image', image);

    // // preload post-big image
    // image &&
    //   preloadImages([isLocalImage ? folder + image : image]).then(value =>
    //     // setDbData(data)
    //     {
    //       setLoaded(true);
    //       console.log('TCL: Index -> preloadImages -> then()', image);
    //     }
    //   );
  }, [lang]);

  let i = 0;
  console.log('TCL: Index -> render: ', ++i);

  const showSpinner = () => (
    <div className='m-t-120 d-flex justify-center'>
      <Spinner />
    </div>
  );

  return (
    // <Transition in={inProp} timeout={duration} mountOnEnter unmountOnExit>
    // <div style={{ minHeight: "90vh" }}>
    <div>
      <Hero move srcset={srcset} />
      {(section1 && <Section1 lang={lang} folder={folder} data={section1} />) ||
        showSpinner()}
      {(section1 && section2 && (
        <Section2 lang={lang} folder={folder} data={section2} />
      )) ||
        showSpinner()}
      <Section3 lang={lang} folder={folder} data={section3} />
      <Section4 lang={lang} folder={folder} data={section4} slides={slides} />
      <Section5 lang={lang} folder={folder} data={section5} />

      {/* <Section1 lang={lang} folder={folder} data={section1} />
            <Section2 lang={lang} folder={folder} data={section2} />
            <Section3 lang={lang} folder={folder} data={section3} />
            <Section4 lang={lang} folder={folder} data={section4} slides={slides} />
            <Section5 lang={lang} folder={folder} data={section5} /> */}
    </div>
    // {/* // </Transition> */}
  );
};

Index.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, 'index');
  // const data = {};
  // data.data = {};
  // data.data.banners = [
  //   "/static/img/pocetna/baner-pocetna-768px.jpg",
  //   "/static/img/pocetna/baner-pocetna-1200px.jpg",
  //   "/static/img/pocetna/baner-pocetna.jpg"
  // ];
  return data;
};

export default Index;
