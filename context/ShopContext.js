import React, { createContext, useState, useEffect } from "react";
export const ShopContext = createContext();
import { getAllShops } from "../api/shop";
import { getAllItems } from "../api/shop";
import { getFavouritesItems } from "../api/user";

export const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState([]);
  const [items, setItems] = useState([]);
  const [favItem, setFavItem] = useState([]);

  const pushShops = async () => {
    let shops;
    let items;

    try {
      const response = await getAllShops();
      const response2 = await getAllItems();
      shops = response.data;
      items = response2.data;
    } catch (err) {
      console.log(err);
    }
    setShop((prev) => {
      return [...shops];
    });
    setItems((prev) => {
      return [...items];
    });
  };

  const pushFavItems = async () => {
    let favItems;
    try {
      const response = await getFavouritesItems();
      favItems = response.data;
    } catch (err) {
      console.log(err);
    }
    setFavItem((prev) => {
      return [...favItems];
    });
  };

  useEffect(() => {
    pushShops();
  }, []);
  return (
    <ShopContext.Provider
      value={{
        shop,
        items,
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
