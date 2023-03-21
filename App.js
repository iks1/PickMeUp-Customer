import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StudDash from "./pages/studentDashboard"
import SearchBar from './components/SearchBar';
import ShopCard from './components/Shopcard';
import PrintDash from './pages/printDashboard'
import FoodDash from './pages/foodDashboard'

export default function App() { 
  return (
    // <View style={styles.container}>
    //   <Text>lol</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
        <StudDash/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});