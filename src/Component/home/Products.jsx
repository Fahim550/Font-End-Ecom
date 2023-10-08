import React from 'react'
import Footer from '../shared/Footer'
import ProductCard from '../card/ProductCard'
import { products } from '../data/Data';


export default function Products() {
  const allproduct=products;
  return (
    <div className='w-full h-[750px] overflow-auto touch-pan-y'>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center '>
      {
        allproduct.length>0 ?
        allproduct.map((product)=>(
          <ProductCard key={product.ID} product={product}/>
        ))
        : <p>No Product</p>
      }
      </div>
    </div>
  )
}
