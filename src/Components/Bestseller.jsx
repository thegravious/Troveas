import React from 'react';
import ProductCard from './ProductCard';

// Import images
import glassCursor from '../img/11.jpg';
import platesCursor from '../img/3.jpg';
import cutleryCursor from '../img/12.jpg';
import cakeStandCursor from '../img/4.jpg';

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
    <div className="border-t border-black min-h-screen relative z-[1] bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[400px] py-10 px-5 md:px-20">
        <div className="space-y-10 md:space-y-14 text-center max-w-xl md:max-w-3xl mx-auto">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800">
            Shop Our Best Seller
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 px-4 md:px-0">
            Our utensils are designed to enhance your everyday kitchen experience. From cooking tools to tableware, each piece combines functionality with style, elevating both your cooking and dining. Explore our premium collection that adds a touch of elegance to every meal.
          </p>
          <button className="text-white bg-black py-4 px-8 sm:px-16 md:px-24 text-lg sm:text-xl md:text-2xl mt-4 transition-transform hover:scale-105 shadow-lg mx-auto">
            Explore Now
          </button>
        </div>
      </div>

      <div className="p-5 md:p-10 lg:p-20">
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
  );
};

export default Bestseller;
