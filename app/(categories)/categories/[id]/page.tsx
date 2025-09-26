'use client'

import React, { useEffect, useState } from 'react'
import useStore from '../../../store/store'

interface PageProps {
  params: {
    id: string
  }
}

 function Page({ params }: PageProps) {
  return (
    <div>
      Category ID: {params.id}
    </div>
  );
}


const ProductPage = ({ params }: PageProps) => {
  const [product, setProduct] = useState<String | null>(null)
  const addToCart = useStore((state) => state.addToCart)
  const increase = useStore((state) => state.increase)


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [params.id])

  if (!product) return <div>Loading...</div>

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="w-[300px] mt-4 rounded-xl" />
      <p className="mt-4 text-gray-600">{product.description}</p>
      <p className="mt-2 font-semibold">Price: ${product.price}</p>

      <button
        onClick={() => {addToCart(product); increase()}}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductPage;
