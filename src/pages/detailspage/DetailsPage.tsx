import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store/store'
import { getMovieDetails } from '../../store/actions/movieDetailsActions'
import { RouteComponentProps, Link } from 'react-router-dom'

interface Props extends RouteComponentProps<{ id: string }> {

}

const DetailsPage = (props: Props) => {
    const dispatch = useDispatch();

    const currentTab = useSelector((state: RootStore) => state.controls.currentTab)
    const movieId = props.match.params.id

    useEffect(() => {
        dispatch(getMovieDetails(currentTab, movieId))
    }, [currentTab, dispatch, movieId])

    const selectedMovie = useSelector((state: RootStore) => state.movie.movie)

    console.log(selectedMovie)
    const url = 'https://image.tmdb.org/t/p/w500'

    return (
        <div>
            <button onClick={() => props.history.goBack()}>back</button>
            <br />
            <img src={url + selectedMovie?.poster_path} style={{ width: 100 }} alt="..." />
            <h2>{selectedMovie?.name}</h2>
            <h2>{selectedMovie?.overview}</h2>
        </div>
    )
}

export default DetailsPage
