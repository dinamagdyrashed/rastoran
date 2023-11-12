import React, { useState, useEffect } from 'react'
import { FaUserTie, FaUtensils, FaHeadset } from 'react-icons/fa'
import { BsCartPlusFill } from 'react-icons/bs'
import './Cards.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Cards = () => {
    const [user] = useState([{
        id: 1,
        icon: <FaUserTie className='icon' />,
        title: "Master Chefs",
        text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        delay: 400
    },
    {
        id: 2,
        icon: <FaUtensils className='icon' />,
        title: "Quality Food",
        text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        delay: 600
    },
    {
        id: 3,
        icon: <BsCartPlusFill className='icon' />,
        title: "Online Order",
        text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        delay: 800
    },
    {
        id: 4,
        icon: <FaHeadset className='icon' />,
        title: "24/7 Service",
        text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        delay: 1000
    }])
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='cards'>
            <div className='allCards'>
                {user.map((users) => (
                    <div className='card' key={users.id} data-aos='fade-up' data-aos-delay={users.delay} >
                        {users.icon}
                        <h3>{users.title}</h3>
                        <p>{users.text}</p>
                    </div>

                ))}

            </div>
        </div >
    )
}

export default Cards
