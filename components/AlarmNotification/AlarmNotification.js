import React, { useEffect } from "react";
import { View } from "react-native";
import ReactNativeAN from "react-native-alarm-notification";

const AlarmNotification = ({ value, activated, notify, sleep, time }) => {
  const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 1000));
  const alarmNotifData = {
    title: "My Notification Title",
    message: "My Notification Message",
    channel: "my_channel_id",
    small_icon: "ic_launcher",
    data: { foo: "bar" },
  };

  useEffect(() => {
    scheduleAlarm();
  }, []);

  const scheduleAlarm = async () => {
    console.log(time);
    console.log(fireDate);
    console.log(alarmNotifData);
  };
  return <View></View>;
};

export default AlarmNotification;
