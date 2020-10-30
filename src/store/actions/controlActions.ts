import { Dispatch } from 'redux';
import axios from 'axios'
import { ChangeTab, CHANGE_TAB, ControlDispatchTypes, SEARCH_LIST_FAIL, SEARCH_LIST_LOADING, SEARCH_LIST_SUCCESS, SetSearch, SET_SEARCH } from './controlActionTypes';

export const changeTab = (tabValue: string) => (dispatch: Dispatch<ChangeTab>) => {
    dispatch({
        type: CHANGE_TAB,
        payload: tabValue
    })
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