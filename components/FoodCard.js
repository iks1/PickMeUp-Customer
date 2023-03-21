import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import NonVegIcon from "../assets/Icons/NonVegIcon";
import StarIcon from "../assets/Icons/StarIcon";
import chickenImage from "./../assets/Img/Chicken.png";
import HorizontalDashedLine from "./HorizontalDashedLine";
const FoodCard = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.left}>
          <View>
            <View style={styles.headingDecorator}>
              <NonVegIcon />
              <Text style={styles.tag}>{"  Bestseller"}</Text>
            </View>
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
          <Text style={styles.addBtn}>Add +</Text>
        </View>
      </View>
      <HorizontalDashedLine style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  mainContainer: {
    backgroundColor: "#FFFFFF",
    // marginTop: -1,
  },
});

export default FoodCard;
