import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const MainTitle = () => {
  return (
    <View style={style.textView}>
      <Text style={style.text1}>그냥 마음놓고 푹 주무세요</Text>
      <Text style={style.text2}>제가 나중에 깨워드릴게요.</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textView: {
    marginTop: screenHeight * 0.008,
    marginLeft: screenWidth * 0.04,
  },
  text1: {
    fontSize: screenWidth * 0.075,
    fontWeight: "700",
    color: "#364C6E",
    marginBottom: screenHeight * 0.004,
  },
  text2: {
    fontSize: screenWidth * 0.06,
    fontWeight: "300",
    color: "#364C6E",
  },
});

export default MainTitle;
