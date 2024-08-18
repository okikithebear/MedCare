import React from 'react';
import "../styles/Header.css";
import logo from "../assets/Img/logo.jpg";

const Header = () => {
    return (
        <header className='header bg-white'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="nav_wrapper flex items-center justify-between py-4">
                    {/* Logo and Company Name */}
                    <div className="logo flex items-center justify-center sm:justify-start w-full sm:w-auto">
                        <img src={logo} alt="De-Medcare logo" className="h-12 w-12 object-contain animate-bounce" />
                        <h2 className="text-lg sm:text-2xl font-bold ml-2 text-gray-900">
                            <span className="text-red-600">De-</span>
                            <span className="text-green-600">Medcare</span>
                        </h2>
                    </div>

                    {/* Icons */}
                    <div className="nav_right flex items-center space-x-4">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-red-600 transition duration-300">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition duration-300">
                            <i className="fab fa-facebook text-2xl"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-400 transition duration-300">
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                    </div>

                    <span className='mobile_menu md:hidden'>
                        <i className="ri-menu-line text-3xl text-gray-900"></i>
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;
