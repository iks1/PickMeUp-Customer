import React from "react";
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from "react-native"
import Veg from "../assets/veg.svg";
import NonVeg from "../assets/nonVeg.svg";

const smallOrderCard=(props)=>{

    return(
        <View style={styles.main}>
            <View style={styles.imgContainer}>
                <ImageBackground source={props.bg} style={styles.imgbg}>
                    <View  style={styles.veg}>
                        {props.veg?<Veg/>:<NonVeg/>}
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.tex}>
                <Text style={styles.name}>
                    {props.name}
                </Text>
                <Text style={styles.price}>
                    ₹{props.price}
                </Text>
                <View style={styles.addBtn}>
                    <TouchableOpacity>
                        <Text>Add +</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
}

export default smallOrderCard;

const styles = StyleSheet.create({
    main:{
        height:190,
        width:140,
        borderRadius:16,
        flexDirection:'column',
        backgroundColor:'#FFFFFF',
    },
    imgContainer:{
        width:'100%',
        heigth:93,
        borderRadius:16,
        overflow:"hidden",
        position:'relative',
    },
    imgbg:{
        height:93,
    },
    veg:{
        position:"absolute",
        left:"12%",
        top:19,
    },
    tex:{
        height:97,
        paddingTop:8,
        paddingBottom:20,
        paddingHorizontal:"14%",
    },
    name:{
        color:"#020314",
        fontSize:14,
        fontWeight:500,
    },
    price:{
        color:'#020314',
        fontSize:14,
        fontWeight:400,
        position:"absolute",
        left:"19%",
        bottom:21,
    },
    addBtn: {
        fontWeight: 500,
        backgroundColor: "#EEEDFA",
        borderRadius: 16,
        width: "60%",
        height: 28,
        fontSize:14,
        bottom: 16,
        right: "16%",
        position:"absolute",
        alignItems: "center",
        paddingVertical: 4,
      },
})


