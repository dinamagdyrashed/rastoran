import React from 'react'
import { FaCoffee, FaHamburger, FaUtensils } from 'react-icons/fa'
import './food.css'
const Food = () => {
    return (
        <div className='foodCon'>
            <div>
                <h5>Food Menu</h5>
                <h1>Most Popular Items</h1>
                <div className='meal'>
                    <a href='/'>
                        <FaCoffee className='icon' />
                        <div>
                            <p>Popular</p>
                            <h6>Breakfast</h6>
                        </div>
                    </a>
                    <a href='/'>
                        <FaHamburger className='icon' />
                        <div>
                            <p>Special</p>
                            <h6>Launch</h6>
                        </div>
                    </a>
                    <a href='/'>
                        <FaUtensils className='icon' />
                        <div>
                            <p>Lovely</p>
                            <h6>Dinner</h6>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Food
