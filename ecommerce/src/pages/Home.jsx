import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../services/api'
import Marquee from "react-fast-marquee";

function Home() {

  const [product, setProduct] = useState([]);
  const [arrival, setArrival] = useState([]);

  useEffect(() => {
    const fetchMixedProducts = async () => {
      const categories = ['mens-shirts', 'fragrances', 'womens-dresses', 'womens-shoes'];
      const allProducts = [];

      for (const category of categories) {
        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await res.json();
        allProducts.push(...data.products.slice(0, 2)); // Pick 2 from each
      }

      setArrival(allProducts);
    };
    fetchMixedProducts();
  }, []);

  useEffect(() => {
    fetchProducts().then(data => setProduct(data.slice(0, 8)));
  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-zinc-800 to-black">
      {/* Hero Section */}
      <section className="bg-[url('https://plus.unsplash.com/premium_photo-1685656440548-d8cad874d5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZhc2hpb24lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')] bg-cover bg-center text-white py-32 px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Style</h1>
        <p className="text-lg md:text-2xl mb-6">Trendy Collections. Affordable Prices.</p>
        <Link to="/shop">
          <button className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition">
            Shop Now
          </button>
        </Link>
      </section>

      <section className="relative w-full bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 text-black py-6 px-4 text-center">
        <Marquee gradient={false} speed={60} className="text-lg sm:text-2xl font-semibold tracking-wide">
          🎉 Summer Sale! Enjoy <span className="font-bold">30% OFF</span> on all items | 🚚 Fast Delivery | 💥 Limited Time Offer | 🛍️ Shop Now!
        </Marquee>
      </section>


      <section className='py-16 px-4 max-xs:px-2 max-xs:py-6 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-center text-white'>Categories</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 max-xs:gap-1'>
          {[
            { cat: "Mens", img: 'https://i.pinimg.com/736x/27/c6/80/27c680d75f03e2cfc0eb4959b2edca8a.jpg' },
            { cat: "Womens", img: 'https://i.pinimg.com/736x/35/86/35/358635a69bbc19cbe2129d59f0926d80.jpg' },
            { cat: "Electronics", img: 'https://i.pinimg.com/736x/d9/20/7d/d9207d22f311e777cb6711416d2c886f.jpg' },
            { cat: "Accessories", img: 'https://i.pinimg.com/736x/50/fa/79/50fa79a13294a9060378e2d8330dc471.jpg' }
          ].map((categories, idx) => (
            <div
              style={{
                boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.8), -4px -4px 12px rgba(255, 255, 255, 0.05)'
              }}
              key={idx}
              className='bg-gradient-to-br from-zinc-900 via-black to-zinc-800 rounded-xl p-6 max-xs:p-2 text-center shadow hover:shadow-md transition flex flex-col max-xs:gap-3 gap-6'
            >
              <div
                style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.25)' }}
                className='shadow-xl overflow-hidden w-full h-75 max-xs:h-50 hover:rounded-md'
              >
                <img
                  src={categories.img}
                  alt={categories.cat}
                  className="w-full h-75 object-cover rounded mb-4 hover:scale-110 transition duration-300"
                />
              </div>
              <p className="font-medium text-white">{categories.cat}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='w-full px-8 max-sm:px-2 py-14 bg-black/30 backdrop-blur-md'>
        <h2 className='text-3xl font-bold mb-8 text-center text-white'>Featured Products</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 max-sm:gap-1'>
          {
            product.map((item, idx) => (
              <div
                key={item.id + 1000}
                className="p-4 max-xs:p-2 flex flex-col rounded-xl bg-black/40 backdrop-blur-sm border border-gray-700 shadow-md text-white transition-transform duration-300 gap-1 group hover:scale-[1.02]"
                style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.1)'}
              >
                <div
                  style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.25)' }}
                  className='shadow-xl overflow-hidden w-full h-75 max-xs:h-50 max-xsm:h-40 rounded-md'
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full sm:h-75 xs:h-65 xsm:h-50 h-40 mx-auto object-cover mb-4"
                  />
                </div>
                <h3 className="text-lg font-semibold line-clamp-1">{item.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-2 max-xs:hidden">{item.description}</p>
                <p className="mt-2 font-bold text-white">₹{(item.price * 83).toFixed(0)}</p>
                <Link
                  to={`/product/${item.id + 1000}`}
                  className="inline-block mt-3 text-blue-400 hover:underline"
                >
                  View Details
                </Link>
              </div>
            ))
          }
        </div>
      </section>


      <section className="w-full px-2 sm:px-8 py-14 bg-gradient-to-tr from-gray-900 via-black to-gray-800">
        <h2 className='text-3xl font-bold mb-8 text-center text-white'>New Arrival</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 max-sm:gap-1'>
          {
            arrival.map((item) => (
              <div
                key={item.id}
                className="p-4 max-xs:p-2 flex flex-col rounded-xl bg-black/40 backdrop-blur-sm border border-gray-700 shadow-md text-white transition-transform duration-300 gap-1 group hover:scale-[1.02]"
                style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.1)'}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-52 max-xsm:h-40 w-full object-cover rounded-xl mb-4 shadow-md"
                />
                <h3 className="text-lg font-semibold text-white line-clamp-1">{item.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-2  max-xs:hidden">{item.description}</p>
                <p className="mt-2 font-bold text-white">₹{(item.price * 83).toFixed(0)}</p>
                <a
                  href={`/product/${item.id}`}
                  className="inline-block mt-3 text-blue-400 hover:text-blue-300 transition"
                >
                  View Details
                </a>
              </div>

            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Home