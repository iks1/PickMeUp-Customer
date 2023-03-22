import React from "react";
import {Text, Image, View, StyleSheet} from 'react-native';
import Star from '../assets/star.svg';

const SmallShopCard2 = (props) => {

    return (
            <View style={styles.container}>
                
                <View style={styles.container1}>
                    
                    <Image source={props.img} style={{width: "100%", height: "100%"}} />

                </View>
                
                <View style={styles.container2}>

                    <View style={styles.container3}>

                        <View style={styles.container4}>

                            <Text style={styles.name}> {props.line1} </Text>

                        </View>

                        <View style={styles.rate}>
                            
                            <Text style={styles.rating}> {props.rating} </Text>
                            <Star />
                                
                        </View> 

                    </View>

                    <Text style={styles.items}> {props.dist}-{props.line2} </Text>

                </View> 

            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 236, 
        height: 230,
        backgroundColor: "#FFFFFF", 
        borderRadius: 16, 
        display: "flex", 
        flexDirection: "column",
    },
    container1: {
        height: 132,
        width: "100%", 
        borderRadius: 12, 
        overflow: "hidden",
    },
    container2: {
        width: "100%",
        flexDirection:'column',
        justifyContent:'space-between',
        paddingTop: 15, 
    },   
    container3: {
        height:36,
        width: "100%",
        flexWrap:"wrap",
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 8,
        paddingLeft: -4,
    },     
    container4: {
        width:145,
        height:36,
    },
    rate: {
        height: 20, 
        width: 43, 
        backgroundColor: "#55AE63", 
        borderRadius: 8, 
        alignItems: "center",
        flexDirection: "row", 
        paddingLeft: 4,
        paddingRight: 6,
        marginRight: 16,
    },
    name: {
        fontWeight: 500, 
        paddingLeft:16,
        fontSize: 16, 
        color: "#020314", 
    },
    rating: {
        fontSize: 12, 
        fontWeight: 500, 
        color:"white"
    },
    items: {
        fontWeight: 400, 
        fontSize: 12, 
        color: "#6F6F6F", 
        paddingLeft: 16,
    },
});

export default SmallShopCard2;