import React from 'react'
import "./MainSection.css"
import { Button } from '@material-ui/core';


function MainSection() {
    return (
        <div className='main__section'>
            <div className='main__sectionLeft'>
                <img src='https://miro.medium.com/max/8064/1*UAM0cE0Dko0zTTK443fKZg.jpeg' height="600px" />
            </div>
            <div className="main__sectionRight">
                <h2 className='heading'>JOIN DEVELOPER STUDENT CLUB </h2>
                <p className="sub_heading">Take Action Now</p>
                <p className="sub1_heading">Are you a Developer, Manager, or Designer?
                      Then this is your community</p>
                <Button href="https://forms.gle/btb9SkfvpbhBW3gFA" className='btn' variant="contained">  Join Us  </Button>

            </div>
        </div>
    )
}

export default MainSection
