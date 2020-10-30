export const ITEM_DETAILS_LOADING = 'ITEM_DETAILS_LOADING';
export const ITEM_DETAILS_SUCCESS = 'ITEM_DETAILS_SUCCESS';
export const ITEM_DETAILS_FAIL = 'ITEM_DETAILS_FAIL';
export const CLEAR_ITEM_DETAILS = 'CLEAR_ITEM_DETAILS';

export type Result = {
    id: string,
    title?: string,
    name?: string,
    poster_path: string,
    overview: string
}

export interface ItemDetailsLoading {
    type: typeof ITEM_DETAILS_LOADING
}

export interface ItemDetailsSuccess {
    type: typeof ITEM_DETAILS_SUCCESS
    payload: Result
}

export interface ItemDetailsFail {
    type: typeof ITEM_DETAILS_FAIL
}

export interface ClearItemDetails {
    type: typeof CLEAR_ITEM_DETAILS
    payload: {}
}

export type ItemDetailsDispatchTypes = ItemDetailsLoading | ItemDetailsSuccess | ItemDetailsFail | ClearItemDetails