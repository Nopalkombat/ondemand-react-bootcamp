import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import routes from './Routes/AppRouter';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>{routes}</Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
