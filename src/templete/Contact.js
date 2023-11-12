import React from 'react'
import MainTemp from './MainTemp'
import { useNavigate } from 'react-router-dom'
import './temp.css'
const Contact = () => {
    const navigate = useNavigate();


    return (
        <div>

            <div className='contt'>
                <MainTemp title='Contact Us' />

                <div className='reserv'>
                    <iframe class="frame"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" allowfullscreen="" aria-hidden="false"
                        tabindex="0" title='frame'>
                    </iframe>
                    <div className='form from' data-aos="fade-down-left" data-aos-delay="300">
                        <h5 className='title'>Contact</h5>
                        <h1 className='caption'>Contact With Us Now</h1>
                        <form>
                            <div className='txt'>
                                <input type='text' placeholder='Your Name' />
                                <input type='text' placeholder='Your Email' />
                            </div>
                            <div className='txt'>
                                <input type='text' placeholder='Date' />
                                <input type='text' placeholder='Phone' />
                            </div>
                            <div >
                                <textarea type='text' placeholder='Message' />
                            </div>
                            <div>
                                <button className='botn' onClick={() => navigate("booking")}>Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>


            </div>
        </div>

    )
}

export default Contact
