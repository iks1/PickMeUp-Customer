import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import NonVegIcon from "../assets/Icons/NonVegIcon";
import StarIcon from "../assets/Icons/StarIcon";
import chickenImage from "./../assets/Img/Chicken.png";
const FoodCard = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headingDecorator}>
          <NonVegIcon />
          <Text>{"  Bestseller"}</Text>
        </View>
        <Text style={styles.heading}>Chicken Tikka Masala</Text>
        <Text style={styles.price}>₹265</Text>
        <View style={styles.rating}>
          <Text>{"4.0  "}</Text>
          <StarIcon />
        </View>
      </View>
      <View>
        <Image source={chickenImage} />
        <View style={styles.addBtn}>
          <Text>Add +</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 204,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    padding: 30,
    justifyContent: "space-between",
  },
  addBtn: {
    backgroundColor: "#EEEDFA",
    borderRadius: 30,
    width: "60%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: -10,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  headingDecorator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 10,
    color: "white",
    width: "40%",
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: "blue",
  },
});

export default FoodCard;
