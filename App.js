import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

// screens
import GetStarted from "./pages/GetStarted"
import SignUp from "./pages/SignUp"
import SignUpOTP from "./pages/SignUpOTP"
import Login from "./pages/Login"
import SignUpPhone from "./pages/signupPhone"
import StudentDashboard from "./pages/studentDashboard";
import FoodDashboard from "./pages/foodDashboard";
import PrintDashboard from "./pages/printDashboard";
import FoodShopPage from "./pages/FoodShopPage";
import StationaryPage from "./pages/StationaryPage";
import BillingPage from "./pages/BillingPage"
// navigation
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// icons

export default function App() {
  // const navigation = useNavigation()
  const Stack = createNativeStackNavigator();

  return (
    // <View style={styles.container}>

    //   {/* <StatusBar style="auto" /> */}
    //   {/* <StudentDashboard/> */}
    //   <FoodShopPage />
    //   {/* <StationaryPage /> */}

    // </View>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted"
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
        <Stack.Screen name="FoodShop" component={FoodShopPage} />
        <Stack.Screen name="StationaryPage" component={StationaryPage} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpOTP" component={SignUpOTP} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpPhone" component={SignUpPhone} />
        <Stack.Screen name="BillingPage" component={BillingPage} />
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
