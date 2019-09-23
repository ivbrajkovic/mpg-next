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
    return { __html: data.test };
  };

  return (
    <div>
      <Hero title={title} srcset={srcset} />
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
};

kastel.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, '/api/new?page=kastel');
  return data;
};

export default kastel;
