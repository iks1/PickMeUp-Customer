import React from "react";
import { StyleSheet, View } from "react-native";
import HeartIcon from "../assets/Icons/HeartIcon";
import LeftArrowIcon from "../assets/Icons/LeftArrowIcon";

const ShopHeader = (props) => {
  const isFavourite = props.isFavourite;
  const toggleFavourite = props.onPress;

  return (
    <View style={styles.header}>
      <LeftArrowIcon />
      <HeartIcon isFavourite={isFavourite} onPress={toggleFavourite} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "90%",
    marginVertical: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ShopHeader;
