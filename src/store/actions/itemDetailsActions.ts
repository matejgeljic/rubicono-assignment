import { Dispatch } from 'redux';
import axios from 'axios'
import { CLEAR_ITEM_DETAILS, ItemDetailsDispatchTypes, ITEM_DETAILS_FAIL, ITEM_DETAILS_LOADING, ITEM_DETAILS_SUCCESS } from './itemDetailsActionTypes';

export const getItemDetails = (category: String, id: string) => async (dispatch: Dispatch<ItemDetailsDispatchTypes>) => {
    try {
        dispatch({
            type: ITEM_DETAILS_LOADING
        })

        const res = await axios.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=5e045baab1a179f86b216829c62d441a`);

        dispatch({
            type: ITEM_DETAILS_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ITEM_DETAILS_FAIL
        })
    }
}

export const clearItemDetails = () => (dispatch: Dispatch<ItemDetailsDispatchTypes>) => {
    dispatch({
        type: CLEAR_ITEM_DETAILS,
        payload: {}
    })
}