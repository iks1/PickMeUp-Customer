import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import Phone from '../assets/phone.svg';
import Location from '../assets/location.svg';

const StudentCard = props => {

    return (
        <View style={styles.container}>         
            <View style={styles.top}>
                <Image source={props.image} style={styles.image} />
                <View style={styles.box}>
                    <Text style={styles.name}>  
                        {props.name}
                    </Text>
                    <Text style={styles.email}>
                        {props.email}
                    </Text>
                </View>
                
            </View>
            <View style={styles.body}>
                <View style={styles.detail}>
                    <Phone />
                    <Text style={styles.Text}>
                        {props.phoneNo}
                    </Text>
                </View>  
                <View style={styles.detail}>
                    <Location />
                    <Text style={styles.Text}>
                        {props.location}
                    </Text>
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
    top: {
        height: 50,
        flexDirection: 'row',
    },
    box: {
        flexDirection: 'column',
        paddingLeft: 12,
        paddingTop: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: 500,
        color: '#020314',
    },
    email: {
        fontSize: 12,
        fontWeight: 400,
        color: '#6F6F6F',
    },
    body:{
        flexDirection: 'column',
        paddingTop: 16,
    },
    detail:{
        flexDirection: "row",
        marginBottom: 16,
        paddingRight: "18%",
        alignItems: "center",
    },
    Text:{
        fontSize: 14,
        fontWeight: 400,
        color: '#020314',
        marginLeft: 12,
        flexWrap: 'wrap',
    },
});
  
export default StudentCard;
