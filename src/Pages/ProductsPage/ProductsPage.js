import React from 'react';
import ProductGrid from '../../Components/ProductGrid';
import ProductFilter from '../../Components/ProductFilter';
import './styles.scss';

const ProductPage = () => {
  return (
    <div className="ProductsPage content">
      <ProductFilter />
      <ProductGrid title={'Product List'} />
    </div>
  );
};

export default ProductPage;
