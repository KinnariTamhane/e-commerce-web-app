// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="inline-block text-center md:text-left">
        &copy; 2024 E-Commerce Platform. All rights reserved.
      </div>
      <div id="contact" className=' mt-3 md:mt-0 md:float-right block md:inline-block text-center md:text-left'><a href="mailto:xyz@example.com">Contact Us</a></div>
    </footer>
  );
};

export default Footer;
