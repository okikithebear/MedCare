import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Picture1 from '../../assets/Img/Picture (1).jpg';
import Picture2 from '../../assets/Img/Picture (2).jpg';
import Picture3 from '../../assets/Img/Picture (3).jpg';
import Picture4 from '../../assets/Img/Picture (4).jpg';
import Picture5 from '../../assets/Img/Picture (5).jpg';
import Picture6 from '../../assets/Img/Picture (6).jpg';
import Picture7 from '../../assets/Img/Picture (7).jpg';
import Picture8 from '../../assets/Img/Picture (8).jpg';

const testimonials = [
    {
        image: Picture1,
        text: 'The only way to achieve the impossible is to believe it is possible.',
    },
    {
        image: Picture2,
        text: 'Your limitation—it’s only your imagination.',
    },
    {
        image: Picture3,
        text: 'Push yourself, because no one else is going to do it for you.',
    },
    {
        image: Picture4,
        text: 'Great things never come from comfort zones.',
    },
    {
        image: Picture5,
        text: 'Dream it. Wish it. Do it.',
    },
    {
        image: Picture6,
        text: 'Success doesn’t just find you. You have to go out and get it.',
    },
    {
        image: Picture7,
        text: 'The harder you work for something, the greater you’ll feel when you achieve it.',
    },
    {
        image: Picture8,
        text: 'Don’t stop when you’re tired. Stop when you’re done.',
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear',
    };

    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Testimonials</h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
                                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={testimonial.image}
                                        alt={`Testimonial ${index + 1}`}
                                    />
                                </div>
                                <p className="text-lg italic text-gray-700 mb-4">{testimonial.text}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
