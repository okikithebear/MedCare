import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import Picture1 from '../../assets/Img/Picture (7).jpg';
import Picture2 from '../../assets/Img/Picture (8).jpg';
import Picture3 from '../../assets/Img/Picture (5).jpg';
import Picture4 from '../../assets/Img/Picture (4).jpg';
import Picture5 from '../../assets/Img/2db24e6c-a714-4e5f-9553-be2efd3e62f6.jpg';
import Picture6 from '../../assets/Img/c15015ac-7196-4a86-a290-e357fbe2b9a1.jpeg';


const testimonials = [
    {
        image: Picture1,

    },
    {
        image: Picture2,

    },
    {
        image: Picture3,

    },
    {
        image: Picture4,

    },
    {
        image: Picture5,

    },
    {
        image: Picture6,

    },

];

const Testimonial = () => {
    return (
        <div className="bg-gray-100 py-16 flex justify-center items-center">
            <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">Testimonials</h2>
                <div className="flex justify-center items-center text-lg sm:text-xl text-gray-700 mb-4">
                    <p className="mr-2 text-purple-600 animate-bounce">Swipe to see more</p>
                    <div className="animate-bounce text-purple-600">
                        <i className="ri-arrow-right-s-line text-2xl sm:text-3xl"></i>
                    </div>
                </div>
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
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
    );
};

export default Testimonial;