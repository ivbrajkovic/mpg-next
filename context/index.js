// Language

import { useState } from 'react';

export const LanguageContext = React.createContext();

const Language = ({ children }) => {
  const [lang, setLang] = useState('hr');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;
