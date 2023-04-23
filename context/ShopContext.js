import React, { createContext, useState, useEffect } from "react";
export const ShopContext = createContext();
import { getAllShops } from "../api/shop";
import { getAllItems } from "../api/shop";
import { getFavouritesItems, getUser } from "../api/user";

export const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState([]);
  const [items, setItems] = useState([]);
  const [favItem, setFavItem] = useState([]);
  const [user, setUser] = useState({});
  const [orderList, setOrderList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const pushShops = async () => {
    let shops;
    let items;
    let user;
    try {
      const response = await getAllShops();
      const response2 = await getAllItems();
      const response3 = await getUser();
      shops = response.data;
      items = response2.data;
      user = response3.data;
    } catch (err) {
      console.log(err);
    }
    if (shops) {
      setShop((prev) => {
        return [...shops];
      });
    }
    if (items) {
      setItems((prev) => {
        return [...items];
      });
    }
    if (user) {
      setUser((prev) => {
        return { ...user };
      });
    }
  };

  const addToList = ({ itemId }, { shopId }, quantity, isFull) => {
    console.log(itemId, shopId, quantity, isFull);
    shop.forEach((element) => {
      if (element._id === shopId) {
        element.menu.forEach((item) => {
          if (item._id === itemId) {
            let itemObj = {
              itemId: itemId,
              name: item.name,
              isVeg: item.veg,
              totalPrice: isFull
                ? +item.price * +quantity
                : +item.halfPrice * +quantity,
              itemPrice: isFull ? item.price : item.halfPrice,
              quantity: quantity,
            };
            setItemList((prev) => [...prev, { ...itemObj }]);
          }
        });
      }
    });
  };
  console.log("item list", itemList);

  console.log(user.name);
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
        addToList,
        itemList,
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
