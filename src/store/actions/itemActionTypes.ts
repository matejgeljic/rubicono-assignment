export const ITEM_LIST_LOADING = 'ITEM_LIST_LOADING';
export const ITEM_LIST_SUCCESS = 'ITEM_LIST_SUCCESS';
export const ITEM_LIST_FAIL = 'ITEM_LIST_FAIL';

export type ItemType = Result[]

export type Result = {
    id: string,
    title?: string,
    name?: string,
    poster_path: string,
    vote_average?: number,
    number_of_seasons?: number,
    runtime?: number,
    release_date?: Date,
    first_air_date?: Date
}

export interface ItemListLoading {
    type: typeof ITEM_LIST_LOADING
}

export interface ItemListSuccess {
    type: typeof ITEM_LIST_SUCCESS,
    payload: ItemType

}

export interface ItemListFail {
    type: typeof ITEM_LIST_FAIL
}

export type ItemListDispatchTypes = ItemListLoading | ItemListSuccess | ItemListFail