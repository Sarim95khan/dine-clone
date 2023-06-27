import React from 'react';
import Button from '../components/Button';
import Image from 'next/image';
import HeroImage from '/public/Hero.webp';

const Hero = () => {
  return (
    <section id="Hero" className="h-screen flex justify-center items-center">
      <div className="space-y-8 flex-1">
        <span className="bg-blue-200 rounded-lg text-blue-600  px-4 py-2">
          Sale 70%
        </span>
        <h1 className="text-5xl tracking-[4px] font-bold">
          An Industrial take on Streetwear
        </h1>
        <p className="text-gray-500">
          Any one can beat your but no one can beat you as long as you wear
          Kaprey
        </p>
        <Button />
      </div>

      {/* RIght image */}
      <div className=" flex-1">
        <Image src={HeroImage} alt="Hero Image" className=" " />
      </div>
    </section>
  );
};

export default Hero;
