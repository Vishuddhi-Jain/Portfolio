import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImag2 from '../components/HeroImag2'
import Nevbar from '../components/Nevbar'

const Contact = () => {
  return (
    <div>
      <Nevbar/>
      <HeroImag2 heading="CONTACT" text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
