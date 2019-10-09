// Navbar - Language

import { useContext } from 'react';
import { LanguageContext } from '../../context';

const Language = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className='language'>
      <div
        className={lang === 'hr' ? 'active' : ''}
        onClick={() => setLang('hr')}
      >
        HR
      </div>
      {' | '}
      <div
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
      >
        EN
      </div>
    </div>
  );
};

export default Language;
