import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import Arrow from "../assets/arrow.svg";
import { useNavigation } from "@react-navigation/native";

const smallPopUp = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{props.text} added</Text>
          <Text style={styles.text}>₹{props.price}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BillingPage");
            }}
          >
            <Arrow />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    backgroundColor: "#FFFFFF",
    height: 102,
    width: "100%",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#5736B5",
    borderRadius: 16,
    justifyContent: "space-between",
    height: 62,
    width: "90%",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    color: "#FFFFFF",
  },
});

export default smallPopUp;
