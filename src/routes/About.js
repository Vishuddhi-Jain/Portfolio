import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import HeroImag2 from '../components/HeroImag2'
import Nevbar from '../components/Nevbar'

const About = () => {
  return (
    <div>
      <Nevbar/>
      <HeroImag2 heading="ABOUT" text="I'm a friendly Frontend Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
