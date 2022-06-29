import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../Cartbutton';
import SearchBox from '../SearchBox';
import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <Link to="/">
          <img src="/placeholderLogo.png" alt="E commeerce logo" />
        </Link>
      </div>
      <SearchBox />
      <CartButton />
    </header>
  );
};

export default Header;
