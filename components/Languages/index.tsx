import { AppContext } from 'context/AppContext';
import useAppContext from 'hooks/useAppContext';
import { useContext } from 'react';
import Language from './Language';

const Languages = () => {
   const { state } = useAppContext();

   return (
      <section className="flex">
         {state.lang.map((lang, index) => (
            <Language name={lang} key={index} />
         ))}
      </section>
   );
};

export default Languages;
