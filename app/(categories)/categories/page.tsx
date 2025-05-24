'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'next/navigation';

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=194');
  const data = await res.json();

  return data.products;


}

const Categories = () => {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get('type') || '';
  const [products, setProducts] = useState<{ id: number; name: string; thumbnail: string; category: string; title: string }[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="w-full h-[550] px-[110] p-[40]">
      <div className="w-full font-integral font-bold text-5xl">CATEGORIES</div>
      <div className="flex flex-row mb-[10] gap-x-5 h-[550]">
        <div className="w-full flex flex-col">
          <Input
            type="text"
            placeholder="Search for a category"
            defaultValue={defaultType}
            onChange = { (e) => {
                const value = e.target.value;


                if (value ===''){
                    getProducts().then(setProducts);
                    return;
                }
                const filteredProducts = products.filter(product =>
                  product.title.toLowerCase().includes(value.toLowerCase())
                );
                setProducts(filteredProducts);  
            }}
            className="w-full h-[50px] rounded-xl border-[1px] border-gray-300 p-[10px] mb-[20px] mt-[20px]"
          />
          <div className="grid grid-cols-4 gap-4 w-full">
            {['Groceries', 'Beauty', 'Fragrances', 'Furniture'].map((item) => (
  <label key={item} className="flex items-center space-x-2">
    <input
      type="checkbox"
      className="w-4 h-4"
      onChange={(e) => {
        const isChecked = e.target.checked;
        const updated = isChecked
          ? [...selectedCategories, item]
          : selectedCategories.filter(c => c !== item);

        setSelectedCategories(updated);

        if (updated.length === 0) {
          getProducts().then(setProducts);
        } else {
          setProducts(products.filter(product =>
            updated.map(i => i.toLowerCase()).includes(product.category.toLowerCase())
          ));
        }
      }}
    />
    <span className="text-gray-700 text-sm">{item}</span>
  </label>
))}
          </div>

          <div className="grid grid-cols-4 gap-4 w-full mt-[20px] overflow-y-auto">

            {products.map((product) => (
              <Link
                key={product.id}
                href={`/categories/${product.id}`}
                className="border-[1px] rounded-xl p-[10px] text-center"
              >
                <img
                //   src={product.image}
                src = {product.thumbnail}
                  alt={product.name}
                  className="w-full h-[150px] object-cover rounded-xl mb-[10px]"
                />
                <p className="text-sm font-medium">{product.name}</p>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
