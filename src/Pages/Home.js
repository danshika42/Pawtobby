import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Banner/> 
      <Services/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home