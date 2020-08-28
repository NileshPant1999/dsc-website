import React from 'react'
import "./MainSection2.css"
import { Button } from '@material-ui/core';


function MainSection() {
    return (
        <div className='main__section2'>
            <div className='main__sectionLeft2'>
                <img src='https://miro.medium.com/max/8064/1*UAM0cE0Dko0zTTK443fKZg.jpeg' height="600px" />
            </div>
            <div className="main__sectionRight2">
                <h2 className='heading2'>WHO ARE WE</h2>
                <p className="sub_heading2">Empowering the Tech Community</p>
                <p className="sub1_heading2">Our aim is to learn and teach. Developers, designers, and managers come together under one roof to create a community that inspires thousands. Join us and be a proud member.</p>
                <Button href="https://developers.google.com/community/dsc" className='btn' variant="contained">  Learn More  </Button>

            </div>
        </div>
    )
}

export default MainSection
