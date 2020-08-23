import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const SetTimeBtn = () => {
  const [visible, setVisible] = useState(false);
  const showDateTimePicker = () => {
    setVisible(true);
  };
  const hideDateTimePicker = () => {
    setVisible(false);
  };
  const handleTimePicked = (time) => {
    console.log(`${moment(time).format("HH시 mm분")}`);
    hideDateTimePicker();
  };

  return (
    <>
      <View style={style.btnPlace}>
        <TouchableOpacity
          style={style.timeBtn}
          activeOpacity={0.8}
          onPress={() => showDateTimePicker()}
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
        timePickerModeAndroid={"spinner"}
        mode={"time"}
        is24Hour={false}
        isVisible={visible}
        onConfirm={(time) => handleTimePicked(time)}
        onCancel={() => hideDateTimePicker()}
      />
    </>
  );
};

const style = StyleSheet.create({
  btnPlace: {
    width: "100%",
    alignItems: "center",
    marginTop: screenHeight * 0.094,
  },
  timeBtn: {
    width: screenWidth * 0.908,
    height: screenHeight * 0.062,
    backgroundColor: "#C8DEFF",
    borderRadius: screenWidth * 0.036,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    color: "#0066FF",
    fontWeight: "500",
    fontSize: screenWidth * 0.046,
    marginRight: screenWidth * 0.014,
  },
  arrow: {
    color: "#0066FF",
    width: screenWidth * 0.045,
    height: screenWidth * 0.045,
  },
});

export default SetTimeBtn;
