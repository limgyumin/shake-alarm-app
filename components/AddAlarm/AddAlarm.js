import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const AddAlarm = () => {
  return (
    <View style={style.addBtn2}>
      <View style={style.addBtn}>
        <Image
          style={style.add}
          source={require("../../assets/images/add.png")}
        />
        <Text style={style.addText}>새 알람 추가</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  addBtn2: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    zIndex: 10,
    bottom: 74,
  },
  addBtn: {
    width: screenWidth * 0.39,
    height: screenHeight * 0.052,
    backgroundColor: "#0066FF",
    borderRadius: screenWidth * 0.07,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#0066FF",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16.0,
    elevation: 20,
    zIndex: 10,
  },
  add: {
    color: "#FFFFFF",
    width: screenWidth * 0.045,
    height: screenWidth * 0.045,
  },
  addText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: screenWidth * 0.05,
    marginLeft: screenWidth * 0.014,
  },
});

export default AddAlarm;
