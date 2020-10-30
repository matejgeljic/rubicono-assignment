import { Dispatch } from 'redux';
import axios from 'axios'
import { ItemListDispatchTypes, ITEM_LIST_LOADING, ITEM_LIST_SUCCESS, ITEM_LIST_FAIL } from './itemActionTypes'

export const getItems = (category: String) => async (dispatch: Dispatch<ItemListDispatchTypes>) => {
    try {
        dispatch({
            type: ITEM_LIST_LOADING
        })

        const res = await axios.get(`https://api.themoviedb.org/3/${category}/top_rated?api_key=5e045baab1a179f86b216829c62d441a`)

        dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: res.data.results.slice(0, 10)
        })

    } catch (error) {
        dispatch({
            type: ITEM_LIST_FAIL
        })
    }
}