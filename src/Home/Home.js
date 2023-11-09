import React from 'react'
import './home.css'
import Cards from '../cards/Cards'
import AboutUs from '../about/AboutUs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Food from '../food/Food'
import Menu from '../food/Menu'
import Reservation from '../reservation/Reservation'
const Home = () => {

    useEffect(() => {
        Aos.init()
    }, [])
    return (<div className='main'>
        <div className='contain'>
            <div>
                <div className='text' data-aos='fade-right'>
                    <h1>Enjoy Our Delicious Meal</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <button className='botn'>Book A Table</button>
                </div>
            </div>
            <div className='imgCon'>
                <img className='hero' src='./images/hero.png' alt='hero' />
            </div>

        </div>
        <Cards />
        <AboutUs />
        <Food />
        <Menu />
        <Reservation />
    </div>
    )
}

export default Home
