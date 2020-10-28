import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store/store'
import { getMovies } from '../../store/actions/movieActions'
import { changeTab, setSearch, searchMovies } from '../../store/actions/controlActions'

import CollectionsList from '../../components/CollectionsList/CollectionsList'

interface Props {

}

const HomePage = (props: Props) => {
    const dispatch = useDispatch()

    const movieState = useSelector((state: RootStore) => state.movies.items)
    const isLoading = useSelector((state: RootStore) => state.movies.loading)
    const currentTab = useSelector((state: RootStore) => state.controls.currentTab)
    const searchQuerry = useSelector((state: RootStore) => state.controls.search)
    const searchResults = useSelector((state: RootStore) => state.controls.items)

    useEffect(() => {
        dispatch(getMovies(currentTab));
    }, [currentTab, dispatch])

    useEffect(() => {
        dispatch(searchMovies(currentTab, searchQuerry))
    }, [currentTab, dispatch, searchQuerry])

    console.log(searchResults)

    const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        dispatch(setSearch(value))
    }

    return (
        <div className="container">
            <input type="text" value={searchQuerry} onChange={handleSearch} />
            <br />
            <button onClick={() => { dispatch(changeTab('tv')) }}>TV</button>
            <button onClick={() => { dispatch(changeTab('movie')) }}>Movie</button>
            {searchQuerry.length < 3 ? (
                <CollectionsList items={movieState} />
            ) : (
                    <CollectionsList items={searchResults} />
                )}


        </div >
    )
}

export default HomePage
