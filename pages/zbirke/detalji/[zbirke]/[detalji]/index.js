// Zbirke - detalji

import { useEffect } from 'react';

import fetchDataAsync from '../../../../../lib/fetchDataAsync';

import Hero from '../../../../../components/Hero';

const Detalji = ({ lang, data }) => {
  const folder = (data && data.folder) || '';

  const text = (data && data[lang]) || {};
  const title = (text && text.title) || '';
  const content1 = (text && text['content-1']) || '';
  const content2 = (text && text['content-2']) || '';

  const image = (data && data.image) || '';
  const audio = (data && data.audio) || '';
  // const video = (data && data.video) || '';
  // const gallery = (data && data.gallery) || [];

  const banners =
    (data && data.banners && data.banners.map(item => folder + item)) || [];

  useEffect(() => {
    lightbox.reload();
    AOS.refreshHard();
  }, []);

  return (
    <>
      <Hero title={text.hero} srcset={banners} />
      <div
        className='m-t-xs-20-xl-40 gap-xs-20-xl-40 container detalji-page'
        data-aos='fade'
        data-aos-duration='1000'
      >
        <div className='item-1'>
          <img className='img-cover w3-card-4' src={`${folder}${image}`} />
        </div>

        <div className='item-2'>
          <div className='content-1'>
            <p>{content1}</p>
            <p>{content2}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Detalji.getInitialProps = async context => {
  const zbirke = context.query.zbirke;
  const detalji = context.query.detalji;
  const params = [zbirke, detalji];
  const data = await fetchDataAsync(context, 'zbirke/detalji', params);
  return data;

  // Zbirke.getInitialProps = async context => {
  //     const data = await fetchDataAsync(context, 'zbirke');
  //     return data;

  // console.log('TCL: Zbirke -> getInitialProps -> process.browser:', process.browser);
  // const id = (context && context.query && context.query.id) || false;
  // console.log('TCL: Zbirke -> getInitialProps -> id', id);
  // console.log('TCL: Zbirke -> getInitialProps -> context.query', context.query);
  // const url = `http://127.0.0.1:3000/api/zbirke/${id}`;
  // console.log('TCL: Zbirke -> getInitialProps -> url', url);
  // const res = await fetch(url);
  // const data = await res.json();
  // console.log('TCL: Zbirke -> getInitialProps -> data', data);
  // return true;
};

export default Detalji;
