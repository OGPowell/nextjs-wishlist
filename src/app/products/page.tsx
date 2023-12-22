'use client';

import Dialog from '@/components/Dialog';
import Gallery from '@/components/Gallery';
import { Prisma } from '@prisma/client';
import { useState } from 'react';
import saveProduct from '../product';
import ProductForm from './ProductForm';

export default function Page() {
  const [product, setProduct] = useState<Prisma.ProductCreateInput | null>(
    null
  );
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function onClose() {
    setSelectedImages([]);
    setShowDialog(false);
  }

  async function onOk() {
    if (product) {
      product.imageURLs = selectedImages;
      const savedProduct = saveProduct(product);
      console.log('Saved Product: ', savedProduct);
    }
    setShowDialog(false);
  }

  const onSubmit = async (formData: FormData) => {
    setLoading(true);
    const itemName = formData.get('itemName') as string;
    const link = formData.get('link') as string;
    const price = formData.get('price') as string;
    const response = await fetch(
      `/api/getProductInfo?link=${encodeURIComponent(link)}`,
      {
        method: 'GET',
      }
    );

    if (response.ok) {
      const imageURLs = await response.json();

      const product: Prisma.ProductCreateInput = {
        itemName: itemName,
        price: parseInt(price),
        imageURLs: imageURLs,
        url: link,
      };

      setProduct(product);
      setShowDialog(true);
    } else {
      console.error('Error:', response.status, response.statusText);
    }

    setLoading(false);
  };

  return (
    <>
      {showDialog && (
        <Dialog title='Create a New Product' onClose={onClose} onOk={onOk}>
          {product && (
            <Gallery
              product={product}
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
            />
          )}
        </Dialog>
      )}

      <ProductForm onSubmit={onSubmit} loading={loading} />
    </>
  );
}
