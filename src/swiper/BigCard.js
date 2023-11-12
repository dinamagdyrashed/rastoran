import React, { useEffect } from 'react'
import './BigCard.css'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const BigCard = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <div className='foodCon' data-aos="zoom-in" data-aos-delay='400'>
                <div>
                    <h5 className='line'>Testimonial</h5>
                    <h1>Our Clients Say!!!</h1>
                </div>
            </div>
            <div className='swiper' >

                <div className='swip-con' data-aos="fade-down-right" data-aos-delay="300">
                    <BiSolidQuoteLeft className='swip-icon' />
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className='term-pic'>
                        <img src='./images/testimonial-1.jpg' alt='term' />
                        <div>
                            <h6>Client Name</h6>
                            <p>Profession</p>
                        </div>
                    </div>
                </div>
                <div className='swip-con' data-aos="fade-down-left" data-aos-delay="400">
                    <BiSolidQuoteLeft className='swip-icon' />
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className='term-pic'>
                        <img src='./images/testimonial-2.jpg' alt='term' />
                        <div>
                            <h6>Client Name</h6>
                            <p>Profession</p>
                        </div>
                    </div>
                </div>
                <div className='swip-con' data-aos="fade-up-right" data-aos-delay="500">
                    <BiSolidQuoteLeft className='swip-icon' alt='term' />
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className='term-pic'>
                        <img src='./images/testimonial-3.jpg' alt='term' />
                        <div>
                            <h6>Client Name</h6>
                            <p>Profession</p>
                        </div>
                    </div>
                </div>
                <div className='swip-con' data-aos="fade-up-left" data-aos-delay="600">
                    <BiSolidQuoteLeft className='swip-icon' />
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className='term-pic'>
                        <img src='./images/testimonial-4.jpg' alt='term' />
                        <div>
                            <h6>Client Name</h6>
                            <p>Profession</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigCard
