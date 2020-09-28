import { AppContext } from 'context/AppContext';
import { useContext, useReducer } from 'react';

interface State {
   langs: Array<string>;
}

interface ReducerProps {
   state: State;
   action: any;
}

const languageReducer = (state: State, action: any) => {
   switch (action.type) {
      case 'ADD':
         console.log(action);
         const langs = state.langs.push(action.lang);
         console.log(langs);

         return { ...state, langs: ['test'] };

      default:
         return state;
   }
};

const init = (): State => {
   return {
      langs: ['javascript'],
   };
};

const useAppContext = () => {
   const [stat, dispatch] = useReducer(languageReducer, { langs: [] }, init);
   const { state, setState } = useContext(AppContext);

   const addLang = (lang: string) => {
      dispatch({ type: 'ADD', lang });

      setState({ ...state, lang: [...state.lang, lang] });
   };

   return { state, addLang, stat };
};

export default useAppContext;
