import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const EditAlarm = () => {
  return (
    <View style={style.editView}>
      <Image
        style={style.edit}
        source={require("../../assets/images/edit.png")}
      />
    </View>
  );
};

const style = StyleSheet.create({
  editView: {
    width: "100%",
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
