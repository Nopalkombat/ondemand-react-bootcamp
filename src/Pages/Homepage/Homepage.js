import React from 'react';
import './styles.scss';
import ProductGrid from '../../Components/ProductGrid';
import Slider from '../../Components/Slider';
import CategoriesGrid from '../../Components/CategoriesGrid';

const Homepage = () => {
  return (
    <div className="Homepage">
      <Slider />
      <CategoriesGrid />
      <ProductGrid />
    </div>
  );
};

export default Homepage;
