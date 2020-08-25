import React, { useEffect, useState } from "react";
import { View, StyleSheet, YellowBox } from "react-native";
import AddTitle from "../../components/AddTitle/AddTitle";
import AddBack from "../../components/BackButton/BackButton";
import SetTimeBtn from "../../components/SetTimeBtn/SetTimeBtn";
import AlarmSettings from "../../components/AlarmSettings/AlarmSettings";
import SaveButton from "../../components/SaveButton/SaveButton";
import { createAlarm } from "react-native-simple-alarm";

const AddScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    YellowBox.ignoreWarnings([
      "Animated: `useNativeDriver` was not specified.",
    ]);
  }, []);

  const showDateTimePicker = () => {
    setVisible(true);
  };

  const hideDateTimePicker = () => {
    setVisible(false);
  };

  const handleTimePicked = (time) => {
    setTime(new Date(time));
    hideDateTimePicker();
  };

  const createNewAlarm = async () => {
    try {
      await createAlarm({
        active: true,
        date: moment(time).format("YYYY-MM-DD"),
        message: "message",
        snooze: 1,
      });
    } catch (e) {}
  };

  return (
    <View style={style.container}>
      <AddBack navigation={navigation} />
      <AddTitle />
      <SetTimeBtn
        visible={visible}
        time={time}
        showDateTimePicker={showDateTimePicker}
        hideDateTimePicker={hideDateTimePicker}
        handleTimePicked={handleTimePicked}
      />
      <AlarmSettings />
      <SaveButton createNewAlarm={createNewAlarm} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default AddScreen;
