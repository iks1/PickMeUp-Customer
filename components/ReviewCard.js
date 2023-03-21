import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import RatingView from "./RatingView";
import chickenImage from "./../assets/Img/Chicken.png";

const ReviewCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ReviewCardHeader}>
        <View style={styles.profile}>
          <Image source={chickenImage} style={styles.imageContainer} />
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <RatingView rating="3.9" />
      </View>
      <Text>
        {props.review}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: 600,
    marginLeft: 7,
    fontSize: 16,
  },
  imageContainer: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
  },
  ReviewCardHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    width: "70%",
    padding: 10,
    // backgroundColor: "black",
    borderRadius: 20,
  },
});

export default ReviewCard;
