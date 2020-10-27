import { Dispatch } from 'redux';
import axios from 'axios'
import { MovieDetailsDispatchTypes, MOVIE_DETAILS_FAIL, MOVIE_DETAILS_LOADING, MOVIE_DETAILS_SUCCESS } from './movieDetailsActionTypes';

export const getMovieDetails = (category: String, id: string) => async (dispatch: Dispatch<MovieDetailsDispatchTypes>) => {
    try {
        dispatch({
            type: MOVIE_DETAILS_LOADING
        })

        const res = await axios.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=5e045baab1a179f86b216829c62d441a`);

        dispatch({
            type: MOVIE_DETAILS_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: MOVIE_DETAILS_FAIL
        })
    }
}