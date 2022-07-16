import { useContext } from 'react';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';
import CartButton from '../Cartbutton';
import SearchBox from '../SearchBox';
import './styles.scss';

const Header = () => {
  const { cartState } = useContext(CartContext);
  const totalItems = cartState.reduce((acc, obj) => acc + obj.q, 0);
  return (
    <header className="header">
      <div className="logoContainer">
        <Link to="/">
          <img src="/placeholderLogo.png" alt="E commeerce logo" />
        </Link>
      </div>
      <SearchBox />
      <CartButton itemCount={totalItems} />
    </header>
  );
};

export default Header;
