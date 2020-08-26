import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import moment from "moment";
import ToggleSwitch from "toggle-switch-react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const ShowAlarms = ({ value, activated, memo, notify, sleep, time }) => {
  const sliceText = (string, maxLen) => {
    if (string.length > maxLen) {
      return string.slice(0, maxLen) + "...";
    } else {
      return string;
    }
  };

  return (
    <View style={style.place}>
      <View style={style.alarmPlace}>
        <View style={style.textPlace}>
          <Text style={style.memo}>{memo ? sliceText(memo, 20) : "알람"}</Text>
          <Text style={style.time}>{moment(time).format("HH:mm")}</Text>
        </View>
        <View style={style.toggleBtn}>
          <ToggleSwitch
            isOn={true}
            onColor="#0066FF"
            offColor="#B4C1D5"
            size={"medium"}
            onToggle={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  place: {
    alignItems: "center",
  },
  alarmPlace: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F2F7FF",
    borderRadius: screenWidth * 0.05,
    width: screenWidth * 0.92,
    height: screenHeight * 0.12,
    paddingHorizontal: screenWidth * 0.04,
    marginBottom: screenHeight * 0.016,
  },
  textPlace: {
    justifyContent: "center",
  },
  toggleBtn: {
    justifyContent: "center",
  },
  memo: {
    color: "#768AA8",
    fontSize: screenWidth * 0.04,
    top: screenHeight * 0.004,
  },
  time: {
    color: "#768AA8",
    fontSize: screenWidth * 0.09,
    bottom: screenHeight * 0.004,
  },
});

export default ShowAlarms;
