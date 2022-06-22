import React from 'react';
import CategoryCard from '../CategoryCard';
import Categories from '../../MockData/product-categories.json';
import './styles.scss';

const CategoriesGrid = () => {
  const categories = Categories.results;
  return (
    <>
      <h1>Featured Categories</h1>
      <div className="CategoriesGrid">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category.data} />
        ))}
      </div>
    </>
  );
};

export default CategoriesGrid;
