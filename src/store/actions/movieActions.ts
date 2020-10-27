import { Dispatch } from 'redux';
import axios from 'axios'
import { MovieListDispatchTypes, MOVIE_LIST_LOADING, MOVIE_LIST_SUCCESS, MOVIE_LIST_FAIL } from './movieActionTypes'

export const getMovies = (category: String) => async (dispatch: Dispatch<MovieListDispatchTypes>) => {
    try {
        dispatch({
            type: MOVIE_LIST_LOADING
        })

        const res = await axios.get(`https://api.themoviedb.org/3/${category}/top_rated?api_key=5e045baab1a179f86b216829c62d441a`)

        dispatch({
            type: MOVIE_LIST_SUCCESS,
            payload: res.data.results.slice(0, 10)
        })

    } catch (error) {
        dispatch({
            type: MOVIE_LIST_FAIL
        })
    }
}