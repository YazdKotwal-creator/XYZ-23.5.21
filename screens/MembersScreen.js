import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class MembersScreen extends Component {
  render() {
    return (
      <View style={styles.body}>
        <body>
        <center>
        <div id="main">
          <br />
          <center>
            <img src={require('../assets/xyz-logo-1.png')} />
            <h1>XYZ Registration Form</h1>
            <br />
      Payment Options<br />
            <br />
      Cheque:<br />
      In favour of XYZ FOUNDATION<br />
            <br />
      Bank transfer:<br />
      Account Name: XYZ FOUNDATION<br />
      Bank Name: KOTAK MAHINDRA BANK<br />
      Account No: 6911934878<br />
      IFSC Code: KKBK0000647<br />
      Branch: Mumbai – Churchgate<br />
      Account Type: Savings<br />
            <br />
      Please give your Transaction details to the volunteer after you have made the payment.<br />
          </center>
        </div>
        </center>
      </body>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    margin: "auto"
  }
})

/*
<div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
            <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\HomeScreen.js">
              <Text style={{color:"#ED1C24">Home</Font>
            </a>
            <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\AboutUsOvLy.js">
              <Text style={{color:"#FFD503">About Us</Font>
            </a>
            <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\DonorScreen.js">
              <Text style={{color:"#0072BC">Donor</Font>
            </a>
            <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\MembersScreen.js">
              <Text style={{color:"#ED1C24">Members</Font>
            </a>
            <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\VolunteersScreen.js">
              <Text style={{color:"#FFD503">Volunteers</Font>
            </a>
            <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\SeniorsScreen.js">
              <Text style={{color:"#0072BC">Seniors</Font>
            </a>
            <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\ContactUs.js">
              <Text style={{color:"#ED1C24">Contact</Font>
            </a>
            <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\GameSelect.js">
    <Text style={{color:"#FFD503">Games</Font>
    </a>
    <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\PointsTable.js">Points Table</a>
    <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\ThemesScreen.js">Themes</a>
  </div>
*/