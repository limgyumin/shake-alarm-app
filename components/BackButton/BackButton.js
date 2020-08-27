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
    position: "absolute",
    width: screenWidth * 0.06,
    marginTop: screenHeight * 0.06,
    marginLeft: screenWidth * 0.03,
  },
  back: {
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
  },
});

export default AddBack;
