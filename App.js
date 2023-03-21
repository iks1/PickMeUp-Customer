import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FoodShopPage from "./pages/FoodShopPage";
import StationaryPage from "./pages/StationaryPage";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <StationaryPage />
      {/* <FoodShopPage /> */}
      {/* <Text>lol</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
