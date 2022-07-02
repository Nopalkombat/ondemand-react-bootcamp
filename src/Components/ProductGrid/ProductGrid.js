/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { FilterContext } from '../../Pages/ProductsPage/ProductsPage';
import './styles.scss';

const ProductGrid = (props) => {
  const { showProductsButton, title, activeFilter, productData } = props;
  const { filterState } = useContext(FilterContext);

  if (!productData) {
    return (
      // <Loading/>
      <h3>Loading ...</h3>
    );
  }

  let filteredProducts = productData.results;
  if (activeFilter) {
    if (filterState && filterState.length > 0) {
      filteredProducts = productData.results.filter((product) =>
        filterState.includes(product.data.category.id)
      );
    }
  }

  return (
    <>
      <div className="ProductGrid">
        <h1>{title}</h1>
        <div className="products">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
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
