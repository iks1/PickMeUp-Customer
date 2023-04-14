import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import OutlookIcon from "../assets/outlook.svg";

const Outlook = () => {
    return (
        
        <View style={styles.container}>
            <OutlookIcon/>
            <Text style={styles.text}>Continue with Outlook</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20, 
        height: 38,
        width: '91%',
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        paddingLeft: 4,
        color: "#020314",
        fontWeight: 500,
        fontSize: 16,
    }
});

export default Outlook;