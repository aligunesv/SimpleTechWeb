import React from 'react';
import Navbar from './Navbar';
import HomeBackground from "../assets/home-background.png";
import HomeImage from "../assets/home-image.png";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
  return (
        <div className='home-container'>
            <Navbar/>
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                    <img src={HomeBackground} alt=""/>
                </div>
                <div className='home-text-section'>
                    <h1 className='primary-heading'>
                        Your Favorite Technology Service
                    </h1>
                    <p className='primary-text'>
                    In the rapidly developing world of the digital age, technology is achieving new successes every day. If you need the right technology solutions for your business to keep up with this fast pace, you are in the right place! As a leading company that offers expert solutions in technology, we are committed to providing you with the most up-to-date and effective technology services.                    </p>
                    <button className='secondary-button'>
                        Contact Now! <FiArrowRight/>
                    </button>
                </div>
                <div className='home-image-container'>
                    <img src={HomeImage} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Home