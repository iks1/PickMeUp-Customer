import React from "react";
import {StyleSheet, Image, View, Text} from 'react-native';

const PrintCard = props => {
    return (
        <View style={styles.container}>
           <View style={styles.textContainer}>
            <Text style={styles.box1}>
                {props.heading1}
            </Text>
            </View>
            <Image source={props.image} style={styles.image} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 16, 
        height: 98,
        width: "100%",
        position:"relative",
        display: "flex", 
        flexDirection: "column",
        overflow: 'hidden',
    },
    textContainer: {
        flex: 0.5,
        padding: 14,
        zIndex: 3,
    },
    box1: {
        color:"#020314",
        fontSize:14, 
        marginBottom: 0,
        fontWeight: "bold"
    }, 
    image: {
        position: 'absolute', 
        borderRadius: 16, 
        bottom: 0, 
        right: 0, 
        height: "50%", 
        width: "60%",
    },
});

export default PrintCard;