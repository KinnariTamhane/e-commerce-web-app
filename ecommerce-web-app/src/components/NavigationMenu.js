import React from 'react';

const NavigationMenu = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4 gap-10 justify-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href='#contact'>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;
