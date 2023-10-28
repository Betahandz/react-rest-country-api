import React, { useContext, createContext, useReducer } from "react";
import data from './../assets/db/data.json';
import reducer from "./reducer";
import { useEffect } from "react";



const AppContext = createContext();

const initialState = {
    countryData: data,
    searchInput: '',
    hide: true,
    index: 4,
    lightTheme: false
}

const AppProvider = ({children}) => {

    const [ state, dispatch ] = useReducer( reducer, initialState );

    useEffect(() => {
        dispatch({ type: "DISAPPEAR" })
        setTimeout(() => {
            dispatch({ type: "APPEAR" })
        }, 2000);
    }, [state.countryData])

    const updateSearch = (e) => dispatch({ type: 'INPUT', target: e, originalData: data });

    const updateIndex = (digit) => dispatch({ type: 'INDEX', indexNum: digit })

    const theme = () => dispatch({ type: 'THEME' })

    return (
        <AppContext.Provider value={{
            ...state,
            updateSearch,
            updateIndex,
            theme
        }}>
            {children}
        </AppContext.Provider>
    )
}

// customization
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppProvider as default }