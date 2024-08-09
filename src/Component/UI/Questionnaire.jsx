import React from 'react';
import questionnaire from '../../assets/De-medcare questionnaire.docx';
import video from '../../assets/videos/eddc3927-eda6-4811-8ea3-b9826a721f24.mp4';

const Questionnaire = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg shadow-xl max-w-screen-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
                Get Started with De-medcare
            </h2>

            <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Watch Our Introduction Video
                </h3>
                <div className="relative pb-9/16">
                    <video
                        className="rounded-lg shadow-lg w-full h-full object-cover"
                        controls
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                    Download Our Questionnaire
                </h3>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                    Please fill out the questionnaire to help us understand your health goals better.
                </p>
                <a
                    href={questionnaire}
                    download
                    className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105"
                >
                    Download Questionnaire
                </a>
            </div>
        </div>
    );
};

export default Questionnaire;
