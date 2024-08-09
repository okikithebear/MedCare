import React from 'react';
import { motion } from 'framer-motion'; // Add this if you want to use Framer Motion for animations

const Footer = () => {
    return (
        <footer className="bg-[#6f55f2] text-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-semibold animate__animated animate__fadeIn animate__delay-1s">De-medcare</h2>
                    <p className="text-sm mt-2 animate__animated animate__fadeIn animate__delay-2s">
                        &copy; 2024 De-medcare. All rights reserved.
                    </p>
                </div>
                {/* <div className="flex justify-center items-center space-x-4 mb-4 md:mb-0">
                    <motion.button
                        className="bg-black text-white p-3 rounded-full  transition duration-300"
                        onClick={() => window.open('https://wa.me/message/RL5USQVQAEI5K1', '_blank')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <i className="fab fa-whatsapp text-xl"></i>
                    </motion.button>
                </div> */}
                <div className="text-sm text-center md:text-right">
                    <p className="mb-2 animate__animated animate__fadeIn animate__delay-3s">For payment, please use the following:</p>
                    <p className="font-semibold animate__animated animate__fadeIn animate__delay-4s">
                        1875757165 Access Bank - De-medcare Intensive Health Services
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
