import React from 'react';
import { useProductSearch } from '../../utils/hooks/useProductSearch';
import ProductGrid from '../../Components/ProductGrid';
import './styles.scss';

const SingleProduct = () => {
  const { search } = window.location;
  const searchTerm = new URLSearchParams(search).get('q');
  // const page = new URLSearchParams(search).get('page') || 1;
  const { data: productData, isLoading } = useProductSearch();

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
            totalPages={productData.total_pages}
          />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
