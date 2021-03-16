import { createStackNavigator } from "react-navigation-stack";
import { stackNavigatorConfig } from "../configs/navigationConfig";

import Home from "../components/Home";
import User from "../components/User";
import WithRedux from '../components/WithRedux';

export const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },

    WithRedux:{
      screen:WithRedux
    },
    User:{
      screen:User
    }
    
  },
  {
    ...stackNavigatorConfig,
    initialRouteName: "Home"
  }
);

