import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store/store'
import { getMovies } from '../../store/actions/movieActions'
import { changeTab } from '../../store/actions/controlActions'

import CollectionsList from '../../components/CollectionsList/CollectionsList'

interface Props {

}

const HomePage = (props: Props) => {
    const dispatch = useDispatch()

    const movieState = useSelector((state: RootStore) => state.movies.items)
    const currentTab = useSelector((state: RootStore) => state.controls.currentTab)

    useEffect(() => {
        dispatch(getMovies(currentTab))
    }, [currentTab, dispatch])

    console.log(currentTab)

    return (
        <div className="container">
            <button onClick={() => { dispatch(changeTab('tv')) }}>TV</button>
            <button onClick={() => { dispatch(changeTab('movie')) }}>Movie</button>
            <CollectionsList items={movieState} />
        </div >
    )
}

export default HomePage
