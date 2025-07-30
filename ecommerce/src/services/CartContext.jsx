import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
      const storedCart = localStorage.getItem('cartItems')
      return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
      localStorage.setItem('cartItems',JSON.stringify(cartItems))
    },[cartItems])
    const addToCart = (item) => {
        setCartItems((prev) => {
          const exist = prev.find((i) => i.id === item.id);

          if(exist){
           return prev.map((i) => i.id === item.id ? {...i, quantity : i.quantity + 1} : i)
          }else{
            return [...prev, {...item, quantity: 1}];
          }
    })
    };

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const clearCart = () =>{
        setCartItems([]);
    }

    const decreaseQuantity = (id) => {
      setCartItems((prev) => {
        return prev.map((i) => {
          if(i.id === id){
            if(i.quantity > 1){
              return {...i, quantity: i.quantity - 1}
            }
            return null;
          }
          return i;
        })
        .filter((i) => i !== null);
      })
    }
    return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, clearCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
