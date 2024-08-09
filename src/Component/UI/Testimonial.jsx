import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import Picture1 from '../../assets/2f8e9213-e311-4f45-a0aa-a709337a3407.jpg';
import Picture2 from '../../assets/49ec6a1a-6943-49b6-b9b0-f91c32aec75a (1).jpeg';
import Picture3 from '../../assets/49ec6a1a-6943-49b6-b9b0-f91c32aec75a.jpeg';
import Picture4 from '../../assets/71ca5f55-b7d6-4ef5-beca-b72775ff49a0.jpeg';
import Picture5 from '../../assets/7821666c-3756-44e9-a442-d538b64cf94c.jpeg';
import Picture6 from '../../assets/ad22fb78-c5d3-40d7-a50f-857156975b91.jpeg';
import Picture7 from '../../assets/db07edaf-1ce6-451b-84a6-ca010c94de08.jpeg';
import Picture8 from '../../assets/ffe7438a-49ea-45cb-8fde-de1ce66b129b.jpeg';

const testimonials = [
    {
        image: Picture1,
        text: 'The program dey always work for me o',
    },
    {
        image: Picture2,
        text: 'Knowing this secret, I have been able to control my weight',
    },
    {
        image: Picture3,
        text: 'I thank God',
    },
    {
        image: Picture4,
        text: "That's the way of De-medcare Health plan. It sets you free for life.",
    },
    {
        image: Picture5,
        text: 'Thank you sis',
    },
    {
        image: Picture6,
        text: 'Even though I fell out, I am back on track.',
    },
    {
        image: Picture7,
        text: "That's natural and bound to happen my sis",
    },
    {
        image: Picture8,
        text: 'Success doesn’t just find you. You have to go out and get it.',
    },
];

const Testimonial = () => {
    return (
        <div className="bg-gray-100 py-16 flex justify-center items-center">
            <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">Testimonials</h2>
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                    }}
                    className="h-auto"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                                <img
                                    src={testimonial.image}
                                    alt={`Testimonial ${index + 1}`}
                                    className="w-full h-64 sm:h-80 object-contain object-center"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 sm:p-6">
                                    <p className="text-sm sm:text-lg italic text-white text-center">{testimonial.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
