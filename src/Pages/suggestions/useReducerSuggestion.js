export const INITIAL_STATE = {
    selectValue: "Phone",
    count: "",
    searchBrand: "",
    arrayFilterName: [],
    show: false
}

export const INITIAL_TYPE = {
    CHANGE_SELECTED_VALUE: "change_selected_value",
    COUNT_MONEY_FOR_FILTERING: "count_money_for_filtering",
    SEARCH_BRAND: "search_brand",
    FILTER_ARRAY_NAME: "filter_array_name",
    LOGICAL_INSTRUMENT: "logical_instrument"
}

export const useReducers = (state, action) => {
    switch(action.type){
        case INITIAL_TYPE.CHANGE_SELECTED_VALUE :{
            return {...state, selectValue: action.payload.selectValue}
        }
        case INITIAL_TYPE.COUNT_MONEY_FOR_FILTERING :{
            return {...state, count: action.payload.count}
        }
        case INITIAL_TYPE.SEARCH_BRAND: {
            return {...state, searchBrand: action.payload.brandName}
        }
        case INITIAL_TYPE.FILTER_ARRAY_NAME: {
            const searchCertainName = action.payload.arrayFilterName.filter(r => r.title.toLowerCase().includes(state.searchBrand.toLowerCase()))
            return {...state, arrayFilterName: searchCertainName}
        }
        case INITIAL_TYPE.LOGICAL_INSTRUMENT: {
            if(state.count !== ""){
                return {...state, show: true}
            }
            return {...state, show: false}
        }
        default: 
            return state;
    }
}