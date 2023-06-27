import React from 'react';
import Logo from '/public/Logo.webp';
import Image from 'next/image';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 left-0 bg-white shadow-sm flex justify-between items-center max-w-7xl px-16 py-6">
      <Image src={Logo} alt="Dine-logo" className="md:h-6" />
      <ul className="hidden md:flex justify-center items-center gap-x-4 ">
        <Link href={'/products/male'}>
          <li className="font-semibold">Male</li>
        </Link>
        <Link href={'/products/female'}>
          <li className="font-semibold">Female</li>
        </Link>
        <Link href={'/products/kids'}>
          <li className="font-semibold">Kids</li>
        </Link>
        <li className="font-semibold">All Product</li>
      </ul>
      <div className="hidden md:flex gap-x-2 items-center ">
        <AiOutlineSearch className="w-4" />
        <input
          type="text"
          placeholder="What you looking for"
          className="border border-gray-300 px-2 rounded-lg focus:outline-blue"
        />
      </div>

      <div>
        <AiOutlineShoppingCart className="h-6 w-6 md:h-8 md:w-8" />
      </div>
    </header>
  );
};

export default Header;
