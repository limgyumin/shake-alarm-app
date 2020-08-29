import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View, Dimensions, AsyncStorage } from "react-native";
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

  const saveActive = useCallback(
    async (value) => {
      setActive(!active);
      await AsyncStorage.mergeItem(
        value,
        JSON.stringify({ activated: !active })
        // () => {
        //   AsyncStorage.getItem(value, (err, result) => {
        //     console.log(`${value}${result}`);
        //   });
        // }
      );
    },
    [active]
  );

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
    <Swipeout
      right={swipeButton}
      autoClose={true}
      style={active ? style.place : style.placeDis}
    >
      <View style={style.alarmPlace}>
        <View style={style.dataPlace}>
          <Text style={active ? style.memo : style.memoDis}>
            {memo ? sliceText(memo, 16) : "알람"}
          </Text>
          <Text style={active ? style.time : style.timeDis}>
            {moment(time).format("HH:mm")}
          </Text>
        </View>
        <View style={style.btnPlace}>
          <ToggleSwitch
            isOn={active}
            onColor="#0066FF"
            offColor="#B4C1D5"
            size={"medium"}
            onToggle={() => saveActive(value)}
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
  placeDis: {
    width: "100%",
    backgroundColor: "#F9FBFF",
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
  memoDis: {
    color: "#C9CED5",
    fontSize: screenWidth * 0.04,
  },
  time: {
    color: "#768AA8",
    fontSize: screenWidth * 0.09,
  },
  timeDis: {
    color: "#C9CED5",
    fontSize: screenWidth * 0.09,
  },
});

export default ShowAlarms;
