import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import ReviewCard from "../components/ReviewCard";
import ShopCardInFocus from "../components/ShopCardInFocus";
import ShopHeader from "../components/ShopHeader";
import SearchBar from "../components/SearchBar2";
import PrintCard from "../components/Printcard";
import chickenImage from "./../assets/Img/Chicken.png";
import { Shadow } from "react-native-shadow-2";

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

        <View>
          <View style={styles.headingView }>
            <Text>Services</Text>
          </View>
          <View style={styles.options}>
            <View style={styles.options1}>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="Color Print" image={chickenImage} />
                </View>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="B/W Print" image={chickenImage} />
                </View>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="Laminate" image={chickenImage} />
                </View>
            </View>
            <View style={styles.options1}>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="Spiral Binding" image={chickenImage} />
                </View>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="Banner Print" image={chickenImage} />
                </View>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="ID Card Print" image={chickenImage} />
                </View>
            </View>
          </View>
        </View>

        <View style={styles.reviewsContainer}>
          <View style={styles.headingView}>
            <Text>Reviews</Text>
          </View>
          <View style={styles.reviewScroll}>
            <ScrollView horizontal={true}>
              <View style={styles.rev}>
                <ReviewCard
                  name="Himanshi Gautam"
                  review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore...more"
                />
              </View>
              <View style={styles.rev}>
                <ReviewCard
                  name="Himanshi Gautam"
                  review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore...more"
                />
              </View>
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
  options: {
    width: "100%",
    flexDirection: "column",
  },
  options1: {
    width: "91%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 16,
  },
  wrapper1: {
    borderRadius: 16,
    height: 98,
    width: "30%",
  },
  headingView: {
    // marginLeft: 30,
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 24,
  },
  reviewScroll: {
    display: "flex",
    flexDirection: "row",
  },
  reviewsContainer: {
    marginBottom: 19,
  },
  rev: {
    marginHorizontal: 16,
    width: 280,
  },
  searchArea: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
  },
  UpperParent: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  main: {
    backgroundColor: "#EFEEFA",
    height: "100%",
    width: "100%",
  },
  mainContainer: {
    width: "100%",
  },
});

export default StationaryPage;
