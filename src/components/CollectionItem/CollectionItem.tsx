import React from 'react';
import './CollectionItem.css';
import { Result } from '../../store/actions/itemActionTypes';
import useDefaultImg from '../../useDefaultImg';

interface Props {
  item: Result;
}

const CollectionItem: React.FC<Props> = ({ item }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  return (
    <div className="collection-item">
      <img
        src={imageUrl}
        onError={useDefaultImg()}
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
