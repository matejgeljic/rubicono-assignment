import React from 'react';
import './CollectionsList.css';
import { Link } from 'react-router-dom';
import { Result } from '../../store/actions/itemActionTypes';
import CollectionItem from '../CollectionItem/CollectionItem';

interface Props {
  items: any;
}

const CollectionsList = (itmes: Props) => {
  return (
    <div className="container">
      {!itmes.items
        ? null
        : itmes.items.map((item: Result) => (
            <Link to={`details/${item.id}`} key={item.id}>
              <CollectionItem item={item} />
            </Link>
          ))}
    </div>
  );
};

export default CollectionsList;
