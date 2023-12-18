'use client'

/* eslint-disable @next/next/no-img-element */
import { Product } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface Props {
    product: Product
    handleDelete: (id: number) => Promise<void>
}

export default function ProductCard({ product, handleDelete }: Props) {
    const [hover, setHover] = useState(false);
    const { data: session } = useSession()
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [startX, setStartX] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.imageURLs.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.imageURLs.length) % product.imageURLs.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNextImage(),
        onSwipedRight: () => handlePreviousImage(),
        trackMouse: true
    });

    return (
        <div
            className="card rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg overflow-hidden w-full aspect-square relative cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...handlers}
        >
            <img
                className="rounded-t-lg object-cover h-3/4 w-full"
                src={product.imageURLs[currentImageIndex]}
                alt="Product Image"
                onError={(e) => {
                    e.currentTarget.src = "no-image.svg"; // replace with your default SVG path
                }}
            />

            <div onClick={() => window.open(product.url, '_blank')} className="p-4 absolute bottom-0 left-0 w-full bg-white dark:bg-gray-800 rounded-b-lg">
                <h3 className="truncate text-xl font-bold mb-2 text-gray-900 dark:text-white">{product.itemName}</h3>
                <p className="text-gray-700 dark:text-gray-300">{product.price ? formatPrice(product.price) : 'N/A'}</p>
            </div>

            {session && (
                <button
                    className="absolute top-0 right-1"
                    onClick={() => handleDelete(product.id)}
                >
                    <p className="text-xl font-bold text-gray-700">x</p>
                </button>
            )}
        </div>
    );
};

function formatPrice(price: Number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(Number(price));
};