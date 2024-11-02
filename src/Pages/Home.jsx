import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BastSeller from '../Components/BastSeller'
import OurPolicy from '../Components/OurPolicy'
import NewletterBox from '../Components/NewletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BastSeller/>
      <OurPolicy/>
      <NewletterBox/>
    </div>
  )
}

export default Home
