import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Image,
  YellowBox,
} from "react-native";
import ToggleSwitch from "toggle-switch-react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const AlarmSettings = ({
  nofActivate,
  sleepActivate,
  nofToggleActivate,
  sleepToggleActivate,
}) => {
  return (
    <View style={{ marginTop: screenHeight * 0.07 }}>
      <TouchableHighlight
        style={style.btnPlace}
        underlayColor="#ECF3FE"
        onPress={() => {}}
      >
        <View style={style.settingBtn}>
          <Text style={style.title}>반복</Text>
          <View style={style.option}>
            <Text style={style.optionTitle}>안함</Text>
            <Image
              style={style.arrow}
              source={require("../../assets/images/back-gray.png")}
            />
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={style.btnPlace}
        underlayColor="#ECF3FE"
        onPress={() => {}}
      >
        <View style={style.settingBtn}>
          <Text style={style.title}>사운드</Text>
          <View style={style.option}>
            <Text style={style.optionTitle}>누구누구 - 어쩌고 저쩌고</Text>
            <Image
              style={style.arrow}
              source={require("../../assets/images/back-gray.png")}
            />
          </View>
        </View>
      </TouchableHighlight>
      <View style={style.btnPlace}>
        <View style={style.settingBtn}>
          <Text style={style.title}>다시 알림</Text>
          <View style={style.option}>
            <ToggleSwitch
              isOn={nofActivate}
              onColor="#0066FF"
              offColor="#B4C1D5"
              size={"medium"}
              onToggle={() => nofToggleActivate()}
            />
          </View>
        </View>
      </View>
      <View style={style.btnPlace2th}>
        <View style={style.settingBtn}>
          <Text style={style.sleepTitle}>잠 깨기</Text>
          <View style={style.option}>
            <ToggleSwitch
              isOn={sleepActivate}
              onColor="#0066FF"
              offColor="#B4C1D5"
              size={"medium"}
              onToggle={() => sleepToggleActivate()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  btnPlace: {
    backgroundColor: "#F8FAFE",
    width: "100%",
    height: screenHeight * 0.05,
    justifyContent: "center",
  },
  btnPlace2th: {
    marginTop: screenHeight * 0.04,
    backgroundColor: "#ECF3FE",
    width: "100%",
    height: screenHeight * 0.05,
    justifyContent: "center",
  },
  childPlace: {
    flexDirection: "row",
  },
  settingBtn: {
    width: "100%",
    height: screenHeight * 0.05,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: screenWidth * 0.04,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: screenWidth * 0.036,
    color: "#364C6E",
  },
  sleepTitle: {
    fontWeight: "500",
    fontSize: screenWidth * 0.036,
    color: "#0066FF",
  },
  optionTitle: {
    fontWeight: "500",
    fontSize: screenWidth * 0.036,
    color: "#B4C1D5",
  },
  arrow: {
    width: screenWidth * 0.036,
    height: screenWidth * 0.036,
  },
});

export default AlarmSettings;
