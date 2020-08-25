import React, { useEffect, useState } from "react";
import { View, StyleSheet, YellowBox, AsyncStorage } from "react-native";
import AddTitle from "../../components/AddTitle/AddTitle";
import BackButton from "../../components/BackButton/BackButton";
import SetTimeBtn from "../../components/SetTimeBtn/SetTimeBtn";
import AlarmSettings from "../../components/AlarmSettings/AlarmSettings";
import SaveButton from "../../components/SaveButton/SaveButton";

const AddScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(new Date());
  const [nofActivate, setNofActivate] = useState(true);
  const [sleepActivate, setSleepActivate] = useState(true);

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

  const nofToggleActivate = () => {
    if (nofActivate === true) {
      setNofActivate(false);
    } else {
      setNofActivate(true);
    }
  };

  const sleepToggleActivate = () => {
    if (sleepActivate === true) {
      setSleepActivate(false);
    } else {
      setSleepActivate(true);
    }
  };

  let alarmData = {};

  return (
    <View style={style.container}>
      <BackButton navigation={navigation} />
      <AddTitle />
      <SetTimeBtn
        visible={visible}
        time={time}
        showDateTimePicker={showDateTimePicker}
        hideDateTimePicker={hideDateTimePicker}
        handleTimePicked={handleTimePicked}
      />
      <AlarmSettings
        nofActivate={nofActivate}
        sleepActivate={sleepActivate}
        nofToggleActivate={nofToggleActivate}
        sleepToggleActivate={sleepToggleActivate}
      />
      <SaveButton />
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
