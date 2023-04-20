import React,{useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-checkbox';
import { RadioButton } from 'react-native-paper';
import Tick from "../assets/checkboxtick.svg";

const FilterCard = props => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    
    const handlePress1 = () => {
        setChecked1(!checked1);
    };
    const handlePress2 = () => {
        setChecked2(!checked2);
    };
    const handlePress3 = () => {
        setChecked3(!checked3);
    };
    const handlePress4 = () => {
        setChecked4(!checked4);
    };
    
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (value) => {
        setSelectedOption(value);
    };
    
    const handleClearAll = () => {
        setChecked1(false);
        setChecked2(false);
        setChecked3(false);
        setChecked4(false);
        setSelectedOption(null);
    };
    
    const [apply, setApply] = useState(false);
    const handleApply = () => {
        setApply(true);
    };
    return (
        <View style={styles.container}>  
            <View style={styles.box1}>
                <View style={styles.side1}>
                    
                    <View style={styles.item1} key="1">
                        <Text style={styles.text}>Vegetarian</Text>
                        <TouchableOpacity onPress={handlePress1}>
                            <View style={[{backgroundColor : checked1 ? "#5736B5" : "white"},styles.checkbox]}>
                                {checked1 ? <Tick /> : null}
                            </View>
                        </TouchableOpacity>     
                    </View>
                    <View style={styles.item1} key="2">
                        <Text style={styles.text}>4.0+ Rated</Text>
                        <TouchableOpacity onPress={handlePress2}>
                            <View style={[{backgroundColor : checked2 ? "#5736B5" : "white"},styles.checkbox]}>
                                {checked2 ? <Tick /> : null}
                            </View>
                        </TouchableOpacity>     
                    </View>
                    <View style={styles.item1} key="3">
                        <Text style={styles.text}>Prev. Ordered</Text>
                        <TouchableOpacity onPress={handlePress3}>
                            <View style={[{backgroundColor : checked3 ? "#5736B5" : "white"},styles.checkbox]}>
                                {checked3 ? <Tick /> : null}
                            </View>
                        </TouchableOpacity>     
                    </View>
                    <View style={styles.item1} key="4">
                        <Text style={styles.text}>On Campus</Text>
                        <TouchableOpacity onPress={handlePress4}>
                            <View style={[{backgroundColor : checked4 ? "#5736B5" : "white"},styles.checkbox]}>
                                {checked4 ? <Tick /> : null}
                            </View>
                        </TouchableOpacity>     
                    </View>
                    
                </View>
                <View
                    style={styles.line}
                />
                <View style={styles.side1}>
                
                    <View style={styles.item2} key="1">
                        <View>
                            <Text>Rating:</Text>
                            <Text>High To Low</Text>
                        </View>
                        <RadioButton
                            key="1"
                            value="1"
                            uncheckedColor= "#5736B5"
                            status={selectedOption === 1 ? 'checked' : 'unchecked'}
                            onPress={() => handleOptionSelect(1)}
                            style={styles.radiobutton}
                        />
                    </View>
                    <View style={styles.item2} key="2">
                        <View>
                            <Text>Cost:</Text>
                            <Text>High To Low</Text>
                        </View>
                        <RadioButton
                            key="2"
                            value="2"
                            uncheckedColor= "#5736B5"
                            status={selectedOption === 2 ? 'checked' : 'unchecked'}
                            onPress={() => handleOptionSelect(2)}
                            style={styles.radiobutton}
                        />
                    </View>
                    <View style={styles.item2} key="3">
                        <View>
                            <Text>Cost:</Text>
                            <Text>Low To High</Text>
                        </View>
                        <RadioButton
                            key="3"
                            value="3"
                            uncheckedColor= "#5736B5"
                            status={selectedOption === 3 ? 'checked' : 'unchecked'}
                            onPress={() => handleOptionSelect(3)}
                            style={styles.radiobutton}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.box2}>
                <View style={styles.button1}>
                    <TouchableOpacity onPress={handleClearAll}>
                        <Text style={styles.text1}>Clear All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button2}>
                    <TouchableOpacity onPress={handleApply}>
                        <Text style={styles.text2}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius:16,
        height: 251,
        width: '100%',
        display: "flex", 
        flexDirection: "column",
        overflow: 'hidden',
    },
    box1: {
        height: 180,
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16,
        // flex: 0.9,
        flexDirection: "row", 
    },
    side1: {
        flex: 0.5,
        flexDirection: "column",
        justifyContent: "space-around",
    },
    item1: {
        paddingLeft: 10,
        width: "90%",
        fontSize:14, 
        lineHeight: 19,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    item2: {
        paddingLeft: 10,
        fontSize:14, 
        lineHeight: 19,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    text: {
        alignSelf: "center",
        
    },
    checkbox: {
        borderRadius: 6,
        width: 20, 
        height: 20, 
        borderColor: "#5736B5",
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radiobutton: {
        color:"#5736B5",
        backgroundColor:"#5736B5",
    },
    line: {
        height: '100%',
        width: 1,
        backgroundColor: '#D7D2E9',
        alignSelf: 'center',
    },
    box2: {
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
    }, 
    button1: {
        backgroundColor:"#EEEDFA",
        borderRadius: 16,
        height: 35,
        width: 136,
        justifyContent:"space-around",
    }, 
    button2: {
        backgroundColor:"#5736B5",
        borderRadius: 16,
        height: 35,
        width: 136,
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
export default FilterCard;