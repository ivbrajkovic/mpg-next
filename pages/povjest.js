// Povjest page

import React from 'react';
// import fetchDataAsync from '../lib/fetchDataAsynNew';
// import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';

import Hero from '../components/Hero';

const srcset = [
  '/static/img/povjest/baner-kontakt-768px.jpg',
  '/static/img/povjest/baner-kontakt-1200px.jpg',
  '/static/img/povjest/baner-kontakt.jpg'
];

const gallery = [
  'Informativna ploča - Narodni muzej Pazin -, 1956., inv.br. 638.jpg',
  'Narodni muzej Pazin - otvorenje stalnog postava etnografije, 1961., inv.br. 95.jpg',
  'Narodni muzej Pazin - otvorenje stalnog postava etnografije, 1961., inv.br. 96.jpg',
  'Oznaka za muzej, 1980., inv.br. 5162.jpg'
];

const urls = {
  hr:
    'http://e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaJSON?WebStranicaID=13&StranicaID=102',
  en:
    'http://e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaJezikJSON?WebStranicaID=13&StranicaID=102&JezikID=2'
};
const povjest = ({ lang, data }) => {
  const [text, setText] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(urls[lang]);
      const data = await res.json();
      // const regex = /eCMS\/ws\/">(.*)<\/string>$/gm;
      // let m = regex.exec(data);
      // const parsed = (m && m[1] && JSON.parse(m[1])) || {};
      setText(data.Tekst);
    }
    getData();
  }, [lang]);

  const createMarkup = value => {
    return {
      __html: value
    };
  };

  return (
    <div>
      <Hero title='POVJEST MUZEJA GRADA PAZINA' srcset={srcset} />
      <div className='m-t-xs-20-xl-40 container'>
        {text && (
          <p
            className='content-1'
            dangerouslySetInnerHTML={createMarkup(text)}
          ></p>
        )}
      </div>
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

export default povjest;
