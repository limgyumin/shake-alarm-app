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
