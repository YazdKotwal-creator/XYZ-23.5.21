/*
Red-#ED1C24
Yellow- #FFD503
Blue-#0072BC
*/

import React from 'react';
//import { StyleSheet, Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Image } from 'react-native';

import  createAppContainer from 'react-navigation';
import  createDrawerNavigator from 'react-navigation-drawer';
import  NavigationContainer  from '@react-navigation/native';
import  AppRegistry  from 'react-native';

import HomeScreen from "./screens/HomeScreen";
import MembersScreen from "./screens/MembersScreen";
import SeniorsScreen from "./screens/SeniorsScreen";
import VolunteersScreen from "./screens/VolunteersScreen";
import PPScreen from "./screens/PPScreen";
import AAScreen from "./screens/AAScreen";
import XIScreen from "./screens/XIScreen";
import AboutUsOvLyScreen from "./screens/AboutUsOvLy";
import LogoAUScreen from "./screens/LogoAU";
import PointsTableScreen from "./screens/PointsTable";
import ThemesScreen from "./screens/ThemesScreen";
import ContactUsScreen from "./screens/ContactUs";
import GroupsScreens from "./screens/GroupsScreens";
import GameSelectScreen from "./screens/GameSelect";


const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#ED1C24", fontWeight: "bold" }}><br />    Home<br /> </Text>
      )
    }
  },
  Members: {
    screen: MembersScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#FFD503", fontWeight: "bold" }}><br />    Members<br /> </Text>
      )
    }
  },
  Volunteers: {
    screen: VolunteersScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#0072BC", fontWeight: "bold" }}><br />    Volunteers<br /> </Text>
      )
    }
  },
  Seniors: {
    screen: SeniorsScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#FFD503", fontWeight: "bold" }}><br />    Seniors<br /> </Text>
      )
    }
  },
  About_Us: {
    screen: AboutUsOvLyScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#0072BC", fontWeight: "bold" }}><br />    About Us<br /> </Text>
      )
    }
  },
  Contact_Us: {
    screen: ContactUsScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#ED1C24", fontWeight: "bold" }}><br />    Contact Us<br /> </Text>
      )
    }
  },
  Games: {
    screen: GameSelectScreen,
    navigationOptions: {
      drawerLabel: () => (
        <Text style={{ color: "#FFD503", fontWeight: "bold" }}><br />    Games<br /> </Text>
      )
    }
  },
  Points_Table: {
    screen: PointsTableScreen
  },
  Themes: {
    screen: ThemesScreen
  },
  Logo: {
    screen: LogoAUScreen,
    navigationOptions: {
      title: ""
    }
  },
  Groups: {
    screen: GroupsScreens,
    navigationOptions: {
      title: ""
    }
  },
  Pourushaps_Platoon: {
    screen: PPScreen,
    navigationOptions: {
      title: ""
    }
  },
  Artaxerxes_Army: {
    screen: AAScreen,
    navigationOptions: {
      title: ""
    }
  },
  Xerxes_Invincibles: {
    screen: XIScreen,
    navigationOptions: {
      title: ""
    }
  },
},
  /*{
    //drawerType: "slide",
    contentOptions: {
      activeTintColor: "#fefefe",
    }
  }*/
);

export default function App() {
  return (

    <AppContainer>
      <NavigationContainer/>
    </AppContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Avenir'
  },
});

const AppContainer = createAppContainer(DrawerNavigator)

AppRegistry.registerComponent('App', () => AppContainer)