// src/components/Header.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';

const Header = () => {
  const cartCount = useSelector((state) => state.cart.count);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawer = () =>{
    setShowDrawer(prevShowDrawer => !prevShowDrawer)
  }


  return (
    <header className="bg-gray-800 text-white flex p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="/">E-Commerce Platform</a>
        </h1>
          <div className="flex space-x-4 cursor-pointer">
           <span onClick={handleDrawer}>Cart ({cartCount})</span>
          </div>
      </div>
      {
        showDrawer &&
        <div className='border border-gray-800 w-[100%] md:w-[30%] absolute right-0 bg-gray-800 rounded-md h-[100vh] shadow-3xl overflow-auto mb-20'>
          <div id="cart" className="float-right p-4 cursor-pointer" onClick={handleDrawer}>&#x2715;</div>
          <Cart/>
        </div>
      }
    </header>
  );
};

export default Header;
