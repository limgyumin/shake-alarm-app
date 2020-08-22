import React from "react";
import { StyleSheet, View } from "react-native";
import EditAlarm from "../EditAlarm/EditAlarm";
import Title from "../Title/Title";
import AddAlarm from "../AddAlarm/AddAlarm";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <EditAlarm />
      <Title />
      <AddAlarm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
