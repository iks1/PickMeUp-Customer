import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import Arrow from "../assets/leftArrow.svg";
import FilePlus from "../assets/filePlus.svg";
import NavBar from '../components/Navbar'

const UploadFiles = () => {
    const handleBack = () => {

    };
    const handleClick = () => {
    
    };

    return (
        <View style={styles.container}>
            <View style={styles.arrow}>
                <TouchableOpacity onPress={handleBack}>
                    <Arrow/>
                </TouchableOpacity>
            </View>

            <View style={styles.box}>
                <View>
                    <Text style={styles.text1}>Upload your files</Text>
                    <Text style={styles.text2}>Select the files to be printed</Text>
                </View>
                <View style={styles.box2}>
                    <FilePlus/>
                    <View style={styles.upload}>
                        <TouchableOpacity onPress={handleClick}>
                            <Text style={styles.text3}>Browse files</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.nav}>
                {/* <NavBar active="Food"/> */}
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor:'#EFEEFA',
        flexDirection:'column',
    },
    arrow: {
        marginLeft: "9.5%",
        marginTop: 72,
    },
    box: {
        backgroundColor: "white",
        height: 201,
        width: "93%",
        marginTop: 33,
        borderRadius: 16,
        alignSelf: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    text1: {
        color: "#6F6F6F",
        fontWeight: 500,
        fontSize: 16,
        alignSelf: "center",
    },
    text2: {
        color: "#999999",
        fontWeight: 400,
        fontSize: 12,
        alignSelf: "center",
        marginTop: 6,
    },
    box2: {
        height: 115,
        width: "90%",
        borderRadius: 16,
        borderColor: "#D7D2E9",
        borderWidth: 1,
        borderStyle: "dashed",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    upload: {
        backgroundColor: "#5736B5",
        borderRadius: 16, 
        height: 35,
        width: '89%',
        justifyContent: "center",
    },
    text3: {
        alignSelf: "center",
        color: "#FFFFFF",
    },
    nav: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 68,
    }
});

export default UploadFiles;