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
      activeOpacity={0.6}
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
    width: "7%",
    height: "5%",
    marginTop: screenHeight * 0.05,
    marginLeft: screenWidth * 0.03,
  },
  back: {
    position: "absolute",
    bottom: screenHeight * 0.0005,
    width: screenWidth * 0.07,
    height: screenWidth * 0.07,
  },
});

export default AddBack;
