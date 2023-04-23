import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import NavBar from "../components/Navbar";
import ItemsAdded from "../components/itemsAddedCard";
import OrderCard from "../components/smallOrderCard";
import Lines from "../assets/horizontalLine.svg";
import Edit2 from "../assets/edit2.svg";
import Tick from "../assets/checkboxtick.svg";
import Arrow from "../assets/leftArrow.svg";
import { useNavigation } from "@react-navigation/native";
import Burger from "../assets/burger.png";
import BillSummary from "../components/billSummary";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const BillingPage = ({ route }) => {
  let totalPrice = 0;
  const ctx = useContext(ShopContext);
  ctx.itemList.forEach((item) => {
    totalPrice = totalPrice + parseInt(item.totalPrice);
  });
  const [checked, setChecked] = useState(false);
  const itemList = ctx.itemList;
  console.log(" ffsdf", itemList);
  const navigation = useNavigation();
  const handlePress = () => {
    setChecked(!checked);
  };
  const [total, setTotal] = useState(0);
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
        </View>

        <View style={styles.down}>
          <View style={styles.added}>
            <ItemsAdded list={itemList} />
          </View>

          <View style={styles.Head}>
            <Text style={styles.HeadText}>Add to your order</Text>
            <TouchableOpacity>
              <Text style={styles.LinkText}>View more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.add}>
            <ScrollView horizontal={true}>
              <View style={styles.options}>
                <OrderCard
                  bg={Burger}
                  veg={true}
                  name="Chicken Burger"
                  price="80"
                />
              </View>
              <View style={styles.options}>
                <OrderCard
                  bg={Burger}
                  veg={false}
                  name="Chicken Shawarma"
                  price="120"
                />
              </View>
              <View style={styles.options}>
                <OrderCard
                  bg={Burger}
                  veg={false}
                  name="Special Chicken Burger"
                  price="454"
                />
              </View>
            </ScrollView>
          </View>

          <View style={styles.instr}>
            <View style={styles.edit}>
              <View style={styles.input}>
                <TextInput
                  multiline={true}
                  style={styles.HeadText}
                  placeholder="Add cooking instructions "
                  placeholderTextColor="#6F6F6F"
                />
              </View>
              <Edit2 />
            </View>
            <Lines />
            <View style={styles.edit}>
              <Text style={styles.HeadText}>Pack my order</Text>
              <TouchableOpacity onPress={handlePress}>
                <View
                  style={[
                    { backgroundColor: checked ? "#5736B5" : "white" },
                    styles.checkbox,
                  ]}
                >
                  {checked ? <Tick /> : null}
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width: "100%" }}>
            <BillSummary
              subtotal={+totalPrice}
              tax="18.45"
              packing="10"
              total={+totalPrice + 18.45}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <NavBar active="Food" />
      </View>
    </View>
  );
};

export default BillingPage;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#EFEEFA",
    width: "100%",
    height: "100%",
  },
  main: {
    height: "100%",
    width: "100%",
  },
  up: {
    height: 120,
    width: "100%",
    padding: 33,
    paddingTop: 70,
  },
  down: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 64,
  },
  added: {
    width: "91%",
  },
  Head: {
    width: "87%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 32,
  },
  HeadText: {
    color: "#6F6F6F",
    fontSize: 14,
    fontWeight: 500,
  },
  LinkText: {
    color: "#5736B5",
    fontSize: 14,
    fontWeight: 500,
  },
  add: {
    width: "100%",
  },
  options: {
    padding: 16,
  },
  instr: {
    width: "91%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginTop: 12,
    marginBottom: 28,
    paddingTop: 4,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
  edit: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    paddingTop: 16,
  },
  input: {
    width: "87%",
  },
  checkbox: {
    borderRadius: 8,
    width: 24,
    height: 24,
    borderColor: "#5736B5",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 64,
  },
});
