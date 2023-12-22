'use server';

import { Prisma, Product } from '@prisma/client';
import prisma from '../prisma';

export async function deleteProduct(productId: number): Promise<Product> {
  const deletedProduct = await prisma.product.delete({
    where: {
      id: productId,
    },
  });

  return deletedProduct;
}

export async function fetchProducts(price: number): Promise<Product[]> {
  let products;
  if (price === -1) {
    products = await prisma.product.findMany({
      orderBy: {
        price: 'asc',
      },
    });
  } else {
    products = await prisma.product.findMany({
      where: {
        price: {
          lt: price,
        },
      },
      orderBy: {
        price: 'asc',
      },
    });
  }

  return products;
}

export default async function saveProduct(
  product: Prisma.ProductCreateInput
): Promise<Product> {
  const newProduct = await prisma.product.create({
    data: product,
  });

  return newProduct;
}
