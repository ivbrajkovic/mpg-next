// Odjeli page

import { useRouter } from 'next/router';
import { useState, useContext } from 'react';

import { LanguageContext } from '../../context';
import fetchDataAsync from '../../lib/fetchDataAsync';

import Hero from '../../components/Hero';
import Section1 from '../../components/Odjeli/Section1';
import Section7 from '../../components/Odjeli/Section2';

import store from '../../components/Odjeli/store.json';

const Odjel = ({ success, data }) => {
  console.log('TCL: Odjel -> Odjel', Odjel);

  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const [odjel, setOdjel] = useState(router.query.id);

  const changeOdjel = index => {
    // onSetOdjel('/odjeli', value);
    setOdjel(index);
  };

  const section7 = (success && data && data.section7) || [];
  const title = (success && data && data[lang] && data[lang].hero) || '';

  return (
    <div className='odjeli-page'>
      <Hero title={title} srcset={store.hero.srcset} />

      <Section1
        lang={lang}
        data={store.section1}
        odjel={odjel}
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
