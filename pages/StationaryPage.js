import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import ReviewCard from "../components/ReviewCard";
import ShopCardInFocus from "../components/ShopCardInFocus";
import ShopHeader from "../components/ShopHeader";
import SearchBar from "../components/SearchBar";
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

        <View style={styles.servicesContainer}>
          <View style={{ ...styles.headingView, marginLeft: 20 }}>
            <Text>Services</Text>
          </View>
          <View style={styles.options}>
            <View style={styles.options1}>
              <Shadow distance={30} startColor={"#00000010"} radius={16}>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="Color Print" image={chickenImage} />
                </View>
              </Shadow>
              <Shadow distance={30} startColor={"#00000010"} radius={16}>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="B/W Print" image={chickenImage} />
                </View>
              </Shadow>
              <Shadow distance={30} startColor={"#00000010"} radius={16}>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="Laminate" image={chickenImage} />
                </View>
              </Shadow>
            </View>
            <View style={styles.options1}>
              <Shadow distance={30} startColor={"#00000010"} radius={16}>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="Spiral Binding" image={chickenImage} />
                </View>
              </Shadow>
              <Shadow distance={30} startColor={"#00000010"} radius={16}>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="Banner Print" image={chickenImage} />
                </View>
              </Shadow>
              <Shadow distance={30} startColor={"#00000010"} radius={16}>
                <View style={styles.wrapper1}>
                  <PrintCard heading1="ID Card Print" image={chickenImage} />
                </View>
              </Shadow>
            </View>
          </View>
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
  options: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  servicesContainer: {
    // marginLeft: "5%",
  },
  options1: {
    height: 102,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 6,
    marginHorizontal: 4,
  },
  wrapper1: {
    borderRadius: 16,
    height: 98,
    width: 105,
  },
  headingView: {
    // marginLeft: 30,
    marginBottom: 15,
    marginTop: 15,
  },
  reviewScroll: {
    display: "flex",
    flexDirection: "row",
  },
  reviewsContainer: {
    marginLeft: "5%",
    marginBottom: 10,
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
    // height: "100%",
    // marginBottom: 64,
  },
});

export default StationaryPage;
