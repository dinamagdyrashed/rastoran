import React, { useEffect } from 'react'
import { FaUtensils } from 'react-icons/fa'
import './AboutUs.css'
import CountUp from 'react-countup'
import Aos from 'aos'
import 'aos/dist/aos.css'
const AboutUs = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='aboutCon'>
            <div className='about'>
                <div className='imageCon'>
                    <div data-aos='fade-down-right'><img src='./images/about-1.jpg' alt='ddd' /></div>
                    <div data-aos='fade-down-left'><img src='./images/about-2.jpg' id='two' alt='ddd' /></div>
                    <div data-aos='fade-up-right'><img src='./images/about-3.jpg' id='three' alt='dd' /></div>
                    <div data-aos='fade-up-left'><img src='./images/about-4.jpg' alt='dd' /></div>
                </div>
            </div>
            <div className='aboutText'>
                <div data-aos='fade-down'>
                    <h5 className='title'>About Us</h5>
                    <h1 className='caption'>Welcome to <FaUtensils className='icon' id='icon' /> Restoran</h1>
                    <p className='txt'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum
                        et lorem et sit, sed stet lorem sit.
                    </p>
                    <p className='txt'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <div className='counterCon'>
                        <div className='counter'>
                            <CountUp className='num' start={0}
                                end={15}
                                duration={10} />
                            <div>
                                <p>Years of</p>
                                <h6>EXPERIENCE</h6>
                            </div>
                        </div>
                        <div className='counter'>
                            <CountUp className='num' start={35}
                                end={50}
                                duration={10} />
                            <div>
                                <p>Popular</p>
                                <h6>MASTER CHEFS</h6>
                            </div>
                        </div>
                    </div>
                    <button className='botn'>Read More</button>

                </div>
            </div>
        </div>
    )
}

export default AboutUs
