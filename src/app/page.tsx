import Image from 'next/image';
import Hero from './view/Hero';
import ProductList from './view/ProductList';

export default function Home() {
  return (
    <main className="px-16">
      <Hero />

      <ProductList />
    </main>
  );
}
