import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import ProfileEllipse from "../assets/profileEllipse.svg";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const Start = () => {
  // useEffect(() => {
  //     getSession();
  //   }, []);
  //   const getSession = useCallback(async () => {
  //     const storageToken = await AsyncStorage.getItem('refreshToken');
  //     cognitoPool.storage.sync(function (err, res) {
  //       if (res !=='SUCCESS') return

  //       const user = cognitoPool.getCurrentUser();
  //       if (!user) return;
  //       user.getSession((err, session) => {
  //         if (err) return;

  //         const sessionToken = session?.refreshToken?.token;
  //         if (sessionToken === storageToken) navigation.navigate(‘main’);
  //       });
  //     });
  //   }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.up}>
        <ProfileEllipse />
        <Text style={styles.Tex2}>
          Ordering on Campus made easier than ever
        </Text>
      </View>
      <View style={styles.down}>
        <TouchableOpacity
          style={styles.but}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.Tex}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#5736B5",
  },
  up: {
    width: "100%",
    height: "70%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  down: {
    width: "100%",
    height: "30%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  but: {
    width: "90%",
    height: 38,
    borderRadius: 20,
    backgroundColor: "#EEEDFA",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#020314",
    fontSize: 16,
    fontWeight: 500,
  },
  Tex: {
    fontSize: 16,
    fontWeight: 500,
    color: "white",
    width: "70%",
    textAlign: "center",
    marginTop: 20,
  },
  Tex2: {
    fontSize: 20,
    fontWeight: 500,
    color: "white",
    width: "70%",
    textAlign: "center",
    marginTop: 36,
  },
});
