import "./Navbar.css"
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';


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
            <div className="right1">
                <LinkedInIcon className='icon' />
                <InstagramIcon className='icon' />
                <FacebookIcon className='icon' />
            </div>
        </div>
    )
}

export default Navbar
