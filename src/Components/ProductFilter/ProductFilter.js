/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Categories from '../../MockData/product-categories.json';
import { FilterContext } from '../../Pages/ProductsPage/ProductsPage';

import './styles.scss';

const ProductFilter = () => {
  const categories = Categories.results;
  const { filterState, setFilterState } = useContext(FilterContext);

  const isSelected = (id) => filterState.includes(id);

  function onCheckboxClick(categoryId) {
    setFilterState(
      isSelected(categoryId)
        ? filterState.filter((option) => option !== categoryId)
        : [...filterState, categoryId]
    );
  }

  return (
    <div className="ProductFilter">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <label
            key={category.id}
            onClick={() => onCheckboxClick(category.id)}
            className={isSelected(category.id) ? 'active' : ''}
          >
            {category.data.name}
          </label>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
