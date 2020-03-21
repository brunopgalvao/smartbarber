import React from 'react'
import './Service.css'
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1 className="logo">Smart Barber</h1>
            <div className="mustache-image"><img src="https://i.ibb.co/gZRvS0M/moustache-clipart-6.png" alt="mustache-logo" width="200px" /></div>
        </header>
    )
}

export default Header