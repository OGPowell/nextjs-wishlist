'use client';

import ProductCard from '@/components/Product/ProductCard';
import ProductCardSkeleton from '@/components/Product/ProductCardSkeleton';
import SliderButton from '@/components/SliderButton';
import { Product } from '@prisma/client';
import { useEffect, useState } from 'react';
import { deleteProduct, fetchProducts } from './product';

export default function Home() {
  const [priceBound, setPriceBound] = useState<number>(-1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      setLoading(true);
      const fetchedProducts = await fetchProducts(priceBound);
      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchAndSetProducts();
  }, [priceBound]);

  const handleSlide = (option: number) => {
    setPriceBound(option);
  };

  const handleDelete = async (id: number) => {
    const deletedProduct = await deleteProduct(id);
    const fetchedProducts = await fetchProducts(priceBound);

    console.log(`Deleted product ${deletedProduct.id}`);
    setProducts(fetchedProducts);
  };

  return (
    <div className='items-center'>
      <SliderButton onSlide={(option: number) => handleSlide(option)} />
      <div className='m-5 grid grid-cols-1 items-center gap-5 overflow-y-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {loading
          ? Array.from({ length: 12 }, (_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleDelete={handleDelete}
              />
            ))}
      </div>
    </div>
  );
}
