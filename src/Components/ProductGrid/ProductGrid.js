import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import PropTypes from 'prop-types';
import './styles.scss';

const ProductGrid = (props) => {
  const { showProductsButton, title, activeFilter, productData, setSearchParams, searchParams } =
    props;
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);

  if (!productData) {
    return (
      // <Loading/>
      <h3>Loading ...</h3>
    );
  }

  const filteredProducts = productData.results || [];

  function prevPage() {
    const current = Number(searchParams.get('page'));
    const q = searchParams.get('q') || '';
    if (current == 1) setDisabledPrev(true);
    else {
      // setSearchParams({ page: current - 1 });
      setSearchParams({ page: current - 1, q: q });
      setDisabledPrev(false);
    }
  }

  function nextPage() {
    const current = Number(searchParams.get('page'));
    const q = searchParams.get('q') || '';
    if (current == productData.total_pages) setDisabledNext(true);
    else {
      // setSearchParams({ page: current + 1 });
      setSearchParams({ page: current + 1, q: q });
      setDisabledNext(true);
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
            <button className="simple-button previous" onClick={prevPage} disabled={disabledPrev}>
              Previous
            </button>
            <button className="simple-button next" onClick={nextPage} disabled={disabledNext}>
              Next
            </button>
          </div>
        )}
      </div>
      {showProductsButton && (
        <div className="button-container full center">
          <Link to="/products?page=1" className="simple-button">
            View all products
          </Link>
        </div>
      )}
    </>
  );
};

ProductGrid.propTypes = {
  showProductsButton: PropTypes.bool,
  title: PropTypes.string,
  activeFilter: PropTypes.bool,
  productData: PropTypes.object,
  setSearchParams: PropTypes.func,
  searchParams: PropTypes.string,
};

export default ProductGrid;
