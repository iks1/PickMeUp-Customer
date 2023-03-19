import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FoodCard from "./components/FoodCard";
import ShopCard from "./components/Shopcard";
import ShopCardInFocus from "./components/ShopCardInFocus";

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>lol</Text>
      <StatusBar style="auto" />
      {/* <ShopCard/> */}
      <ShopCardInFocus />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <Text>lol</Text>
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
