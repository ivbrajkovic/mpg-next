// Djelatnici - page

import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Spinner from '../components/Spinner/Spinner';

const srcset = [
  '/static/img/djelatnici/baner-djelatnici-768px.jpg',
  '/static/img/djelatnici/baner-djelatnici-1200px.jpg',
  '/static/img/djelatnici/baner-djelatnici.jpg'
];

const spinner = (
  <div className='m-t-xs-20-xl-40 d-flex justify-center'>
    <Spinner />
  </div>
);

const urls = {
  hr:
    'http://e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaJSON?WebStranicaID=13&StranicaID=103',
  en:
    'http://e-computing.hr/eCMS/ws/wsecms.asmx/GetStranicaJezikJSON?WebStranicaID=13&StranicaID=103&JezikID=2'
};

const djelatnici = ({ lang }) => {
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
            dangerouslySetInnerHTML={{ __html: data.Tekst }}
          ></div>
        </>
      )) ||
        spinner}
    </div>
  );
};

export default djelatnici;

/*<svg
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 612 612'
      style={{ height: 50, width: 50, fill: 'red' }}
    >
      <path
        d='M306.768,346.814h0.131c4.615,0,9.176-1.339,12.866-3.777l1.001-0.643c0.218-0.142,0.446-0.271,0.675-0.424l11.658-9.645
l278.259-229.624c-0.576-0.795-1.557-1.339-2.602-1.339H3.233c-0.751,0-1.448,0.272-2.003,0.729l291.125,239.954
C296.024,345.083,301.259,346.814,306.768,346.814z M0,133.899v340.37l208.55-168.471L0,133.899z M403.668,306.941L612,474.356
V135.031L403.668,306.941z M337.431,361.585c-8.305,6.814-19.168,10.57-30.576,10.57c-11.451,0-22.304-3.734-30.587-10.516
l-47.765-39.394L0,506.806v0.587c0,1.753,1.502,3.244,3.276,3.244h605.491c1.741,0,3.232-1.491,3.232-3.255v-0.544L383.693,323.4
L337.431,361.585z'
      />
</svg> */
