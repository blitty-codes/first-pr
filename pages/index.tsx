import Head from 'next/head';

import Languages from 'components/Languages';
import useAppContext from 'hooks/useAppContext';

export default function Home() {
   const { addLang, state } = useAppContext();

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
                     onClick={() => addLang('test')}
                     placeholder="lang"
                     className="bg-gray-200 rounded px-4 py-2 w-64  focus:border-red-400"
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
