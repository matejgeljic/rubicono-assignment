import { ItemDetailsDispatchTypes, ITEM_DETAILS_FAIL, ITEM_DETAILS_LOADING, ITEM_DETAILS_SUCCESS, CLEAR_ITEM_DETAILS, Result } from '../actions/itemDetailsActionTypes'

interface InitialStateI {
    loading: boolean,
    item?: Result
}

const initialState: InitialStateI = {
    loading: false
}

const itemDetailsReducer = (state: InitialStateI = initialState, action: ItemDetailsDispatchTypes): InitialStateI => {
    switch (action.type) {
        case ITEM_DETAILS_LOADING:
            return {
                loading: true
            }
        case ITEM_DETAILS_SUCCESS:
            return {
                loading: false,
                item: action.payload
            }
        case ITEM_DETAILS_FAIL:
            return {
                loading: false
            }
        case CLEAR_ITEM_DETAILS:
            return {
                loading: false,
                item: undefined
            }
        default:
            return state
    }
}


export default itemDetailsReducer