import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class XIScreen extends Component {
  render() {
    return (
      <body>
        <div id="main">
          <br />
          <center>
            <img src={require("../assets/xyz-logo-1.png")} />
            <br />
            <br />
            <img src={require("../assets/XI.png")} />
            <br />
            XYZ’s Xerxes’ Invincibles is the alumni group of XYZ. After the members cross the age of
15 years, they can join the XI. This group is also known as XYZ Seniors. They have been
groomed over the last couple of years to plan and organize XYZ events and mentor the
current XYZs as well. The group will now even organize events for other youth and
members of the community to ensure bonding and a sense of belonging and pride.
          </center>
        </div>


      </body>
    );
  }
}