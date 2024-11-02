import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BastSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestseller, setBastSeller]=useState([]);
useEffect(()=>{
 const bastProucts = products.filter((item)=>(item.bestseller)) 
 setBastSeller(bastProucts.slice(0,5))
},[])
  return (
    <div className='my-10'>
    <div className='text-center text-3xl py-8'>
    <Title text1={'BAST '} text2={'SELLERS'}/>
    <p className='w-3/4 m-auto sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, magnam delectus </p>
    </div>
      
      <div className=' grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        bestseller.map((item,index)=>(
            <ProductItem kay={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
        ))
      }
      </div>

    </div>
  )
}

export default BastSeller
