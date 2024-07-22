import React from 'react';
import 'tailwindcss/tailwind.css';


const About = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-bounce">About Demedcare</h1>
                    <p className="text-lg text-gray-600">Founded in 2022</p>
                </div>

                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
                            <p className="text-gray-700 mb-4">
                                Demedcare started in 2022, with about 30 clients all from my personal contacts, friends, family, and a few referrals. The company was borne out of my personal quest for a sustainable, interesting, affordable health plan. Having been a consistent gym person with so much hard work for 14 years coupled with some special diet plans, I discovered losing weight wasn't that fast and sustainable!
                            </p>
                            <p className="text-gray-700 mb-4">
                                As a Medical Laboratory Scientist, I utilized my expertise to do some lab tests to check my blood work while on some diet and daily gym. That brought me to the sustainable plan that is not gender-based and also not location-based. What I and my clients couldn't achieve in 14 years, we achieved in 4 weeks and it has been sustainable for over 2 years.
                            </p>
                            <p className="text-gray-700">
                                My clients are based in different countries, even outside Nigeria and in the diaspora, both male and female, ages from 12 years old and above. It focuses on Metabolic Health, which is defined by optimal levels of blood sugar, triglycerides, high-density lipoprotein, cholesterol levels, blood pressure, and waist circumference.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 px-4">
                        <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Beauty of the Plan</h2>
                            <p className="text-gray-700 mb-4">
                                It's a personalized daily coaching via WhatsApp based on clients' convenience, time, and zone. As a Biomedical Scientist, clients have access to routine blood check.
                            </p>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Services Rendered</h3>
                            <ul className="list-none space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-heartbeat text-red-500 mr-3"></i>
                                    <span className="text-gray-700">Personalized health plan that's very convenient for the client</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-apple-alt text-green-500 mr-3"></i>
                                    <span className="text-gray-700">Affordable, cheap, easy diet that is not monotonous for clients</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-dumbbell text-blue-500 mr-3"></i>
                                    <span className="text-gray-700">Tailored exercise plans for sustainable health</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-user-md text-yellow-500 mr-3"></i>
                                    <span className="text-gray-700">Routine blood checks available for clients</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
