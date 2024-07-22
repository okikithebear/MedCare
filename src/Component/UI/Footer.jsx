import React from 'react'
import logo from "../../assets/Img/logo.jpg"
import "../../styles/Footer.css"

const Footer = () => {
    return <footer className='footer'>
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_box">
                    <div className="logo">
                        <div className="logo_img">
                            <img src={logo} alt="" />
                        </div>
                        <h2>De-medcare</h2>

                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, necessitatibus.</p>
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">Quick links</h4>
                    <ul className="footer_links">
                        <li><a href="#"></a>About us</li>
                        <li><a href="#"></a>Contacts</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

}

export default Footer