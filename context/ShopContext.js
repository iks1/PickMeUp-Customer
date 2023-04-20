import React, { createContext, useState, useEffect } from "react";
export const ShopContext = createContext();
import { getAllShops } from "../api/shop";

export const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState(["HFSHOFDH"]);

  const pushShops = async (shops) => {
    const data = await getAllShops();
    console.log(data);
  };
  return (
    <ShopContext.Provider
      value={{
        shop,
        pushShops,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
