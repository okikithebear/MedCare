import React, { useState } from 'react';
import "../styles/Header.css";
import logo from "../assets/Img/logo.jpg";

const nav_links = [
    {
        path: '#',
        display: 'Home'
    },
    {
        path: '#',
        display: 'Nutrition'
    },
    {
        path: '#',
        display: 'Fitness'
    },
    {
        path: '#',
        display: 'Contacts'
    },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='header'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="nav_wrapper flex items-center justify-between py-4">
                    <div className="logo flex items-center">
                        <div className="logo_img">
                            <img src={logo} alt="De-medcare logo" className="h-10 w-10" />
                        </div>
                        <h2 className="text-xl font-bold ml-2">De-medcare</h2>
                    </div>

                    <div className={`navigation ${menuOpen ? 'active' : ''} hidden md:block`}>
                        <ul className="menu flex space-x-6">
                            {
                                nav_links.map((item, index) => (
                                    <li className='nav_item' key={index}>
                                        <a href={item.path} className="text-gray-800 hover:text-purple-600 transition">{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="nav_right flex items-center space-x-4">
                        <button
                            className="chat_btn bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300 hidden md:inline-flex items-center"
                            onClick={() => window.open('https://wa.me/message/RL5USQVQAEI5K1', '_blank')}
                        >
                            <i className="fab fa-whatsapp text-xl mr-2"></i> Message De-medcare on WhatsApp
                        </button>


                        <span className='mobile_menu md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                            <i className="ri-menu-line text-2xl"></i>
                        </span>
                    </div>
                </div>

                {menuOpen && (
                    <div className="navigation mobile_nav mt-4 md:hidden">
                        <ul className="menu flex flex-col space-y-4">
                            {
                                nav_links.map((item, index) => (
                                    <li className='nav_item' key={index}>
                                        <a href={item.path} className="text-gray-800 hover:text-green-600 transition">{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
