import React, { useEffect, useRef, useState } from 'react';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4];
  const totalSlides = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === totalSlides) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  };

  return (
    <>
      {/* Sliding Hero Section */}
      <div className="
        relative w-full h-[45vh] md:h-[500px] overflow-hidden
        border-t-4 border-gray-300
        shadow-lg shadow-gray-500/30
        rounded-xl md:rounded-none mt-4 mb-6
        bg-black
      ">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10 pointer-events-none"></div>

        {/* Text & Button Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center md:items-start justify-center text-center md:text-left px-4 md:px-12">
          <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
            Upgrade Your Lifestyle
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mt-2 mb-4 max-w-md">
            Discover our premium collection of electronics and accessories tailored just for you.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-5 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Shop Now
          </button>
        </div>

        {/* Slider Images */}
        <div
          ref={sliderRef}
          className="flex h-full"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
            willChange: 'transform',
          }}
        >
          {[...images, images[0]].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className="min-w-full h-[45vh] md:h-[500px] object-cover flex-shrink-0 transition-transform duration-1000 ease-in-out transform hover:scale-105"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Product Cards with text overlays */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10 px-3 md:px-4'>
        {[
          { img: product1, title: "Wireless Pods", desc: "Crystal clear sound" },
          { img: product2, title: "Smartphone Collection", desc: "Latest models, best deals" },
          { img: product3, title: "High-Performance Laptop", desc: "Power meets portability" },
          { img: product4, title: "Over-Ear Headphones", desc: "Immersive audio experience" }
        ].map((item, i) => (
          <div
            key={i}
            className='relative bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300'
          >
            <img
              src={item.img}
              alt={item.title}
              className='w-full h-[180px] md:h-[300px] object-contain bg-white transition-transform duration-500 group-hover:scale-105'
              loading="lazy"
            />
            {/* Overlay Text */}
            <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3'>
              <h3 className='text-white font-semibold text-sm md:text-base'>{item.title}</h3>
              <p className='text-gray-200 text-xs md:text-sm'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
