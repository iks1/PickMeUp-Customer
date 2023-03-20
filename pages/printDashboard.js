import React from "react";
import { ScrollView, View, Text, StyleSheet} from "react-native";
import {Shadow} from 'react-native-shadow-2';  
import ShopCard from './../components/Shopcard'
import Edit from './../assets/edit.svg'
import Omelette from "./../assets/omelette.png"
import SearchBar from '../components/SearchBar'
import NavBar from '../components/Navbar'
import PrintCard from "../components/Printcard";
import Header from "../components/header";
import stationery from "./../assets/stationery.png"
import SmallShopCard from "../components/smallShopCard";
import canteen from "./../assets/canteen.png"

const PrintDash=()=>{
    return (
        <View style={styles.mainContainer}>
            <ScrollView  style={styles.main}>

                <View style={styles.up}>
                    <Header text="Skip the queue"/>
                    <SearchBar textInput="Search fot printing shops, serv..."/>
                </View>

                <View style={styles.down}>
                    
                    <View style={styles.subHead}>
                            <Text style={styles.subHeadTex} >
                                What are you looking for?
                            </Text>
                    </View>
                    <View style={styles.options}>
                        <View style={styles.options1}>
                            <Shadow
                                distance={30}  
                                startColor={'#00000010'}  
                                radius={16} >
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="Color Print" image={Omelette}/>
                                </View>
                            </Shadow>
                            <Shadow
                                distance={30}  
                                startColor={'#00000010'}  
                                radius={16} >
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="B/W Print" image={Omelette}/>
                                </View>
                            </Shadow>
                            <Shadow
                                distance={30}  
                                startColor={'#00000010'}  
                                radius={16} >
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="Laminate" image={Omelette}/>
                                </View>
                            </Shadow>
                        </View>
                        <View style={styles.options1}>
                            <Shadow
                                distance={30}  
                                startColor={'#00000010'}  
                                radius={16} >
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="Spiral Binding" image={Omelette}/>
                                </View>
                            </Shadow>
                            <Shadow
                                distance={30}  
                                startColor={'#00000010'}  
                                radius={16} >
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="Banner Print" image={Omelette}/>
                                </View>
                            </Shadow>
                            <Shadow
                                distance={30}  
                                startColor={'#00000010'}  
                                radius={16} >
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="ID Card Print" image={Omelette}/>
                                </View>
                            </Shadow>
                        </View>
                    </View>

                    <View style={styles.subHead}>
                            <Text style={styles.subHeadTex} >
                                Places You Love
                            </Text>
                            <Edit/>
                    </View>
                    <View nestedScrollEnabled={true}  style={styles.places}>
                        <Shadow
                            distance={30}  
                            startColor={'#00000010'}  
                            radius={16} >
                            <View style={styles.wrapper2}>
                                <SmallShopCard img={canteen} line1="Kapili Hostel Juice Centre" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>
                            </View>
                        </Shadow>
                        <Shadow
                            distance={30}  
                            startColor={'#00000010'}  
                            radius={16} >
                            <View style={styles.wrapper2}>
                                <SmallShopCard img={canteen} line1="Kapili Hostel Juice Centre" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>
                            </View>
                        </Shadow>
                    </View>

                    <View style={styles.subHead}>
                            <Text style={styles.subHeadTex} >
                                Explore Places
                            </Text>
                    </View>
                    <View style={styles.explore}>
                        <Shadow 
                            distance={30}  
                            startColor={'#00000010'}  
                            radius={16} >
                            <View style={styles.wrapper3}>
                                <ShopCard img={stationery} line1="Brahma Canteen" dist="200m" line2="Snacks.Cuisines" rating="4.5"/>
                            </View>
                        </Shadow>
                    </View>
                    <View style={styles.explore}>
                        <Shadow
                            distance={30}  
                            startColor={'#00000010'}  
                            radius={16} >
                                <View style={styles.wrapper3}>
                                <ShopCard img={stationery} line1="Brahma Canteen" dist="200m" line2="Snacks.Cuisines" rating="4.5"/>
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

export default PrintDash

const styles = StyleSheet.create({
    up:{
        backgroungColor:'#5736B5',
        height:180,
        width:"100%",
    },
    down:{
        height:"100%",
        width:"100%",
        borderRadius:16,
        backgroundColor:'white',
        flexDirection:'column',
        alignItems:'center',
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
    subHeadTex:{
        color:'#6F6F6F',
        fontSize:14,
        fontWeight:500,
    },
    subHead:{
        width:"90%",
        height:19,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:28,
    },
    options:{
        width:"100%",
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
    },
    options1:{
        height:102,
        width:"100%",
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:16,
        marginTop:6,
        marginBottom:6,
    },
    places:{
        height:234,
        width:"100%",
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:16,
    },
    explore:{
        width:"100%",
        height: 212,
        flexDirection:'column',
        justifyContent: 'space-between',
        padding:16,
        marginBottom:16,
    },
    wrapper1:{
        borderRadius:16,
        height:98,
        width:110,
        marginRight:16,
    },
    wrapper2:{
        borderRadius:16,
        height:230,
        width:236,
        marginRight:16,
    },
    wrapper3:{
        height:208,
        width:360,
        borderRadius:16,
    },
})

