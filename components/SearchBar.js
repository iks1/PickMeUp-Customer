import React from "react";
import Search_icon1 from "../assets/Search_icon1.svg";
import Search_icon2 from '../assets/Search_icon2.svg';
import Search_icon3 from '../assets/Search_icon3.svg';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const SearchBar = props => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
            <TextInput
                style={styles.text}
                placeholder={props.textInput}
                placeholderTextColor="#A9A9A9"
            />
            </View>
           
            <View style={styles.iconContainer}>
            

            <Search_icon1 style={{position:"absolute"}} />
            <Search_icon2  style={{position:"absolute"}}/>
            <Search_icon3  style={{position:"absolute"}}/>
            {/* <Image source={Search_icon1} alt="" className="card-img" style={styles.icon3}  /> */}
            </View>
        </View>
    );
}

const styles = props => StyleSheet.create({
    container: {
        // margin:"auto",
        position:"relative",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginLeft: 16,
        marginTop: 12,
        height:"100%",
        width:"100%",
    },
    box: {
        width: 1, 
        alignItems: 'left',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    text: {
        color:"#6F6F6F", 
        // paddingLeft:20, 
        // paddingTop:"4%"
        flex: 0.5,
        fontSize: 14
    },
    iconContainer: {
        width: 1, 
        alignItems: 'right',
        alignSelf: 'right',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 0.5,
      },
    icon: {
        position: 'absolute', 
        // top: "25%", 
        // right: 0, 
        // height: "50%", 
        // width: "5%" 
        marginLeft: 10,
    },
    
});

export default SearchBar;