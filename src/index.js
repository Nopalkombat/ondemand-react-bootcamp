import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Pages/Homepage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Homepage />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
