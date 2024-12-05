import React, { useState, useEffect } from 'react';
import imgg from "../img/logo1.avif";
import { CiUser, CiSearch, CiShoppingCart, CiHome, CiHeart } from "react-icons/ci";
import "./style.css";

const Header = () => {
  const [isIconOverTestimonial, setIsIconOverTestimonial] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const iconsContainer = document.querySelector('.icon-links-container');
      const testimonial = document.getElementById('testimonial');

      if (!iconsContainer || !testimonial) return;

      const iconsRect = iconsContainer.getBoundingClientRect();
      const testimonialRect = testimonial.getBoundingClientRect();

      // Check if the icons container is over the testimonial section
      if (iconsRect.top >= testimonialRect.top && iconsRect.bottom <= testimonialRect.bottom) {
        setIsIconOverTestimonial(true);
      } else {
        setIsIconOverTestimonial(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-start p-2">
        <div className="w-48 relative top-8 left-10">
          <img src={imgg} alt="Logo" />
        </div>
      </div>

      <div className="icon-links-container sticky left-[1900px] z-[1] top-10">
        <button className="icon-link">
          <div className={`icon-background ${isIconOverTestimonial ? 'bg-white text-black' : ''}`}>
            <CiHome />
          </div>
        </button>
        <button className="icon-link">
          <div className={`icon-background ${isIconOverTestimonial ? 'bg-white text-black' : ''}`}>
            <CiUser />
          </div>
        </button>
        <button className="icon-link">
          <div className={`icon-background ${isIconOverTestimonial ? 'bg-white text-black' : ''}`}>
            <CiSearch />
          </div>
        </button>
        <button className="icon-link">
          <div className={`icon-background ${isIconOverTestimonial ? 'bg-white text-black' : ''}`}>
            <CiShoppingCart />
          </div>
        </button>
        <button className="icon-link">
          <div className={`icon-background ${isIconOverTestimonial ? 'bg-white text-black' : ''}`}>
            <CiHeart />
          </div>
        </button>
      </div>
    </>
  );
};

export default Header;
