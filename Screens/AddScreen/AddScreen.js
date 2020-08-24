import React, { useEffect } from "react";
import { View, StyleSheet, YellowBox } from "react-native";
import AddTitle from "../../components/AddTitle/AddTitle";
import AddBack from "../../components/AddBack/AddBack";
import SetTimeBtn from "../../components/SetTimeBtn/SetTimeBtn";
import AlarmSettings from "../../components/AlarmSettings/AlarmSettings";
import SaveButton from "../../components/SaveButton/SaveButton";

const AddScreen = ({ navigation }) => {
  useEffect(() => {
    YellowBox.ignoreWarnings([
      "Animated: `useNativeDriver` was not specified.",
    ]);
  }, []);

  return (
    <View style={style.container}>
      <AddBack navigation={navigation} />
      <AddTitle />
      <SetTimeBtn />
      <AlarmSettings />
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
