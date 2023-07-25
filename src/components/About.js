import React from 'react'
import AboutBackground from "../assets/about-background.png"
import AboutImage from "../assets/about-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
  return <div className='about-section-container'>
    <div className='about-background-image-container'>
        <img src={AboutBackground} alt=''/>
    </div>
    <div className='about-section-image-container'>
        <img src={AboutImage} alt=''/>
    </div>
    <div className='about-background-text-container'>
        <p className='primary-subheading'>
            About
        </p>
        <h1 className='primary-heading'>
        We Offer Fast Solutions to Technology Problems!
        </h1>
        <p className='primary-text'>
        As a team of technology enthusiasts, we are here to make our customers' lives easier and provide quick solutions to technology problems. With our team specialized in technical service, we repair your defective devices as soon as possible and ensure that your business runs efficiently. If you are looking for a reliable and professional technical service, contact us, we are here for you!        
        </p>
        
        <div className='about-buttons-container'>
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button'>
                {""}
              <BsFillPlayCircleFill/>Watch Video
                
            </button>
        </div>
    </div>
    
  </div>
}

export default About