import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import routes from './Routes/AppRouter';
import './index.scss';

export const CartContext = createContext('');

const App = () => {
  const [cartState, setCartState] = useState([]);
  return (
    <CartContext.Provider value={{ cartState, setCartState }}>
      <React.StrictMode>
        <BrowserRouter>
          <Header />

          <Routes>{routes}</Routes>

          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </CartContext.Provider>
  );
};

export default App;
