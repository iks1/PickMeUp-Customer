import React from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Arrow from '../assets/leftArrow.svg';
import Line2 from '../assets/Line2';
import RegisterButton from "../components/registerButton";
import InputField from "../components/InputField";

const SignupPhone = () => {
    const handleClick = () => {
        ;
    };

    return(
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={handleClick}>
                        <Arrow/>
                    </TouchableOpacity>
                </View>
                <View style={styles.linev}>
                    <Line2/>
                </View>

                <View style={styles.input}>
                    <InputField text="Phone number"/>  
                </View>
                <View style={styles.input2}>
                    <RegisterButton text="Proceed"/>
                </View>
            </View>
        </View>
    )
}

export default SignupPhone

const styles = StyleSheet.create({
    main: {
        height: "100%",
        width: "100%",
        backgroundColor:'#5736B5',
        flexDirection:'row',
        alignItems:'flex-end',
    },
    container:{
        backgroundColor:'#EFEEFA',
        height: "93%",
        width:"100%",
        borderTopLeftRadius:24,
        borderTopRightRadius:24,
        flexDirection:'column',
    },
    arrow: {
        paddingLeft: 28,
        paddingTop: 28,
    },
    linev: {
        marginTop: "6%",
        backgroundColor:'#FFFFFF',
    },
    input: {
        marginTop: 32,
        width: "100%",
        height: "6%",
        alignItems:'center',
    },
    input2: {
        marginTop: 24,
        height: "6%",
        alignItems:'center',
    },
});