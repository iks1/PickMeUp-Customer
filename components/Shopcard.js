import React, {useState} from "react";
import {Text, ImageBackground, View, StyleSheet, TouchableOpacity} from 'react-native';
import Star from '../assets/star.svg';
import Heart from '../assets/heart.svg';
import HeartActive from '../assets/heartActive.svg'

const ShopCard = (props) => {

    const [isFavourite, setIsFavourite]=useState(false);

    const handleClick = () => {
        setIsFavourite(!isFavourite);
    };

    return (  
            <View style={styles.container}>
                
                <View style={styles.container1}>
                    
                    <ImageBackground source={props.img} style={{width: "100%", height: "100%"}} >

                        <TouchableOpacity onPress={handleClick}>

                            <View style={{width: 36, height: 36, backgroundColor : isFavourite? "red" : "white", borderRadius: 24, position: "absolute", top: 16, right: 16}}>
                                {isFavourite? (<HeartActive style={styles.heart}/>):(<Heart style={styles.heart}/>)}
                            </View>

                        </TouchableOpacity>
                     
                    </ImageBackground>

                </View>
                
                <View style={styles.container2}>

                    <Text style={styles.name}> {props.line1} </Text>

                    <View style={styles.rate}>
                        
                        <Text style={styles.rating}> {props.rating} </Text>

                        <Star />
                            
                    </View> 

                    <Text style={styles.items}> {props.dist}{props.line2} </Text>

                </View> 

            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative", 
        width: "90%", 
        height: 204, 
        marginVertical: 10,
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
    heart: {
        position: "absolute",
        top: 12,
        right:10,
    },
    container2: {
        paddingLeft: 16, 
        textAlign: "left",
    },
    name: {
        fontWeight: 500, 
        fontSize: 16, 
        color: "#020314", 
        paddingTop: 16, 
        display: "flex",
    },
    rate: {
        position: "relative",
        height: 20, 
        width: 43, 
        backgroundColor: "#55AE63", 
        borderRadius: 8, 
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        alignSelf: "flex-end", 
        flexDirection: "row", 
        marginTop: -20, 
        marginRight: 16,
        paddingLeft: 4,
        paddingRight: 6,
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
        paddingTop: 4,
    },
});

export default ShopCard;