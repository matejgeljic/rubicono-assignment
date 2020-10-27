import React from 'react'
import { Result } from '../../store/actions/movieActionTypes';

interface Props {
    movie: Result;
}

const CollectionItem = (movie: Props) => {
    const url = 'https://image.tmdb.org/t/p/w500';
    return (
        <div className="card col-md-6 col-sm-6">
            <img src={url + movie.movie.poster_path} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{movie.movie.name || movie.movie.title}</h5>
            </div>
        </div>
    )
}

export default CollectionItem
