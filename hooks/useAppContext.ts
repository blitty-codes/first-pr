import { useContext } from 'react';
import { AppContext } from 'context/AppContext';

const useAppContext = () => {
   const { state, setState } = useContext(AppContext);

   const addLang = (lang: string) => {
      if (!state.lang.includes(lang)) {
         setState({ ...state, lang: [...state.lang, lang] });
      }
   };

   const removeLang = (language: string) => {
      const lang = state.lang.filter((item) => item != language);

      console.log(lang, language);

      setState({ ...state, lang });
   };

   return { state, addLang, removeLang };
};

export default useAppContext;
