import { CLEAR_ITEM_LIST, ItemListDispatchTypes, ItemType, ITEM_LIST_FAIL, ITEM_LIST_LOADING, ITEM_LIST_SUCCESS } from '../actions/itemActionTypes'

interface InitialStateI {
    loading: boolean,
    items?: ItemType
}

const initialState: InitialStateI = {
    loading: false
}

const itemReducer = (state: InitialStateI = initialState, action: ItemListDispatchTypes): InitialStateI => {
    switch (action.type) {
        case ITEM_LIST_LOADING:
            return {
                loading: true
            }
        case ITEM_LIST_SUCCESS:
            return {
                loading: false,
                items: action.payload
            }
        case ITEM_LIST_FAIL:
            return {
                loading: false
            }
        case CLEAR_ITEM_LIST:
            return {
                loading: false,
                items: []
            }
        default:
            return state
    }
}

export default itemReducer;