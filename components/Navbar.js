import React, { useState, useEffect } from "react";
import {View,TouchableOpacity,StyleSheet,Text,Keyboard} from "react-native";
import HomeIcon from "../assets/homeNav.svg";
import FoodIcon from "../assets/foodNav.svg";
import PrintIcon from "../assets/printNav.svg";
import OrderIcon from "../assets/orderNav.svg";
import HomeIconActive from "../assets/homeNavActive.svg";
import FoodIconActive from "../assets/foodNavActive.svg";
import PrintIconActive from "../assets/printNavActive.svg";
import OrderIconActive from "../assets/orderNavActive.svg";
import { useNavigation } from "@react-navigation/native";

const NavBar = (props) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.navBar]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.tab}
      >
        {props.active === "Home" ? <HomeIconActive /> : <HomeIcon />}

        <Text style={props.active === "Home" ? styles.activeText : styles.text}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Food");
        }}
        style={styles.tab}
      >
        {props.active === "Food" ? <FoodIconActive /> : <FoodIcon />}

        <Text style={props.active === "Food" ? styles.activeText : styles.text}>
          Food
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Print");
        }}
        style={styles.tab}
      >
        {props.active === "Print" ? <PrintIconActive /> : <PrintIcon />}

        <Text style={props.active === "Print" ? styles.activeText : styles.text}>
          Print
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Order");
        }}
        style={styles.tab}
      >
        {props.active === "Order" ? <OrderIconActive /> : <OrderIcon />}

        <Text style={props.active === "Order" ? styles.activeText : styles.text}>
          Orders
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    width: "100%",
    height: 64,
    bottom: 0,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: 500,
    marginTop: 4,
    color: "#999999",
  },
  activeText: {
    fontSize: 12,
    fontWeight: 500,
    marginTop: 4,
    color: "#5932E6",
  },
});

export default NavBar;
