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
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (cursorType) => {
    setCurrentCursor(cursorType);
  };

  const handleMouseLeave = () => {
    setCurrentCursor(null);
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
            className="bg-[#d3d3d3] pl-14 w-full h-full text-4xl kanit-thin text-black text-start border-t  border-black hover:bg-black hover:text-white transition-colors duration-300"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
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
            position: 'fixed', // Using 'fixed' ensures no scrolling issues
            left: cursorPos.x + 'px',
            top: cursorPos.y + 'px',
            transform: 'translate(-50%, -50%)', // Centers image on cursor
            pointerEvents: 'none', // Allows interactions with buttons below
            width: '200px', // Adjust size as needed
            height: '200px',
            transition: 'transform 0.01s linear', // Makes movement instant
          }}
        />
      )}
    </div>
  );
};

export default Catalog;
