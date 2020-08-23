import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectTime from "../../components/SelectTime/SelectTime";
import AddTitle from "../../components/AddTitle/AddTitle";
import AddBack from "../../components/AddBack/AddBack";
import SetTimeBtn from "../../components/SetTimeBtn/SetTimeBtn";

const AddScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <AddBack navigation={navigation} />
      <AddTitle />
      <SetTimeBtn />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddScreen;
