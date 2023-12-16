"use client"

import ProductCard from '@/components/Product/ProductCard';
import { Product } from '@prisma/client';
import { useEffect, useState } from 'react';
import { deleteProduct, fetchProducts } from './product';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    fetchAndSetProducts();
  }, []);

  const handleDelete = async (id: number) => {
    const deletedProduct = await deleteProduct(id)
    const fetchedProducts = await fetchProducts();

    console.log(deletedProduct)
    setProducts(fetchedProducts);
  }

  return (
    <div className="grid items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-5 m-5 overflow-y-auto">
      {products && products.map((product) =>
        <ProductCard key={product.id} product={product} handleDelete={handleDelete} />
      )}
    </div>
  )
}