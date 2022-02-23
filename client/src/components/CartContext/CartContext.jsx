import { createContext, useState, useEffect } from "react";

export const testContext = createContext();

export default function CartContextProvider({ children }) {
  const initialExpenses = JSON.parse(
		window.localStorage.getItem("cart_items") || "[]"
	);

  // const [skip, setSkip ] = useState(false)
  const [updateCartItems, setUpdateCartItems] = useState(initialExpenses);

	useEffect(() => {

    if (updateCartItems?.length >= 1) window.localStorage.setItem("cart_items", JSON.stringify(updateCartItems));

	}, [updateCartItems]);

  console.log(updateCartItems);

  return (
    <testContext.Provider value={{ updateCartItems, setUpdateCartItems }}>
      {children}
    </testContext.Provider>
  );
}
