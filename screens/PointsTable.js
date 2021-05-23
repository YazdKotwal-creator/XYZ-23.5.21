import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class PointsTableScreen extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div id="main">
          <body>
            <br />
            <center><img src={require("../assets/xyz-logo-1.png")} />
              <table>
                <caption><h2>Points Table</h2></caption>
                <tr bgcolor="#f1f1f1">
                  <th>Group</th>
                  <th>Points</th>
                </tr>
                <tr bgcolor="#ff8888">
                  <td>Behram's Battalion</td>
                  <td>3,235</td>
                </tr>
                <tr bgcolor="#f2d600">
                  <td>Cyrus’ Superstars</td>
                  <td>3,225</td>
                </tr>
                <tr bgcolor="#8888ff">
                  <td>Daraius’ Daredevils</td>
                  <td>3,310</td>
                </tr>
                <tr bgcolor="#00bb00">
                  <td>Jamshed's Giants</td>
                  <td>4,330</td>
                </tr>
                <tr bgcolor="#ffc0cb">
                  <td>Ketayun’s Conquerors</td>
                  <td>3,220</td>
                </tr>
                <tr bgcolor="#b19cd9">
                  <td>Noshirwan’s Knights</td>
                  <td>2,390</td>
                </tr>
                <tr bgcolor="#989898">
                  <td>Rustom’s Rockstars</td>
                  <td>3,250</td>
                </tr>
                <tr bgcolor="#ffa500">
                  <td>Tehmurasp’s Titans</td>
                  <td>4,140</td>
                </tr>
              </table>
            </center>
          </body>
        </div>
      </View>
    )
  }
}
