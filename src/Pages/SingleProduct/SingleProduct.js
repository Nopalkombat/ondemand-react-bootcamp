import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleProduct } from '../../utils/hooks/useSingleProduct';
import './styles.scss';

const SingleProduct = () => {
  const { productId } = useParams();
  const { data: productData, isLoading } = useSingleProduct(productId);

  if (!productData || isLoading) {
    return (
      // <Loading />
      <h3>Loading...</h3>
    );
  }

  const product = productData.results[0].data;
  const description = product.description[0].text;
  console.log(product);
  return (
    <div className="content single-product">
      <label> {product.name}</label>
      <label> price {product.price}</label>
      <label> SKU: {product.sku}</label>
      <label> category: {product.category.slug}</label>
      <p>{description || 'No description available'}</p>
    </div>
  );
};

export default SingleProduct;
