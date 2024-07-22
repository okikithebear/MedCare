import React from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { FaAppleAlt, FaLeaf, FaHeartbeat, FaBrain, FaSmile, FaBolt } from 'react-icons/fa';  // Added FaBolt here

const Nutrition = () => {
    return (
        <section className="bg-green-50 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl font-bold text-green-800 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Nourish Your Body
                    </motion.h1>
                    <p className="text-lg text-gray-600 mb-6">Fueling Health, One Bite at a Time</p>
                </div>

                <div className="flex flex-wrap -mx-4 mb-12">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-lg h-full hover:bg-green-100 transition duration-300 ease-in-out"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center mb-4">
                                <FaAppleAlt className="text-green-500 text-4xl mr-4" />
                                <h2 className="text-2xl font-semibold text-green-800">Healthy Eating Habits</h2>
                            </div>
                            <p className="text-gray-700 mb-4">
                                Discover the secrets to a sustainable and enjoyable diet that keeps you feeling your best! Embrace a variety of flavors with our personalized meal plans.
                            </p>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 px-4">
                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-lg h-full hover:bg-green-100 transition duration-300 ease-in-out"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center mb-4">
                                <FaLeaf className="text-green-600 text-4xl mr-4" />
                                <h2 className="text-2xl font-semibold text-green-800">Benefits of a Balanced Diet</h2>
                            </div>
                            <ul className="list-none space-y-4">
                                <li className="flex items-center">
                                    <FaBolt className="text-yellow-500 text-2xl mr-3" />
                                    <span className="text-gray-700">Boosts Energy and Vitality</span>
                                </li>
                                <li className="flex items-center">
                                    <FaBrain className="text-blue-500 text-2xl mr-3" />
                                    <span className="text-gray-700">Enhances Cognitive Function</span>
                                </li>
                                <li className="flex items-center">
                                    <FaHeartbeat className="text-red-500 text-2xl mr-3" />
                                    <span className="text-gray-700">Supports Heart Health</span>
                                </li>
                                <li className="flex items-center">
                                    <FaSmile className="text-green-500 text-2xl mr-3" />
                                    <span className="text-gray-700">Improves Mood and Well-Being</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nutrition;
