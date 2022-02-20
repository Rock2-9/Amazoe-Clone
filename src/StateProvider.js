import React, { createContext, useReducer, useContext, useRedux } from "react";
//Prepare the dataLayer
export const StateContex = createContext();
//Wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContex.Provider value={useReducer(reducer, initialState)}>
    {" "}
    {children}
  </StateContex.Provider>
);

export const useStateValue = () => useContext(StateContex);
