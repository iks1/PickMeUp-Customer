import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RegisterButton = () => {
    const handleClick = () => {
        ;
    };

    return (
        
        <View style={styles.container}>
        <TouchableOpacity onPress={handleClick}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5736B5",
        borderRadius: 20, 
        height: 38,
        width: '80%',
        justifyContent: "center",
    },
    text: {
        alignSelf: "center",
        color: "#FFFFFF",
    }
});

export default RegisterButton;