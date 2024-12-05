import React, { useState, useEffect } from 'react';
import glassCursor from '../img/11.jpg';
import platesCursor from '../img/3.jpg';
import cutleryCursor from '../img/12.jpg';
import cakeStandCursor from '../img/4.jpg';
import trayCursor from '../img/5.jpg';

const cursorImages = {
  glass: glassCursor,
  plates: platesCursor,
  cutlery: cutleryCursor,
  cakeStand: cakeStandCursor,
  tray: trayCursor,
};

const Catalog = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [currentCursor, setCurrentCursor] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const debounceMouseMove = debounce(handleMouseMove, 10); // Debounce function with a delay of 10ms
    window.addEventListener('mousemove', debounceMouseMove);

    return () => {
      window.removeEventListener('mousemove', debounceMouseMove);
    };
  }, []);

  const handleMouseEnter = (cursorType) => {
    setCurrentCursor(cursorType);
  };

  const handleMouseLeave = () => {
    setCurrentCursor(null);
  };

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  return (
    <div className="relative z-[10]">
      <div className="kanit-bold text-7xl text-center flex items-center justify-center h-[40vh]">
        CATALOG
      </div>
      <div className="kanit-light text-xl text-center flex flex-col items-start justify-around h-[50vh] bg-blue-400">
        {['glass', 'plates', 'cutlery', 'cakeStand', 'tray'].map((item) => (
          <button
            key={item}
            className="bg-[#d3d3d3] pl-14 w-full h-full text-4xl kanit-thin text-black text-start border-t border-black hover:bg-black hover:text-white transition-colors duration-300"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            aria-label={`View details of ${item}`}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
      {currentCursor && (
        <img
          src={cursorImages[currentCursor]}
          alt={`${currentCursor} cursor`}
          style={{
            position: 'fixed',
            left: cursorPos.x + 'px',
            top: cursorPos.y + 'px',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            width: '15vw', // Dynamic size based on viewport width
            height: '15vw',
            maxWidth: '200px', // Ensures images are not overly large
            maxHeight: '200px',
            transition: 'transform 0.01s linear',
          }}
        />
      )}
    </div>
  );
};

export default Catalog;
