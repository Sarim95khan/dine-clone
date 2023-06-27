import React from 'react';

const ProductSLug = ({ params }: { params: { slug: string } }) => {
  const title = params.slug;
  return <div>page: {title}</div>;
};

export default ProductSLug;
