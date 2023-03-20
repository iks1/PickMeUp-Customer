import React from "react";
import { ScrollView, View, Text, StyleSheet} from "react-native";
import LocationCard from "../components/LocationCard";
import {Shadow} from 'react-native-shadow-2';  
import Profile from './../assets/profile.svg'
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
import SmallShopCard from "../components/smallShopCard";
import Recommended from './../components/recommended'
import bg from './../assets/recdummy.png'

const Dash=()=>{
    return (
        <View style={styles.mainContainer}>
        <ScrollView  style={styles.main}>
            <View style={styles.up}>
                <Header text="Order with ease" />
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}><SearchBar textInput="Search here for restauran, food, etc"/></View>
            </View>
            <View style={styles.down}>
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Locations Across Campus
                        </Text>
                </View>
                <View style={styles.choice}>
                <Shadow
                distance={30}  
                startColor={'#00000010'}  
                radius={16} >
                    <View style={styles.wrapper2}>
                    <LocationCard text='Canteen'/>
                    </View>
                </Shadow>

                <Shadow
                distance={30}  
                startColor={'#00000010'}  
                radius={16} >
                    <View style={styles.wrapper2}>
                    <LocationCard text='Khoka'/>
                    </View>
                </Shadow>

                <Shadow
                distance={30}  
                startColor={'#00000010'}  
                radius={16} >
                    <View style={styles.wrapper2}>
                    <LocationCard text='Market Complex'/>
                    </View>
                </Shadow>

                <Shadow
                distance={30}  
                startColor={'#00000010'}  
                radius={16} >
                    <View style={styles.wrapper2}>
                    <LocationCard text='Food Court'/>
                    </View>
                </Shadow>
                    
                </View>
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Your Favorites
                        </Text>
                        <Edit/>
                </View>
                <View nestedScrollEnabled={true}  style={styles.food}>
                <Shadow
                distance={30}  
                startColor={'#00000010'}  
                radius={16} >
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Bread Omelette" image={Omelette}/>
                    </View>
                </Shadow>
                <Shadow
                distance={30}  
                startColor={'#00000010'}  
                radius={16} >
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Oreo Shake" image={Shake}/>
                    </View>
                </Shadow>
                <Shadow
                distance={30}  
                startColor={'#00000010'}  
                radius={16} >
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Maggie" image={Maggie}/>
                    </View>
                </Shadow>
                </View>
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Places You Love
                        </Text>
                        <Edit/>
                </View>
                <View style={styles.placeYouLove}>
                    <View style={styles.shadow2}>
                <Shadow
                distance={30}  
                startColor={'#00000010'}  
                radius={16} >
                    <View style={styles.wrapper4}>
                    <SmallShopCard rating="4.5" img={canteen} dist="200m" line2="Snacks-Multi Cuisine" line1="Brahma Food Center"/>
                    </View>
                </Shadow>
                </View>

                <View style={styles.shadow2}>
                <Shadow
                distance={30}  
                startColor={'#00000010'}  
                radius={16} >
                    <View style={styles.wrapper4}>
                    <SmallShopCard rating="4.5" img={canteen} dist="200m" line2="Snacks-Multi Cuisine" line1="Brahma Food Center"/>
                    </View>
                </Shadow>
                </View>
                </View>
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Recommended
                        </Text>
                </View>
                <View style={styles.rec}>
                    <Recommended bg = {bg} rating="4.5" name="Chicken Shawarma" dest="Lohit Canteen"/>
                    <Recommended bg = {bg} rating="4.5" name="Chicken Shawarma" dest="Lohit Canteen"/>
                    <Recommended bg = {bg} rating="4.5" name="Chicken Shawarma" dest="Lohit Canteen"/>
                    <Recommended bg = {bg} rating="4.5" name="Chicken Shawarma" dest="Lohit Canteen"/>
                </View>
                
                
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Explore Places
                        </Text>
                </View>
                <View style={styles.nearYou}>
                <Shadow style={styles.shadow}
                distance={30}  
                startColor={'#00000010'}  
                radius={16} >
                        <View style={styles.wrapper}>
                        <ShopCard img={canteen} line1="Brahma Canteen" dist="200m" line2="Snacks.Cuisines" rating="4.5"/>
                    </View>
                </Shadow>
                <Shadow
                style={styles.shadow}
                distance={30}  
                startColor={'#00000010'}  
                radius={16} >
                        <View style={styles.wrapper}>
                        <ShopCard img={canteen} line1="Brahma Canteen" dist="200m" line2="Snacks.Cuisines" rating="4.5"/>
                    </View>
                </Shadow>
                </View>
            </View>
            
        </ScrollView>
        <View style={{position:'absolute', bottom:0, width:'100%', height:68}}>
                <NavBar/>
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
    },
    shadow:{
        marginBottom:20,
        borderRadius:16,
    },
    down:{
        height:"100%",
        width:"100%",
        borderRadius:16,
        backgroundColor:'white',
        flexDirection:'column',
        alignItems:'center',
        paddingTop:20,
        zIndex:1
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
    subHeadTex:{
        color:'#6F6F6F',
        fontSize:14,
        fontWeight:500,
    },
    LinkText:{
        color:'#5736B5',
        fontSize:14,
        fontWeight:500,
    },
    subHead:{
        width:"90%",
        height:19,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:16,
        paddingLeft:10,
        paddingRight:10,
    },
    nearYou:{
        width:"100%",
        height:"100%",
        flexDirection:'column',
        alignItems:'center',
    },
    choice:{
        width:"100%",
        height:268,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:25,
        flexWrap:'wrap'
    },
    wrapper2:{
        borderRadius:16,
        height: 96,
        width: 156,
        marginBottom:16,
    },
    food:{
        height:158,
        width:"100%",
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:16,
    },
    wrapper3:{
        borderRadius:16,
        height:110,
        width:110,
    },
    placeYouLove:{
        height:279,
        width:"100%",
        flexDirection:'row',
    },
    wrapper4:{
        width: 236, 
        height: 230, 
        backgroundColor: "#FFFFFF", 
        borderRadius: 16, 
    },
    shadow2:{
        width: 236, 
        height: 230, 
        marginTop: 17,
        marginBottom: 32,
        marginRight: 16,
        marginLeft: 16,
        borderRadius:6,
    },
    rec:{
        height:426,
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
    }
})