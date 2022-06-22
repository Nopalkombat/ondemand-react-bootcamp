import React from 'react';
import ProductCard from '../ProductCard';
import Products from '../../MockData/featured-products.json';
import './styles.scss';

const ProductGrid = () => {
  const products = Products.results;
  return (
    <>
      <h1>Featured Products</h1>
      <div className="ProductGrid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product.data} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
