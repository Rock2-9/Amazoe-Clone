import React, { createContext, useReducer, useContext } from "react";
//Prepare the dataLayer
export const StateContext = createContext();
//Wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
