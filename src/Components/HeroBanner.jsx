import React from "react";
import imgg from "../img/1.jpeg";
import "./style.css";

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 relative top-16">
      {/* Text Content */}
      <div className="p-8 md:w-[55%] space-y-4">
        <p className="text-2xl md:text-3xl text-gray-700">For Your Home</p>
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
          GERMAN QUALITY
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 w-full md:w-[90%] lg:w-[80%] kanit-light">
          We craft each wine glass and piece of serveware by hand, infusing every item with care and artistry to elevate your dining experience.
        </p>
        <button
          className="text-white bg-black py-4 px-16 md:px-24 lg:px-36 text-xl md:text-2xl lg:text-3xl mt-4 transition-transform hover:scale-105 shadow-lg kanit-thin"
          aria-label="Explore Now"
        >
          Explore Now
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-[45%] h-[50vh] md:h-[70vh] overflow-hidden">
        <img
          src={imgg}
          alt="German Quality Serveware"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
