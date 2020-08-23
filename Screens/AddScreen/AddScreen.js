import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectTime from "../../components/SelectTime/SelectTime";
import AddTitle from "../../components/AddTitle/AddTitle";
import AddBack from "../../components/AddBack/AddBack";

const AddScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AddBack navigation={navigation} />
      <AddTitle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddScreen;
