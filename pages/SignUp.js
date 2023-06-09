import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import Arrow from "../assets/leftArrow.svg";
import Line1 from "../assets/line1.svg";
import RegisterButton from "../components/registerButton";
import InputField from "../components/InputField";
import Google from "../components/Google";
import Outlook from "../components/Outlook";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ctx = useContext(AuthContext);
  const navigation = useNavigation();
  const registerHandler = () => {
    console.log(userName, email, password, navigation);
    ctx.register(userName, email, password, navigation);
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => {
            navigation.navigate("GetStarted");
          }}
        >
          <Arrow />
        </TouchableOpacity>
        <View style={styles.linev}>
          <Line1 />
        </View>
        <View style={styles.input}>
          <InputField
            text="Full name"
            callback={(text) => {
              setUserName(() => text);
            }}
          />
          <InputField
            text="Email ID"
            callback={(text) => {
              setEmail(() => text);
            }}
          />
          <InputField
            text="Password"
            callback={(text) => {
              setPassword(() => text);
            }}
          />
        </View>
        <View style={styles.input2}>
          <TouchableOpacity style={styles.wrapper} onPress={registerHandler}>
            <RegisterButton text="Register" />
          </TouchableOpacity>
          <Text style={styles.or}>or</Text>
          <TouchableOpacity
            style={styles.wrapper}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Outlook />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapper}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Google />
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={styles.texts}>
            By tapping Register, or continue with Outlook or Google, you agree to our
            <Text style={styles.boldText}> Terms of Use </Text> 
              and  
            <Text style={styles.boldText}> Privacy Policy</Text>                  
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
    backgroundColor: "#5736B5",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  container: {
    backgroundColor: "#EFEEFA",
    height: "93%",
    width: "100%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: "column",
  },
  arrow: {
    paddingLeft: 28,
    paddingTop: 28,
  },
  linev: {
    marginTop: "6%",
    backgroundColor: "#FFFFFF",
  },
  input: {
    marginTop: "6%",
    width: "100%",
    height: "28%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input2: {
    marginTop: "4%",
    height: "23%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  or: {
    fontSize: 16,
    fontWeight: 500,
    color: "#6F6F6F",
  },
  text: {
    marginTop: 4,
    width: "91%",
    alignSelf: "center",
    alignItems: "center",
  },
  texts: {
    textAlign: "center",
    color: "#6F6F6F",
    fontSize: 12,
    fontWeight: 400,
  },
  boldText: {
    fontWeight: 500,
  },
  wrapper: {
    width: "100%",
    height: 38,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default SignUp;
