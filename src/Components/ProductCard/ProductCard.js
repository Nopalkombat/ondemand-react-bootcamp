/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';

const ProductCard = (props) => {
  const { name, mainimage, category, price } = props;

  function FormatPrice(price) {
    const formattedPrice = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
    return '$' + formattedPrice;
  }

  return (
    <div className="ProductCard">
      <img src={mainimage.url} alt={name} />
      <p>{name}</p>
      <span className="product__category">{category.slug}</span>
      <span className="product__price">{FormatPrice(price)}</span>
    </div>
  );
};

export default ProductCard;
