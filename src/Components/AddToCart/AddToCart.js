import { useState, useContext } from 'react';
import { CartContext } from '../../App';
import PropTypes from 'prop-types';
import './styles.scss';

const AddToCart = (props) => {
  const { cartState, setCartState } = useContext(CartContext);
  const { product, showQuantity } = props;
  const [quantity, setQuantity] = useState(1);
  // const productSku = product.results[0].data.sku;
  const productId = product.results[0].id;
  const productData = product.results[0].data;
  const productStock = product.results[0].data.stock;

  function QuantityUpdate() {
    const currentQuantity = Number(event.target.value);
    setQuantity(currentQuantity);
  }

  // const isAdded = (productId) => cartState.some((e) => e.id === productId);

  function CartUpdate() {
    // if (isAdded(productId)) {
    //   const current = cartState.filter((product) => product.id === productId);
    //   const modifyQ = Number(current[0].q) + Number(quantity);
    //   const original = [...cartState];
    //   const newCart = original.slice(original.indexOf(current), 1);
    //   setCartState([newCart, { product: productData, q: modifyQ, id: productId }]);
    // } else setCartState([...cartState, { product: productData, q: quantity, id: productId }]);
    // setCartState(
    //   isAdded(productId)
    //     ? setQuantity(Number(cartState.q) + Number(quantity))
    //     : [...cartState, { product: productData, q: quantity, id: productId }]
    // );
    setCartState([...cartState, { product: productData, q: quantity, id: productId }]);
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
