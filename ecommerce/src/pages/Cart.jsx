import React from 'react';
import { useCart } from '../services/CartContext';
import {Link} from 'react-router-dom'

function Cart() {
  const { cartItems, addToCart, removeItem, clearCart, decreaseQuantity } = useCart();

  const handleIncrease = (item) => {
    console.log('Increase quantity for:', item);
    addToCart(item);
  };

  const handleDecrease = (item) => {
    console.log('Decrease quantity for:', item);
    decreaseQuantity(item.id)
  };

  const handleRemove = (item) => {
    console.log('Remove item:', item);
    removeItem(item.id)
  };

  const handleClearCart = () => {
    console.log('Clear the cart');
    clearCart();
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-zinc-900 via-black to-zinc-800 p-4 text-white">
      {cartItems.length === 0 ? (
        <div className="text-center flex flex-col items-center gap-4 mt-20 text-xl sm:text-2xl text-gray-400">
          <img src="/emptyCart.png" alt="empty cart image"  className='rounded-lg h-70 '/>
  <p>Your cart is empty 🛒</p>
  
  <Link to="/shop">
    <button className="px-5 py-2 text-white rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition duration-300">
      Shop Now
    </button>
  </Link>
</div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_3px_rgba(255,255,255,0.07)]"
            >
              <div className="relative z-10 bg-black/50 backdrop-blur-sm border border-gray-700 flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-6 rounded-xl p-4 sm:p-5">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">₹{item.price} x {item.quantity}</p>
                </div>
                <div className="flex flex-row justify-between sm:items-center gap-4 sm:gap-6">
                  <button
                    onClick={() => handleRemove(item)}
                    className="text-red-500 text-sm sm:text-base hover:text-red-400 transition"
                  >
                    Remove
                  </button>
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <p className="text-gray-300">Qty:</p>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="px-2 py-1 bg-gray-800 border border-gray-700 rounded hover:bg-gray-700 text-white"
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => handleDecrease(item)}
                      className="px-2 py-1 bg-gray-800 border border-gray-700 rounded hover:bg-gray-700 text-white"
                    >
                      −
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='flex justify-end gap-1'> 
          <button
            onClick={handleClearCart} // Replace with your actual clear function
            className="px-5 py-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition duration-300 cursor-pointer max-xsm:text-[12px] "
          >
            Clear Cart
          </button>
          <Link to='/checkout'>
          <button
            // Replace with your actual clear function
            className="px-5 py-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition duration-300 cursor-pointer max-xsm:text-[12px]"
          >
            Proceed To Checkout
          </button>
          </Link>

          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;
