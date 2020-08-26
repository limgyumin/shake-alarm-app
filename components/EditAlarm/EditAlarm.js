import React from "react";
import { StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const EditAlarm = ({ removeAllData }) => {
  return (
    <TouchableOpacity
      style={style.editView}
      activeOpacity={0.6}
      onPress={() => removeAllData()}
    >
      <Text style={style.edit}>편집</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  editView: {
    width: "9%",
    height: "5%",
    marginTop: screenHeight * 0.06,
    marginLeft: screenWidth * 0.04,
  },
  edit: {
    position: "absolute",
    bottom: screenHeight * 0.0005,
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
    fontSize: screenWidth * 0.042,
    color: "#0066FF",
    fontWeight: "700",
  },
});

export default EditAlarm;
