import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

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
    marginTop: screenHeight * 0.07,
    marginBottom: screenHeight * 0.014,
    marginLeft: screenWidth * 0.04,
    width: screenWidth * 0.09,
  },
  edit: {
    fontSize: screenWidth * 0.042,
    color: "#0066FF",
    fontWeight: "700",
  },
  header: {
    position: "absolute",
    width: "100%",
    height: screenHeight * 0.11,
    backgroundColor: "#FFFFFF",
  },
});

export default EditAlarm;
