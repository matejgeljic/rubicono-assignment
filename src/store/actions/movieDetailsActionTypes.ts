export const MOVIE_DETAILS_LOADING = 'MOVIE_DETAILS_LOADING';
export const MOVIE_DETAILS_SUCCESS = 'MOVIE_DETAILS_SUCCESS';
export const MOVIE_DETAILS_FAIL = 'MOVIE_DETAILS_FAIL';

export type Result = {
    id: string,
    title?: string,
    name?: string,
    poster_path: string,
    overview: string
}

export interface MovieDetailsLoading {
    type: typeof MOVIE_DETAILS_LOADING
}

export interface MovieDetailsSuccess {
    type: typeof MOVIE_DETAILS_SUCCESS
    payload: Result
}

export interface MovieDetailsFail {
    type: typeof MOVIE_DETAILS_FAIL
}

export type MovieDetailsDispatchTypes = MovieDetailsLoading | MovieDetailsSuccess | MovieDetailsFail