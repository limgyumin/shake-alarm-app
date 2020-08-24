import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const AddAlarm = ({ navigation }) => {
  return (
    <View style={style.btnPlace}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={style.addBtn}
        onPress={() => navigation.navigate("Add")}
      >
        <Image
          style={style.add}
          source={require("../../assets/images/add.png")}
        />
        <Text style={style.addText}>새 알람 추가</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  btnPlace: {
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
    borderRadius: screenWidth * 0.06,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  add: {
    width: screenWidth * 0.036,
    height: screenWidth * 0.036,
  },
  addText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: screenWidth * 0.04,
    marginLeft: screenWidth * 0.014,
  },
});

export default AddAlarm;
