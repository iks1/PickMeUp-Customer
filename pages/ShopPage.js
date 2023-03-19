import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import FoodCard from "../components/FoodCard";
import ShopCardInFocus from "../components/ShopCardInFocus";
import ToggleSwitch from "toggle-switch-react-native";

const ShopPage = () => {
  const [veg, setVeg] = useState(true);
  const label = veg ? "Veg" : "Non-Veg";
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.main}>
        <View style={styles.shopCardStyle}>
          <ShopCardInFocus />
        </View>
        <View style={styles.searchArea}>
          <View>
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
  toggleView: {
    alignSelf:"flex-end",
  },
  searchArea: {
    display: "flex",
    flexDirection:"column",
  },
  foodCardStyle: {
    marginTop: 10,
  },
  shopCardStyle: {},
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
