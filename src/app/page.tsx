import ProductCard from '@/components/Product/ProductCard'
import prisma from '@/prisma'

const fetchProducts = async () => {
  'use server'
  const products = await prisma.product.findMany()

  return products
}

export default async function Home() {
  const products = await fetchProducts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 m-5 overflow-y-auto">
      {products && products.map((product) =>
        <ProductCard key={product.id} product={product} />
      )}
    </div>
  )
}