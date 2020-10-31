import React from 'react';
import './CollectionsList.css';
import { Link } from 'react-router-dom';
import { Result } from '../../store/actions/itemActionTypes';
import CollectionItem from '../CollectionItem/CollectionItem';

interface Props {
  items: any;
}

const CollectionsList: React.FC<Props> = ({ items }) => {
  return (
    <div className="container">
      {!items
        ? null
        : items.map((item: Result) => (
            <Link to={`details/${item.id}`} key={item.id}>
              <CollectionItem item={item} />
            </Link>
          ))}
    </div>
  );
};

export default CollectionsList;
