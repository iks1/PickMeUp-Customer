import React, {useState} from "react";
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import NavBar from '../components/Navbar'
import ItemsAdded from "../components/itemsAddedCard";
import OrderCard from "../components/smallOrderCard";
import Lines from "../assets/horizontalLine.svg"
import InfoIcon from "../assets/infoIcon.svg";
import Edit2 from "../assets/edit2.svg";
import Tick from "../assets/checkboxtick.svg";
import Arrow from "../assets/leftArrow.svg";
import Upi from "../assets/upi.png";
import { useNavigation } from "@react-navigation/native";

const BillingPage=(props)=>{

        const [checked, setChecked] = useState(false);
        const navigation = useNavigation();
        const handlePress = () => {
          setChecked(!checked);
        };

    return (
        <View style={styles.mainContainer}>
            <ScrollView  style={styles.main}>

                <View style={styles.up}>
                    <TouchableOpacity  onPress={()=>{navigation.goBack();}}>
                        <Arrow />
                    </TouchableOpacity>
                </View>

                <View style={styles.down}>
                    <View style={styles.added}>
                        <ItemsAdded list={[{veg:0,quantity:2,item:"Chicken Tikka Masala",price:265},{veg:1,quantity:3,item:"Tandoori Roti",price:12},{veg:1,quantity:1,item:"Veg Fried Rice",price:80}]} />
                    </View>

                    <View style={styles.Head}>
                            <Text style={styles.HeadText} >
                                Add to your order
                            </Text>
                            <Text style={styles.LinkText}>
                                View more
                            </Text>
                    </View>
                    <View style={styles.add}>
                        <ScrollView horizontal={true}>
                            <View style={styles.options}>
                                <OrderCard bg={props.img} veg={true} name="Chicken Burger" price="80"/>
                            </View>
                            <View style={styles.options}>
                                <OrderCard bg={props.img} veg={false} name="Chicken Shawarma" price="120"/>
                            </View>
                            <View style={styles.options}>
                                <OrderCard bg={props.img} veg={false} name="Special Chicken Burger" price="454"/>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.instr}>
                        <View style={styles.edit}>
                            <View style={styles.input}>
                                <TextInput
                                multiline={true}
                                    style={styles.HeadText}
                                    placeholder="Add cooking instructions " 
                                    placeholderTextColor="#6F6F6F"
                                />
                            </View>
                            <Edit2 />
                        </View>
                        <Lines />
                        <View style={styles.edit}>
                            <Text style={styles.HeadText}>
                                Pack my order
                            </Text>
                            <TouchableOpacity onPress={handlePress}>
                                <View style={[{backgroundColor : checked ? "#5736B5" : "white"},styles.checkbox]}>
                                    {checked ? <Tick /> : null}
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.bill}>
                        <Text style={styles.head}>Bill Summary</Text>
                        <View style={styles.row}>
                            <Text style={styles.subHead}>Subtotal</Text>
                            <Text style={styles.subHead}>₹{props.subtotal}</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.icon}>
                                <Text style={styles.subHead2}>GST and other taxes </Text>
                                <InfoIcon style={{marginLeft: 8}}/>
                            </View>
                            <Text style={styles.subHead2}>₹{props.tax}</Text>                            
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.subHead2}>Packaging charges</Text>
                            <Text style={styles.subHead2}>₹{props.packing}</Text>                            
                        </View>
                        <Lines />
                        <View style={styles.row}>
                            <Text style={styles.subHead}>Grand Total</Text>
                            <Text style={styles.subHead}>₹{props.total}</Text>
                        </View>
                    </View>

                    <View style={styles.pay}>
                        <View style={styles.paytext}>
                            <Text style={styles.text1}>Pay using</Text>
                            <Image source={Upi} style={styles.upi}/>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Grand total</Text>
                            <Text style={styles.buttonText2}>₹{props.total}</Text>
                        </TouchableOpacity>
                    </View>

                </View>          
            </ScrollView>   

            <View style={styles.navbar}>
                    <NavBar active="Food"/>
            </View>

        </View>
    );
}

export default BillingPage;

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#EFEEFA',
        width:"100%",
        height:"100%"
    },
    main:{
        height:"100%",
        width:"100%",
    },
    up:{
        height:120,
        width:"100%",
        padding:33,
        paddingTop: 70,
    },
    down:{
        height:"100%",
        width:"100%",
        flexDirection:'column',
        alignItems:'center',
        marginBottom: 64,
    },
    added: {
        width:"91%",
    },
    Head:{
        width:"87%",
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop: 32,
    },
    HeadText:{
        color:'#6F6F6F',
        fontSize:14,
        fontWeight:500,
    },
    LinkText:{
        color:'#5736B5',
        fontSize:14,
        fontWeight:500,
    },
    add:{
        width:"100%",
    },
    options:{
        padding: 16,
    },
    instr:  {
        width:"91%",
        backgroundColor:'#FFFFFF',
        borderRadius: 16,
        marginTop: 12,
        marginBottom: 28,
        paddingTop: 4,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
    },
    edit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 16,
        paddingTop: 16,
    },
    input: {
        width:"87%",
    },
    checkbox: {
        borderRadius: 8,
        width: 24, 
        height: 24, 
        borderColor: "#5736B5",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bill:{
        width:"91%",
        height: 214,
        backgroundColor:'#FFFFFF',
        borderRadius: 16,
        padding: 20,
        justifyContent:'space-between',
        marginBottom: 24,
    },
    head: {
        color: "#6F6F6F",
        fontSize: 16,
        fontWeight: 500,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subHead: {
        color: "#020314",
        fontSize: 16,
        fontWeight: 500,
    },
    subHead2: {
        color: "#020314",
        fontSize: 14,
        fontWeight: 400,
    },
    pay: {
        width:"100%",
        height: 94,
        backgroundColor:'#FFFFFF',
        borderRadius: 16,
        padding: 16,
        paddingLeft: 32,
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    // paytext: {
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    // },
    text1: {
        color: "#6F6F6F",
        fontSize: 12,
        fontWeight: 400,
    },
    upi: {
        marginTop: 8,
        width: 50,
        height: 14,
    },
    button: {
        backgroundColor: "#5736B5",
        borderRadius: 16,
        width: "70%",
        paddingVertical: 12,
        paddingHorizontal: 20,
        flexDirection: 'column',
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: 400,
    },
    buttonText2: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 500,
    },
    navbar: {
        position:'absolute', 
        bottom:0, 
        width:'100%', 
        height:64,
    },
})

{/* <Billing img ={Chicken} subtotal="369" tax="18.45" packing="10" total="397.45"/> */}
