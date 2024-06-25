// src/App.js
import React,  { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './store';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationMenu from './components/NavigationMenu';

function App() {
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
    // clicked product is captured successfully
    console.log('product',product);
    dispatch(addToCart(product));
  };

  return (
    <>
      <Header />
      <NavigationMenu />
      <main className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 && products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
