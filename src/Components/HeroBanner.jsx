import React from 'react';
import imgg from "../img/1.jpeg";
import "./style.css";

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 absolute top-16">
      <div className="p-8 md:w-[91vw] space-y-4">
        <p className=" text-2xl md:text-3xl text-gray-700">For Your Home</p>
        <p className="font-bold text-7xl md:text-6xl">GERMAN QUALITY</p>
        <p className=" text-lg md:text-xl leading-relaxed text-gray-700 w-full md:w-[90%] lg:w-[80%] kanit-light">
          We craft each wine glass and piece of serveware by hand, infusing every item with care and artistry to elevate your dining experience.
        </p>
        
        <button className="text-white bg-black py-5 px-36 text-3xl mt-4 transition-transform hover:scale-105 shadow-lg kanit-thin">
          Explore Now
        </button>
      </div>

      <div className="w-full left-30 h-[60vh] md:h-[70vh] relative overflow-hidden zindex bg-cover bg-center" style={{ backgroundImage: `url(${imgg})` }}></div>

    </div>
  );
};

export default HeroBanner;
