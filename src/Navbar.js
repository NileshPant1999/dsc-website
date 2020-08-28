import "./Navbar.css"
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from '@material-ui/core/Link'


function Navbar() {
    return (
        <div className='navbar'>
            <div className='left'>
                <ul class="list">
                    <li><a href="https://google.com/">Home</a></li>
                    <li>Members</li>
                    <li>Events</li>
                    <li>About</li>
                    <li><a href="https://developers.google.com/community/dsc">Official Website</a></li>
                </ul>
            </div>
            <div className="right1">
                <LinkedInIcon className='icon'></LinkedInIcon>
                <InstagramIcon className='icon' />
                <FacebookIcon className='icon' />
            </div>
        </div>
    )
}

export default Navbar
