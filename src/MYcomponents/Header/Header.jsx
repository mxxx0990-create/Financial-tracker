import { useState } from 'react'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggelTheme } from '../Theme/ToggelTheme' 


function Header() {
   
    const dispatch = useDispatch() 
    const theme = useSelector((state) => state.theme)

    const balans = useSelector((state) => state.user.totalPrise )

    return (
        <div className="header">
            <h3>Ваш баланс ${balans}</h3>
            

         
            <button onClick={() => dispatch(toggelTheme())}>
                 {theme === '🌙' ? '🌙' : '☀️'}
            </button>
        </div>
    )
}

export default Header