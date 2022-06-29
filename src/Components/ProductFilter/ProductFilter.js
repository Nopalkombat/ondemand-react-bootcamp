import React, { useContext } from 'react';
import { FilterContext } from '../../Pages/ProductsPage/ProductsPage';
import { useProductCategories } from '../../utils/hooks/useProductCategories';

import './styles.scss';

const ProductFilter = () => {
  const { filterState, setFilterState } = useContext(FilterContext);
  const { data, isLoading } = useProductCategories();

  if (!data || isLoading) {
    return (
      // <Loading/>
      <h3>Loading ...</h3>
    );
  }

  const isSelected = (id) => filterState.includes(id);

  function onCheckboxClick(categoryId) {
    setFilterState(
      isSelected(categoryId)
        ? filterState.filter((option) => option !== categoryId)
        : [...filterState, categoryId]
    );
  }

  function resetFilters() {
    setFilterState([]);
  }

  return (
    <div className="ProductFilter">
      <h2>Categories</h2>
      <ul>
        {data.results.map((category) => (
          <label
            key={category.id}
            onClick={() => onCheckboxClick(category.id)}
            className={isSelected(category.id) ? 'active' : ''}
            id={category.id}
          >
            {category.data.name}
          </label>
        ))}
        {filterState.length > 0 && (
          <div className="button-container">
            <button className="simple-button" onClick={() => resetFilters()}>
              Clear all
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ProductFilter;
