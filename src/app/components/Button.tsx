import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Button = () => {
  return (
    <button className="bg-black text-white flex items-center justify-center px-8 py-6 gap-x-2">
      <AiOutlineShoppingCart />
      <span>Start Shopping</span>
    </button>
  );
};

export default Button;
