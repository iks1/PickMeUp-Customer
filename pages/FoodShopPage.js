import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import FoodItemCard from "../components/FoodItemCard";
import ShopCardInFocus from "../components/ShopCardInFocus";
import ToggleSwitch from "toggle-switch-react-native";
import SearchBar from "../components/SearchBar";
import ShopHeader from "../components/ShopHeader";
import UpArrowIcon from "../assets/Icons/UpArrowIcon";
import VegIcon from "../assets/Icons/VegIcon";

const FoodShopPage = () => {
  const [veg, setVeg] = useState(true);
  const label = "Veg";
  const [isFavourite, setIsFavourite] = useState(true);
  const toggleFavourite = () => {
    setIsFavourite((isFavourite) => !isFavourite);
  };
  
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.main}>
        <View style={styles.UpperParent}>
          <ShopHeader isFavourite={isFavourite} onPress={toggleFavourite} />
          <ShopCardInFocus />
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
          <FoodItemCard />
          <FoodItemCard />
          <FoodItemCard />
          <FoodItemCard />
          <FoodItemCard />
        </View>
      </ScrollView>
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
});

export default FoodShopPage;
