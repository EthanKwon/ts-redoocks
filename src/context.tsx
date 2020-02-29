import React, { createContext, useState, useContext, ReactNode } from "react";

interface IpropsLang {
  setLang: React.Dispatch<React.SetStateAction<string>>;
  t: (text: string) => string | undefined;
}

const LangContext = createContext({} as IpropsLang);

interface typeLang {
  defaultLang: string;
  children?: ReactNode;
  translations: any;
}

const Lang = ({ defaultLang, children, translations }: typeLang) => {
  const [lang, setLang] = useState(defaultLang);

  const hyperTranslate = (text: string) => {
    if (lang === defaultLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };

  return (
    <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useChangeLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const useT = () => {
  const { t } = useContext(LangContext);
  return t;
};

export default Lang;
