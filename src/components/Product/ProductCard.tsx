'use client'

/* eslint-disable @next/next/no-img-element */
import { Product } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { useState } from 'react';

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    const [hover, setHover] = useState(false);
    const imageToShow = hover && product.imageURLs[1] ? product.imageURLs[1] : product.imageURLs[0];

    return (
        <div
            className="card rounded-b-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg overflow-hidden w-96 h-96 relative cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img
                className="rounded-t-lg object-cover h-3/4 w-full"
                src={imageToShow}
                alt="Product Image"
                onClick={() => window.location.href = product.url}
            />
            <div className="p-4 absolute bottom-0 left-0 w-full bg-white dark:bg-gray-800 rounded-b-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{product.itemName}</h3>
                <p className="text-gray-700 dark:text-gray-300">{product.price ? formatPrice(product.price) : 'N/A'}</p>
            </div>
        </div>
    );
};

function formatPrice(price: Decimal): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(price));
};