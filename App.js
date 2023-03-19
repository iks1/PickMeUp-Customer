import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
