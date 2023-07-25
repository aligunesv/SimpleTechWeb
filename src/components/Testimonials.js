import React from 'react'
import ProfilePic from "../assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"

const Testimonials = () => {
  return <div className='work-section-wrapper' >
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>
                Read what they think!
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=''/>
            <p>
            I am extremely satisfied with your technical service! You repaired my faulty device in a short time and ensured that my business continued without interruption. Thank you for the professionalism of your team of experts and your quick solutions. From now on, you are the first address to solve my technology problems! I wish you continued success. Thank you!
            </p>
            <div className='testimonial-stars-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
}

export default Testimonials