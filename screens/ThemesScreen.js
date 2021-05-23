import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class ThemesScreen extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <center>
          <body>
            <div id="main">
              <br />
              <center>
                <img src={require("../assets/xyz-logo-1.png")} />
                <br />
                <h1></h1>
                <br />
                <img src={require("../assets/Capture.png")} />
                <br />
              </center>
            </div>
          </body>
        </center>
      </View>
    )
  }
}