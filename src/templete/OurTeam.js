import React from 'react'
import MainTemp from './MainTemp'
import Chef from '../chefs/Chef'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi'

const OurTeam = () => {
    return (
        <div>
            <div className='contt'>
                <MainTemp title='Our Team' />
                <Chef />
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
        </div>
    )
}

export default OurTeam
