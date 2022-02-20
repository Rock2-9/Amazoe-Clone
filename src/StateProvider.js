import React, { createContext, useContext, useRedux } from "react";

export const StateContex = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContex.Provider value={useReducer(reducer, initialState)}>
    {" "}
    {childer}
  </StateContex.Provider>
);

export const useStateValue = () => useContext(StateContex);
