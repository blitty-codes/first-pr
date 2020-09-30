import 'styles/global.css';
import 'tailwindcss/tailwind.css';
import 'components/Repos/Repo/style.css';

import { AppProvider } from 'context/AppContext';

function App({ Component, pageProps }) {
   return (
      <AppProvider>
         <Component {...pageProps} />
      </AppProvider>
   );
}

export default App;
