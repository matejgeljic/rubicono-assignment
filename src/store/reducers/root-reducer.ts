import { combineReducers } from 'redux'
import itemReducer from './itemReducer'
import itemDetailsReducer from './itemDetailsReducer'
import controlReducer from './controlReducer'

const rootReducer = combineReducers({
    items: itemReducer,
    item: itemDetailsReducer,
    controls: controlReducer
})

export default rootReducer