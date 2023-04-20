import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Touchable } from 'react-native';
import Heart from '../assets/heart.svg';
import HeartActive from '../assets/heartActive.svg'
import {useState} from 'react';
import NonVegIcon from "../assets/Icons/NonVegIcon";
import VegIcon from "../assets/Icons/VegIcon";
import RatingView from "./RatingView";
import Line from '../assets/horizontalLine.svg';
import { RadioButton } from 'react-native-paper';
import Plus from '../assets/plus.svg';
import Minus from '../assets/minus.svg';
import { useNavigation } from "@react-navigation/native";

const FoodPopUp = props => {
    const [num, setNum]=useState(1);
    const navigation = useNavigation();
    const handleSubtract = () => {
        num!==0 && setNum(num-1);
    };
    const handleAdd = () => {
        setNum(num+1);
    };
    const handleAddItem = () => {
        ;
    };
    const [isFavourite, setIsFavourite]=useState(false);

    const handleClick = () => {
        setIsFavourite(!isFavourite);
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (value) => {
        setSelectedOption(value);
    };
    

    return (
        <View style={styles.container}>
            
            <View style={styles.box1}>

            <View style={styles.box}>
                <TouchableOpacity style={styles.image}>
                    <Image source={props.image} style={styles.image} /> 
                </TouchableOpacity>
                <View style={styles.box11}>
                    <View style={styles.headingDecorator}>
                    {(props.veg === "1") ? (<VegIcon/>):(<NonVegIcon/>)}
                    {(props.bestSeller) ? (<Text style={styles.texts}>BestSeller</Text>) : (<Text></Text>)}
                    </View>
                    <View>
                    <Text style={styles.text}>
                        {props.itemName}
                    </Text>
                    </View>
                    <View>
                    <RatingView rating={props.rating} />
                    </View>
                </View>
                </View>
                <View>
                    <TouchableOpacity onPress={handleClick}>
                        <View style={{width: 48, height: 48, backgroundColor : isFavourite? "red" : "white", borderColor : isFavourite? "white" : "#D7D2E9", borderWidth:1, borderRadius: 26}}>
                            {isFavourite? (<HeartActive style={styles.heart}/>):(<Heart style={styles.heart}/>)}
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
            <Line style={styles.line}/>

            <View style={styles.box2}>
                {(props.halfFull === "1") ? (<View style={styles.box11}>
                    <Text style={styles.quan}>Quantity</Text>
                    <View style={styles.view}>
                        <Text>Half</Text>
                        <View style={styles.icon}>
                        <Text>₹{props.price1}</Text>
                            <RadioButton
                                key="1"
                                value="1"
                                status={selectedOption === 1 ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionSelect(1)}
                                style={styles.radiobutton}
                            />
                        </View>
                    </View>
                    <View style={styles.view}>
                        <Text>Full</Text>
                        <View style={styles.icon}>
                            <Text>₹{props.price2}</Text>
                            <RadioButton
                                key="1"
                                value="1"
                                status={selectedOption === 2 ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionSelect(2)}
                                style={styles.radiobutton}
                            />
                        </View>
                    </View>
                    
                    
                </View>) : ( <View style={styles.view}>
                        <Text>Full</Text>
                        <View style={styles.icon}>
                            <Text>₹{props.price2}</Text>
                            <RadioButton
                                key="1"
                                value="1"
                                status={selectedOption === 2 ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionSelect(2)}
                                style={styles.radiobutton}
                            />
                        </View>
                    </View>)}
            </View>
            
            <View style={styles.box3}>
                <View style={styles.button1}>
                    <TouchableOpacity onPress={handleSubtract}>
                        <Minus/>
                    </TouchableOpacity>
                    <Text style={styles.text1}>{num}</Text>
                    <TouchableOpacity onPress={handleAdd}>
                       <Plus/>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.button2}>
                    <TouchableOpacity  onPress={()=>{navigation.navigate("BillingPage");}}>
                        <Text style={styles.text2}>Add item</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        justifyContent:'space-between',
        overflow: 'hidden',
        width:'100%'
    },
    box1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 26,
        alignItems: 'center',
    },
    box: {
        width: "70%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    box11: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 14,
    },
    headingDecorator: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 7,
    },
    texts: {
        paddingLeft: 4,
        color: "#5736B5",
        fontWeight: 500,
        fontSize: 10,
    },
    text: {
        paddingTop: 0,
        paddingBottom: 8,
        fontSize: 14,
        fontWeight: 500,
        color: "#020314",
    },
    heart: {
        top: 15,
        right:-15,
    },
    line: {
        width: "100%",
        alignSelf: 'center',
        paddingBottom: 16,
    },
    box2: {
        flexDirection: 'column',
        paddingLeft: 12,
        paddingRight: 12,
    },
    quan : {
        color: "6F6F6F",
        fontWeight: 500,
        fontSize: 16,
    },
    view: {
        flexDirection: 'row',       
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    radiobutton: {
        color:"#5736B5",
        backgroundColor:"#5736B5",
        borderWidth: 0.5,
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    box3: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 24,
        paddingTop: 16,
        justifyContent: 'space-between',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 16,
    },
    button1: {
        backgroundColor:"#EEEDFA",
        borderRadius: 20,
        height: 38,
        width: "48%",
        justifyContent:"space-around",
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#D7D2E9",
        borderWidth: 1,
    }, 
    button2: {
        backgroundColor:"#5736B5",
        borderRadius: 20,
        height: 38,
        width: "48%",
        justifyContent:"space-around",
    },
    text1: {
        color:"#000000",
        textAlign:"center",
        fontWeight: "bold",
    },
    text2: {
        color:"#FFFFFF",
        alignSelf:"center",
        fontWeight: "bold",
    } 
});

export default FoodPopUp;