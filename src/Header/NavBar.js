import React from 'react'
import { FaUtensils } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

// window.scroll(function () {
//     if (window.scrollTop() > 45) {
//         nav.addClass('sticky-top');
//     } else {
//         nav.removeClass('sticky-top');
//     }
// });


const NavBar = () => {
    // let nav = document.querySelector('.nav')
    // const handleScroll = () => {

    //     if (window.scrollTop() > 45) {
    //         nav.style.width = "100%"
    //         // nav.addClass('sticky-top');
    //     } else {
    //         nav.style.width = "80%"
    //     }
    //     // if (window.onscroll) {
    //     //     nav.classList.toggle('sticky-top');
    //     // } else {
    //     //     nav.removeClass('sticky-top');
    //     // }
    // }
    // window.addEventListener('scroll', handleScroll)
    return (
        <div className='try'>
            <nav className='nav ' >
                <a href='/' className='resName'>
                    <FaUtensils className='icon' id='icon' />
                    <h1>Restaron</h1>
                </a>

                <div className='con'>
                    <div className='linkCon'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/About'>About</NavLink>
                        <NavLink to='/service'>Service</NavLink>
                        <NavLink to='/Menu'>Menu</NavLink>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">pages</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"><NavLink to='/Booking'>Booking</NavLink></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><NavLink to='/team'>Our Team</NavLink></Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><NavLink to='/Testimotion'>Testimotion</NavLink></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <NavLink to='/contact'>contact</NavLink>
                    </div>
                    <button className='botn'>Book A Table</button>
                </div>
            </nav >
        </div >
    )
}

export default NavBar
