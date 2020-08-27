import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const WriteMemo = ({ handleMemo }) => {
  return (
    <View style={style.inputPlace}>
      <TextInput
        style={style.input}
        underlineColorAndroid="transparent"
        placeholder="메모 입력..."
        placeholderTextColor="#B4C1D5"
        autoCapitalize="none"
        onChangeText={(text) => handleMemo(text)}
      />
    </View>
  );
};

const style = StyleSheet.create({
  inputPlace: {
    alignItems: "center",
  },
  input: {
    marginTop: screenHeight * 0.026,
    backgroundColor: "#ECF3FE",
    color: "#0066FF",
    width: screenWidth * 0.91,
    height: screenHeight * 0.062,
    fontSize: screenWidth * 0.04,
    borderRadius: screenWidth * 0.03,
    paddingHorizontal: screenWidth * 0.04,
  },
});

export default WriteMemo;
