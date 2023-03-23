import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native'
import LeftArrow from '../assets/leftArrow.svg'
import Line2 from '../assets/Line2'
import Down from '../assets/down.svg'
import RegisterButton from "../components/registerButton";


const SignupPhone =(props)=>{
    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <View style={styles.iconwrap}>
                            <LeftArrow/>
                        </View>
                    </View>
                    <View style={styles.lineWrap} >
                        <Line2/>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{width:'90%', flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                    <View>
                        <Text>+91</Text>
                        
                    </View>
                    <View style={styles.texcontainer}>
                    <TextInput
                        style={styles.text}
                        placeholder={props.text}
                        placeholderTextColor="#6F6F6F"
                     />
                    </View>
                    </View>
                    <RegisterButton text="Proceed"/>
                </View>
            </View>
        </View>
    )
}

export default SignupPhone

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'#5736B5',
        flexDirection:'row',
        alignItems:'flex-end'
    },
    container:{
        width:'100%',
        height:'93%',
        borderTopLeftRadius:24,
        borderTopRightRadius:24,
        backgroundColor:'#EFEEFA'
    },
    header:{
        height:72,
        width:'100%'
    },
    body:{
        width:'100%',
        height:'70%',
        paddingTop:48,
        flexDirection:'column',
        alignItems:'center'
    },
    iconwrap:{
        margin:33
    },
    lineWrap:{
        height:4,
        width:'100%',
        backgroundColor:'white'
    },
    text:{
        color: "black",
        paddingLeft: 20,
        paddingTop: 16,
        paddingBottom: 16,
        fontSize: 14,
    },
    texcontainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16, 
        height: 51,
        width: '65%', 
    },
})