import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import { useContext } from 'react';
// import { CartContext } from '../../App';
import { Link } from 'react-router-dom';
import { FormatPrice } from '../../utils/functions';
import './styles.scss';

const Cart = ({ content }) => {
  const [totals, setTotals] = useState(0);
  // const { cartState, setCartState } = useContext(CartContext) || '';
  useEffect(() => {
    setTotals(content.reduce((a, b) => a + b.product.price * b.q, 0) || 0);
  }, []);

  function QuantityUpdate() {
    // const currentQuantity = Number(event.target.value);
    // setQuantity(currentQuantity);
    console.log('gg'); //will remove
  }

  // function removeItem(product) {}

  return (
    <>
      <table className="cartTable">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Unit price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {content.map((element, key) => (
            <tr key={key} className="cartElement">
              <td className="image">
                <img src={element.product.mainimage.url} alt={element.product.name} />
              </td>
              <td className="name">{element.product.name}</td>
              <td className="price">{FormatPrice(element.product.price)}</td>
              <td className="quantity">
                <input
                  className="quantitySelector"
                  type="number"
                  value={element.q}
                  min="1"
                  max={element.product.stock}
                  onInput={QuantityUpdate}
                />
              </td>
              <td className="subtotal">{FormatPrice(element.product.price * element.q)}</td>
              <td className="remove">
                <button>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totals button-container">
        <h4>Order total: {FormatPrice(totals)}</h4>
        <Link to="/checkout" className="simple-button">
          Checkout
        </Link>
      </div>
    </>
  );
};

Cart.propTypes = {
  content: PropTypes.array,
};

export default Cart;
