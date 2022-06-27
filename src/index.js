import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Products from './Pages/ProductsPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
