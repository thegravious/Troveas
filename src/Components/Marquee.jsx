import React, { useEffect } from 'react';
import { GoNorthStar } from "react-icons/go";
import gsap from 'gsap';

const Marquee = () => {
  useEffect(() => {
    let animation = null; // To store animation instance and control it

    const handleScroll = (event) => {
      // Determine direction of scroll
      if (event.deltaY > 0) {
        console.log("Scroll Down");
        // If scrolling down, move marquee to left
        if (animation) animation.kill(); // Kill previous animation before starting a new one
        animation = gsap.to(".marquee-wrapper", {
          x: '-50%',  // Move entire marquee wrapper left from the middle
          duration: 5,  // Adjusted duration for smoother movement
          repeat: -1,
          ease: "power2.out", // Smooth easing
        });
      } else {
        console.log("Scroll Up");
        // If scrolling up, reset to original position
        if (animation) animation.kill(); // Kill previous animation before starting a new one
        animation = gsap.to(".marquee-wrapper", {
          x: '0%',  // Reset to original position
          duration: 5,  // Adjusted duration for smoother movement
          repeat: -1,
          ease: "power2.out", // Smooth easing
        });
      }
    };

    // Attach event listener to window
    window.addEventListener("wheel", handleScroll);

    // Cleanup event listener and GSAP animation when component unmounts
    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (animation) animation.kill(); // Kill any ongoing GSAP animation
    };
  }, []);

  return (
    <div className='mt-80'>
      <div className="relative w-full overflow-hidden">
        {/* Bold line above */}
        <div className="w-full border-t-2 border-black"></div>
        {/* Marquee container with smooth animation */}
        <div className="marquee-wrapper mt-8 top-1/2 transform -translate-y-1/2 w-full flex items-center space-x-5 text-4xl tracking-wider kanit-thin">
          {/* Marquee items */}
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex">Drinkware with Troveas</h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex"><GoNorthStar /></h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110">Serveware with Troveas</h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex"><GoNorthStar /></h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex"> Drinkware with Troveas</h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex"><GoNorthStar /></h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110">Serveware with Troveas</h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex"><GoNorthStar /></h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex"> Drinkware with Troveas</h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex"><GoNorthStar /></h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110">Serveware with Troveas</h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex"><GoNorthStar /></h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex"> Drinkware with Troveas</h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex"><GoNorthStar /></h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110">Serveware with Troveas</h1>
          </div>
          <div className="marque flex-shrink-0">
            <h1 className="transition-all text-black hover:scale-110 flex"><GoNorthStar /></h1>
          </div>
        </div>

        {/* Bold line below */}
        <div className="w-full border-b-2 border-black"></div>
      </div>
    </div>
  );
};

export default Marquee;
