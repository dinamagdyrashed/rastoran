import React from 'react'
import MainTemp from './MainTemp'
import AboutUs from '../about/AboutUs'
import Chef from '../chefs/Chef'

const MainAbout = () => {
    return (
        <div>
            <div>
                <div className='contt'>
                    <MainTemp title='About Us' />
                    <AboutUs />
                    <Chef />


                </div>
            </div>
        </div>
    )
}

export default MainAbout
