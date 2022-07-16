import { useState, useContext } from 'react';
import { CartContext } from '../../App';
import PropTypes from 'prop-types';
import './styles.scss';

const AddToCart = (props) => {
  const { cartState, setCartState } = useContext(CartContext);
  const { product, showQuantity } = props;
  const [quantity, setQuantity] = useState(1);
  // const productId = product.results[0].id;
  const productData = product.results[0].data;
  const productStock = product.results[0].data.stock;

  function QuantityUpdate() {
    const currentQuantity = Number(event.target.value);
    setQuantity(currentQuantity);
  }

  //   const isAdded = (id) => cartState.includes(id);
  function CartUpdate() {
    // setCartState(
    //   isAdded(productId)
    //     ? cartState.filter((prodId) => prodId !== productId)
    //     : [...cartState, { id: productId, q: quantity }]
    // );
    setCartState([...cartState, { product: productData, q: quantity }]);
  }

  if (productStock === 0) return <p>No stock available</p>;

  return (
    <>
      <a href="#!" className="simple-button" onClick={CartUpdate}>
        Add to cart
      </a>
      {showQuantity && (
        <input
          className="quantitySelector"
          type="number"
          value={quantity}
          min="1"
          max={productStock}
          onInput={QuantityUpdate}
        />
      )}
    </>
  );
};

AddToCart.propTypes = {
  product: PropTypes.object,
  showQuantity: PropTypes.bool,
};

export default AddToCart;
