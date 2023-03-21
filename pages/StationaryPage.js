import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import ReviewCard from "../components/ReviewCard";
import ShopCardInFocus from "../components/ShopCardInFocus";
import ShopHeader from "../components/ShopHeader";
import SearchBar from "../components/SearchBar";

const StationaryPage = () => {
  const [isFavourite, setIsFavourite] = useState(true);
  const toggleFavourite = () => {
    setIsFavourite((isFavourite) => !isFavourite);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.main}>
        <View style={styles.UpperParent}>
          <ShopHeader isFavourite={isFavourite} onPress={toggleFavourite} />
          <ShopCardInFocus />
        </View>
        <View style={styles.searchArea}>
          <SearchBar textInput="Search for food items..." />
        </View>
        <View style={styles.reviewsContainer}>
          <View style={styles.headingView}>
            <Text>Reviews</Text>
          </View>
          <View style={styles.reviewScroll}>
            <ScrollView horizontal={true}>
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 14,
    color: "#6F6F6F",
  },
  headingView:{
    marginLeft: 4,
    marginBottom: 15,
    marginTop: 15,
  },
  reviewScroll: {
    display: "flex",
    flexDirection: "row",
  },
  reviewsContainer: {
    marginLeft: "5%",
  },
  searchArea: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  UpperParent: {
    display: "flex",
    alignItems: "center",
    marginTop: 35,
  },
  main: {
    backgroundColor: "#EFEEFA",
    height: "100%",
    width: "100%",
  },
  mainContainer: {
    width: "100%",
    height: "100%",
  },
});

export default StationaryPage;
