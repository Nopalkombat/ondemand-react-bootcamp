import { Route } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Products from '../Pages/ProductsPage';
import SingleProduct from '../Pages/SingleProduct';
import SearchPage from '../Pages/SearchPage';

export default [
  <Route path="/" exact element={<Homepage />} key="homepage" />,
  <Route path="/home" element={<Homepage />} key="homepage2" />,
  <Route path="/products" element={<Products />} key="products" />,
  <Route path="/products?category:categorySlug" element={<Products />} key="productsCategory" />,
  <Route path="/product/:productId" exact element={<SingleProduct />} key="singleProduct" />,
  <Route path="/search" exact element={<SearchPage />} key="searchResultsAll" />,
  <Route path="/search?={:q}" exact element={<SearchPage />} key="searchResults" />,
  <Route path="/search?={:q}&={:page}" exact element={<SearchPage />} key="searchResults" />,
];
