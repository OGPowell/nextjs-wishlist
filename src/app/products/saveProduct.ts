'use server'

import prisma from "@/prisma"
import { Prisma, Product } from "@prisma/client"

export default async function SaveProduct(product: Prisma.ProductCreateInput): Promise<Product> {
    const newProduct = await prisma.product.create({
        data: product
    })

    return newProduct
}