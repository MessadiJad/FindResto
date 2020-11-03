import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon, Button } from "react-native-elements";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import auth from '@react-native-firebase/auth';

const HomeStack = createStackNavigator();
const FavorisStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabsScreen = () => (


  <Tab.Navigator
    initialRouteName="Home"
    activeColor="white"
    inactiveColor="#C0C0C0"
    barStyle={{ backgroundColor: '#283D78' }}

  >
    <Tab.Screen

      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <Icon name="account" type="material-community" color={color} size={26} />

        ),
      }}
    />
  </Tab.Navigator>
);
export default MainTabsScreen;
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#283D78",
      },
      headerTintColor: "#ffff",
      headerTitleStyle: {
        fontWeight: "bold",
      }
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
        headerLeft: () => (
          <Button
            buttonStyle={{ backgroundColor: "#283D78" }}
            icon={{
              name: "logout-variant",
              type: "material-community",
              color: "#fff",
            }}
            size={35}
            onPress={() => navigation.popToTop() && auth()
              .signOut()
            }

          />
        ),
        headerRight: () => (
          <Button
            buttonStyle={{ backgroundColor: "#283D78" }}
            icon={{
              name: "star",
              type: "material-community",
              color: "#fff",
            }}
            size={35}
            onPress={() => navigation.navigate("Favorites")
            }

          />
        ),

      }}
    />
  </HomeStack.Navigator>
);


const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#283D78",
      },
      headerTintColor: "#ffff",
      headerTitleStyle: {
        fontWeight: "bold",
      }
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Button
            buttonStyle={{ backgroundColor: "#283D78" }}
            icon={{
              name: "logout-variant",
              type: "material-community",
              color: "#fff",
            }}
            size={35}
            onPress={() => navigation.popToTop() && auth()
              .signOut()
            } />
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff"

  }
});
