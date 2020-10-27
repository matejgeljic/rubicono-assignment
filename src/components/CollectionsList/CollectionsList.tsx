import React from 'react'
import { Link } from 'react-router-dom'
import { Result } from '../../store/actions/movieActionTypes'
import CollectionItem from '../CollectionItem/CollectionItem'

interface Props {
    items: any
}

const CollectionsList = (movies: Props) => {
    return (
        <div className="row">
            {!movies.items ? null : movies.items.map((movie: Result) => (
                <Link to={`details/${movie.id}`} key={movie.id}>
                    <CollectionItem movie={movie} />
                </Link>
            ))}

        </div>
    )
}

export default CollectionsList
