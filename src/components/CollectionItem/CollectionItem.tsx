import React from 'react';
import './CollectionItem.css';
import altImg from '../../alt-img.png';
import { Result } from '../../store/actions/itemActionTypes';

interface Props {
  item: Result;
}

const CollectionItem = (item: Props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.item.poster_path}`;

  const defaultSrc = (e: any) => {
    e.target.src = altImg;
  };

  return (
    <div className="collection-item">
      <img
        src={imageUrl}
        onError={defaultSrc}
        className="collection-item-image"
        alt={item.item.name}
      />
      <div className="title">
        <h5>{item.item.name || item.item.title}</h5>
      </div>
    </div>
  );
};

export default CollectionItem;
