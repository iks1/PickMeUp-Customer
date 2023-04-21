import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text, Image, Modal } from "react-native";
import chickenImage from "./../assets/Img/Chicken.png";
import { useNavigation } from "@react-navigation/native";

// components
import FoodItemCard from "../components/FoodItemCard";
import ShopCardInFocus from "../components/ShopCardInFocus";
import ToggleSwitch from "toggle-switch-react-native";
import SearchBar from "../components/SearchBar2";
import ShopHeader from "../components/ShopHeader";
import FoodPopUp from "../components/FoodPopUp";
import NavBar from "../components/Navbar";

// icons
import UpArrowIcon from "../assets/Icons/UpArrowIcon";
import StarIcon from "../assets/Icons/StarIcon";
import NonVegIcon from "../assets/Icons/NonVegIcon";
import VegIcon from "../assets/Icons/VegIcon";

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { getShopById } from "../api/shop";

const FoodShopPage = ({ route }) => {
  const [shopI, setShopI] = useState({});
  let shopId = route.params.id;
  const [itemList,setItemList] = useState([]);
  console.log(shopId)
  const ctx = useContext(ShopContext);
  useEffect(() => {
    //Runs only on the first render
    const items = [];
    ctx.shop.forEach(element =>{
      if(element._id === shopId){
        setShopI(element)
        element.menu.forEach(item=>{
        items.push(item)
        })
      }
    })
    setItemList(prev=>[...items])
  }, [shopId]);
  
  console.log(shopI);
  console.log(itemList)
  const navigation = useNavigation();
  const [veg, setVeg] = useState(true);
  const label = "Veg";
  const [isFavourite, setIsFavourite] = useState(true);
  const toggleFavourite = () => {
    setIsFavourite((isFavourite) => !isFavourite);
  };

const itemCard = itemList.map(item=> <FoodItemCard
  heading={item.name}
  fullPrice={item.price}
  ratingValue={item.rating}
  veg={item.veg ? 1 : 0}
  bestSeller={1}
  halfFull="1"
  image={chickenImage}
  halfPrice="160"
/>)
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.main}>
        <View style={styles.UpperParent}>
          <ShopHeader isFavourite={isFavourite} onPress={toggleFavourite} />
          <ShopCardInFocus
            isOpen={shopI.isOpened ? "OPEN" : "CLOSE"}
            rating={shopI.rating}
            name={shopI.name}
            contact={shopI.phone_number}
          />
          <View style={styles.searchArea}>
            <SearchBar textInput="Search for food items..." />
          </View>
          <View style={styles.toggleView}>
            <VegIcon />
            <ToggleSwitch
              isOn={veg}
              onColor="green"
              offColor="white"
              thumbOnStyle={{ backgroundColor: "#EEEDFA" }}
              thumbOffStyle={{ backgroundColor: "#EEEDFA" }}
              label={label}
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="medium"
              onToggle={() => {
                console.log("changed to : ", veg);
                setVeg(!veg);
              }}
            />
          </View>
        </View>
        <View style={styles.foodItemCardsContainerStyle}>
          <View style={styles.recommendedHeader}>
            <Text style={styles.recommendedTextStyle}>Recommended</Text>
            <UpArrowIcon />
          </View>
    {itemCard}
        </View>
      </ScrollView>
      <NavBar active="Food" />
    </View>
  );
};

const styles = StyleSheet.create({
  recommendedTextStyle: {
    color: "#6F6F6F",
    fontSize: 16,
    fontWeight: 500,
  },
  recommendedHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: -30,
    zIndex: 1,
    padding: "6%",
  },
  UpperParent: {
    display: "flex",
    alignItems: "center",
    marginTop: 35,
  },
  toggleView: {
    alignSelf: "flex-end",
    paddingRight: "5%",
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchArea: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  foodItemCardsContainerStyle: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "white",
    marginTop: 10,
  },
  shopCardParent: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    backgroundColor: "#EFEEFA",
    height: "100%",
    width: "100%",
  },
  mainContainer: {
    width: "100%",
    height: "100%",
  },

  // food card style
  line: {
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
  price: {
    fontSize: 18,
  },
  tag: {
    color: "#5736B5",
    fontWeight: 500,
  },
  right: {
    alignItems: "flex-end",
    justifyContent: "center",
    // backgroundColor: "black",
  },
  left: {
    // backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    alignSelf: "flex-start",
  },
  image: {
    marginRight: 0,
    borderRadius: 20,
    // marginLeft: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 500,
  },
  addBtn: {
    fontWeight: 500,
    backgroundColor: "#EEEDFA",
    textAlign: "center",
    borderRadius: 30,
    width: "80%",
    paddingVertical: 7,
    marginTop: -10,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
  },
  headingDecorator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },
  ratingValue: {
    color: "white",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#55AE63",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 1,
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: "blue",
  },
  container: {
    position: "relative",
    width: "100%",
    height: 170,
    marginVertical: 0,
    backgroundColor: "#FFFFFF",
    // backgroundColor: "black",

    display: "flex",
    flexDirection: "row",
    padding: "6%",
    justifyContent: "space-between",
  },
  foodCardMainContainer: {
    backgroundColor: "#FFFFFF",
    // marginTop: -1,
  },
});

export default FoodShopPage;
