import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, YellowBox, AsyncStorage } from "react-native";
import AddTitle from "../../components/AddTitle/AddTitle";
import BackButton from "../../components/BackButton/BackButton";
import SetTimeBtn from "../../components/SetTimeBtn/SetTimeBtn";
import AlarmSettings from "../../components/AlarmSettings/AlarmSettings";
import SaveButton from "../../components/SaveButton/SaveButton";
import WriteMemo from "../../components/WriteMemo/WriteMemo";

const AddScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(new Date());
  const [nofActivate, setNofActivate] = useState(true);
  const [sleepActivate, setSleepActivate] = useState(true);
  const [memo, setMemo] = useState("");

  useEffect(() => {
    YellowBox.ignoreWarnings([
      "Animated: `useNativeDriver` was not specified.",
    ]);
  }, []);

  const dateTimePickerActivate = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const handleTimePicked = (time) => {
    setTime(new Date(time));
    dateTimePickerActivate();
  };

  const nofToggleActivate = useCallback(() => {
    setNofActivate(!nofActivate);
  }, [nofActivate]);

  const sleepToggleActivate = useCallback(() => {
    setSleepActivate(!sleepActivate);
  }, [sleepActivate]);

  const handleMemo = (text) => {
    setMemo(text);
  };

  const checkKeyValues = useCallback(async () => {
    try {
      await AsyncStorage.getAllKeys((err, keys) => {
        if (keys.length) {
          keys.map((value, index) => {
            if (keys.length === index + 1) {
              setAlarmData(parseInt(value) + 1);
            }
          });
        } else {
          console.log("data set : 0");
          setAlarmData(0);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [time, memo, nofActivate, sleepActivate]);

  const setAlarmData = useCallback(
    async (value) => {
      let alarmData = {
        time: time,
        memo: memo,
        notify: nofActivate,
        sleep: sleepActivate,
        activated: true,
      };
      let key = String(value);
      await AsyncStorage.setItem(key, JSON.stringify(alarmData), () => {
        console.log("data saved");
      });
      // await AsyncStorage.getAllKeys((err, keys) => {
      //   AsyncStorage.multiGet(keys, (err, datas) => {
      //     console.log(datas);
      //   });
      // });
      navigation.navigate("Main", { message: "refresh" });
    },
    [checkKeyValues]
  );

  return (
    <View style={style.container}>
      <BackButton navigation={navigation} />
      <AddTitle />
      <SetTimeBtn
        visible={visible}
        time={time}
        dateTimePickerActivate={dateTimePickerActivate}
        handleTimePicked={handleTimePicked}
      />
      <WriteMemo handleMemo={handleMemo} />
      <AlarmSettings
        nofActivate={nofActivate}
        sleepActivate={sleepActivate}
        nofToggleActivate={nofToggleActivate}
        sleepToggleActivate={sleepToggleActivate}
      />
      <SaveButton checkKeyValues={checkKeyValues} />
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
