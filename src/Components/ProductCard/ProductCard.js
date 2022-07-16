import { NavLink } from 'react-router-dom';
import { FormatPrice } from '../../utils/functions.js';
import PropTypes from 'prop-types';
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
        <NavLink to={`/product/${productId}`} className="add-to-cart">
          Add to cart
        </NavLink>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
};

export default ProductCard;
