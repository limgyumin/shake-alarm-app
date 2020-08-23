import React from "react";
import { StyleSheet, View } from "react-native";
import EditAlarm from "../../components/EditAlarm/EditAlarm";
import MainTitle from "../../components/MainTitle/MainTitle";
import AddAlarm from "../../components/AddAlarm/AddAlarm";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <EditAlarm />
      <MainTitle />
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
