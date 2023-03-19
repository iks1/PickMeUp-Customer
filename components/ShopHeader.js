import React from "react";
import { StyleSheet, View } from "react-native";
import HeartIcon from "../assets/Icons/HeartIcon";
import LeftArrowIcon from "../assets/Icons/LeftArrowIcon";

const ShopHeader = (props) => {
  const isFavourite = props.isFavourite;

  return (
    <View style={styles.header}>
      <LeftArrowIcon />
      <HeartIcon isFavourite={isFavourite} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "90%",
    margin:10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ShopHeader;
