import React from 'react';
import CartButton from '../Cartbutton';
import SearchBox from '../SearchBox';
import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src="placeholderLogo.png" alt="E commeerce logo" />
      </div>
      <SearchBox />
      <CartButton />
    </header>
  );
};

export default Header;
