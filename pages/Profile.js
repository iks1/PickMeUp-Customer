import React, { useContext } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Arrow from "../assets/leftArrow.svg";
import Edit from "../assets/pencil.svg";
import Photo from "../assets/profileicon.png";
import Detail from "../components/StudentCard";
import Payment from "../components/PaymentCard";
import History from "../assets/history.svg";
import Favorite from "../assets/favorite.svg";
import Review from "../assets/message.svg";
import Bell from "../assets/bell.svg";
import Help from "../assets/help.svg";
import Complaint from "../assets/complaint.svg";
import RightArrow from "../assets/rightArrow.svg";
import NavBar from "../components/Navbar";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
const Profile = () => {
  const ctx = useContext(AuthContext);
  console.log("df");
  console.log(ctx);
  const navigation = useNavigation();
  const logoutHandler = async () => {
    await ctx.logout(navigation);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.main}>
        <View style={styles.up}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Arrow />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.edit}>
              <Edit />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.down}>
          <View style={styles.card}>
            <Detail
              image={Photo}
              name="AARYA GHODKE"
              email="a.ghodke@iitg.ac.in"
              phoneNo="+91 9876543210"
              location="5MQX+8W3, IIT Guwahati, Guwahati, Assam 781039"
            />
          </View>

          <View style={styles.card2}>
            <Text style={styles.activity}>Your activity</Text>
            <View style={styles.option}>
              <View style={styles.option1}>
                <History />
                <Text style={styles.text}>Order history</Text>
              </View>
              <TouchableOpacity>
                <RightArrow />
              </TouchableOpacity>
            </View>
            <View style={styles.option}>
              <View style={styles.option1}>
                <Favorite />
                <Text style={styles.text}>Your favorites</Text>
              </View>
              <TouchableOpacity>
                <RightArrow />
              </TouchableOpacity>
            </View>
            <View style={styles.option}>
              <View style={styles.option1}>
                <Review />
                <Text style={styles.text}>Reviews by you</Text>
              </View>
              <TouchableOpacity>
                <RightArrow />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.card}>
            <Payment id1="rajinertia@okhdfcbank" id2="rajinertia@okhdfcbankk" />
          </View>

          <View style={styles.card2}>
            <View style={styles.option}>
              <View style={styles.option1}>
                <Bell />
                <Text style={styles.text}>Manage notifications</Text>
              </View>
              <TouchableOpacity>
                <RightArrow />
              </TouchableOpacity>
            </View>
            <View style={styles.option}>
              <View style={styles.option1}>
                <Help />
                <Text style={styles.text}>Need help?</Text>
              </View>
              <TouchableOpacity>
                <RightArrow />
              </TouchableOpacity>
            </View>
            <View style={styles.option}>
              <View style={styles.option1}>
                <Complaint />
                <Text style={styles.text}>Raise a complaint</Text>
              </View>
              <TouchableOpacity>
                <RightArrow />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={logoutHandler}>
            <View>
              <Text style={styles.buttonText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <View style={styles.navbar}>
                    <NavBar />
            </View> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#EFEEFA",
    width: "100%",
    height: "100%",
  },
  main: {
    height: "100%",
    width: "100%",
    marginTop: 33,
  },
  up: {
    height: 76,
    width: "100%",
    paddingLeft: 33,
    paddingRight: 16,
    paddingTop: 30,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  edit: {
    width: 48,
    height: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  down: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 64,
    marginTop: 16,
  },
  card: {
    width: "91%",
    marginBottom: 16,
  },
  card2: {
    width: "91%",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingTop: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  activity: {
    fontSize: 14,
    fontWeight: 500,
    color: "#6F6F6F",
    marginBottom: 20,
  },
  option: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  option1: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "#020314",
    marginLeft: 12,
  },
  button: {
    width: "91%",
    height: 36,
    backgroundColor: "#5736B5",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 500,
    color: "#FFFFFF",
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 64,
  },
});
