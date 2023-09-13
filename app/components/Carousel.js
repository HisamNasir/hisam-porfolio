'use client'
import React, { useState, useEffect } from 'react';

const DeadLine = new Date(Date.parse(new Date()) + 60 * 24 * 60 * 60 * 1000);
const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      imageUrl: 'https://static.wixstatic.com/media/f38a6c_d82b044f96ed4a50988015a62c5be9ec~mv2.jpg/v1/fit/w_1038,h_779,q_90/f38a6c_d82b044f96ed4a50988015a62c5be9ec~mv2.jpg',

    },
    {
      imageUrl: 'https://static.wixstatic.com/media/f38a6c_26633c3e799b4c36ba56aadf5f6733cd~mv2.png/v1/fit/w_1038,h_779,q_90/f38a6c_26633c3e799b4c36ba56aadf5f6733cd~mv2.png',


    },
    {
      imageUrl: 'https://static.wixstatic.com/media/f38a6c_277bdd8aacaf41429e3c42d5ced0f297~mv2.png/v1/fit/w_1038,h_779,q_90/f38a6c_277bdd8aacaf41429e3c42d5ced0f297~mv2.png',

    },
    {
      imageUrl: 'https://static.wixstatic.com/media/f38a6c_847d08fcaa9c4bbc9201bf716e6df725~mv2.png/v1/fit/w_1038,h_779,q_90/f38a6c_847d08fcaa9c4bbc9201bf716e6df725~mv2.png',


    },
    {
      imageUrl: 'https://static.wixstatic.com/media/f38a6c_7d85729415f54103b062d56b1ddb3086~mv2.png/v1/fit/w_1038,h_779,q_90/f38a6c_7d85729415f54103b062d56b1ddb3086~mv2.png',

    },
    {
      imageUrl: 'https://static.wixstatic.com/media/f38a6c_e8e09a8c96b14ab485f485dcbf82cb73~mv2.png/v1/fit/w_1038,h_779,q_90/f38a6c_e8e09a8c96b14ab485f485dcbf82cb73~mv2.png',


    },

    // Add more slides here if needed
  ];
  const prevSlide = () => {
    setActiveSlide((prevActive) => (prevActive === 0 ? slides.length - 1 : prevActive - 1));
  };
  const nextSlide = () => {
    setActiveSlide((prevActive) => (prevActive === slides.length - 1 ? 0 : prevActive + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change 1000 to adjust the duration
    return () => clearInterval(interval);
  }, []);

  return (

    <div className='relative w-full h-full max-w-[1920px] bg-black'>
      <div className='absolute z-10 font-black text-3xl md:text-9xl text-white w-full h-full flex justify-center items-center'>
        <h1 className=' text-center left-52'>My<br/><span className='text-amber-500'>Renders</span></h1>
      </div>
      <div className="relative w-full h-full overflow-hidden opacity-50">
        {/* Carousel indicators */}
        <div className="absolute bottom-2 z-[2] flex justify-center mb-2 w-full list-none  p-0">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`mx-1 w-8 h-[2px]  ${index === activeSlide ? 'bg-[#BE9F56]' : 'bg-white opacity-50'
                }`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel items */}
        <div className="relative w-full h-full overflow-hidden">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${index === activeSlide
                  ? 'block'
                  : 'hidden'
                } w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <img
                src={slide.imageUrl}
                className="object-cover h-full w-full"
                alt="..."
              />



            </div>
          ))}
        </div>

      </div>
    </div>
    

  );
};

export default Carousel;
