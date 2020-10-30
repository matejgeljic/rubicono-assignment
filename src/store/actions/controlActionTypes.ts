export const CHANGE_TAB = "CHANGE_TAB"
export const SET_SEARCH = "SET_SEARCH"
export const SEARCH_LIST_LOADING = 'SEARCH_LIST_LOADING';
export const SEARCH_LIST_SUCCESS = 'SEARCH_LIST_SUCCESS';
export const SEARCH_LIST_FAIL = 'SEARCH_LIST_FAIL';
export const CLEAR_SEARCH_LIST = 'CLEAR_SEARCH_LIST'

export type SearchResultsType = SearchResult[]

export type SearchResult = {
    id: string,
    title?: string,
    name?: string,
    poster_path: string
}

export type TabType = string;
export type SearchType = string;

export interface SearchListLoading {
    type: typeof SEARCH_LIST_LOADING
}

export interface SearchListSuccess {
    type: typeof SEARCH_LIST_SUCCESS,
    payload: SearchResultsType
}

export interface SearchListFail {
    type: typeof SEARCH_LIST_FAIL
}

export interface ClearSearchList {
    type: typeof CLEAR_SEARCH_LIST,
    payload: []
}

export interface ChangeTab {
    type: typeof CHANGE_TAB,
    payload: TabType
}

export interface SetSearch {
    type: typeof SET_SEARCH,
    payload: SearchType
}

export type ControlDispatchTypes = ChangeTab | SetSearch | SearchListLoading | SearchListSuccess | SearchListFail | ClearSearchList;