import React, {useState} from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import ShopCard from './../components/Shopcard'
import canteen from './../assets/canteen.png'
import FoodCard from './../components/FoodCard'
import Pizza from './../assets/pizza.png'
import Edit from './../assets/edit.svg'
import FoodCard2 from "../components/FoodCard2";
import Omelette from "./../assets/omelette.png"
import Shake from '../assets/shake.png'
import Maggie from '../assets/maggi.png'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/Navbar'
import Header from '../components/header'
import { useNavigation } from "@react-navigation/native";

const Dash=()=>{
    const [isVisible, setIsVisible] = useState(false);

  const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
        <ScrollView  style={styles.main}>
            <View style={styles.up}>
                <Header text="Hey, Aarya" />
                <SearchBar textInput="Search here for restaurant, food, etc"/>
            </View>
            <View style={styles.down}>
                <View style={styles.choice}>
                    <TouchableOpacity style={styles.wrapper2} onPress={()=>{navigation.navigate("Food");}}>
                    <FoodCard heading1="Food" heading2="Order Food from across the campus" image={Pizza}  />
                    </TouchableOpacity>

                
                    <TouchableOpacity style={styles.wrapper2} onPress={()=>{navigation.navigate("Print");}}>
                    <FoodCard heading1="Stationary" heading2="Get printouts and skip the line" image={Pizza} />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Your Favorites
                        </Text>
                        {!isVisible ? 
                            <TouchableOpacity onPress={()=>setIsVisible(!isVisible)}>
                                <View style={styles.edit}>
                                    <Edit/> 
                                </View>
                            </TouchableOpacity>
                            : 
                            <View style={styles.options}>
                                <TouchableOpacity onPress={()=>setIsVisible(!isVisible)}>
                                    <View style={styles.op1}>
                                        <Text style={styles.editText1}>Cancel</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>setIsVisible(!isVisible)}>
                                    <View style={styles.op2}>
                                        <Text style={styles.editText2}>Save</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                </View>
                <View style={styles.food}>
                    <ScrollView horizontal={true}>
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Bread Omelette" image={Omelette} veg={false} favVisible={isVisible} />
                    </View>
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Oreo Shake" image={Shake} veg={true} favVisible={isVisible}/>
                    </View>
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Maggie" image={Maggie} veg={true} favVisible={isVisible}/>
                    </View>
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Maggie" image={Maggie} veg={true} favVisible={isVisible}/>
                    </View>
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Oreo Shake" image={Shake} veg={true} favVisible={isVisible}/>
                    </View>
                    </ScrollView>
                </View>

                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Places Near You
                        </Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate("PlacesNearYou");}}>
                            <Text style={styles.LinkText}>
                                See all
                            </Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.nearYou}>
                    <TouchableOpacity style={styles.wrapper4} onPress={()=>{navigation.navigate("FoodShop");}}>
                    <ShopCard img={canteen} line1="Brahma Canteen" dist="200m" line2="Snacks.Cuisines" rating="4.5"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapper4} onPress={()=>{navigation.navigate("FoodShop");}}>
                    <ShopCard img={canteen} line1="Brahma Canteen" dist="200m" line2="Snacks.Cuisines" rating="4.5"/>
                    </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>
        <View style={{position:'absolute', bottom:0, width:'100%', height:68}}>
                <NavBar active="Home"/>
        </View>
        </View>
    );
}

export default Dash

const styles = StyleSheet.create({
    up:{
        backgroungColor:'#5736B5',
        height:180,
        width:"100%",
        zIndex:2,
        flexDirection:'column',
        alignItems:'center',
        
    },
    shadow:{
        marginBottom:20,
        borderRadius:16,
    },
    down:{
        height:"100%",
        width:"100%",
        borderRadius:16,
        backgroundColor:'#EFEEFA',
        flexDirection:'column',
        alignItems:'center',
        paddingTop:32,
        marginBottom:64
    },
    main:{
        backgroundColor:'#5736B5',
        height:"100%",
        width:"100%",
    },
    mainContainer:{
        width:"100%",
        height:"100%"
    },
    head:{
        marginTop:48,
        marginLeft:24,
        marginRight:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headTex:{
        fontSize:20,
        fontWeight:500,
        color:'white',
    },
    wrapper:{
        height:204,
        width:"90%",
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:16,
    },
    edit:{
        paddingRight:8,
    },
    options:{
        flexDirection:'row',
    },
    op1:{
        width:70,
        height:28,
        borderRadius:16,
        backgroundColor:'#EEEDFA',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#D7D2E9',
    },
    op2:{
        width:56,
        height:28,
        borderRadius:16,
        backgroundColor:'#5736B5',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:8,
    },
    editText1:{
        color:'#8A8297',
        fontSize:14,
        fontWeight:500,
    },
    editText2:{
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:500,
    },
    subHeadTex:{
        color:'#6F6F6F',
        fontSize:14,
        fontWeight:500,
    },
    LinkText:{
        color:'#5736B5',
        fontSize:14,
        fontWeight:500,
        paddingRight:8,
    },
    subHead:{
        width:"100%",
        height:19,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:16,
        alignItems:'center',
        paddingLeft:24,
        paddingRight:16,
    },
    nearYou:{
        width:"100%",
        height:"100%",
        alignItems:'center',
        paddingHorizontal:16,
    },
    choice:{
        width:"100%",
        height:184,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:16,
        paddingRight:16
    },
    wrapper2:{
        borderRadius:16,
        height:156,
        width:'48%',
        marginBottom:32,
        borderRadius:16,
    },
    food:{
        height:114,
        width:"100%",
        marginBottom:32
    },
    wrapper3:{
        borderRadius:16,
        height:110,
        width:110,
        marginRight:16,
        marginLeft:16
    },
    wrapper4:{
        width:"100%",
        marginBottom:16,
    }
})
