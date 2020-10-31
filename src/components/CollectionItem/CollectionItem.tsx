import React from 'react';
import './CollectionItem.css';
import altImg from '../../alt-img.png';
import { Result } from '../../store/actions/itemActionTypes';

interface Props {
  item: Result;
}

const CollectionItem: React.FC<Props> = ({ item }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  const defaultSrc = (e: any) => {
    e.target.src = altImg;
  };

  return (
    <div className="collection-item">
      <img
        src={imageUrl}
        onError={defaultSrc}
        className="collection-item-image"
        alt={item.name}
      />
      <div className="title">
        <h5>{item.name || item.title}</h5>
      </div>
    </div>
  );
};

export default CollectionItem;
