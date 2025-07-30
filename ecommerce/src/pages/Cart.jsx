import React from 'react'
import { useCart } from '../services/CartContext'

function Cart() {
  const { cartItems } = useCart();

  console.log(cartItems);
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-zinc-900 via-black to-zinc-800 border border-gray-800 text-white p-4 ">
      {
        cartItems.length === 0 ?
          <h1>empty</h1> :
          <>
            <div className="relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.15)]">
              <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-white">
                <h3 className="text-lg font-semibold">Product Name</h3>
                <p className="text-sm text-gray-300">₹199 x 2</p>
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default Cart