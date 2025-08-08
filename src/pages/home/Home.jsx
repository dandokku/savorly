import React from 'react'
import HeroSection from './Hero'
import USP from './Usp'
import DailySpecials from './DailySpecials'
import FeaturedDishes from './FeaturedDish'

function Home() {
  return (
    <div>
      <HeroSection />
      <USP />
      <DailySpecials />
      <FeaturedDishes />
    </div>
  )
}

export default Home