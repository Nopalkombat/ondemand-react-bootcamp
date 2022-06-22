import React from 'react';
import './styles.scss';
import ProductGrid from '../../Components/ProductGrid';
import Slider from '../../Components/Slider';
import CategoriesGrid from '../../Components/CategoriesGrid';

const Homepage = () => {
  return (
    <div className="Homepage content">
      <Slider />
      <CategoriesGrid />
      <ProductGrid showProductsButton={true} title={'Featured products'} />
    </div>
  );
};

export default Homepage;
