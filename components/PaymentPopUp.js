import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Arrow from '../assets/arrow.svg';
import Icon from '../assets/razorPay.svg';

const PaymentPopUp = props => {
    const handleClick = () => {
        ;
    };

    return (
        <View style={styles.outer}>
            <View>
                <Text stye={styles.texts}>Pay through</Text>
                <Icon/>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>
                        Grand Total
                    </Text>
                    <Text style={styles.text}>
                        ₹{props.total}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={handleClick}>
                    <Arrow/>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    outer: {
        backgroundColor: "#FFFFFF",
        height: 102,
        width: "100%",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",

    },
    texts: {
        color: "#6F6F6F",
        fontSize: 14,
        fontWeight: 400,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#5736B5',
        borderRadius: 16,
        justifyContent:'space-between',
        height: 62,
        width: "65%",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16,
    },
    text: {
        color: "#FFFFFF",
    }
});
export default PaymentPopUp;