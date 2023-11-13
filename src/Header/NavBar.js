import React from 'react'
import { FaUtensils, FaBars, FaTimes } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className='try'>
            <nav className='nav ' >
                <a href='/' className='resName'>
                    <FaUtensils className='icon' id='icon' />
                    <h1>Restaron</h1>
                </a>
                <input type='checkbox' id='check' />
                <label htmlFor='check'>
                    <FaBars id='bars' />
                    <FaTimes id='cancel' />
                </label>
                <div className='con'>
                    <div className='linkCon'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/service'>Service</NavLink>
                        <NavLink to='/Menu'>Menu</NavLink>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">pages</Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item href="#/action-1"><NavLink className='Dropdown' to='/booking'>Booking</NavLink></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><NavLink className='Dropdown' to='/team'>Our Team</NavLink></Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><NavLink className='Dropdown' to='/testimotion'>Testimotion</NavLink></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <NavLink to='/contact'>contact</NavLink>
                    </div>
                    <button className='botn' onClick={() => navigate("booking")}>Book A Table</button>
                </div>
            </nav >
        </div >
    )
}

export default NavBar
