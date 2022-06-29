/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const ProductCard = (props) => {
  const { id: productId, data } = props;

  function FormatPrice(price) {
    const formattedPrice = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return '$' + formattedPrice;
  }

  return (
    <div className="ProductCard">
      <NavLink to={`/product/${productId}`}>
        <img src={data.mainimage.url} alt={data.name} />
        <p>{data.name}</p>
        <span className="product__category">{data.category.slug}</span>
        <span className="product__price">{FormatPrice(data.price)}</span>
      </NavLink>
      <div className="button-container">
        <a className="add-to-cart">Add to cart</a>
      </div>
    </div>
  );
};

export default ProductCard;
