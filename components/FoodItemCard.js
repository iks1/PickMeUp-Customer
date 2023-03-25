import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

// icons
import NonVegIcon from "../assets/Icons/NonVegIcon";
import StarIcon from "../assets/Icons/StarIcon";
import VegIcon from "../assets/Icons/VegIcon";
import PlusIcon from "../assets/Icons/PlusIcon";
import MinusIcon from "../assets/Icons/MinusIcon";

// image
import chickenImage from "./../assets/Img/Chicken.png";

// component
import HorizontalDashedLine from "./HorizontalDashedLine";

const FoodCard = (props) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <View style={styles.foodCardMainContainer}>
      <View style={styles.container}>
        <View style={styles.left}>
          <View>
            <View style={styles.headingDecorator}>
              {props.veg ? <VegIcon /> : <NonVegIcon />}
              {props.bestSeller ? (
                <Text style={styles.tag}>{"  Bestseller"}</Text>
              ) : null}
            </View>
            <Text style={styles.heading}>{props.heading}</Text>
            <Text style={styles.price}>{props.price}</Text>
          </View>
          <View style={styles.rating}>
            <Text style={styles.ratingValue}>{props.ratingValue + "  "}</Text>
            <StarIcon />
          </View>
        </View>

        <View style={styles.right}>
          {/* <View style={styles.box}></View> */}
          <Image source={chickenImage} style={styles.image} />
          {quantity == 0 ? (
            <View style={styles.addBtnStyle}>
              <TouchableOpacity
                onPress={() => {
                  setQuantity((quantity) => quantity + 1);
                }}
              >
                <Text style={styles.addText}>Add +</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.selectedBtnStyles}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setQuantity((quantity) => quantity - 1);
                  }}
                  disabled={quantity == 0 ? true : false}
                >
                  <MinusIcon style={{ marginRight: 10 }} />
                </TouchableOpacity>
              </View>
              <Text style={{ color: "white", fontSize: 14 }}>{quantity}</Text>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setQuantity((quantity) => quantity + 1);
                  }}
                >
                  <PlusIcon style={{ marginLeft: 10 }} />
                </TouchableOpacity>
              </View>
            </View>
          )}
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
  selectedBtnStyles: {
    backgroundColor: "#5736B5",
    borderRadius: 30,
    width: 78,
    paddingVertical: 7,
    marginTop: -10,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addBtnStyle: {
    width: 78,
    alignSelf: "center",
  },
  right: {
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
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
  addText: {
    fontWeight: 500,
    backgroundColor: "#EEEDFA",
    textAlign: "center",
    borderRadius: 30,
    paddingVertical: 7,
    marginTop: -10,
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
  foodCardMainContainer: {
    backgroundColor: "#FFFFFF",
    // marginTop: -1,
  },
});

export default FoodCard;
