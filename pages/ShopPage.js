import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import FoodCard from "../components/FoodCard";
import ShopCardInFocus from "../components/ShopCardInFocus";
import ToggleSwitch from "toggle-switch-react-native";
import SearchBar from "../components/SearchBar";
import ShopHeader from "../components/ShopHeader";
import UpArrowIcon from "../assets/Icons/UpArrowIcon";

const ShopPage = () => {
  const [veg, setVeg] = useState(true);
  const label = veg ? "Veg" : "Non-Veg";
  const [isFavourite, setIsFavourite] = useState(true);
  const toggleFavourite = () => {
    setIsFavourite((isFavourite) => !isFavourite);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.main}>
        <View style={styles.UpperParent}>
          <ShopHeader isFavourite={isFavourite} onPress={toggleFavourite} />
          <View style={styles.shopCardParent}>
            <ShopCardInFocus />
          </View>
          <View style={styles.searchArea}>
            <SearchBar textInput="Search for food items..." />
            <View style={styles.toggleView}>
              <ToggleSwitch
                isOn={veg}
                onColor="green"
                offColor="red"
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
        </View>
        <View style={styles.foodCardsContainerStyle}>
          <View style={styles.recommendedHeader}>
            <Text style={styles.recommendedTextStyle}>Recommended</Text>
            <UpArrowIcon />
          </View>
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
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
    padding: "5%",
  },
  UpperParent: {
    display: "flex",
    alignItems: "center",
  },
  toggleView: {
    alignSelf: "flex-end",
    paddingRight: "5%",
  },
  searchArea: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  foodCardsContainerStyle: {
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

export default ShopPage;
