import { Dispatch } from 'redux';
import { ChangeTab, CHANGE_TAB, ControlDispatchTypes } from './controlActionTypes';

export const changeTab = (tabValue: String) => (dispatch: Dispatch<ChangeTab>) => {
    dispatch({
        type: CHANGE_TAB,
        payload: tabValue
    })
} 