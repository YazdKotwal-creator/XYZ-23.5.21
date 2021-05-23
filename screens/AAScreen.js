import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class AAScreen extends Component {

  render() {
    return (
      <View style={styles.body}>

      <body>


        <div id="main">
          <br />
          <center>
            <Img src={require('../assets/xyz-logo-1.png')} />
            <h1>Artaxerxes’ Army</h1>
            <img src={require("../assets/AA.png")}/><br/>
              Artaxerxes’ Army is the backbone of XYZ. The team has worked tirelessly over the years to
              create new events and activities to ensure that the members enjoy every moment that they
              are a part of XYZ. Each individual works hard to bring about a paradigm change in the way the
              events are organized and executed. This committee also conducts workshops to Train The
              Trainers and develops the next generation of leaders to take the foundation forward.
          </center>
        </div>
      </body>
      </View>
    );
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
<body>

            <div id="mySidebar" class="sidebar">
              <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
              <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\HomeScreen.js"><Text style={{color:"#ED1C24">Home</font></a>
              <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\AboutUsOvLy.js"><Text style={{color:"#FFD503">About Us</font></a>
              <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\DonorScreen.js"><Text style={{color:"#0072BC">Donor</font></a>
              <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\MembersScreen.js"><Text style={{color:"#ED1C24">Members</font></a>
              <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\VolunteersScreen.js"><Text style={{color:"#FFD503">Volunteers</font></a>
              <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\SeniorsScreen.js"><Text style={{color:"#0072BC">Seniors</font></a>
              <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\ContactUs.js"><Text style={{color:"#ED1C24">Contact</font></a>
              <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\GameSelect.js"><Text style={{color:"#FFD503">Games</font></a>
              <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\PointsTable.js">Points Table</a>
              <a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\ThemesScreen.js">Themes</a>
            </div>
          </body> */