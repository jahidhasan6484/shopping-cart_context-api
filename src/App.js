import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import data from './components/Data/Data';

import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';

export const CartContext = createContext();

function App() {
  const { productsItems } = data;

  const [cart, setCart] = useState([])

  useEffect(()=> {

    if(JSON.parse(localStorage.getItem('cart'))) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }

  }, [])

  return (
    <CartContext.Provider value={[cart, setCart, productsItems]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
