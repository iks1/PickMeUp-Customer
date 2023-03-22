import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

// screens
import StudentDashboard from "./pages/studentDashboard";
import FoodDashboard from "./pages/foodDashboard";
import PrintDashboard from "./pages/printDashboard";
import FoodShopPage from "./pages/FoodShopPage";
import StationaryPage from "./pages/StationaryPage";

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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={StudentDashboard}
          // options={{ title: "Welcome" }}
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
