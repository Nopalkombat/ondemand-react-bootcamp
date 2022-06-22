/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import Products from '../../MockData/featured-products.json';
import './styles.scss';

const ProductGrid = (props) => {
  const { showProductsButton, title } = props;
  const products = Products.results;
  return (
    <>
      <div className="ProductGrid">
        <h1>{title}</h1>
        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} {...product.data} />
          ))}
        </div>
      </div>
      {showProductsButton && (
        <div className="button-container full center">
          <Link to="/products" className="simple-button">
            View all products
          </Link>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
