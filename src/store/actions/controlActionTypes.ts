export const CHANGE_TAB = "CHANGE_TAB"
export const SET_SEARCH = "SET_SEARCH"

export type TabType = String;
export type SearchType = String;

export interface ChangeTab {
    type: typeof CHANGE_TAB,
    payload: TabType
}

export interface SetSearch {
    type: typeof SET_SEARCH,
    payload: SearchType
}

export type ControlDispatchTypes = ChangeTab | SetSearch;