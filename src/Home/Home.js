import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import Cards from '../cards/Cards'
import AboutUs from '../about/AboutUs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Food from '../food/Food'
import Reservation from '../reservation/Reservation'
import Chef from '../chefs/Chef'
import BigCard from '../swiper/BigCard'
const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='main'>
            <div className='contain'>
                <div className='textt'>
                    <div className='text' >
                        <h1 data-aos='fade-right' data-aos-delay="500">Enjoy Our Delicious Meal</h1>
                        <p data-aos='fade-right' data-aos-delay="1100">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                        <button className='botn' onClick={() => navigate("booking")} data-aos='fade-right' data-aos-delay="1600">Book A Table</button>
                    </div>
                </div>
                <div className='imgCon'>
                    <img className='hero' src='./images/hero.png' alt='hero' />
                </div>

            </div>
            <Cards />
            <AboutUs />
            <Food />
            <Reservation />
            <Chef />
            <BigCard />
        </div>
    )
}

export default Home
