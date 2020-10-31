import React from 'react';
import './Rating.css';

interface Props {
  value: number;
}

const Rating: React.FC<Props> = ({ value }) => {
  return (
    <div className="rating">
      {value}/10{' '}
      <span>
        <i
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 6
              ? 'fas fa-star'
              : value >= 5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 8
              ? 'fas fa-star'
              : value >= 7
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 10
              ? 'fas fa-star'
              : value >= 9
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
    </div>
  );
};

export default Rating;
