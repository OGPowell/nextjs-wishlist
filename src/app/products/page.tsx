'use client'

import Dialog from "@/components/Dialog"
import Gallery from "@/components/Gallery"
import ProductForm from "@/components/Product/ProductForm"
import { Prisma } from "@prisma/client"
import { useState } from "react"
import SaveProduct from "./saveProduct"

export default function Page() {
    const [product, setProduct] = useState<Prisma.ProductCreateInput | null>(null)
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [showDialog, setShowDialog] = useState<boolean>(false)

    async function onClose() {
        setShowDialog(false)
    }

    async function onOk() {
        if (product) {
            product.imageURLs = selectedImages
            const savedProduct = SaveProduct(product)
            console.log('Saved Product: ', savedProduct)
        }
        setShowDialog(false)
    }

    const onSubmit = async (formData: FormData) => {
        const itemName = formData.get('itemName') as string
        const link = formData.get('link') as string
        const price = formData.get('price') as string
        const response = await fetch(`/api/getProductInfo?link=${encodeURIComponent(link)}`, {
            method: 'GET',
        })

        if (response.ok) {
            const imageURLs = await response.json()

            const product: Prisma.ProductCreateInput = {
                itemName: itemName,
                price: price,
                imageURLs: imageURLs,
                url: link
            }

            setProduct(product)
            setShowDialog(true)
        } else {
            console.error('Error:', response.status, response.statusText)
        }
    }

    return (
        <>
            {showDialog && (<Dialog title="Create a New Product" onClose={onClose} onOk={onOk}>
                {product && <Gallery product={product} selectedImages={selectedImages} setSelectedImages={setSelectedImages} />}
            </Dialog>
            )}

            <ProductForm onSubmit={onSubmit} />
        </>
    )
}