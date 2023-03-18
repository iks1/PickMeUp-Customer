import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FoodCard from "./components/FoodCard";
import ShopCard from "./components/Shopcard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>lol</Text>
      <StatusBar style="auto" />
      {/* <ShopCard/> */}
      <FoodCard />
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
