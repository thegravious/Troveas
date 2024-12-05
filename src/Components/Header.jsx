import React, { useState, useEffect, useRef } from "react";
import imgg from "../img/logo1.avif";
import { CiUser, CiSearch, CiShoppingCart, CiHome, CiHeart } from "react-icons/ci";
import "./style.css";

const Header = () => {
  const [isIconOverTestimonial, setIsIconOverTestimonial] = useState(false);
  const testimonialRef = useRef(null);
  const iconsContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!iconsContainerRef.current || !testimonialRef.current) return;

      const iconsRect = iconsContainerRef.current.getBoundingClientRect();
      const testimonialRect = testimonialRef.current.getBoundingClientRect();

      // Check if the icons container is within the testimonial section
      setIsIconOverTestimonial(
        iconsRect.bottom >= testimonialRect.top &&
        iconsRect.top <= testimonialRect.bottom
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const iconClass = isIconOverTestimonial
    ? "bg-white text-black"
    : "bg-black text-white";

  return (
    <>
      {/* Header Logo */}
      <div className="flex justify-between items-start">
        <div className="w-48 relative top-8 left-10">
          <img src={imgg} alt="Logo" className="object-contain" />
        </div>
      </div>

      {/* Sticky Icon Links */}
      <div
        className="icon-links-container fixed left-[calc(100%-100px)] top-10 z-[10] flex flex-col gap-4 
        sm:hidden hidden lg:flex" // Hide on mobile and tablet, visible on medium screens and up
        ref={iconsContainerRef}
      >
        {[
          { Icon: CiHome, label: "Home" },
          { Icon: CiUser, label: "User" },
          { Icon: CiSearch, label: "Search" },
          { Icon: CiShoppingCart, label: "Cart" },
          { Icon: CiHeart, label: "Favorites" },
        ].map(({ Icon, label }, index) => (
          <button
            key={index}
            className={`icon-link p-2 rounded-full transition-all duration-300 ${iconClass}`}
            aria-label={label}
          >
            <Icon className="text-2xl" />
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
