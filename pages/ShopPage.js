import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import FoodCard from "../components/FoodCard";
import ShopCardInFocus from "../components/ShopCardInFocus";

const ShopPage = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.main}>
        <View style={styles.shopCardStyle}>
          <ShopCardInFocus />
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
