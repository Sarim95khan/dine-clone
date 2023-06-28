import Image from 'next/image';
import Hero from './view/Hero';
import ProductList from './view/ProductList';
import { client } from '../../sanity/lib/client';
import { urlForImage } from '../../sanity/lib/image';

export const getSsanityData = async () => {
  const res = await client.fetch(`*[_type =='product']{
    _id,
    name,
    slug,
    image
  }`);
  return res;
};

export default async function Home() {
  const data = await getSsanityData();
  console.log(data);

  return (
    <main className="px-16">
      <Hero />
      {data.map((item: any) => (
        <div key={item._id}>
          {item.name}
          <Image
            src={urlForImage(item.image).url()}
            alt="Image"
            height={144}
            width={144}
          />
        </div>
      ))}

      <ProductList />
    </main>
  );
}
