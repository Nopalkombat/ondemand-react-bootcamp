import React from 'react';
import { useProductSearch } from '../../utils/hooks/useProductSearch';
import ProductGrid from '../../Components/ProductGrid';
import { useSearchParams } from 'react-router-dom';
import './styles.scss';

const SingleProduct = () => {
  const { search } = window.location;
  const searchTerm = new URLSearchParams(search).get('q');
  let [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page'));
  const { data: productData, isLoading } = useProductSearch(page);

  if (!productData || isLoading) {
    return (
      // <Loading />
      <h3>Loading...</h3>
    );
  }

  return (
    <>
      <div className="content search-results">
        <div className="content">
          <ProductGrid
            title={'Search results for: ' + (searchTerm || 'no search term entered')}
            activeFilter={true}
            productData={productData}
            setSearchParams={setSearchParams}
            searchParams={searchParams}
          />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
