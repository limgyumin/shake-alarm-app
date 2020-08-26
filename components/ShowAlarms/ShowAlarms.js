import React, { useEffect } from "react";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
import moment from "moment";

const ShowAlarms = ({ value, activated, memo, notify, sleep, time }) => {
  return (
    <View>
      <Text>{memo}</Text>
      <Text>{time}</Text>
    </View>
  );
};

export default ShowAlarms;
