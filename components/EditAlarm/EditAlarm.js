import React from "react";
import { StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const EditAlarm = ({ removeAllData }) => {
  return (
    <TouchableOpacity
      style={style.editView}
      activeOpacity={0.6}
      onPress={() => removeAllData()}
    >
      <Image
        style={style.edit}
        source={require("../../assets/images/edit.png")}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  editView: {
    width: "10%",
    height: "12%",
  },
  edit: {
    position: "absolute",
    left: screenWidth * 0.04,
    bottom: screenHeight * 0.01,
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
  },
});

export default EditAlarm;
