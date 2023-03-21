import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FoodShopPage from "./pages/FoodShopPage";
import StationaryPage from "./pages/StationaryPage";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>lol</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <ShopCard/> */}
      {/* <FoodCard /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});