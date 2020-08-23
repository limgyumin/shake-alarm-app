import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const AddBack = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={style.backView}
      activeOpacity={0.8}
      onPress={() => navigation.pop()}
    >
      <Image
        style={style.back}
        source={require("../../assets/images/back.png")}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  backView: {
    width: "100%",
    height: "12%",
  },
  back: {
    position: "absolute",
    left: screenWidth * 0.033,
    bottom: screenHeight * 0.01,
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
  },
});

export default AddBack;
