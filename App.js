import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

// screens
import StudentDashboard from "./pages/studentDashboard";
import FoodDashboard from "./pages/foodDashboard";
import PrintDashboard from "./pages/printDashboard";
import FoodShopPage from "./pages/FoodShopPage";
import StationaryPage from "./pages/StationaryPage";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import SearchBar from './components/SearchBar';
// import Navbar from './components/Navbar';
// import image from './assets/maggi.png';
// import FilterCard from './components/FilterCard';
// import FoodCard2 from './components/FoodCard2';
// import Home from './pages/studentDashboard';

// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text>lol</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//     <View style={styles.container}>
//     {/* <SearchBar  textInput="search here"/> */}
//     <Home/>
//     {/* <Navbar/> */}
//     {/* <FoodCard2 heading1='Food'  image={image}/> */}
//     {/* <FilterCard list1={[{id:1,label:'name'},{id:2,label:'veg'},{id:3,label:'nonveg'},{id:4,label:'name'}]} list2={[{id:4,label:["price:","low to high"]},{id:1,label:["price:","low to high"]}]}/> */}
//     {/* <FoodCard height="152px" width="156px" heading1='Food' heading2='get food from all over campus'  image={image}/> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StudDash from "./pages/studentDashboard"
import SearchBar from './components/SearchBar';
import ShopCard from './components/Shopcard';
import PrintDash from './pages/printDashboard'
import FoodDash from './pages/foodDashboard'

// navigation
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// icons

export default function App() {
  // const navigation = useNavigation()
  const Stack = createNativeStackNavigator();

  return (
    // <View style={styles.container}>

    //   <StatusBar style="auto" />
    //   <StudentDashboard/>
    //   <FoodShopPage />
    //   <StationaryPage />

    // </View>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={StudentDashboard}
        />
        <Stack.Screen name="Food" component={FoodDashboard} />
        <Stack.Screen name="Print" component={PrintDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navBar: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    width: "100%",
    height: 64,
    bottom: 0,
    zIndex: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: 500,
    marginTop: 4,
    color: "#999999",
  },
  activeText: {
    fontSize: 12,
    fontWeight: 500,
    marginTop: 4,
    color: "#5932E6",
  },
});
