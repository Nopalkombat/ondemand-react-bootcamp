import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductSearch } from '../../utils/hooks/useProductSearch';
import './styles.scss';

const SingleProduct = () => {
  const { searchTerm } = useParams();
  const { data: productData, isLoading } = useProductSearch(searchTerm);

  console.log(productData);
  if (!productData || isLoading) {
    return (
      // <Loading />
      <h3>Loading...</h3>
    );
  }

  return (
    <>
      <div className="content single-product">1</div>
    </>
  );
};

export default SingleProduct;
