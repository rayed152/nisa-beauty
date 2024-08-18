"use client";
import React, { useState, useEffect } from "react";

const images = [
  { path: "/carousel/image1.png", alt: "Image 1", link: "/route1" },
  { path: "/carousel/image2.png", alt: "Image 2", link: "/route2" },
  { path: "/carousel/image3.png", alt: "Image 3", link: "/route3" },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h2 className="text-center text-xl font-bold mt-10  text-[#678A46] animate-pulse underline">
        What's New?
      </h2>
      <div className="relative flex justify-center">
        <div className="relative overflow-hidden mt-4 w-full h-full rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <a
                key={index}
                href={image.link}
                className="w-full h-full flex-shrink-0 block">
                <img
                  src={image.path}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
            &gt;
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}></div>
        ))}
      </div>
    </div>
  );
};
