'use client'

import React, { useEffect, useState } from 'react'
import useStore from '../../../store/store'

interface PageProps {
  params: {
    id: string
  }
}

// Define a type for the product data we fetch
interface Product {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
}

const ProductPage = ({ params }: PageProps) => {
  const [product, setProduct] = useState<Product | null>(null)
  const addToCart = useStore((state) => state.addToCart)
  const increase = useStore((state) => state.increase)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
  }, [params.id])

  if (!product) return <div>Loading...</div>

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

      <button
        onClick={() => {
          addToCart(product)
          increase()
        }}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductPage
