import React from 'react'
import { BiSolidMap, BiLogoLinkedin, BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa'
import { ImYoutube } from 'react-icons/im'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='footer'>
            <div className='footerCon'>
                <div data-aos="fade-down-right" data-aos-delay="300">
                    <h6>Company</h6>
                    <a href='/About'><MdKeyboardArrowRight />About Us</a>
                    <a href='/contact'><MdKeyboardArrowRight />contact Us</a>
                    <a href='/Reservation'><MdKeyboardArrowRight />Reservation</a>
                    <a href='/Privacy'><MdKeyboardArrowRight />Privacy Policy</a>
                    <a href='/Company'><MdKeyboardArrowRight />Company</a>
                </div>
                <div data-aos="fade-down-right" data-aos-delay="300">
                    <h6>Contact</h6>
                    <p><BiSolidMap />   123 Street, New York, USA</p>
                    <p><BsTelephoneFill />   +012 345 67890</p>
                    <p><FaEnvelope />   info@example.com</p>
                    <div className='social'>
                        <BiLogoFacebook />
                        <BiLogoTwitter />
                        <ImYoutube />
                        <BiLogoLinkedin />
                    </div>
                </div>
                <div data-aos="fade-down-left" data-aos-delay="300">
                    <h6>Opening</h6>
                    <p>Monday - Saturday</p>
                    <p>09AM - 09PM</p>
                    <p>Sunday</p>
                    <p>10AM - 08PM</p>
                </div>
                <div data-aos="fade-down-left" data-aos-delay="300">
                    <h6>Newsletter</h6>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>

                </div>
            </div>
            <div className='down'>
                <div >
                    <p>© Rastoran, All Right Reserved. Designed With <AiOutlineHeart /></p>
                    <p>
                        Distributed By Dina Rashid </p>
                </div>
                <div >
                    <a href='/'>Home</a>
                    <a href='/'>Cookies</a>
                    <a href='/'>Help</a>
                    <a href='/'>FQAS</a>
                </div>
            </div>

        </div>
    )
}

export default Footer
