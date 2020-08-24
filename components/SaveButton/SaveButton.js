import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const SaveButton = () => {
  return (
    <TouchableOpacity
      style={style.saveBtn}
      activeOpacity={0.7}
      onPress={() => {}}
    >
      <Text style={style.saveTitle}>저장하기</Text>
    </TouchableOpacity>
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
