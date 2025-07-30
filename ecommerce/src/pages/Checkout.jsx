import React, { useState } from 'react';
import { useCart } from '../services/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    billingAddress: '',
    addressLine1: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });

  const isFormComplete = Object.values(formData).every((val) => val.trim() !== '') && cartItems.length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-800 to-black text-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Billing & Shipping Info */}
        <div className="space-y-6">
          {/* Billing Info */}
          <div className='bg-gradient-to-br from-zinc-900 via-black to-zinc-800 rounded-xl p-6 max-xs:p-2'>
            <h2 className="text-xl font-semibold mb-2 ">Billing Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 text-gray-200 placeholder-gray-400 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 text-gray-200 placeholder-gray-400 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 text-gray-200 placeholder-gray-400 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                name="billingAddress"
                placeholder="Billing Address"
                rows="3"
                value={formData.billingAddress}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 text-gray-200 placeholder-gray-400 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Shipping Info */}
          <div className='bg-gradient-to-br from-zinc-900 via-black to-zinc-800 rounded-xl p-6'>
            <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="addressLine1"
                placeholder="Address Line 1"
                value={formData.addressLine1}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 text-gray-200 placeholder-gray-400 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 text-gray-200 placeholder-gray-400 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-3 bg-zinc-800 text-gray-200 placeholder-gray-400 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full p-3 bg-zinc-800 text-gray-200 placeholder-gray-400 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 text-gray-200 placeholder-gray-400 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                </div>
                <p className="text-green-400 font-medium">₹{item.quantity * item.price}</p>
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-700" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span className="text-green-400">₹{total}</span>
          </div>
          <button
            className={`w-full mt-6 py-3 rounded-lg font-semibold ${
              isFormComplete
                ? 'bg-green-500 hover:bg-green-600 text-black'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!isFormComplete}
              onClick={() => navigate('/placed')}

          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
