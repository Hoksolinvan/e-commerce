// app/(categories)/categories/[id]/page.tsx
import React from 'react'

// Minimal Product type
interface Product {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
}

// Async server component: Next.js expects this
const ProductPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`, { cache: 'no-store' })
  const product: Product = await res.json()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-2">Category ID: {params.id}</h1>
      <h2 className="text-3xl font-bold">{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-[300px] mt-4 rounded-xl"
      />
      <p className="mt-4 text-gray-600">{product.description}</p>
      <p className="mt-2 font-semibold">Price: ${product.price}</p>
    </div>
  )
}

export default ProductPage
