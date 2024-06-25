import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact component={ProductListing} />
            <Route path="/cart" component={Cart} />
        </Routes>
    </Router>
  )
}

export default AppRoutes