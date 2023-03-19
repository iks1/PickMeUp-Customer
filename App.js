import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ShopCard from './components/Shopcard';
import SmallShopCard from './components/smallShopCard';
import NavBar from './components/Navbar';
import canteen from './assets/canteen.png';
import stationery from './assets/stationery.png';

import SearchBar from './components/SearchBar';
import image from './assets/omelette.png';
import LocationCard from './components/LocationCard';
import FoodCard2 from './components/FoodCard2';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>lol</Text>
    //   <StatusBar style="auto" />
    // </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
});