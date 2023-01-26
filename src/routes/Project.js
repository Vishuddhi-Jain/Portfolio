import React from 'react'
import Footer from '../components/Footer'
import HeroImag2 from '../components/HeroImag2'
import Nevbar from '../components/Nevbar'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'


const Project = () => {
  return (
    <div>
      <Nevbar/>
      <HeroImag2 heading="PROJECTS" text="Some of my most recent works."/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
