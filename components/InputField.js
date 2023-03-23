import { View, StyleSheet, Text, TextInput } from "react-native";

const InputField = props => {

    return (
        <View style={styles.container}>
           <TextInput
                style={styles.text}
                placeholder={props.text}
                placeholderTextColor="#6F6F6F"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16, 
        height: 51,
        width: '91%', 
    },
    text: {
        color: "black",
        paddingLeft: 20,
        paddingTop: 16,
        paddingBottom: 16,
        fontSize: 14,
    }
});

export default InputField;