import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const items = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Cart", to: "/cart" },
  { label: "Checkout", to: "/checkout" }
];

function Navbar() {
  const location = useLocation();

  return (
    <div className="w-full sticky top-0 z-50 bg-black shadow-md p-4 flex justify-between items-center">
      <h1 className="text-white text-[12px] sm:text-lg font-bold">Kuch toh naam</h1>

      <nav>
        <ul className="flex gap-3 xs:gap-6 sm:gap-10 xs:px-4">
          {items.map((item, index) => {
            const isActive = location.pathname === item.to;

            return (
              <li key={index} className="group relative">
                <Link
                  to={item.to}
                  className="relative px-2 py-1 inline-block text-[10px] xs:text-sm sm:text-base font-medium text-orange-500"
                >
                  <span className={`${isActive ? "text-orange-600" : ""}`}>
                    {item.label}
                  </span>
                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-orange-600 transform transition-transform duration-300 origin-left ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
