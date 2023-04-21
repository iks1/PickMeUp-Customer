import React, { createContext, useState, useEffect } from "react";
export const ShopContext = createContext();
import { getAllShops } from "../api/shop";
import { getFavouritesItems } from "../api/user";

export const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState([]);
  const [favItem, setFavItem] = useState([]);

  const pushShops = async () => {
    const response = await getAllShops();
    const shops = response.data;
    setShop((prev) => {
      return [...prev, ...shops];
    });
  };

  const pushFavItems = async () => {
    const response = await getFavouritesItems();
    const favItems = response.data;
    setFavItem((prev) => {
      return [...prev, ...favItems];
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

  useEffect(() => {
    pushFavItems();
  }, []);
  console.log(favItem);
  return (
    <ShopContext.Provider
      value={{
        favItem,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
