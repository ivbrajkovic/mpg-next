// Dokumenti - page

import { useEffect, useState } from 'react';
import showSpinner from '../lib/showSpinner';
import Hero from '../components/Hero';

const srcset = [
  '/static/img/dokumenti/baner-dokumenti-768px.jpg',
  '/static/img/dokumenti/baner-dokumenti-1200px.jpg',
  '/static/img/dokumenti/baner-dokumenti.jpg'
];

const urls = {
  hr:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=30&JezikID=1',
  en:
    'http://www.e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaWebJSON?WebStranicaID=13&StranicaID=30&JezikID=2'
};

const dokumenti = ({ lang }) => {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(urls[lang]);
      const data = await res.json();
      setData(data);
    }
    getData();
  }, [lang]);

  return (
    <div className='djelatnici-page'>
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
    </div>
  );
};

export default dokumenti;
