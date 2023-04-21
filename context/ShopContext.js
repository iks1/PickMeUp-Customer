import React, { createContext, useState, useEffect } from "react";
export const ShopContext = createContext();
import { getAllShops } from "../api/shop";
import { getAllItems } from "../api/shop";

export const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState([]);
  const [items, setItems] = useState([]);
  const pushShops = async () => {
    const response = await getAllShops();
    const response2 = await getAllItems();
    const shops = response.data;
    const items = response2.data;
    setShop((prev) => {
      return [...shops];
    });
    setItems((prev) => {
      return [...items];
    });
  };

  useEffect(() => {
    pushShops();
  }, []);
  console.log("SHOP FETCHED", shop);
  console.log("iTEM fetched", items);
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
