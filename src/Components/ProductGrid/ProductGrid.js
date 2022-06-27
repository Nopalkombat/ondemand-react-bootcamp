/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import Products from '../../MockData/featured-products.json';
import { FilterContext } from '../../Pages/ProductsPage/ProductsPage';
import './styles.scss';

const ProductGrid = (props) => {
  const { showProductsButton, title, activeFilter } = props;
  let products = Products.results;
  const { filterState } = useContext(FilterContext);

  if (activeFilter) {
    if (filterState && filterState.length > 0) {
      products = products.filter((product) => filterState.includes(product.data.category.id));
    }
  }

  return (
    <>
      <div className="ProductGrid">
        <h1>{title}</h1>
        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} {...product.data} />
          ))}
        </div>
        {activeFilter && (
          <div className="pagination button-container full center">
            <button className="simple-button">Previous</button>
            <button className="simple-button">Next</button>
          </div>
        )}
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
