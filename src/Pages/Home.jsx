import React from 'react'
import HeroSection from '../Components/Section/Hero'
import FeaturedProducts from '../Components/Section/Features'
import WhyChooseUs from '../Components/Section/ChooseUs'
import Testimonials from '../Components/Section/Testimonials'
import SocialProof from '../Components/Section/Social'
import SpecialOffers from '../Components/Section/Offer'
import FAQs from '../Components/Section/FAQs'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
      <WhyChooseUs/>
      <Testimonials/>
      <SocialProof/>
      <SpecialOffers/>
      <FAQs/>
    </div>
  )
}

export default Home