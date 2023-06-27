import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  return (
    <section id="Product List" className="mt-2 h-screen">
      <h2 className="uppercase text-blue-700 text-sm text-center tracking-[2px] font-bold">
        products
      </h2>
      <p className="text-2xl font-bold uppercase tracking-[4px] text-center mt-2">
        CHECK WHAT WE HAVE
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
        <ProductCard price={300} description={'Brown shirt'} />
        <ProductCard price={300} description={'Brown shirt'} />
        <ProductCard price={300} description={'Brown shirt'} />
      </div>
    </section>
  );
};

export default ProductList;
