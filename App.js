import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FoodCard from "./components/FoodCard";
import ShopCard from "./components/Shopcard";
import ShopCardInFocus from "./components/ShopCardInFocus";
import ShopPage from "./pages/ShopPage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>lol</Text> */}
      <StatusBar style="auto" />
      {/* <ShopCard/> */}
      <ShopPage />
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
