import React from 'react';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';
import NavBar from './Components/NavBar';

import { Route,Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
        <NavBar/>

        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
    </div>
  );
};

export default App;

