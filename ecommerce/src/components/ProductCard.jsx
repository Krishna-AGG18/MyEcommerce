import React, { useEffect, useState } from 'react';
import { useCart } from '../services/CartContext';
import { Link } from 'react-router-dom';

function ProductCard({ item }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent <Link> navigation
    e.stopPropagation(); // Stop bubbling to Link
    addToCart(item);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <>
      <Link to={`/product/${item.id}`} >
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl hover:shadow-gray-700/50 transition-shadow duration-300 product-animate">

        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-40 xs:h-56  object-cover"
        />
        <div className="xs:p-3 lg:p-5 p-2  text-white">
          <h2 className="text-xl max-xsm:text-[14px] font-semibold mb-2 line-clamp-1">{item.title}</h2>
          <p className="text-gray-400 text-sm mb-2 line-clamp-2 max-xs:hidden">{item.description}</p>
          <p className="text-gray-400 text-sm xs:mb-4 capitalize">Category: {item.category}</p>
          <div className="flex max-sm:flex-col items-center justify-between">
            <span className="text-lg font-bold text-green-400">₹{item.price}</span>
            <button className="bg-gray-800 hover:bg-gray-700 text-sm px-4 py-2 max-sm:w-full rounded-md text-white font-medium transition duration-200" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

        </div>
      </div>
      </Link>
      {
        addedToCart && 
        (<div
          className="fixed bottom-4 right-1/2 translate-x-1/2 bg-[#d8d5db] text-[#2d3142] px-6 py-3 rounded-lg shadow-xl z-50 border border-gray-400 transition-opacity duration-500 opacity-100 max-xs:text-[10px]"
        >
          Item added to cart!
        </div>)
      }
    </>

  );
}

export default ProductCard;
