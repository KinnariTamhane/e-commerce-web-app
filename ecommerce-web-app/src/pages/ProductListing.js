// src/pages/ProductListing.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.length > 0 && products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
      ))}
    </div>
  );
};

export default ProductListing;
