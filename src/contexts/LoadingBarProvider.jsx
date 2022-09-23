import { createContext, useContext, useState } from 'react';

export const LoadingBarContext = createContext();
let flashTimer;

export default function LoadingBarProvider({ children }) {
  const [loadingBar, setLoadingBar] = useState(false);


  const hideLoadingBar = () => {
    setLoadingBar(false);
  };

  const showLoadingBar = () => {
    setLoadingBar(true);
  };


  return (
    <LoadingBarContext.Provider value={{loadingBar, hideLoadingBar, showLoadingBar}}>
      {children}
    </LoadingBarContext.Provider>
  );
}

export function useLoadingBar() {
  return useContext(LoadingBarContext);
}