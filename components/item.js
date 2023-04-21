import React from "react";
import {StyleSheet, Image, View, Text, ImageBackground} from 'react-native';
import Chicken from "../assets/Img/Chicken.png"
import Arrow from "../assets/rightArrow.svg"

const Item=(props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.leftBox}>
            <Image source={Chicken} style={styles.img}/>
            <View >
                <Text style={styles.text1}>
                    {props.name}
                </Text>
                <Text style={styles.text2}>
                    {props.shop}
                </Text>
            </View>
            </View>
            <View style={styles.arrow}>
                <Arrow/>
            </View>
            
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container:{
        height:80,
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:16,
        borderRadius:16,
        backgroundColor:"white"
    },
    img:{
        height:48,
        width:48,
        borderRadius:13,
        marginRight:12
    },
    leftBox:{
        flexDirection:"row",
        alignItems:"center",
    },
    arrow:{
        height:8,
        width:4,
        marginRight:10
    },
    text1:{
        color:"#020314",
        fontSize:14,
        fontWeight:500
    },
    text2:{
        color:"#6F6F6F",
        fontSize:12,
        fontWeight:400
    }
})