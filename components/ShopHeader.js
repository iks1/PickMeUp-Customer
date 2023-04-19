import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import HeartIcon from "../assets/Icons/HeartIcon";
import LeftArrowIcon from "../assets/Icons/LeftArrowIcon";
import { useNavigation } from "@react-navigation/native";
const ShopHeader = (props) => {
  const isFavourite = props.isFavourite;
  const toggleFavourite = props.onPress;
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>{navigation.goBack();}}>
        <LeftArrowIcon />
      </TouchableOpacity>
      <HeartIcon isFavourite={isFavourite} onPress={toggleFavourite} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ShopHeader;
