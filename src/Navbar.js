import "./Navbar.css"
import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='left'>
                <ul class="list">
                    <li>Home</li>
                    <li>Team</li>
                    <li>Events</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="right">
                <ul className='list'>
                    <li>dcssati2020@gmail.com</li>
                    <li>Log In</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
