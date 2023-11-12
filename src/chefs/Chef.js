import React, { useEffect } from 'react'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi'
import './chef.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Chef = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className=''>
            <div className='foodCon' data-aos="zoom-in" data-aos-delay='400'>
                <div>
                    <h5 className='line-chef'>Team Members</h5>
                    <h1>Our Master Chefs</h1>
                </div>
            </div>
            <div className='chef-con'>
                <div className='chef-card' data-aos='fade-up' data-aos-delay='400'>
                    <div className='chef-photo'>
                        <img src='./images/team-1.jpg' alt='chef' />
                    </div>
                    <h5>Full Name</h5>
                    <p>Designation</p>
                    <div className='social-con'>
                        <BiLogoFacebook />
                        <BiLogoTwitter />
                        <BiLogoInstagram />
                    </div>
                </div>
                <div className='chef-card' data-aos='fade-up' data-aos-delay='600'>
                    <div className='chef-photo'>
                        <img src='./images/team-2.jpg' alt='chef' />
                    </div>
                    <h5>Full Name</h5>
                    <p>Designation</p>
                    <div className='social-con'>
                        <BiLogoFacebook />
                        <BiLogoTwitter />
                        <BiLogoInstagram />
                    </div>
                </div>
                <div className='chef-card' data-aos='fade-up' data-aos-delay='800'>
                    <div className='chef-photo'>
                        <img src='./images/team-3.jpg' alt='chef' />
                    </div>
                    <h5>Full Name</h5>
                    <p>Designation</p>
                    <div className='social-con'>
                        <BiLogoFacebook />
                        <BiLogoTwitter />
                        <BiLogoInstagram />
                    </div>
                </div>
                <div className='chef-card' data-aos='fade-up' data-aos-delay='1000'>
                    <div className='chef-photo'>
                        <img src='./images/team-4.jpg' alt='chef' />
                    </div>
                    <h5>Full Name</h5>
                    <p>Designation</p>
                    <div className='social-con'>
                        <BiLogoFacebook />
                        <BiLogoTwitter />
                        <BiLogoInstagram />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Chef
