import './App.css';
import Account from './components/Account';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Manager from './components/Manager';
import Product from './components/Product';
import Detail from './components/Detail';
import Home from './components/Home';
import Cart from './components/Cart';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import React from 'react';
function App() {
  return (
    <div id='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/product" />} />
          <Route index path="/product" element={<Home/>} />
          <Route path="product/:id" element={<Detail/>}/>
          <Route path="/manager" element={<Manager />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
      </Routes>
    </div>

  );
}

export default App;
