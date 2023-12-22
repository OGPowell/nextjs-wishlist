/* eslint-disable @next/next/no-img-element */
'use client';

import { Prisma } from '@prisma/client';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  product: Prisma.ProductCreateInput;
  selectedImages: string[];
  setSelectedImages: Dispatch<SetStateAction<string[]>>;
}

export default function Gallery({
  product,
  selectedImages,
  setSelectedImages,
}: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = product.imageURLs as string[];

  const handleImageSelect = (image: string) => {
    setSelectedImages((prevState) => {
      if (prevState.includes(image)) {
        return prevState.filter((i) => i !== image);
      } else {
        return [...prevState, image];
      }
    });
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='flex items-center justify-center'>
      <button onClick={handlePrev} className='p-2 text-2xl'>
        ❮
      </button>
      <div className='relative'>
        <img
          src={images[currentImage]}
          alt={`Gallery ${currentImage}`}
          className='mx-auto h-96 w-96 rounded-lg object-contain'
        />
        <input
          type='checkbox'
          className='absolute right-0 top-0'
          checked={selectedImages.includes(images[currentImage])}
          onChange={() => handleImageSelect(images[currentImage])}
        />
      </div>
      <button onClick={handleNext} className='p-2 text-2xl'>
        ❯
      </button>
    </div>
  );
}
