import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import movieDetailsReducer from './movieDetailsReducer'
import controlReducer from './controlReducer'

const rootReducer = combineReducers({
    movies: movieReducer,
    movie: movieDetailsReducer,
    controls: controlReducer
})

export default rootReducer