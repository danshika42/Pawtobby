import React,{createContext, useContext} from "react";
import { useLocalStorageReducer } from "../customHooks/useLocalStorage";

export const StateContext=createContext();

function StateContextProvider({reducer,children,initialState}){
    return(
        <StateContext.Provider value={useLocalStorageReducer('Pawtobbydata',initialState,reducer)}>
            {children}
        </StateContext.Provider> 
    )
}

export const useStateValue=()=>useContext(StateContext);

export default StateContextProvider;