import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/account/SignInScreen";
import SignUpScreen from "../screens/account/SignUpScreen";
import SplashScreen from "../screens/account/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import MainTabsScreen from "./MainTabsScreen";
import DetailsScreen from "../screens/DetailsScreen";
import FavorisScreen from "../screens/FavorisScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ( ) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Splash" component={SplashScreen} />
    <RootStack.Screen name="SignIn" component={SignInScreen} />
    <RootStack.Screen name="SignUp" component={SignUpScreen} />
    <RootStack.Screen name="Home" component={HomeScreen} />
    <RootStack.Screen name="Tab" component={MainTabsScreen} />
    <RootStack.Screen name="Details" component={DetailsScreen} />
    <RootStack.Screen name="Favorites" component={FavorisScreen}  
/>

  </RootStack.Navigator>
);

export default RootStackScreen;
