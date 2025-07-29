import React, { useEffect, useState } from 'react'
import { fetchAllProducts, fetchBySearch, fetchProductByCategory } from '../services/api';
import ProductList from '../components/ProductList';

function Shop() {
  const [items, setItems] = useState("");
  const [category, setCategory] = useState("all");
  const [load, setLoad] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoad(true);
    console.log(category)
    if (category === 'all') {
      fetchAllProducts().then((data) => {
        setItems(data.products.reverse())
        setLoad(false)
      })
    } else {
      fetchProductByCategory(category).then((data) => {
        setItems(data.products)
        setLoad(false)
      })
    }
  }, [category])

  useEffect(() => {
    if(search.trim() !== ""){
      setLoad(true)
      fetchBySearch(search).then((data) => {
        setItems(data.products)
        setLoad(false)
      })
    }else{
      fetchAllProducts().then((data) => {
        setItems(data.products.reverse())
        setLoad(false);
  })}
  },[search])

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'>
      <div className="w-full flex flex-col sm:flex-row items-center gap-4 mb-6 px-2 xs:px-4 sm:px-8 py-3 justify-center">
        {/* Filter Dropdown */}
        <div className="w-full sm:w-1/4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" /></svg>
          <select
            className="w-full bg-black/60 text-white px-4 py-2 rounded-lg border border-gray-700 
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
             shadow-inner backdrop-blur-sm transition duration-200"
            id="filter"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option className="bg-gray-900 text-white" value="all">All Categories</option>

            {/* Men's */}
            <option className="bg-gray-900 text-white" value="mens-shirts">Men's Shirts</option>
            <option className="bg-gray-900 text-white" value="mens-shoes">Men's Shoes</option>
            <option className="bg-gray-900 text-white" value="mens-watches">Men's Watches</option>

            {/* Women's */}
            <option className="bg-gray-900 text-white" value="womens-dresses">Women's Dresses</option>
            <option className="bg-gray-900 text-white" value="womens-bags">Women's Bags</option>
            <option className="bg-gray-900 text-white" value="womens-shoes">Women's Shoes</option>
            <option className="bg-gray-900 text-white" value="womens-jewellery">Women's Jewellery</option>
            <option className="bg-gray-900 text-white" value="womens-watches">Women's Watches</option>

            {/* Accessories & Wearables */}
            <option className="bg-gray-900 text-white" value="sunglasses">Sunglasses</option>
            <option className="bg-gray-900 text-white" value="sports-accessories">Sports Accessories</option>
            <option className="bg-gray-900 text-white" value="mobile-accessories">Mobile Accessories</option>
            <option className="bg-gray-900 text-white" value="tops">Tops</option>

            {/* Electronics */}
            <option className="bg-gray-900 text-white" value="smartphones">Smartphones</option>
            <option className="bg-gray-900 text-white" value="laptops">Laptops</option>
            <option className="bg-gray-900 text-white" value="tablets">Tablets</option>

            {/* Home & Furniture */}
            <option className="bg-gray-900 text-white" value="furniture">Furniture</option>
            <option className="bg-gray-900 text-white" value="home-decoration">Home Decoration</option>
            <option className="bg-gray-900 text-white" value="kitchen-accessories">Kitchen Accessories</option>
            <option className="bg-gray-900 text-white" value="groceries">Groceries</option>

            {/* Beauty & Skin Care */}
            <option className="bg-gray-900 text-white" value="beauty">Beauty</option>
            <option className="bg-gray-900 text-white" value="fragrances">Fragrances</option>
            <option className="bg-gray-900 text-white" value="skin-care">Skin Care</option>

            {/* Sports & Vehicles */}
            <option className="bg-gray-900 text-white" value="motorcycle">Motorcycle</option>
            <option className="bg-gray-900 text-white" value="vehicle">Vehicle</option>

          </select>

        </div>

        {/* Search Input */}
        <div className="w-full sm:w-2/4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>


          <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
            type="text"
            placeholder="Search products..."
            className="w-full bg-black/40 border border-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-inner backdrop-blur-sm transition"
          />
        </div>
      </div>
      {
        load ? <h1 className='text-white'>Loading</h1> : <ProductList items={items} />
      }
    </div>
  )
}

export default Shop