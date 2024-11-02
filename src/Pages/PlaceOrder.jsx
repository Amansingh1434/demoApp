import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext'

const PlaceOrder = () => {
  const [method ,setmethod] = useState('cod');
  const {navigate} = useContext(ShopContext)
  return (
    <div className=" flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
    {/* LIST SIDE */}
      <div className="flex flex-col gap-4 w-full sm:max-w[480px]">
        <div className='text-xl my-3 sm:text-2xl '>
          <Title text1={'DELIVERY '} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3 w-2/4'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='List Name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5  w-2/4' type="email" placeholder='Email Address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5  w-2/4' type="text" placeholder='Street' />
        <div className='flex gap-3 w-2/4'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3 w-2/4'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-2/4' type="number" placeholder='Phone' />
      </div>
      {/* RIGHT SIDE */}
      <div className='mt-8'>
        <div className='mt-8 min-w-70'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
        <Title text1={'PAYMENT'} text2={'METHOD'}/>
        {/* PAYMENT METHOD SELECTION */}
        <div onClick={()=>setmethod('stripe')} className='flex gap-3 flex-col lg:flex-row'>
          <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3 h-3 border rounded-full ${method === 'stripe'? 'bg-green-400':''}`}></p>
            <img className='h-5 mx-4 ' src={assets.stripe_logo} alt="" />
          </div>
          <div onClick={()=>setmethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3 h-3 border rounded-full ${method === 'razorpay'? 'bg-green-400':''} `}></p>
            <img className='h-5 mx-4 ' src={assets.razorpay_logo} alt="" />
          </div>
          <div onClick={()=>setmethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-2 h-3 border rounded-full ${method === 'cod'? 'bg-green-400':''}  `}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVREY</p>
          </div>
        </div>
         <div className='w-full text-end mt-8'>
          <button onClick={()=>navigate('/order')} className='bg-black text-white px-16 py-3 text-sm '>PLACE ORDER</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
