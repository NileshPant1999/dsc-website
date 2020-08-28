import "./Navbar.css"
import React, { useEffect, useState } from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from '@material-ui/core/Link'



function Navbar() {

    return (
        <div className={`navbar`}>
            <div className='left'>
                <ul class="list">
                    <li><a className="nav_options" href="https://google.com/">Home</a></li>
                    <li>Members</li>
                    <li>Events</li>
                    <li>About</li>
                    <li><a className="nav_options" href="https://developers.google.com/community/dsc">Official Website</a></li>
                </ul>
            </div>
            <div className="right1">
                <a className="social_icons" href="https://linkedin.com"><LinkedInIcon className='icon' /></a>
                <a className="social_icons" href="https://instagram.com"><InstagramIcon className='icon' /></a>
                <a className="social_icons" href="https://facebook.com"><FacebookIcon className='icon' /></a>
            </div>
        </div>
    )
}

export default Navbar
