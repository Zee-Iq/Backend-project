import { createContext, useState, useEffect } from "react";

export const testContext = createContext();

export default function CartContextProvider({ children }) {
  const [updateCartItems, setUpdateCartItems] = useState({ 
    counter: 0, 
    items: []
  });
  console.log('test', updateCartItems);
  return (
    <testContext.Provider value={{ updateCartItems, setUpdateCartItems }}>
      {children}
    </testContext.Provider>
  );
}
