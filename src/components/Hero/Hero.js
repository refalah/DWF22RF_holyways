import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Hero.css'
import '../../App.css'


function Hero() {
    const router = useHistory();
    
    return (
        <>
            <div className='hero-container'>
                <div className='hero'>
                    <div className='hero-content'>
                        <h3>While you are still standing, try to reach out to the people who are falling.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <div className='hero-link' onClick={() => router.push("/raise-fund")}>Donate Now</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
