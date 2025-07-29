import React from 'react';

function ProductCard({ img, title, desc, category, price }) {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl hover:shadow-gray-700/50 transition-shadow duration-300">

      <img
        src={img}
        alt={title}
        className="w-full h-40 xs:h-56  object-cover"
      />
      <div className="xs:p-3 lg:p-5 p-2  text-white">
        <h2 className="text-xl max-xsm:text-[14px] font-semibold mb-2 line-clamp-1">{title}</h2>
        <p className="text-gray-400 text-sm mb-2 line-clamp-2 max-xs:hidden">{desc}</p>
        <p className="text-gray-400 text-sm xs:mb-4 capitalize">Category: {category}</p>
        <div className="flex max-sm:flex-col items-center justify-between">
          <span className="text-lg font-bold text-green-400">₹{price}</span>
          <button className="bg-gray-800 hover:bg-gray-700 text-sm px-4 py-2 max-sm:w-full rounded-md text-white font-medium transition duration-200">
            Add to Cart
          </button>






        </div>
      </div>
    </div>
  );
}

export default ProductCard;
