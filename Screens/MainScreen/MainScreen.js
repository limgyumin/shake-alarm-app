import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  YellowBox,
  AsyncStorage,
  ScrollView,
} from "react-native";
import EditAlarm from "../../components/EditAlarm/EditAlarm";
import MainTitle from "../../components/MainTitle/MainTitle";
import AddAlarm from "../../components/AddAlarm/AddAlarm";
import ShowAlarms from "../../components/ShowAlarms/ShowAlarms";

const MainScreen = ({ navigation }) => {
  const [alarmDatas, setAlarmDatas] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    YellowBox.ignoreWarnings([
      "Animated: `useNativeDriver` was not specified.",
      "Warning: componentWillReceiveProps has been renamed",
      "Warning: componentWillMount has been renamed",
    ]);
  }, []);

  useEffect(() => {
    getAlarmData();
  }, [navigation.state.params, refresh]);

  const removeAllData = () => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiRemove(keys, (err) => {
        console.log("data all removed");
        setRefresh(refresh + 1);
      });
    });
  };

  const deleteSelectedData = async (value) => {
    await AsyncStorage.removeItem(value, (err) => {
      console.log("selected data removed");
      setRefresh(refresh + 1);
    });
  };

  const getAlarmData = async () => {
    await AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, datas) => {
        datas.map((data, i) => {
          if (data[1]) {
            const parsedData = JSON.parse(data[1]);
            parsedData.key = data[0];
            datas[i] = parsedData;
          }
        });

        datas = datas.sort((a, b) => {
          const aTime = new Date(a.time).getTime();
          const bTime = new Date(b.time).getTime();
          if (aTime > bTime) {
            return 1;
          }
          if (aTime < bTime) {
            return -1;
          }
          return 0;
        });

        const check = datas[0];
        if (check && check[1] !== null) {
          setAlarmDatas(datas);
        } else {
          setAlarmDatas([]);
        }
        console.log(datas);
      });
    });
  };

  return (
    <View style={styles.container}>
      <EditAlarm removeAllData={removeAllData} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainTitle />
        {alarmDatas.map((data, index) => (
          <ShowAlarms
            key={index}
            value={data.key}
            activated={data.activated}
            memo={data.memo}
            notify={data.notify}
            sleep={data.sleep}
            time={data.time}
            deleteSelectedData={deleteSelectedData}
          />
        ))}
      </ScrollView>
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
