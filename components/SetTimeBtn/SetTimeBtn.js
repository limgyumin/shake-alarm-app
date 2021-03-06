import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import NumberTicker from "../NumberTicker/NumberTicker";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const SetTimeBtn = ({
  visible,
  time,
  dateTimePickerActivate,
  handleTimePicked,
}) => {
  return (
    <>
      <View style={style.timePlace}>
        <View style={style.timeShowPlace}>
          <NumberTicker
            textStyle={style.timeShow}
            duration={1200}
            number={time.getHours()}
          />
        </View>
        <Text style={style.time}>시 </Text>
        <View style={style.timeShowPlace}>
          <NumberTicker
            textStyle={style.timeShow}
            duration={1200}
            number={time.getMinutes()}
          />
        </View>
        <Text style={style.time}>분</Text>
      </View>
      <View style={style.btnPlace}>
        <TouchableOpacity
          style={style.timeBtn}
          activeOpacity={0.7}
          onPress={() => dateTimePickerActivate()}
        >
          <Text style={style.timeText}>알람 시간 설정</Text>
          <Image
            style={style.arrow}
            source={require("../../assets/images/back-reverse.png")}
          />
        </TouchableOpacity>
      </View>
      <DateTimePicker
        confirmTextIOS={"확인"}
        cancelTextIOS={"취소"}
        headerTextIOS={"알람 시간 설정"}
        textColor={"#0066FF"}
        display={"spinner"}
        //date={time}
        mode={"time"}
        is24Hour={false}
        isVisible={visible}
        onConfirm={(time) => handleTimePicked(time)}
        onCancel={() => dateTimePickerActivate()}
      />
    </>
  );
};

const style = StyleSheet.create({
  timePlace: {
    width: "100%",
    height: screenHeight * 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: screenHeight * 0.03,
  },
  timeShowPlace: {
    marginBottom: screenHeight * 0.01,
  },
  timeShow: {
    color: "#0066FF",
    fontWeight: "700",
  },
  time: {
    color: "#0066FF",
    fontWeight: "700",
    fontSize: screenWidth * 0.08,
    margin: 1,
  },
  btnPlace: {
    width: "100%",
    alignItems: "center",
    marginTop: screenHeight * 0.01,
  },
  timeBtn: {
    width: screenWidth * 0.91,
    height: screenHeight * 0.062,
    backgroundColor: "#C8DEFF",
    borderRadius: screenWidth * 0.03,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    color: "#0066FF",
    fontWeight: "500",
    fontSize: screenWidth * 0.04,
    marginRight: screenWidth * 0.014,
  },
  arrow: {
    width: screenWidth * 0.044,
    height: screenWidth * 0.044,
  },
});

export default SetTimeBtn;
