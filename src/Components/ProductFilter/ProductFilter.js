import React from 'react';
import Categories from '../../MockData/product-categories.json';

const ProductFilter = () => {
  const categories = Categories.results;
  return (
    <div className="ProductFilter">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
