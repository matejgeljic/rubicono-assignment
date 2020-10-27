import { MovieListDispatchTypes, MovieType, MOVIE_LIST_FAIL, MOVIE_LIST_LOADING, MOVIE_LIST_SUCCESS } from '../actions/movieActionTypes'

interface InitialStateI {
    loading: boolean,
    items?: MovieType
}

const initialState: InitialStateI = {
    loading: false
}

const movieReducer = (state: InitialStateI = initialState, action: MovieListDispatchTypes): InitialStateI => {
    switch (action.type) {
        case MOVIE_LIST_LOADING:
            return {
                loading: true
            }
        case MOVIE_LIST_SUCCESS:
            return {
                loading: false,
                items: action.payload
            }
        case MOVIE_LIST_FAIL:
            return {
                loading: false
            }
        default:
            return state
    }
}

export default movieReducer;