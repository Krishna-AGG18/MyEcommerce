import React from 'react'
import { useNavigate } from 'react-router-dom';
function Placed() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4">
      <div className="bg-zinc-800 rounded-xl p-8 max-w-md w-full text-center shadow-2xl border border-zinc-700">
        
        {/* Animated checkmark */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 rounded-full p-4 animate-bounce shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-green-400 mb-2">Order Placed!</h1>
        <p className="text-gray-300 mb-6">Thank you for your purchase. We’ll begin processing your order shortly.</p>
        
        <button
          onClick={() => navigate('/')}
          className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-lg transition-all duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Placed