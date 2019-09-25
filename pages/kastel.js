// import React from 'react'
import { useEffect, useLayoutEffect, useState } from 'react';

import fetchDataAsync from '../lib/fetchDataAsynNew';
import preloadImages from '../lib/preloadImages';
import getContentFromJson from '../lib/getContentFromJson';
import getFilesFromGallery from '../lib/getFilesFromGallery';
import GalleryItem from '../components/Gallery/GalleryItem';
import Spinner from '../components/Spinner/Spinner';

import Hero from '../components/Hero';

const srcset = [
  '/static/img/kastel/baner-kastel-768px.jpg',
  '/static/img/kastel/baner-kastel-1200px.jpg',
  '/static/img/kastel/baner-kastel.jpg'
];

const kastel = ({ lang, data }) => {
  console.log('TCL: kastel -> data', data);

  const folder = (data && data.folder) || '';
  const gallery = (data && data.gallery) || '';

  const title = (data && data[lang] && data[lang].hero) || '';
  const section1 = (data && data[lang] && data[lang].section1) || [];
  const section2 = (data && data[lang] && data[lang].section2) || [];

  const [thumbs, larges] = getFilesFromGallery(folder, gallery);
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    preloadImages(thumbs)
      .then(() => setLoaded(true))
      .catch(err =>
        console.log('TCL: Stalni postav -> preloadImages -> err():', err)
      );
  }, []);

  useEffect(() => {
    AOS.refreshHard();
    lightbox.reload();
  }, [loaded]);

  const createMarkup = () => {
    // return { __html: 'This is a <i>test</i>, and ...' };
    console.log('TCL: createMarkup -> data.test', data.test);
    return {
      __html:
        'Muzej Grada Pazina ove se godine pridružio brojnim ustanovama i organizacijama u obilježavanju Dana europske ba\u0026scaron;tine i to organizacijom \u003cstrong\u003e\u003cem\u003efoto natječaja \u0026bdquo;Iz mog kuta\u0026hellip;\u0026ldquo; \u003c/em\u003e\u003c/strong\u003eu \u003cem\u003e\u003cstrong\u003epartnerstvu s Dru\u0026scaron;tvom likovnih stvaratelja Pazin\u003c/strong\u003e\u003c/em\u003e. Svrha je foto natječaja bila upoznati javnost s raznoliko\u0026scaron;ću i bogatstvom prirodne i kulturne ba\u0026scaron;tine sredi\u0026scaron;nje Istre zabilježenom iz drugačijih kutova no \u0026scaron;to smo navikli\u0026hellip;\u003cbr /\u003e\n\u0026nbsp;',
      Tekst:
        '\u003cbr /\u003e\nPo zavr\u0026scaron;etku natječaja žiri je ocijenio pristigle fotografije od kojih će one s najvi\u0026scaron;im brojem bodova \u003cem\u003e\u003cstrong\u003ebiti izložene u Likovnoj galeriji Pazin od 30. rujna do 5. listopada 2019. godine.\u003c/strong\u003e\u003c/em\u003e Autorima fotografija s najvi\u0026scaron;im brojem bodova biti će uručene simbolične nagrade.'
    };
  };
  // const createMarkup = () => {
  //   // return { __html: 'This is a <i>test</i>, and ...' };
  //   console.log('TCL: createMarkup -> data.test', data.test);
  //   return { __html: data.test };
  // };

  return (
    <div>
      <Hero title={title} srcset={srcset} />
      <div className='container' dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
};

kastel.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, '/api/new?page=kastel');
  return data;
};

export default kastel;
