/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';

const CategoryCard = (props) => {
  const { name } = props;
  return (
    <div className="CategoryCard">
      <div className="container">
        <p> {name} </p>
      </div>
    </div>
  );
};

export default CategoryCard;
