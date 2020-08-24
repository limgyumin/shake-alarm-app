import React, { useEffect } from "react";
import { StyleSheet, View, YellowBox } from "react-native";
import EditAlarm from "../../components/EditAlarm/EditAlarm";
import MainTitle from "../../components/MainTitle/MainTitle";
import AddAlarm from "../../components/AddAlarm/AddAlarm";

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
