import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MainScreen } from "../MainScreen";
import { PostScreen } from "../PostScreen";
import { THEME } from "../theme";
import React from "react";
import { BookedScreen } from "../BookedScreen";

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteKey: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    },
  }
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  {
    initialRouteKey: "Booked",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    },
  }
);

const BottomNavigator = createBottomTabNavigator(
  {
    Post: {
      screen: PostNavigator,
      navigationOptions: {
        tabBarIcon: (info) => (
          <Ionicons name="ios-albums" size={25} color={info.tintColor} />
        ),
      },
    },
    Booked: {
      screen: BookedNavigator,
      navigationOptions: {
        tabBarIcon: (info) => (
          <Ionicons name="ios-star" size={25} color={info.tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR,
    },
  }
);

export const AppNavigation = createAppContainer(BottomNavigator);
