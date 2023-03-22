import React from "react";
import { ScrollView, View, Text, StyleSheet} from "react-native";
// import {Shadow} from 'react-native-shadow-2';  
import ShopCard from './../components/Shopcard'
import Edit from './../assets/edit.svg'
import Omelette from "./../assets/omelette.png"
import SearchBar from '../components/SearchBar'
import NavBar from '../components/Navbar'
import PrintCard from "../components/Printcard";
import Header from "../components/header";
import stationery from "./../assets/stationery.png"
import SmallShopCard2 from "../components/smallShopCard2";
import canteen from "./../assets/canteen.png"

const PrintDash=({navigation})=>{
    return (
        <View style={styles.mainContainer}>
            <ScrollView  style={styles.main}>

                <View style={styles.up}>
                    <Header text="Skip the queue"/>
                    <SearchBar textInput="Search for printing shops, serv..."/>
                </View>

                <View style={styles.down}>
                    
                    <View style={styles.subHead2}>
                            <Text style={styles.subHeadTex} >
                                What are you looking for?
                            </Text>
                    </View>
                    <View style={styles.options}>
                        <View style={styles.options1}>
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="Color Print" image={Omelette}/>
                                </View>
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="B/W Print" image={Omelette}/>
                                </View>
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="Laminate" image={Omelette}/>
                                </View>
                        </View>
                        <View style={styles.options1}>
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="Spiral Binding" image={Omelette}/>
                                </View>
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="Banner Print" image={Omelette}/>
                                </View>
                                <View style={styles.wrapper1}>
                                    <PrintCard heading1="ID Card Print" image={Omelette}/>
                                </View>
                        </View>
                    </View>

                    <View style={styles.subHead2}>
                            <Text style={styles.subHeadTex} >
                                Places You Love
                            </Text>
                            <Edit/>
                    </View>
                    <View style={styles.places}>
                        <ScrollView horizontal={true}>
                            <View style={styles.places1}>
                                <SmallShopCard2 img={canteen} line1="Brahma Hostel Food Canteen" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>
                            </View>
                            <View style={styles.places1}>
                                <SmallShopCard2 img={canteen} line1="Kapili Hostel Juice Centre" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>
                            </View>
                            <View style={styles.places1}>
                                <SmallShopCard2 img={canteen} line1="Kapili Hostel Juice Centre" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>
                            </View>
                        </ScrollView>
                    </View>
                    
                    <View style={styles.subHead}>
                            <Text style={styles.subHeadTex} >
                                Explore Places
                            </Text>
                    </View>
                    <View style={styles.explore}>
                        <ShopCard img={stationery} line1="Brahma Hostel Stationery" dist="200 m" line2="-Color Printout, xerox" rating="4.5"/>                        
                        <ShopCard img={stationery} line1="Brahma Hostel Stationery" dist="200 m" line2="-Color Printout, xerox" rating="4.5"/>                        
                        <ShopCard img={stationery} line1="Brahma Hostel Stationery" dist="200 m" line2="-Color Printout, xerox" rating="4.5"/>
                        <ShopCard img={stationery} line1="Brahma Hostel Stationery" dist="200 m" line2="-Color Printout, xerox" rating="4.5"/>                        
                    </View>

                </View>          
            </ScrollView>   

            <View style={styles.navbar}>
                    <NavBar/>
            </View>

        </View>
    );
}

export default PrintDash

const styles = StyleSheet.create({
    main:{
        height:"100%",
        width:"100%",
    },
    mainContainer:{
        backgroundColor:'#5736B5',
        width:"100%",
        height:"100%"
    },
    up:{
        height:180,
        width:"100%",
        zIndex: 2,
    },
    down:{
        height:"100%",
        width:"100%",
        borderRadius:16,
        backgroundColor:'#EFEEFA',
        flexDirection:'column',
        alignItems:'center',
        marginBottom: 64,
        paddingTop: 24,
    },
    subHead:{
        width:"90%",
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 10,
    },
    subHead2:{
        width:"90%",
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop: 2,
        paddingBottom: 4,
    },
    subHeadTex:{
        color:'#6F6F6F',
        fontSize:14,
        fontWeight:500,
    },
    options:{
        width:"100%",
        flexDirection:'column',
        padding:16,
    },
    options1:{
        width:"100%",
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 8
    },
    wrapper1: {
        width: "30%",
    },
    places:{
        width:"100%",
    },
    places1:{
        padding: 16,
    },
    explore:{
        flexDirection:'column',
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    navbar: {
        position:'absolute', 
        bottom:0, 
        width:'100%', 
        height:64,
    },
})

