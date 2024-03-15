"use client";
import { createContext, useEffect, useState } from "react";

export const OrderData = createContext({});

function OrderContext({ children }) {
  const [cart, setCart] = useState({});

  return (
    <OrderData.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </OrderData.Provider>
  );
}

export default OrderContext;
