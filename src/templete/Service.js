import React from 'react'
import MainTemp from './MainTemp'
import '../food/food.css'
import Cards from '../cards/Cards'
const Service = () => {
    return (
        <div className='contt'>
            <MainTemp title='Services' />
            <div className='foodCon'>
                <div>
                    <h5>Food Menu</h5>
                    <h1>Most Popular Items</h1></div>
            </div>
            <Cards />
            <Cards />
        </div>
    )
}

export default Service
