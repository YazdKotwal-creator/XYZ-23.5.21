import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class SeniorsScreen extends Component {
  render() {
    return (
      <body>
        <div id="main">
          <br />
          <center>
            <img src={require("../assets/xyz-logo-1.png")}/>
            <br />
            <br />
              <img src={require("../assets/Senior.png")} width="243px" height="107px"/>
            <br />
              The XYZ Foundation has been
              working since 2014 with children of the community
              between the ages of 5 and 15 years.
              We are now creating a new group – XYZ Seniors
              which aims at creating a fun, interactive and a creative
              outlet for youth over the age of 15 years.
              This group will create a sense of belonging and pride
              within the community and also provide extra curricular
              activities with social awareness, personality development
              and life skills. There will be fun events, sports, games and
              other activities that are of the youth, by the youth and for
              the youth.
          </center>
        </div>
      </body>
    );
  }
}


/*
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\AboutUsOvLy.js"><Text style={{color:"#FFD503">About Us</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\DonorScreen.js"><Text style={{color:"#0072BC">Donor</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\MembersScreen.js"><Text style={{color:"#ED1C24">Members</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\VolunteersScreen.js"><Text style={{color:"#FFD503">Volunteers</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\SeniorsScreen.js"><Text style={{color:"#0072BC">Seniors</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\ContactUs.js"><Text style={{color:"#ED1C24">Contact</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\GameSelect.js"><Text style={{color:"#FFD503">Games</Font></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\PointsTable.js">Points Table</a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\ThemesScreen.js">Themes</a>


<div id="main">
  
  <br />
  <center>
    <Image src="../assets/xyz-logo-1.png" />
    <br />
    <br />
    <Image src="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\assets\Senior.png" width="243px"
      height="107px" />
    <br />
    The XYZ Foundation has been
    working since 2014 with children of the community
    between the ages of 5 and 15 years.
    We are now creating a new group – XYZ Seniors
    which aims at creating a fun, interactive and a creative
    outlet for youth over the age of 15 years.
    This group will create a sense of belonging and pride
    within the community and also provide extra curricular
    activities with social awareness, personality development
    and life skills. There will be fun events, sports, games and
    other activities that are of the youth, by the youth and for
    the youth.
  </center>
</div>
*/