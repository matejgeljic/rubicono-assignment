export const MOVIE_LIST_LOADING = 'MOVIE_LIST_LOADING';
export const MOVIE_LIST_SUCCESS = 'MOVIE_LIST_SUCCESS';
export const MOVIE_LIST_FAIL = 'MOVIE_LIST_FAIL';

export type MovieType = Result[]

export type Result = {
    id: string,
    title?: string,
    name?: string,
    poster_path: string,
    backdrop_path: string
}

export interface MovieListLoading {
    type: typeof MOVIE_LIST_LOADING
}

export interface MovieListSuccess {
    type: typeof MOVIE_LIST_SUCCESS,
    payload: MovieType

}

export interface MovieListFail {
    type: typeof MOVIE_LIST_FAIL
}

export type MovieListDispatchTypes = MovieListLoading | MovieListSuccess | MovieListFail