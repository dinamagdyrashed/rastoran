import React from 'react'
import './temp.css'
const MainTemp = ({ title }) => {
    return (
        <div className='temp-con'>
            <div>
                <h1>{title}</h1>
                <div className='little'>
                    <a href='/'>Home</a>/
                    <a href='/'>Pages</a>/
                    <a href='/'>{title}</a>
                </div>
            </div>
        </div>
    )
}

export default MainTemp
