'use client';

/* eslint-disable @next/next/no-img-element */
import { Product } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Dots from './Dots';

interface Props {
  product: Product;
  handleDelete: (id: number) => Promise<void>;
}

export default function ProductCard({ product, handleDelete }: Props) {
  const { data: session } = useSession();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.imageURLs.length
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.imageURLs.length) % product.imageURLs.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextImage(),
    onSwipedRight: () => handlePreviousImage(),
    trackMouse: true,
  });

  return (
    <div
      className='card relative aspect-square w-full cursor-pointer overflow-hidden rounded-lg bg-white shadow hover:shadow-lg dark:bg-gray-800'
      {...handlers}
    >
      <img
        className='h-3/4 w-full rounded-t-lg object-cover'
        src={product.imageURLs[currentImageIndex]}
        alt='Product Image'
        onClick={() => handleNextImage()}
        onError={(e) => {
          e.currentTarget.src = 'no-image.svg'; // replace with your default SVG path
        }}
      />
      <Dots count={product.imageURLs.length} currentIndex={currentImageIndex} />
      <div
        onClick={() => window.open(product.url, '_blank')}
        className='absolute bottom-0 left-0 w-full rounded-b-lg bg-white p-4 dark:bg-gray-800'
      >
        <h3 className='mb-2 truncate text-xl font-bold text-gray-900 dark:text-white'>
          {product.itemName}
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          {product.price ? formatPrice(product.price) : 'N/A'}
        </p>
      </div>

      {session && (
        <button
          className='absolute right-1 top-0'
          onClick={() => handleDelete(product.id)}
        >
          <p className='text-xl font-bold text-gray-700'>x</p>
        </button>
      )}
    </div>
  );
}

function formatPrice(price: Number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(price));
}
