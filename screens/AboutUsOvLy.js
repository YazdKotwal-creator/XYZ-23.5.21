import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack"
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

import AAScreen from "./AAScreen"
import PPScreen from "./PPScreen"
import LogoAUScreen from "./LogoAU"
/*import GroupOvly from "./Groups/GroupOvly"*/

/*
const Stack = createDrawerNavigator(
  {
    "About Us": {
      screen: LogoAUScreen
    },
    " Group Overlay": {
      screen: GroupOvly
    } ,
    "Pourushasp's Platoon": {
      screen: PPScreen
    },
    "Artaxerxes' Army ": {
      screen: AAScreen
    }
  }
);*/

const stack = createStackNavigator({
  "About us": {
    screen: LogoAUScreen
  }
}
)

export default class AboutUsOvLyScreen extends Component {
  render() {
    return (
      <View style={styles.body}>
        <div id="main">
          <br />
          <center>
            <img src={require("../assets/xyz-logo-1.png")} />
            <br />
            <h1></h1>
            <a href="#">
              <Text style={{ color: "#ED1C24" }}>About Us</Text>
            </a><br /><br />
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Logo")}>
              <Text style={{ color: "#FFD503" }}>Logo</Text>
            </TouchableOpacity><br /><br />
            <TouchableOpacity onPress={() => this.props.navigation.navigate("GroupOverlay")}>
              <Text style={{ color: "#000000" }}>Groups</Text>
              </TouchableOpacity>
            <br /><br />
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Pourushap's Platoon")}>
              <Text style={{ color: "#739FF6" }}>Pourushasp's Platoon</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Artaxerxes' Army")}>
              <Text style={{ color: "#739FF6" }}>Artaxerxes' Army</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Xerxes’ Invincibles")}>
              <Text style={{ color: "#739FF6" }}>Xerxes’ Invincibles</Text>
            </TouchableOpacity>
          </center>
        </div>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    margin: "auto"
  },

  styleImage: {
    flex: 0,
    padding: 0
  }
})