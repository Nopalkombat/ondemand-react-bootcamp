import React from 'react';
import './styles.scss';
import { useProducts } from '../../utils/hooks/useProducts';
import ProductGrid from '../../Components/ProductGrid';
import Slider from '../../Components/Slider';
import CategoriesGrid from '../../Components/CategoriesGrid';

const Homepage = () => {
  const { data: productData, isLoading } = useProducts();
  if (!productData || isLoading) {
    return (
      // <Loading/>
      <h3>Loading ...</h3>
    );
  }

  return (
    <div className="Homepage content">
      <Slider />
      <CategoriesGrid />
      <ProductGrid
        showProductsButton={true}
        title={'Featured products'}
        productData={productData}
      />
    </div>
  );
};

export default Homepage;
