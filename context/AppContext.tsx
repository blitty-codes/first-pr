import React, { useState } from 'react';

type AppContextState = { lang: Array<string> };

// renamed `initialState` to `appCtxDefaultValue` to be a bit more concise
const appCtxDefaultValue = {
   state: {
      lang: ['javascript'],
   },
   setState: (state: AppContextState) => {}, // noop default callback
};

const AppContext = React.createContext(appCtxDefaultValue);

const AppProvider = ({ children }) => {
   const [state, setState] = useState(appCtxDefaultValue.state);

   return (
      <AppContext.Provider value={{ state, setState }}>
         {children}
      </AppContext.Provider>
   );
};

export { AppContext, AppProvider };
