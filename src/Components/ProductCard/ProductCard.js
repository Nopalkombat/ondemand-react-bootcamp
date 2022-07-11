/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { FormatPrice } from '../../utils/functions.js';
import './styles.scss';

const ProductCard = (props) => {
  const { id: productId, data } = props;

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
