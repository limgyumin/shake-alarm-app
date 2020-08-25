import React, { useEffect } from "react";
import Animated from "react-native-reanimated";
import { Text } from "react-native";

const getPosition = (value, height) => parseInt(value, 10) * height * -1;
const getTranslateStyle = (position) => {
  transform: [
    {
      translateY: position,
    },
  ];
};
const numberRange = Array(10)
  .fill()
  .map((x, i) => i);

const NumberTicker = (props) => {
  const animation = new Animated.Value(getPosition(props.value, props.height));
  const transformStyle = getTranslateStyle(animation);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: getPosition(props.value, props.height),
      duration: 500,
    }).start();
  }, [props.value, props.height]);

  return (
    <>
      <Animated.View style={transformStyle}>
        {numberRange.map((v) => {
          return <Text key={v}>{v}</Text>;
        })}
      </Animated.View>
    </>
  );
};

export default NumberTicker;
