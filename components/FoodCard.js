import React from "react";
import {StyleSheet, Image, View, Text, ImageBackground} from 'react-native';

const FoodCard = props => {
    return (
        <View style={styles.container}>
           <View style={styles.textContainer}>
            <Text style={styles.box1}>
                {props.heading1}
            </Text>
            <Text style={styles.box2}>
                {props.heading2}
            </Text>
            </View>
            <Image source={props.image} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16, 
        height: 152,
        width: '100%',
        position:"relative",
        display: "flex", 
        flexDirection: "column",
        overflow: 'hidden',
        backgroundColor:'white'
    },
    textContainer: {
        flex: 0.5,
        padding: 16,
    },
    box1: {
        color:"#020314",
        fontSize:18, 
        marginBottom: 4,
        fontWeight: "bold"
    }, 
    box2: {
        color:"#6F6F6F", 
        fontSize:12, 
    },
    image: {
        position: 'absolute', 
        borderRadius: 16, 
        bottom: 0, 
        right: 0, 
        height: "50%", 
        width: "50%"
    },
});

export default FoodCard;

