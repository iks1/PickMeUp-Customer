import { ScrollView, View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Arrow from "../assets/leftArrow.svg";
import Line1 from "../assets/line1.svg";
import RegisterButton from "../components/registerButton";
import InputField from "../components/InputField";
import Google from "../components/Google";
import Outlook from "../components/Outlook";

const SignUp = () => {
    const handleClick = () => {
        ;
    };

    return (
        <View style={styles.main}>
        <ScrollView style={styles.scroll}>
            <View style={styles.maincontainer}>
                <View style={styles.container}>
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={handleClick}>
                        <Arrow/>
                    </TouchableOpacity>
                </View>
                <View style={styles.linev}>
                    <Line1/>
                </View>
                <View style={styles.input}>
                    <InputField text="Full name"/>
                    <InputField text="Email ID"/>
                    <InputField text="Password"/>
                </View>
                <View style={styles.input2}>
                    <RegisterButton text="Register"/>
                    <Text>or</Text>
                    <Google/>
                    <Outlook />
                </View>
                <View style={styles.text}>
                    <Text style={styles.texts}>
                        By tapping Register, or continue with Outlook or Google, you agree to our Terms of Use and Privacy Policy.
                    </Text>
                </View>
           </View>
           </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        height: "100%",
        width: "100%",
        backgroundColor:'#5736B5',
        flexDirection:'row',
        alignItems:'flex-end',
    },
    main: {
        height: "100%",
        width: "100%",
    },
    scroll: {
        height: "100%",
        width: "100%",
        backgroundColor:'#EFEEFA',
    },
    container:{
        backgroundColor:'#EFEEFA',
        height: "93%",
        width:"100%",
        borderTopLeftRadius:24,
        borderTopRightRadius:24,
        flexDirection:'column',
    },
    arrow: {
        // paddingLeft: 28,
        // paddingTop: 28,
    },
    linev: {
        // marginTop: "6%",
        backgroundColor:'#FFFFFF',
    },
    input: {
        // marginTop: "6%",
        width: "100%",
        // height: "50%",
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    input2: {
        // marginTop: "4%",
        // height: "40%",
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    text: {
        // marginTop: "2%",
        color: "6F6F6F",
        fontSize: 12,
        fontWeight: 500,
        width: "91%",
        alignSelf: "center",
        alignItems: "center",
    },
    texts: {
        textAlign: "center",
    }
});

export default SignUp;