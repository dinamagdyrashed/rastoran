import React, { useEffect } from 'react'
import { FaCoffee, FaHamburger, FaUtensils } from 'react-icons/fa'
import './food.css'
import { NavLink, Outlet } from 'react-router-dom'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Food = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (<>
        <div className='foodCon '>
            <div data-aos="zoom-in" data-aos-delay='400'>
                <h5 id='line'>Food Menu</h5>
                <h1 >Most Popular Items</h1>
                <div className='meal'>
                    <NavLink to='breackfast' >
                        <FaCoffee className='icon' />
                        <div>
                            <p>Popular</p>
                            <h6>Breakfast</h6>
                        </div>
                    </NavLink>
                    <NavLink to='launch'>
                        <FaHamburger className='icon' />
                        <div>
                            <p>Special</p>
                            <h6>Launch</h6>
                        </div>
                    </NavLink>
                    <NavLink to='dinner'>
                        <FaUtensils className='icon' />
                        <div>
                            <p>Lovely</p>
                            <h6>Dinner</h6>
                        </div>
                    </NavLink>
                </div>
            </div>

        </div>
        <Outlet />

    </>
    )
}

export default Food
