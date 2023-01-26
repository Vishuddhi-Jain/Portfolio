import "./HeroImagStyles.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImag = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>

        </div>
        <div className="content">
            <p>HI, I'M VISHUDDHI JAIN.</p>
            <h1>FrontEnd Developer.</h1>
            <div>
               <Link to="/project" className="btn">Projects</Link> 
               <Link to="/contact" className="btn-light">Contact</Link> 
            </div>

        </div>
      
    </div>
  )
}

export default HeroImag
