import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div >
      <h1 className="text-2xl font-bold mb-4 pl-3 pt-3">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className=''>
          {cartItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md mb-4">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-lg font-semibold">${item.price}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
