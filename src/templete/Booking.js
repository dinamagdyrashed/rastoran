import React from 'react'
import MainTemp from './MainTemp'
import Reservation from '../reservation/Reservation'

const Booking = () => {
    return (
        <div>
            <div className='contt'>
                <MainTemp title='Book Now' />

                <Reservation />


            </div>
        </div>
    )
}

export default Booking
