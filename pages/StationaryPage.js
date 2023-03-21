import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import ReviewCard from "../components/ReviewCard";

const StationaryPage = () => {
  return (
    <View>
      <ScrollView horizontal={true} style={styles.reviewsContainer}>
        <ReviewCard
          name="Himanshi Gautam"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore...more"
        />
        <ReviewCard
          name="Himanshi Gautam"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore...more"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
  },
  container: {},
});

export default StationaryPage;
