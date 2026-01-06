import React from 'react'
import Navbar from '../comoponents/navbar'
import AiTypes from '../comoponents/aiTypes'
import AiBenefits from '../comoponents/aiBenefits'
import Footer from '../comoponents/footer'
import Contact from '../comoponents/contact'
import HeroSection from '../comoponents/heroSection'

function Home() {
  return (
    <div>
        <Navbar/>
        <main>
            <HeroSection/>
            <AiTypes/>
            <AiBenefits/>
            <Contact/>
        </main>
        <Footer/>
    </div>
  )
}

export default Home