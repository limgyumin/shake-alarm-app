import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import moment from "moment";
import ToggleSwitch from "toggle-switch-react-native";
import Swipeout from "react-native-swipeout";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const ShowAlarms = ({
  value,
  activated,
  memo,
  notify,
  sleep,
  time,
  removeSelectedData,
}) => {
  const [active, setActive] = useState(activated);

  const sliceText = (string, maxLen) => {
    if (string.length > maxLen) {
      return string.slice(0, maxLen) + "...";
    } else {
      return string;
    }
  };

  let swipeButton = [
    {
      text: "삭제",
      color: "#FFFFFF",
      backgroundColor: "#FF5454",
      onPress: () => {
        removeSelectedData(value);
      },
    },
  ];

  return (
    <Swipeout right={swipeButton} autoClose={true} style={style.place}>
      <View style={style.alarmPlace}>
        <View style={style.dataPlace}>
          <Text style={style.memo}>{memo ? sliceText(memo, 16) : "알람"}</Text>
          <Text style={style.time}>{moment(time).format("HH:mm")}</Text>
        </View>
        <View style={style.btnPlace}>
          <ToggleSwitch
            isOn={active}
            onColor="#0066FF"
            offColor="#B4C1D5"
            size={"medium"}
            onToggle={() => {
              setActive(!active);
            }}
          />
        </View>
      </View>
    </Swipeout>
  );
};

const style = StyleSheet.create({
  place: {
    width: "100%",
    backgroundColor: "#F2F7FF",
  },
  alarmPlace: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: screenHeight * 0.12,
    paddingHorizontal: screenWidth * 0.04,
  },
  dataPlace: {
    justifyContent: "center",
  },
  btnPlace: {
    justifyContent: "center",
  },
  memo: {
    color: "#768AA8",
    fontSize: screenWidth * 0.04,
  },
  time: {
    color: "#768AA8",
    fontSize: screenWidth * 0.09,
  },
});

export default ShowAlarms;
