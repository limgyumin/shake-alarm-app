import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const AddTitle = () => {
  return (
    <View style={style.textPlace}>
      <Text style={style.text1}>시간을 정해주세요</Text>
      <Text style={style.text2}>필요하면 메모도 괜찮아요</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textPlace: {
    marginTop: screenHeight * 0.02,
    marginLeft: screenWidth * 0.04,
  },
  text1: {
    fontSize: screenWidth * 0.06,
    fontWeight: "700",
    color: "#364C6E",
    marginBottom: screenHeight * 0.001,
  },
  text2: {
    fontSize: screenWidth * 0.05,
    fontWeight: "300",
    color: "#364C6E",
  },
});

export default AddTitle;
