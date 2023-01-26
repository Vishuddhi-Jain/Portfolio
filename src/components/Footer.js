import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
               <FaHome size={20} style={{color:"#fff" , marginRight: "2rem"}}/> 
               <div>
                <p>Pach Wadi Marg.</p>
                <p>Maheshwar.</p>
               </div>
            </div>
            <div className="phone">
              <h4>
              <FaPhone size={20} style={{color:"#fff" , marginRight: "2rem"}}/> 
              9424501130
              </h4>
            </div>
            <div className="email">
              <h4>
              <FaMailBulk size={20} style={{color:"#fff" , marginRight: "2rem"}}/> 
              vishujainmhs@gmail.com
              </h4>
            </div>
        </div>
        <div className="right">
          <h4>About Myself</h4>
          <p>Hello, this is Vishuddhi Jain. I am a FrontEnd developer.I am currently in last year of my bachelors. This portfolio represents my role and projects throughout the college.  </p>
          <div className="social">
          <FaFacebook size={30} style={{color:"#fff" , marginRight: "1rem"}}/>
          <FaTwitter size={30} style={{color:"#fff" , marginRight: "1rem"}}/>
          <FaLinkedin size={30} style={{color:"#fff" , marginRight: "1rem"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
