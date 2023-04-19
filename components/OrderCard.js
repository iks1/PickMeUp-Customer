import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import Dots from '../assets/dots.svg';
import Line from '../assets/horizontalLine.svg';
import Veg from '../assets/veg.svg';
import NonVeg from '../assets/nonVeg.svg';
import Dosa from '../assets/dosa.png'

const PendingOrderCard = props => {
    
    return (
        <View style={styles.container}>
            <View style={styles.line1}>
                <Image source={Dosa} style={styles.img}/>
                <View style={styles.tex}>
                    <Text style={styles.head}>{props.place}</Text>
                    <View style={styles.bottomtex}>
                        <View  style={styles.status} ><Text style={styles.statusTex} >{props.status}</Text></View>
                        <Text style={styles.text2} >{props.dist}•{props.time}</Text>
                    </View>
                </View>
            </View>
            <Line style={styles.line}/>
            <View style={{width:"100%", alignItems:"center", flexDirection:"column"}}>
                {props.list.map((it) => (
                    <View style={styles.order}>
                        <View style={styles.it}>
                        {it.veg === 1 ? <Veg /> : <NonVeg />}
                        <Text> {it.num} × {it.item}</Text> 
                        </View>
                        <View>
                            <Text>₹ {it.price}</Text>
                        </View>
                    </View>

                ))}
            </View>
            <Line style={styles.line}/>
            <View style={styles.total}>
                <Text style={styles.text2}>{props.date}</Text>
                <Text>₹ {props.bill}</Text>    
            </View>
            <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonbox} >
                        <Text style={styles.button}>View Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonbox1}>
                        <Text style={styles.button1}>Reorder</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        backgroundColor: "#FFFFFF",
        display: 'flex',
        width: "90%",
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:"center",
        borderRadius: 16,
        paddingBottom: 12,
    },
    line1: {
        padding: 16,
        height:88,
        width:"100%",
        flexDirection:"row"
    },
    view: {
        flexDirection: 'row',
    },
    text1: {
        color: "#5736B5",
        fontSize: 14,
        fontWeight: 500,
    },
    text2: {
        color: "#6F6F6F",
        fontSize: 14,
        fontWeight: 500,
    },
    line: {
        paddingBottom: 12,
    },
    order: {
        justifyContent: 'space-between',
        alignItems:"center",
        flexDirection: 'row',
        paddingTop: 6,
        paddingBottom: 6,
        width:"90%"
    },
    it: {
        flexDirection: 'row',
        
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        width:"90%"
    },
    buttonbox: {
        backgroundColor:"#EEEDFA",
        borderRadius: 20,
        borderWidth:1,
        borderColor:"#D7D2E9",
        height: 36,
        width: 140,
        justifyContent:"space-around",
        alignSelf:"center",
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 24,
    },buttonbox1: {
        backgroundColor:"#5736B5",
        borderRadius: 20,
        height: 36,
        width: 140,
        justifyContent:"space-around",
        alignSelf:"center",
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 24,
    },
    button: {
        color:"#000000",
        alignSelf:"center",
        fontWeight: 500,
    },
    button1: {
        color:"#FFFFFF",
        alignSelf:"center",
        fontWeight: 500,
    },
    img:{
        height:56,
        width:56,
        borderRadius:14,
        marginRight:16
    },
    tex:{
        height:"100%",
        width:"100%",
        flexDirection:"column",
        paddingBottom:4,
        paddingTop:4
    },bottomtex:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:8
    },
    head:{
        fontWeight: 500,
        fontAize: 16,
        color:"#020314"
    },
    status:{
        backgroundColor:"#45BD58",
        width:47,
        height:22,
        borderRadius:16,
        justifyContent:"center",
        alignItems:"center",
        marginRight:8
    },
    statusTex:{
        fontSize:12,
        color:"white"
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%"
    }

});
  

export default PendingOrderCard;