import React, { createContext, useState } from 'react';
import ProductGrid from '../../Components/ProductGrid';
import ProductFilter from '../../Components/ProductFilter';
import './styles.scss';

export const FilterContext = createContext('');

const ProductPage = () => {
  // const [filterState, setFilterState] = useState(['asdasd', 'asdasd43214']);
  const [filterState, setFilterState] = useState([]);

  return (
    <FilterContext.Provider value={{ filterState, setFilterState }}>
      <div className="ProductsPage content">
        <ProductFilter />
        <ProductGrid title={'Product List'} activeFilter={true} />
      </div>
    </FilterContext.Provider>
  );
};

export default ProductPage;
