import React, { createContext, useState, useEffect } from "react";
export const ShopContext = createContext();
import { getAllShops } from "../api/shop";

export const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState([]);

  const pushShops = async () => {
    const response = await getAllShops();
    const shops = response.data;
    setShop((prev) => {
      return [...prev, ...shops];
    });
  };

  useEffect(() => {
    pushShops();
  }, []);
  console.log(shop);
  return (
    <ShopContext.Provider
      value={{
        shop,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
