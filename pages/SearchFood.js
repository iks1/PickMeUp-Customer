import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import SmallShopCard from "../components/smallShopCard";
import canteen from "./../assets/canteen.png";
import ShopCard from "../components/Shopcard";
import SearchBar from "../components/SearchBar";
import Arrow from "../assets/leftArrow.svg"
import { useNavigation } from "@react-navigation/native";
import { getAllShops, getShopById } from "../api/shop";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/item"
const SearchPlaces=({route})=>{
    console.log(route.params.tex.text)
    const text = route.params.tex.text
    const navigation = useNavigation();
    const ctx = useContext(ShopContext);
    let cards = [];
    let res = []
    console.log(ctx.items[0].rating)
    ctx.items.forEach(element => {
        console.log(element)
        if(element.name.toUpperCase().includes(text.toUpperCase().trim().replace(/\s/g, "") && element.isFood)){
            res.push(element)
            console.log(element)
        }
    });
    console.log(res[0].name)
  const fetchData = async () => {
    cards = res.map((element) => (
      <TouchableOpacity
        key={element._id}
        style={styles.wrapper4}
        onPress={() => {
          navigation.navigate("FoodShop", { id: element.shopId });
        }}
      >
        <Item 
        name={element.name} 
        shop={element.price} />
      </TouchableOpacity>
    ));
  };
  fetchData();
    return(
        <View>
            <ScrollView>
            <View style={styles.up}>
                    <TouchableOpacity  onPress={()=>{navigation.goBack();}}>
                        <Arrow />
                    </TouchableOpacity>
            </View>
            <SearchBar textInput="Search here for restaurant, food, etc"/>
            <View style={styles.tabs}>
                        <ScrollView horizontal={true}>
                            <TouchableOpacity style={styles.tab2} onPress={()=>{navigation.navigate("SearchPlaces",{tex: {text}});}}>
                                <Text style={styles.tabtext1}>Places</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tab1} onPress={()=>{navigation.navigate("SearchFood",{tex: {text}});}}>
                                <Text style={styles.tabtext1}>Food</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tab3} onPress={()=>{navigation.navigate("SearchStationary",{tex: {text}});}}>
                                <Text style={styles.tabtext2}>Stationary</Text>
                            </TouchableOpacity>
                        </ScrollView>
            </View>
            <View style={styles.nearYou}>
                {cards}
            </View>
            </ScrollView>
        </View>
    )
}

export default SearchPlaces

const styles = StyleSheet.create({
    up:{
        height:100,
        width:"100%",
        paddingLeft:33,
        paddingTop: 70,
    },
    mainContainer:{
        backgroundColor:'#EFEEFA',
        width:"100%",
        height:"100%"
    },
    main:{
        height:"100%",
        width:"100%",
    },
    tabs:{
        marginTop: 12,
        flexDirection:'row',
    },
    tab1:{
        backgroundColor: "#5736B5",
        borderRadius: 16,
        marginLeft: 4,
        marginRight: 4,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft:16,
        paddingRight:16,
        paddingTop:6,
        paddingBottom:7
    },
    tabtext1: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: 500,
    },tabtext2: {
        color: "#6F6F6F",
        fontSize: 14,
        fontWeight: 500,
    },tab2:{
        backgroundColor: "#EEEDFA",
        borderRadius: 16,
        borderColor: "#D7D2E9",
        borderWidth: 1,
        marginLeft: 4,
        marginRight: 4,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft:16,
        paddingRight:16,
        paddingTop:6,
        paddingBottom:7
    },
    tab3:{
        backgroundColor: "#EEEDFA",
        borderRadius: 16,
        borderColor: "#D7D2E9",
        borderWidth: 1,
        marginLeft: 4,
        marginRight: 4,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft:16,
        paddingRight:16,
        paddingTop:6,
        paddingBottom:7
    },  nearYou: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
        paddingTop: 16,
      },
      wrapper4: {
        width: "100%",
        marginBottom: 16,
      },
})