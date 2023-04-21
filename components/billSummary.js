import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import Lines from "../assets/horizontalLine.svg";
import InfoIcon from "../assets/infoIcon.svg";
import Upi from "../assets/upi.png";
import RazorpayCheckout from "react-native-razorpay";

const Bill = (props) => {
  const makePayment = () => {
    let options = {
      description: "Credits towards consultation",
      image: "https://i.imgur.com/3g7nmJC.png",
      currency: "INR",
      key: "rzp_test_Mg2HFDQ7FwhAFM", // Your api key
      amount: "5000",
      name: "foo",
      prefill: {
        email: "void@razorpay.com",
        contact: "9191919191",
        name: "Razorpay Software",
      },
      theme: { color: "#5736b5" },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bill}>
        <Text style={styles.head}>Bill Summary</Text>
        <View style={styles.row}>
          <Text style={styles.subHead}>Subtotal</Text>
          <Text style={styles.subHead}>₹{props.subtotal}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.icon}>
            <Text style={styles.subHead2}>GST and other taxes </Text>
            <InfoIcon style={{ marginLeft: 8 }} />
          </View>
          <Text style={styles.subHead2}>₹{props.tax}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subHead2}>Packaging charges</Text>
          <Text style={styles.subHead2}>₹{props.packing}</Text>
        </View>
        <Lines />
        <View style={styles.row}>
          <Text style={styles.subHead}>Grand Total</Text>
          <Text style={styles.subHead}>₹{props.total}</Text>
        </View>
      </View>

      <View style={styles.pay}>
        <View style={styles.paytext}>
          <Text style={styles.text1}>Pay using</Text>
          <Image source={Upi} style={styles.upi} />
        </View>
        <TouchableOpacity style={styles.button} onPress={makePayment}>
          <Text style={styles.buttonText}>Grand total</Text>
          <Text style={styles.buttonText2}>₹ {props.total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  bill: {
    width: "91%",
    height: 214,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    justifyContent: "space-between",
    marginBottom: 24,
  },
  head: {
    color: "#6F6F6F",
    fontSize: 16,
    fontWeight: 500,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHead: {
    color: "#020314",
    fontSize: 16,
    fontWeight: 500,
  },
  subHead2: {
    color: "#020314",
    fontSize: 14,
    fontWeight: 400,
  },
  pay: {
    width: "100%",
    height: 94,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    paddingLeft: 32,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  // paytext: {
  //     flexDirection: 'column',
  //     justifyContent: 'space-between',
  // },
  text1: {
    color: "#6F6F6F",
    fontSize: 14,
    fontWeight: 400,
  },
  upi: {
    marginTop: 8,
    width: 50,
    height: 14,
  },
  button: {
    backgroundColor: "#5736B5",
    borderRadius: 16,
    width: "70%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: 400,
  },
  buttonText2: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 500,
  },
});

export default Bill;
