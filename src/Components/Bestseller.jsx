// Bestseller.js
import React from 'react';
import ProductCard from './ProductCard';

// Import images
import glassCursor from '../img/11.jpg';
import platesCursor from '../img/3.jpg';
import cutleryCursor from '../img/12.jpg';
import cakeStandCursor from '../img/4.jpg';
import trayCursor from '../img/5.jpg';

const products = [
  {
    id: 1,
    name: 'Glass',
    price: '$129',
    image: glassCursor, // Using imported image
  },
  {
    id: 2,
    name: 'Plates',
    price: '$180',
    image: platesCursor, // Using imported image
  },
  {
    id: 3,
    name: 'Cutlery',
    price: '$90',
    image: cutleryCursor, // Using imported image
  },
  {
    id: 4,
    name: 'Cake Stand',
    price: '$90',
    image: cakeStandCursor, // Using imported image
  },

];

const Bestseller = () => {
  return (
    <>
      <div className='border-t border-black h-screen relative z-[1]'>
        <div className="flex flex-col md:flex-row items-center h-[400px] justify-between p-10"> {/* Reduced padding */}
          <div className="space-y-14 text-center">
            <p className="font-bold text-6xl md:text-7xl text-gray-800">Shop Our Best Seller</p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 w-full md:w-[90%] lg:w-[80%] kanit-light mx-auto">
              Our utensils are designed to enhance your everyday kitchen experience. From cooking tools to tableware, each piece combines functionality with style, elevating both your cooking and dining. Explore our premium collection that adds a touch of elegance to every meal.
            </p>
            <button className="text-white bg-black py-5 px-10 md:px-36 text-3xl mt-4 transition-transform hover:scale-105 shadow-lg kanit-thin mx-auto">
              Explore Now
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-around gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image} // Passing the image to ProductCard component
                />
              ))}
            </div>
        </div>

      </div>
    </>
  );
};

export default Bestseller;
