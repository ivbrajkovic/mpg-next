// Odjeli

import { useEffect } from 'react';
import fetchDataAsync from '../lib/fetchDataAsync';

import Hero from '../components/Hero';
import Section6 from '../components/Odjeli/Section1';
import Section7 from '../components/Odjeli/Section2';

const srcset = [
  '/static/img/odjeli/baner-odjeli-768px.jpg',
  '/static/img/odjeli/baner-odjeli-1200px.jpg',
  '/static/img/odjeli/baner-odjeli.jpg'
];

const Odjel = ({ lang, odjel, onSetOdjel, success, data }) => {
  useEffect(() => {
    const buttons = document.querySelectorAll('.odjeli-page .menu-item');
    buttons &&
      buttons.forEach(btn => {
        btn.addEventListener('mousedown', ripplet);
      });

    AOS.refreshHard();

    return () => {
      buttons &&
        buttons.forEach(btn => {
          btn.removeEventListener('mousedown', ripplet);
        });
    };
  }, []);

  const changeOdjel = value => {
    onSetOdjel('/odjeli', value);
  };

  let i = 0;
  console.log('TCL: Odjeli -> render: ', ++i);

  const section6 = (success && data && data.section6) || {};
  const section7 = (success && data && data.section7) || [];
  const title = (success && data && data[lang] && data[lang].hero) || '';

  return (
    <div className='odjeli-page'>
      <Hero title={title} srcset={srcset} />
      <Section6
        lang={lang}
        odjel={odjel}
        data={section6}
        onChangeOdjel={changeOdjel}
      />
      <Section7 lang={lang} odjel={odjel} data={section7} />
    </div>
  );
};

Odjel.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, 'odjeli');
  return data;
};

export default Odjel;
