import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking} from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class ContactUsScreen extends Component {
  send() {
    alert("Your message has been received by XYZ Foundation\nOne of our volunteers will contact you as soon as possible.")
  }
  render() {

    return (
      <View style={{alignItems : 'center', justifyContent: 'center'}}>
        <center>
      <body>

        <div id="main">
    <center>
      <br />
      <img src={require("../assets/xyz-logo-1.png")} />
      <br />
      <h1>Contact Us</h1>
      <br />
      <br />
      Contact:<br />
      XYZ Foundation, Thakker Building, 1st floor,<br />
      Champsi Bhimji Road, Mazgaon, Mumbai,<br />
      Maharashtra, India 400010<br />
      <br />
      +919820683398<br />
      +919821349283<br />
      <br />
      info@xyzfoundation.net
    </center>
  </div>

      </body>
      </center>

      </View>
    );
  }
}
