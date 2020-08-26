import React, { useState, useEffect } from "react";
import { StyleSheet, View, YellowBox, AsyncStorage } from "react-native";
import EditAlarm from "../../components/EditAlarm/EditAlarm";
import MainTitle from "../../components/MainTitle/MainTitle";
import AddAlarm from "../../components/AddAlarm/AddAlarm";
import ShowAlarms from "../../components/ShowAlarms/ShowAlarms";

const MainScreen = ({ navigation }) => {
  useEffect(() => {
    YellowBox.ignoreWarnings([
      "Animated: `useNativeDriver` was not specified.",
    ]);
  }, []);

  const getAlarmData = async () => {
    await AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, datas) => {
        datas.map((data, i) => {
          const parsedData = JSON.parse(data[1]);
          parsedData.key = data[0];
          datas[i] = parsedData;
        });
        datas = datas.sort((a, b) => {
          const aTime = new Date(a.time).getTime();
          const bTime = new Date(b.time).getTime();

          if (aTime > bTime) {
            return 1;
          }
          if (aTime < bTime) {
            return -1;
          }
          return 0;
        });
        console.log(datas);
      });
    });
  };

  return (
    <View style={styles.container}>
      <EditAlarm />
      <MainTitle />
      <ShowAlarms />
      <AddAlarm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default MainScreen;
