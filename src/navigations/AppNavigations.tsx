import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { MainScreen } from "../MainScreen";
import { PostScreen } from "../PostScreen";

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteKey: "Main",
  }
);

export const AppNavigation = createAppContainer(PostNavigator);
