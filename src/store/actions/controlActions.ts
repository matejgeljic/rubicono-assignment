import { Dispatch } from 'redux';
import axios from 'axios'
import { CHANGE_TAB, CLEAR_SEARCH_LIST, ControlDispatchTypes, SEARCH_LIST_FAIL, SEARCH_LIST_LOADING, SEARCH_LIST_SUCCESS, SetSearch, SET_SEARCH } from './controlActionTypes';

export const changeTab = (tabValue: string, searchQuerry: string) => async (dispatch: Dispatch<ControlDispatchTypes>) => {
    dispatch({
        type: CHANGE_TAB,
        payload: tabValue
    })

    try {
        dispatch({
            type: SEARCH_LIST_LOADING
        })
        let res: any;

        if (searchQuerry.length >= 3) {
            res = await axios.get(`https://api.themoviedb.org/3/search/${tabValue}?api_key=5e045baab1a179f86b216829c62d441a&query=${searchQuerry}`)
        }

        dispatch({
            type: SEARCH_LIST_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        dispatch({
            type: SEARCH_LIST_FAIL
        })
    }

}


export const setSearch = (searchQuerry: string) => (dispatch: Dispatch<SetSearch>) => {
    dispatch({
        type: SET_SEARCH,
        payload: searchQuerry
    })
}

export const searchItems = (category: String, searchQuerry: string) => async (dispatch: Dispatch<ControlDispatchTypes>) => {
    try {
        dispatch({
            type: SEARCH_LIST_LOADING
        })
        let res: any;

        if (searchQuerry.length >= 3) {
            res = await axios.get(`https://api.themoviedb.org/3/search/${category}?api_key=5e045baab1a179f86b216829c62d441a&query=${searchQuerry}`)
        }

        dispatch({
            type: SEARCH_LIST_SUCCESS,
            payload: res.data.results
        })

    } catch (error) {
        dispatch({
            type: SEARCH_LIST_FAIL
        })
    }
}

export const clearSearchItems = () => (dispatch: Dispatch<ControlDispatchTypes>) => {
    dispatch({
        type: CLEAR_SEARCH_LIST,
        payload: []
    })
}