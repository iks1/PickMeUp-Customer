import React,{useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-checkbox';
import { RadioButton } from 'react-native-paper';
const FilterCard = props => {
    const [checkboxState, setCheckboxState] = useState(
        props.list1.map((checkbox) => ({
            id: checkbox.id,
            label: checkbox.label,
            checked: false,
        }))
    );
    const onCheckHandler = (index) => {
        const newCheckboxState = [...checkboxState];
        newCheckboxState[index].checked = !newCheckboxState[index].checked;
        setCheckboxState(newCheckboxState);
    };
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (value) => {
        setSelectedOption(value);
    };
    
    const handleClearAll = () => {
        const newCheckboxState = checkboxState.map((checkbox) => ({
            ...checkbox,
            checked: false,
          }));
          setCheckboxState(newCheckboxState);
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
                    {checkboxState.map((checkbox, index) => (
                        <View style={styles.item1} key={index}>
                            <Text style={styles.text}>{checkbox.label}</Text>
                            <CheckBox
                                key={checkbox.id}
                                checked={checkbox.checked}
                                onChange={() => onCheckHandler(index)}
                                label=''
                                checkboxStyle={styles.checkbox}
                            />
                        </View>
                    ))}
                </View>
                <View
                    style={styles.line}
                />
                <View style={styles.side1}>
                    {props.list2.map((item, index) => (
                        <View style={styles.item2} key={item.id}>
                            <View>
                            <Text>{item.label[0]}</Text>
                            <Text>{item.label[1]}</Text>
                            </View>
                            <RadioButton
                                key={item.id}
                                value={item.id}
                                status={selectedOption === item ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionSelect(item)}
                                style={styles.radiobutton}
                            />
                        </View>
                    ))}
                    
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
        height: 331,
        width: '100%',
        display: "flex", 
        flexDirection: "column",
        overflow: 'hidden',
    },
    box1: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 0.9,
        flexDirection: "row", 
    },
    side1: {
        flex: 0.5,
        flexDirection: "column",
        justifyContent: "space-around",
    },
    item1: {
        paddingLeft: 20,
        width: "90%",
        fontSize:14, 
        lineHeight: 19,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    item2: {
        fontSize:14, 
        lineHeight: 19,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    text: {
        alignSelf: "center",
    },
    checkbox: {
        borderColor:"#5736B5",
        borderRadius: 4,
        borderWidth: 1,
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
        paddingTop: 36,
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