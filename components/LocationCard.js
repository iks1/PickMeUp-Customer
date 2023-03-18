import React from "react";
import {StyleSheet, View, Text} from 'react-native';

const LocationCard = props => {
    return (
        <View style={styles.container}>  
            <Text style={styles.box}>
                {props.text}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16, 
        height: 96,
        width: 156,
        position:"relative",
        display: "flex", 
        flexDirection: "row",
        overflow: 'hidden',
    },
    box: {
        flex: 0.5,
        color:"#000000",
        fontSize:16, 
        padding: 16,
        fontWeight: "bold"
    }, 
});

export default LocationCard;

