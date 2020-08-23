import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../../Screens/MainScreen/MainScreen";
import AddScreen from "../../Screens/AddScreen/AddScreen";

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Add: {
      screen: AddScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: null,
    },
    initialRouteName: "Main",
  }
);

export default createAppContainer(AppNavigator);
