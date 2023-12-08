import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <StateContext.Provider value={{ darkmode, setDarkmode }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
