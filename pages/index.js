// Naslovna page

import { useContext } from 'react';
import { LanguageContext } from '../context';

import fetchDataAsync from '../lib/fetchDataAsync';
import useRipplet from '../hooks/useRipplet';

import Novosti from '../components/Novosti/Novosti';
import Hero from '../components/Hero';

import Section3 from '../components/Index/Section3';
import Section4 from '../components/Index/Section4';
import Section5 from '../components/Index/Section5';

import store from '../components/Index/store.json';

const Index = ({ success, data }) => {
  console.log('TCL: Index -> Index', Index);

  const { lang } = useContext(LanguageContext);

  const folder = (success && data && data.folder) || '';
  const slides = (success && data && data.slides) || [];

  const section3 = (success && data && data.section3) || [];
  const section4 = (success && data && data.section4) || {};
  const section5 = (success && data && data.section5) || {};

  useRipplet();

  let i = 0;
  console.log('TCL: Index -> render: ', ++i);

  return (
    <div className='naslovna-page'>
      <Hero move srcset={store.hero.srcset} />

      <Novosti
        url={store.glavnaNovost[lang]}
        folder={store.folder}
        section='section-1'
      />

      <Novosti
        url={store.novosti[lang]}
        folder={store.folder}
        section='gap-xs-20-xl-40 d-grid section-2'
      />

      <Section3 lang={lang} folder={folder} data={section3} />
      <Section4 lang={lang} folder={folder} data={section4} slides={slides} />
      <Section5 lang={lang} folder={folder} data={section5} />
    </div>
  );
};

Index.getInitialProps = async function(context) {
  const data = await fetchDataAsync(context, 'index');
  return data;
};

export default Index;
