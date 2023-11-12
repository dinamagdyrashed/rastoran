import React from 'react'
import MainTemp from './MainTemp'
import '../food/food.css'
import Food from '../food/Food'
const MainMenu = () => {
    return (
        <div>
            <div className='contt'>
                <MainTemp title='Main Menu' />
                <Food />
            </div>
        </div>
    )
}

export default MainMenu
