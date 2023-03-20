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

      {/* <Text>lol</Text>
      <StatusBar style="auto" /> */}

      <ShopCard img={canteen} line1="Brahma Food Canteen (A)" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>
      <ShopCard img={stationery} line1="Brahma Stationery Shop" dist="400 m" line2="Color Printout, Xerox" rating="4.5"/>
      <SmallShopCard img={canteen} line1="Brahma Hostel Food Canteen" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>
      <SmallShopCard img={canteen} line1="Kapili Hostel Juice Centre" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>

      <NavBar/>


    {/* <SearchBar  textInput="search here"/> */}
    {/* <FoodCard2 height="152" width="156" heading1='Food'  image={image}/> */}
    <LocationCard text='Brahma canteen'/>
    {/* <FoodCard height="152px" width="156px" heading1='Food' heading2='get food from all over campus'  image={image}/> */}

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
