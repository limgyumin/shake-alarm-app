import React from "react";
import { Text, TouchableHighlight, StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const SaveButton = ({ checkKeyValues }) => {
  return (
    <TouchableHighlight
      style={style.saveBtn}
      underlayColor="#3083FF"
      onPress={() => checkKeyValues()}
    >
      <Text style={style.saveTitle}>저장하기</Text>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  saveBtn: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: screenHeight * 0.066,
    backgroundColor: "#0066FF",
    justifyContent: "center",
    alignItems: "center",
  },
  saveTitle: {
    fontWeight: "500",
    fontSize: screenWidth * 0.036,
    color: "#FFFFFF",
  },
});

export default SaveButton;
