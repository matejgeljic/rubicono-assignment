import { MovieDetailsDispatchTypes, MOVIE_DETAILS_FAIL, MOVIE_DETAILS_LOADING, MOVIE_DETAILS_SUCCESS, Result } from '../actions/movieDetailsActionTypes'

interface InitialStateI {
    loading: boolean,
    movie?: Result
}

const initialState: InitialStateI = {
    loading: false
}

const movieDetailsReducer = (state: InitialStateI = initialState, action: MovieDetailsDispatchTypes): InitialStateI => {
    switch (action.type) {
        case MOVIE_DETAILS_LOADING:
            return {
                loading: true
            }
        case MOVIE_DETAILS_SUCCESS:
            return {
                loading: false,
                movie: action.payload
            }
        case MOVIE_DETAILS_FAIL:
            return {
                loading: false
            }
        default:
            return state
    }
}

export default movieDetailsReducer