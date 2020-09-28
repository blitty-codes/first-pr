import { KeyboardEvent, useRef } from 'react';
import Head from 'next/head';

import Languages from 'components/Languages';
import useAppContext from 'hooks/useAppContext';

export default function Home() {
   const { addLang } = useAppContext();
   const inputRef = useRef(null);

   const onInputKeyPress = (event: KeyboardEvent<HTMLElement>) => {
      const { value } = inputRef.current;

      if (event.key === 'Enter' && value) {
         addLang(value);
      }
   };

   return (
      <div className="grid bg-white">
         <Head>
            <title>First-PR</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="m-8">
            <nav className="flex justify-between place-items-center pb-4">
               <h1 className="uppercase font-bold text-3xl bg-green-300 px-4">
                  First-PR
               </h1>

               <div>
                  <input
                     ref={inputRef}
                     onKeyDown={onInputKeyPress}
                     placeholder="lang"
                     className="bg-gray-200 rounded px-4 py-2 w-64  focus:border-red-400 transition duration-500 ease-in-out transform focus:-translate-y-1 focus:scale-105"
                  />
               </div>
            </nav>
            <div className="flex">
               <Languages />
            </div>
         </main>

         <footer></footer>
      </div>
   );
}
