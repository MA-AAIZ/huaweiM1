/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import {Colors} from "react-native/Libraries/NewAppScreen";

import Home from "./screens/Home";
import Check from "./screens/Check";
import Map from "./screens/Map";
import Push from "./screens/Push";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: "React Native HMS Kits",
      },
      path: "Home",
    },
    Check: {
      screen: Check,
      navigationOptions: {
        headerTitle: "HMS / GMS Check",
      },
      path: "Check",
    },
    Map: {
      screen: Map,
      navigationOptions: {
        headerTitle: "Huawei Map",
      },
      path: "Map",
    },
    Push: {
      screen: Push,
      navigationOptions: {
        headerTitle: "Huawei Push",
      },
      path: "Push",
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;