import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import NonVegIcon from "../assets/Icons/NonVegIcon";
import StarIcon from "../assets/Icons/StarIcon";
import chickenImage from "./../assets/Img/Chicken.png";
const FoodCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.headingDecorator}>
          <NonVegIcon />
          <Text style={styles.tag}>{"  Bestseller"}</Text>
        </View>
        <View>
          <Text style={styles.heading}>Chicken Tikka Masala</Text>
          <Text style={styles.price}>₹265</Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingValue}>{"4.0  "}</Text>
          <StarIcon />
        </View>
      </View>

      <View style={styles.right}>
        {/* <View style={styles.box}></View> */}
        <Image source={chickenImage} style={styles.image} />
        <View style={styles.addBtn}>
          <Text>Add +</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  price: {
    fontSize: 18,
  },
  tag: {
    color: "#5736B5",
    fontWeight: 500,
  },
  right: {
    alignItems: "flex-end",
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
    // marginLeft: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 500,
  },
  addBtn: {
    backgroundColor: "#EEEDFA",
    borderRadius: 30,
    paddingHorizontal: 15,
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
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    // backgroundColor: "black",

    display: "flex",
    flexDirection: "row",
    padding: 30,
    justifyContent: "space-between",
  },
});

export default FoodCard;
