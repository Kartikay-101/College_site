import React, { useState, useEffect } from 'react';
import mangalmayBg from '../Assets/Images/college3.jpeg';
import glbajajBg from '../Assets/Images/GL_Bajaj.jpg';
import iimtBg from '../Assets/Images/college2.jpg';
import mangalmayLogo from '../Assets/Images/Mangalmay_logo.png';
import glbajajLogo from '../Assets/Images/GLBajaj_logo.png';
import iimtLogo from '../Assets/Images/IIMT_logo.png';

// Add as many colleges as you like here
const colleges = [
  {
    name: "Mangalmay Institute of Engineering and Technology",
    background: mangalmayBg,
    logo: mangalmayLogo,
    fee: "₹5.08 L - 10.77 L",
    placement: "2.6",
    rating: "3.6",
    location: "Knowledge Park-III, Greater Noida, UP",
  },
  {
    name: "G L Bajaj Institute of Technology and Management",
    background: glbajajBg,
    logo: glbajajLogo,
    fee: "₹5.08 L - 10.77 L",
    placement: "2.6",
    rating: "3.6",
    location: "Knowledge Park-III, Greater Noida, UP",
  },
  {
    name: "IIMT Group of Colleges",
    background: iimtBg,
    logo: iimtLogo,
    fee: "₹5.08 L - 10.77 L",
    placement: "2.6",
    rating: "3.6",
    location: "Knowledge Park-III, Greater Noida, UP",
  },
  // Add more colleges here as examples
  {
    name: "Mangalmay Institute of Engineering and Technology",
    background: mangalmayBg,
    logo: mangalmayLogo,
    fee: "₹5.08 L - 10.77 L",
    placement: "2.6",
    rating: "3.6",
    location: "Knowledge Park-III, Greater Noida, UP",
  },
  {
    name: "G L Bajaj Institute of Technology and Management",
    background: glbajajBg,
    logo: glbajajLogo,
    fee: "₹5.08 L - 10.77 L",
    placement: "2.6",
    rating: "3.6",
    location: "Knowledge Park-III, Greater Noida, UP",
  },
  {
    name: "IIMT Group of Colleges",
    background: iimtBg,
    logo: iimtLogo,
    fee: "₹5.08 L - 10.77 L",
    placement: "2.6",
    rating: "3.6",
    location: "Knowledge Park-III, Greater Noida, UP",
  },
];

export default function CollegeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colleges.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? colleges.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-white text-black">
      <h1 className="text-4xl pl-10 mb-10 text-black bg-white">Top Recommended Colleges</h1>
      <div className="relative flex justify-center items-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 text-2xl bg-gray-200 p-2 rounded-full"
        >
          &lt;
        </button>

        {/* Slider */}
        <div className="flex space-x-4 overflow-hidden">
          {colleges.map((college, index) => {
            // Calculate the display position of each image
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + colleges.length) % colleges.length;
            const isNext = index === (currentIndex + 1) % colleges.length;

            return (
              <div
                key={index}
                className={`relative transition-transform duration-500 ease-in-out rounded-lg shadow-lg ${
                  isActive
                    ? 'transform scale-100'
                    : isPrev || isNext
                    ? 'transform scale-90 opacity-80'
                    : 'hidden'
                }`}
                style={{
                   width: isActive ? '550px' : '400px',
                  height: isActive ? '270px' : '250px',
                }}
              >
                <img
                  src={college.background}
                  alt={college.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <figure className="absolute top-4 left-5">
                <img src={college.logo} alt="college logo" className="w-12 h-12" />
                </figure>
                {/* Overlay with Details */}
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 rounded-lg flex flex-col justify-end">
                    
                  <h2 className="text-lg font-bold">{college.name}</h2>
                  <p>Fee: {college.fee}</p>
                  <p>Placement: {college.placement}</p>
                  <p>Rating: {college.rating}</p>
                  <p>Location: {college.location}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 text-2xl bg-gray-200 p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
