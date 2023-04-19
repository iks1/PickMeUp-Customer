import React,{useState} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Gpay from '../assets/Gpay.png';
import Paytm from '../assets/paytm.png';
import Upi from '../assets/upii.png';
import RightArrow from "../assets/rightArrow.svg";

const PaymentCard = props => {

    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (value) => {
        setSelectedOption(value);
    };

    return (
        <View style={styles.container}>         
            <Text style={styles.HeadText}>
                Payment gateway
            </Text>
            <View style={styles.body}>
                    
                        <View style={styles.option} key={1}>
                            <View style={styles.option1}>
                                <Image source={Gpay} style={styles.logo}/>
                                <View style={styles.id}>
                                    <Text style={styles.Text1}>
                                        Google Pay
                                    </Text>
                                    <Text style={styles.Text2}>
                                        {props.id1}
                                    </Text>
                                </View>
                            </View>
                            <RadioButton
                                key={1}
                                value={1}
                                status={selectedOption === 1 ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionSelect(1)}
                                style={styles.radiobutton}
                            />
                        </View>
                        <View style={styles.option} key={2}>
                            <View style={styles.option1}>
                                <Image source={Paytm} style={styles.logo}/>
                                <View style={styles.id}>
                                    <Text style={styles.Text1}>
                                        Paytm
                                    </Text>
                                    <Text style={styles.Text2}>
                                        {props.id2}
                                    </Text>
                                </View>
                            </View>
                            <RadioButton
                                key={2}
                                value={2}
                                status={selectedOption === 2 ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionSelect(2)}
                                style={styles.radiobutton}
                            />
                        </View>
                    
                        <View style={styles.line}>
                            <View style={styles.line1}>
                                <Image source={Upi} style={styles.logo}/>
                                <Text style={styles.text}>
                                    Add another account
                                </Text>
                            </View>
                            <TouchableOpacity>
                                <RightArrow />
                            </TouchableOpacity>
                        </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        flexDirection: 'column',
        borderRadius: 16,
        paddingLeft: 16,
        paddingTop: 16,
    },
    HeadText:{
        fontSize: 14,
        fontWeight: 500,
        color: '#6F6F6F',
    },
    body:{
        flexDirection: 'column',
        paddingTop: 16,
        paddingRight: 12,
    },
    option:{
        flexDirection: "row",
        marginBottom: 16,
        justifyContent: "space-between",
    },
    logo:{
        width: 37,
    },
    option1:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    id:{
        flexDirection: "column",
        marginLeft: 12,
    },
    Text1:{
        fontSize: 14,
        fontWeight: 400,
        color: '#020314',
    },
    Text2:{
        fontSize: 12,
        fontWeight: 400,
        color: '#6F6F6F',
    },
    line:{
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 16,
        paddingRight: 4,
    },
    line1:{
        flexDirection: "row",
        alignItems: "center",
    },
    text:{
        fontSize: 14,
        color: "#6F6F6F",
        fontWeight: 400,
        marginLeft: 12,
    },
});
  
export default PaymentCard;
