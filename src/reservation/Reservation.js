import React from 'react'
import './reservation.css'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Reservation = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <div className='reserv'>
                <img src='./images/video.jpg' alt='form' data-aos="fade-down-left" data-aos-delay="300" />
                <div className='form' data-aos="fade-down-right" data-aos-delay="300">
                    <h5 className='title'>Reservation</h5>
                    <h1 className='caption'>Book A Table Online</h1>
                    <form>
                        <div className='txt'>
                            <input type='text' placeholder='Your Name' />
                            <input type='text' placeholder='Your Email' />
                        </div>
                        <div className='txt'>
                            <input type='text' placeholder='Date' />
                            <input type='text' placeholder='State' />
                        </div>
                        <div>
                            <textarea type='text' placeholder='Special Raquestes' />
                        </div>
                        <div>
                            <button className='botn'>Book Now</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Reservation
