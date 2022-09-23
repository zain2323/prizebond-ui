import { createContext, useContext, useState } from 'react';

export const ProgressBarContext = createContext();

export default function ProgressBarProvider({ children }) {
  const [progressBar, setProgressBar] = useState(false);

 
  // const hide = () => {
  //   setProgressBar(false);
  // };

  // const show = () => {
  //   setProgressBar(true);
  // };

  return (
    <ProgressBarContext.Provider value={{ progressBar}}>
      {children}
    </ProgressBarContext.Provider>
  );
}

export function usepg() {
  return useContext(ProgressBarContext);
}