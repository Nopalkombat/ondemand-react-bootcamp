import React, { createContext, useState } from 'react';
import ProductGrid from '../../Components/ProductGrid';
import { useProducts } from '../../utils/hooks/useProducts';
import ProductFilter from '../../Components/ProductFilter';
import { useLocation, useSearchParams } from 'react-router-dom';
import './styles.scss';

export const FilterContext = createContext('');

const ProductPage = () => {
  const { search } = useLocation();
  const page = search.replace('?page=', '') || '1';
  const [filterState, setFilterState] = useState([]);
  const { data: productData, isLoading } = useProducts(filterState, page);
  let [searchParams, setSearchParams] = useSearchParams();
  if (!productData || isLoading) {
    return (
      // <Loading/>
      <h3>Loading ...</h3>
    );
  }

  return (
    <FilterContext.Provider value={{ filterState, setFilterState }}>
      <div className="ProductsPage content">
        <ProductFilter />
        <ProductGrid
          title={'Product List'}
          activeFilter={true}
          productData={productData}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
      </div>
    </FilterContext.Provider>
  );
};

export default ProductPage;
