import React from "react";
import {View, Text, ImageBackground, StyleSheet, Image} from "react-native"
import Star from "./../assets/star.svg"
import {Shadow} from 'react-native-shadow-2';  

const rec=(props)=>{
    return(
        <View style={styles.shadow}>
        <Shadow  distance={10}  
        startColor={'#00000010'}  
        containerViewStyle={{marginVertical: 0}}  
        radius={8} >
        <View style={styles.main}>
            <View style={styles.imgContainer}>
                <ImageBackground source={props.bg} style={styles.imgbg}>
                    <View  style={styles.rating}>
                        <Text style={{color:'white', fontSize:12}}>{props.rating}</Text>
                        <Star/>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.tex}>
            <Text style={styles.name}>
                {props.name}
            </Text>
            <Text style={styles.dest}>
                {props.dest}
            </Text>
            </View>
        </View>
        </Shadow>
        </View>
    );
}

export default rec

const styles = StyleSheet.create({
    shadow:{
        height:170,
        width:156,
        margin:20,
    },
    main:{
        height:170,
        width:156,
        borderRadius:16,
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor:'white',
    },
    imgContainer:{
        width:156,
        heigth:91,
        borderRadius:16,
        overflow:"hidden",
        position:'relative',
    },
    imgbg:{
        height:91,
    },
    rating:{
        width:43,
        height:20,
        borderRadius:8,
        position:"absolute",
        color:"white",
        backgroundColor:'#55AE63',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        right:14,
        top:14,
        paddingLeft: 6,
        paddingRight:6,
        paddingBottom:2,
        paddingTop:2,
    },
    name:{
        color:"black",
        fontSize:14,
        fontWeight:500,
    },
    dest:{
        marginTop:5,
        color:'#6F6F6F',
        fontSize:12,
        fontWeight:400,
    },
    tex:{
        flex:1,
        padding:12-0,
    },
    shadowProp: {  
        shadowColor: '#52006A',  
        elevation: 30,   
      }, 
})