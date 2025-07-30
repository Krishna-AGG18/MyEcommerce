import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Checkout, Home, Shop } from './pages'
import { CartProvider } from './services/CartContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* 👈 Wrap your whole app here */}
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
