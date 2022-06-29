import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Products from '../Pages/ProductsPage';

export default [
  <Route path="/" exact element={<Homepage />} key="homepage" />,
  <Route path="/products" element={<Products />} key="products" />,
];
