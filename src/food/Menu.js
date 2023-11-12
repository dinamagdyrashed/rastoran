import React, { useState, useEffect } from 'react'
import './food.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Menu = () => {

    useEffect(() => {
        Aos.init()
    }, [])
    const [food] = useState([{
        id: 1,
        image: "./images/menu-1.jpg",
        title: "Chicken Burger",
        price: "$115",
        caption: "Ipsum ipsum clita erat amet dolor justo diam",
        delay: 400
    }, {
        id: 2,
        image: "./images/menu-2.jpg",
        title: "Chicken Burger",
        price: "$115",
        caption: "Ipsum ipsum clita erat amet dolor justo diam",
        delay: 500
    }, {
        id: 3,
        image: "./images/menu-3.jpg",
        title: "Chicken Burger",
        price: "$115",
        caption: "Ipsum ipsum clita erat amet dolor justo diam",
        delay: 600
    }, {
        id: 4,
        image: "./images/menu-4.jpg",
        title: "Chicken Burger",
        price: "$115",
        caption: "Ipsum ipsum clita erat amet dolor justo diam",
        delay: 700
    }, {
        id: 5,
        image: "./images/menu-5.jpg",
        title: "Chicken Burger",
        price: "$115",
        caption: "Ipsum ipsum clita erat amet dolor justo diam",
        delay: 800
    }, {
        id: 6,
        image: "./images/menu-6.jpg",
        title: "Chicken Burger",
        price: "$115",
        caption: "Ipsum ipsum clita erat amet dolor justo diam",
        delay: 900
    }, {
        id: 7,
        image: "./images/menu-7.jpg",
        title: "Chicken Burger",
        price: "$115",
        caption: "Ipsum ipsum clita erat amet dolor justo diam",
        delay: 1000
    }, {
        id: 8,
        image: "./images/menu-8.jpg",
        title: "Chicken Burger",
        price: "$115",
        caption: "Ipsum ipsum clita erat amet dolor justo diam",
        delay: 1100
    }])
    return (
        <div>
            <div className='menuCon' id="collapseTarget">
                {food.map((item) => (
                    <div className='food-con' key={item.id} data-aos="zoom-in-up" data-aos-delay={item.delay}>
                        <div><img src={item.image} alt='food' /></div>
                        <div className='con-name'>
                            <div className='name'>
                                <h5>{item.title}</h5>
                                <h5 className='price'>{item.price}</h5>
                            </div>
                            <p>{item.caption}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Menu
