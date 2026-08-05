import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Hero from '../../components/home/Hero'
import Categories from '../../components/home/Categories'
import Companies from '../../components/home/Companies'
import HowItWorks from '../../components/home/Howitsworks'
import Testimonials from '../../components/home/Testimonials'
import CTA from '../../components/home/CTA'
import Footer from '../../components/layout/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <Categories/>
        <Companies/>
        <HowItWorks />
        < Testimonials />
        < CTA />
        < Footer />
    </div>
  )
}

export default Home