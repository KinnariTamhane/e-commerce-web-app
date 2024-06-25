import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-xl">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold">${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 cursor-pointer active:bg-blue-800"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
