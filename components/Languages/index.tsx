import useAppContext from 'hooks/useAppContext';

import Language from './Language';

const Languages = () => {
   const { state, removeLang } = useAppContext();

   return (
      <section className="flex flex-wrap">
         {state.lang.map((lang, index) => (
            <Language name={lang} key={index} removeLang={removeLang} />
         ))}
      </section>
   );
};

export default Languages;
