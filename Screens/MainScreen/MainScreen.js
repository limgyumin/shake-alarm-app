import React, { useState, useEffect, Fragment } from "react";
import {
  StyleSheet,
  View,
  YellowBox,
  AsyncStorage,
  ScrollView,
  Dimensions,
} from "react-native";
import EditAlarm from "../../components/EditAlarm/EditAlarm";
import MainTitle from "../../components/MainTitle/MainTitle";
import AddAlarm from "../../components/AddAlarm/AddAlarm";
import ShowAlarms from "../../components/ShowAlarms/ShowAlarms";
import AlarmNotification from "../../components/AlarmNotification/AlarmNotification";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

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
    processAlarmData();
  }, [navigation.state.params, refresh]);

  const removeAllData = async () => {
    if (alarmDatas.length) {
      try {
        await AsyncStorage.getAllKeys((err, keys) => {
          AsyncStorage.multiRemove(keys, (err) => {
            console.log("data all removed");
            setRefresh(refresh + 1);
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeSelectedData = async (value) => {
    try {
      await AsyncStorage.removeItem(value, () => {
        console.log("selected data removed");
        setRefresh(refresh + 1);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const sortDatas = (datas) => {
    datas.sort((a, b) => {
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

    return datas;
  };

  const checkDatasNull = (datas) => {
    const check = datas[0];
    if (check && check[1] !== null) {
      setAlarmDatas(datas);
    } else {
      setAlarmDatas([]);
    }
  };

  const processAlarmData = async () => {
    try {
      await AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, datas) => {
          datas.map((data, i) => {
            if (data[1]) {
              const parsedData = JSON.parse(data[1]);
              parsedData.key = data[0];
              datas[i] = parsedData;
            }
          });
          datas = sortDatas(datas);
          checkDatasNull(datas);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnPlace}>
        {alarmDatas.length ? (
          <EditAlarm removeAllData={removeAllData} />
        ) : (
          <View />
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainTitle />
        {alarmDatas.map((data, index) => (
          <Fragment key={index}>
            <ShowAlarms
              value={data.key}
              activated={data.activated}
              memo={data.memo}
              notify={data.notify}
              sleep={data.sleep}
              time={data.time}
              removeSelectedData={removeSelectedData}
            />
            <AlarmNotification
              value={data.key}
              activated={data.activated}
              notify={data.notify}
              sleep={data.sleep}
              time={data.time}
            />
          </Fragment>
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
  btnPlace: {
    width: "100%",
    height: screenHeight * 0.1,
  },
});

export default MainScreen;
