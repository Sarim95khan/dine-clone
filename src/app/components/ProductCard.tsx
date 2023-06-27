import Image from 'next/image';
import React from 'react';
import Image1 from '/public/img1.webp';

const ProductCard = (props: { price: number; description: string }) => {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <Image src={Image1} alt="Image" />
      <h2 className="font-bold">{props.description}</h2>
      <h2 className="font-bold">{props.price}</h2>
    </div>
  );
};

export default ProductCard;
