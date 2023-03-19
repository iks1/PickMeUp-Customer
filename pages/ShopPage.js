import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import FoodCard from "../components/FoodCard";
import ShopCardInFocus from "../components/ShopCardInFocus";
import ToggleSwitch from "toggle-switch-react-native";
import SearchBar from "../components/SearchBar";
import ShopHeader from "../components/ShopHeader";

const ShopPage = () => {
  const [veg, setVeg] = useState(true);
  const label = veg ? "Veg" : "Non-Veg";
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.main}>
        <View style={styles.UpperParent}>
          <ShopHeader isFavourite={0} />
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
        <View style={styles.foodCardStyle}>
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
  foodCardStyle: {
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
