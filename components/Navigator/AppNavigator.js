import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainScreen from "../MainScreen/MainScreen";
import EditScreen from "../EditScreen/EditScreen";

const AppNavigator = createSwitchNavigator(
  {
    Main: { screen: MainScreen },
    Edit: { screen: EditScreen },
  },
  { initialRouteName: "Main" }
);

export default createAppContainer(AppNavigator);
