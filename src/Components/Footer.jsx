import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
    <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:2/3 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, labore dicta culpa deleniti nihil doloribus 
        debitis officia exercitationem totam recusandae odi</p>
    </div>
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'></ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
      </div>
         <div>
        <p className=' text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Phone: 1234567890</li>
            <li>Email: info@company.com</li>
        </ul>
      </div>
      </div>
       <div>
        <hr />
        <p className=' py-5 text-sm text-center'> CopyRight 2204 forever.com - All Ringht Reserver.</p>
       </div> 
    </div>
  )
}

export default Footer


