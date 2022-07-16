import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const CartButton = (props) => {
  const { itemCount } = props;
  return (
    <NavLink to="/cart">
      <div className="cart">
        <img src="/shopping-cart.svg" alt="Cart" />
        {itemCount !== 0 && <span className="counter">{itemCount > 9 ? '9+' : itemCount}</span>}
      </div>
    </NavLink>
  );
};

CartButton.propTypes = {
  itemCount: PropTypes.number,
};

export default CartButton;
