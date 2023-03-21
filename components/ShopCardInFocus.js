import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PhoneIcon from "./../assets/Icons/PhoneIcon";
import ArrowInCircleIcon from "./../assets/Icons/ArrowInCircleIcon";
import StarIcon from "../assets/Icons/StarIcon";
import RatingView from "./RatingView";

const ShopCardInFocus = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.head}>{"Dihing Canteen"}</Text>
        <RatingView rating="4.0" />
      </View>
      <View>
        <Text style={styles.description}>
          {"400m · Snacks, Multi Cuisine  "}
        </Text>
      </View>
      <View style={styles.openClose}>
        <Text style={styles.openBtn}>{"Open"}</Text>
        <Text style={styles.closesInText}>{"  Closes in 4 hours"}</Text>
      </View>
      <View style={styles.shopDetails}>
        <View style={styles.button}>
          <PhoneIcon style={styles.buttonText} />
          <Text style={styles.buttonText}>{"  Contact"}</Text>
        </View>
        <View style={{ ...styles.button, marginLeft: 10 }}>
          <ArrowInCircleIcon />
          <Text style={{ ...styles.buttonText }}>{"  Directions"}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 600,
    fontSize: 12,
  },
  button: {
    backgroundColor: "#EEEDFA",
    paddingHorizontal: 20,
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "auto",
    borderRadius: 15,
  },
  shopDetails: {
    display: "flex",
    flexDirection: "row",
  },
  closesInText: {
    fontWeight: 400,
    fontSize: 12,
    color: "#6F6F6F",
  },
  openBtn: {
    borderRadius: 15,
    backgroundColor: "#55AE63",
    paddingHorizontal: 10,
    color: "#FFFFFF",
    fontWeight: 500,
    fontSize: 12,
    paddingVertical: 2,
  },
  openClose: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    fontWeight: 400,
    fontSize: 14,
    color: "#6F6F6F",
    marginTop: -4,
  },

  head: {
    fontWeight: 500,
    fontSize: 20,
    // fontFamily:'General Sans'
  },
  heading: {
    // fontWeight: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    marginVertical: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 30,
    marginHorizontal: 0,
    padding: 30,
    height: 170,
    width: "90%",
    backgroundColor: "white",
  },
  parent: {},
});

export default ShopCardInFocus;
