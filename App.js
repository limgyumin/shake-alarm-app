import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EditAlarm from "./components/EditAlarm";
import Title from "./components/Title";
import AddAlarm from "./components/AddAlarm/AddAlarm";

const App = () => {
  return (
    <View style={styles.container}>
      <EditAlarm />
      <Title />
      <AddAlarm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
