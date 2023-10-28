const reducer = ( state, action ) => {
    const { type } = action;
    if(type === 'INPUT') {
        let val = action.target.target.value;
        return { 
            ...state,
            searchInput: val, 
            countryData: action.originalData.filter(country => {
                return country.name.toUpperCase().startsWith(val.toUpperCase());
            })
        }
    }

    if( type === "DISAPPEAR" ) {
        return { ...state, hide: true }
    }

    if(type === "APPEAR") {
        return { ...state, hide: false }
    }

    if(type === "INDEX") {
        return { ...state, index: action.indexNum }
    }

    if(type === "THEME") {
        return { ...state, lightTheme: !state.lightTheme }
    }

    return state;
}

export default reducer;