import { ChangeTab, CHANGE_TAB, TabType } from "../actions/controlActionTypes"

interface InitialStateI {
    currentTab: TabType
}

const initialState: InitialStateI = {
    currentTab: 'movie'
}

const controlReducer = (state: InitialStateI = initialState, action: ChangeTab): InitialStateI => {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                currentTab: action.payload
            }
        default:
            return state
    }
}

export default controlReducer