import React from "react";
import Search_icon1 from "../assets/Search_icon1.svg";
import Search_icon2 from '../assets/Search_icon2.svg';
import Search_icon3 from '../assets/Search_icon3.svg';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useState } from "react";

const SearchBar = props => {

    const [text, setText] = useState('');
    return (
        <View style={[styles.container,{flexDirection:'row',alignItems:'center',margin:10, width:"90%",backgroundColor:'white',borderRadius:16,height:52,paddingLeft:20}]}>
            <TextInput
                style={[styles.text,{width:"80%"}]}
                placeholder={props.textInput}
                placeholderTextColor="#A9A9A9"
            />
           
            <View style={[styles.iconContainer,{flexDirection:'row'}]}>
            <Search_icon1 />
            <Search_icon2 />
            <Search_icon3 />
            {/* <Image source={Search_icon1} alt="" className="card-img" style={styles.icon3}  /> */}
            </View>
        </View>
    );
}

const styles = props => StyleSheet.create({
    container: {
        // margin:"auto",
        display:"flex",
        position:"relative",
        flexDirection: 'row',
        // alignItems: 'center',
        borderRadius: 16,
        justifyContent:'space-around',
        marginLeft: 16,
        marginTop: 12,
        height:100,
        width:"90%",
        backgroundColor:'white'
    },
    text: {
        color:"#6F6F6F", 
        // paddingLeft:20, 
        // paddingTop:"4%"
        fontSize: 14,
        backgroundColor:'white',
        width:'80%'
    },
    iconContainer: {
        width: 1, 
        alignItems: 'right',
        alignSelf: 'right',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 0.5,
        backgroundColor:'white'
      },
    
});

export default SearchBar;