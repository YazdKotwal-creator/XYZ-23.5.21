import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class GameSelectScreen extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }} >
        <center>
          <body>
            <div id="main">

              <br />
              <center><img src={require("../assets/xyz-logo-1.png")} />
                <br />
                <h1>Game Selection</h1>
                <a href="https://studio.code.org/projects/gamelab/VnDTl7DUBMN9yY5EMEruI6TTakckPaT5bpcrS8TfLCE"><Text style={{ color: "#ED1C24" }}>Robo-run</Text></a><br /><br />
                <a href="#"><Text style={{ color: "#FFD503" }}>Coming Soon</Text></a><br /><br />
                <a href="#"><Text style={{ color: "#0072BC" }}>Coming Soon</Text></a><br /><br />

              </center>
            </div>


          </body>
        </center>
      </View>
    );
  }
}
