import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer__main'>
            <div id='content'>

            </div>
            <div id="join">
                <p>Connect to us!</p>
                <div id='line'></div>
                <h1>nileshpant1999@gmail.com</h1>
            </div>
            <div id='foot'>
                <div id="container">

                    <div id='logo'>
                        <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1563888018200/lJaohMmyY.png' />
                    </div>
                    <div id='footer'>
                        <div id='service'>
                            <h2 className='Service'>Service</h2>
                            <ul class='taglist'>
                                <li className='nav__li'><a className='a_link' href="#">UX&UI Design</a></li>
                                <li className='nav__li'><a className='a_link' href="#">Front-end Develop</a></li>
                                <li className='nav__li'><a className='a_link' href="#">Branding</a></li>
                                <li className='nav__li'><a className='a_link' href="#">Mobile APP Develop</a></li>
                            </ul>
                        </div>
                        <div id='aboutus'>
                            <h2 className='About'>About Us</h2>
                            <ul class='taglist'>
                                <li className='nav__li'><a className='a_link' href="#">Who we are</a></li>
                                <li className='nav__li'><a className='a_link' href="#">Project</a></li>
                                <li className='nav__li'><a className='a_link' href="#">Support Partners</a></li>
                            </ul>
                        </div>
                        <div id='location'>
                            <h2>Location</h2>
                            <p>Sanrat Ashok Technological Institute <br />Civil Lines Vidisha, India</p>
                        </div>
                        <div id="joinus">
                            <h2>Join Us</h2>
                            <p>Talents are always welcome. <br />
                            send your resume to
        <br />pant.nilesh1999@gmail.com </p>
                        </div>
                    </div>
                </div>
                <div id='copy'>
                    <p>&copy; 2020 DSC SATI</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
