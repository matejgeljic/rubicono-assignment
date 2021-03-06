import { CHANGE_TAB, CLEAR_SEARCH_LIST, ControlDispatchTypes, SearchResultsType, SearchType, SEARCH_LIST_FAIL, SEARCH_LIST_LOADING, SEARCH_LIST_SUCCESS, SET_SEARCH, TabType } from "../actions/controlActionTypes"

interface InitialStateI {
    currentTab: TabType,
    search: SearchType,
    searchLoading: boolean,
    items: SearchResultsType
}

const initialState: InitialStateI = {
    currentTab: 'movie',
    search: '',
    searchLoading: false,
    items: []
}

const controlReducer = (state: InitialStateI = initialState, action: ControlDispatchTypes): InitialStateI => {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                currentTab: action.payload
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case SEARCH_LIST_LOADING:
            return {
                ...state,
                searchLoading: true
            }
        case SEARCH_LIST_SUCCESS:
            return {
                ...state,
                searchLoading: false,
                items: action.payload

            }
        case SEARCH_LIST_FAIL:
            return {
                ...state,
                searchLoading: false
            }
        case CLEAR_SEARCH_LIST:
            return {
                ...state,
                items: []
            }
        default:
            return state
    }
}

export default controlReducer