import React from 'react'
import HeroSection from './Hero'
import USP from './Usp'
import DailySpecials from './DailySpecials'
import FeaturedDishes from './FeaturedDish'
import Testimonials from './Testimonials'

function Home() {
  return (
    <div>
      <HeroSection />
      <USP />
      <DailySpecials />
      <FeaturedDishes />
      <Testimonials />
    </div>
  )
}

export default Home