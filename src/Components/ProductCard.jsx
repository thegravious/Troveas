import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="h-auto flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        {/* Product Image */}
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url(${image || 'https://via.placeholder.com/150'})`,
          }}
          alt={`${name} image`}
        ></div>

        {/* Product Details */}
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-red-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {name}
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-red-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">{price}</span>
            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-red-800 rounded hover:bg-red-700 focus:bg-red-700 focus:outline-none">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop Validation
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string,
};

// Default Props
ProductCard.defaultProps = {
  image: 'https://via.placeholder.com/150', // Placeholder image if none is provided
};

export default ProductCard;
