import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class LogoAUScreen extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <div id="main">
        <center>
          <br />
          <img src={require("../assets/xyz-logo-1.png")} />
            <br />
            <Text style={{color:"#FFD503"}}>3 Tenets</Text>
            <br /><br />
            <Text style={{color: "#ED1C24"}}>humata<br />GOOD THOUGHTS</Text>
            <br /><br />
            <Text style={{color: "#FFD503"}} >hukhta<br />GOOD WORDS</Text>
            <br /><br />
            <Text style={{color: "#0072BC"}}>hvarshta<br />GOOD DEEDS</Text>
            <br />
            <br />
            <br />
            3<Text style={{color: "#ED1C24"}}>SHAPES</Text><br /><Text style={{color: "#FFD503"}}>COLOURS</Text><Text style={{color: "#0072BC"}}>LETTERS</Text><br/>
              <img src={require('../assets/xyz-logo.png')} width="298" height="106"/>
          </center>
        </div>
      </View>
    );
  }
}
