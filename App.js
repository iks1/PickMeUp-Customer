// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import SearchBar from './components/SearchBar';
// import Navbar from './components/Navbar';
// import image from './assets/maggi.png';
// import FilterCard from './components/FilterCard';
// import FoodCard2 from './components/FoodCard2';
// import Home from './pages/studentDashboard';

// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text>lol</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//     <View style={styles.container}>
//     {/* <SearchBar  textInput="search here"/> */}
//     <Home/>
//     {/* <Navbar/> */}
//     {/* <FoodCard2 heading1='Food'  image={image}/> */}
//     {/* <FilterCard list1={[{id:1,label:'name'},{id:2,label:'veg'},{id:3,label:'nonveg'},{id:4,label:'name'}]} list2={[{id:4,label:["price:","low to high"]},{id:1,label:["price:","low to high"]}]}/> */}
//     {/* <FoodCard height="152px" width="156px" heading1='Food' heading2='get food from all over campus'  image={image}/> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


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