import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Line from "../assets/horizontalLine.svg";
import Veg from "../assets/veg.svg";
import NonVeg from "../assets/nonVeg.svg";
import QuantityChangeButton from "./quantityChangeButton";

const itemsAdded = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headText}>Items added</Text>
      </View>
      <View style={styles.items}>
        {props.list.map((it) => (
          <View style={styles.order}>
            <View style={styles.line}>
              <Line />
            </View>
            <View style={styles.row}>
              <View style={styles.col1}>
                <View style={styles.itemname}>
                  {it.isVeg === true ? <Veg /> : <NonVeg />}
                  <Text style={styles.text}>{it.name}</Text>
                </View>
                <Text style={styles.price}>₹{it.itemPrice}</Text>
              </View>
              <View style={styles.col2}>
                <QuantityChangeButton num={it.quantity} />
                <Text style={styles.finalPrice}>₹{it.totalPrice}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    flexDirection: "column",
    borderRadius: 16,
    padding: 20,
  },
  head: {
    paddingBottom: 10,
  },
  headText: {
    color: "#6F6F6F",
    fontSize: 16,
    fontWeight: 500,
  },
  order: {
    flexDirection: "column",
    width: "100%",
  },
  itemname: {
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  col1: {
    flexDirection: "column",
  },
  col2: {
    flexDirection: "column",
    alignItems: "flex-end",
    width: "24%",
  },
  text: {
    paddingLeft: 6,
    color: "#020314",
    fontWeight: 500,
    fontSize: 14,
  },
  price: {
    color: "#020314",
    fontWeight: 400,
    fontSize: 14,
    paddingTop: 4,
  },
  finalPrice: {
    color: "#020314",
    fontWeight: 500,
    fontSize: 16,
    paddingRight: 2,
    paddingTop: 8,
  },
  line: {
    paddingTop: 12,
    paddingBottom: 16,
  },
});

export default itemsAdded;
