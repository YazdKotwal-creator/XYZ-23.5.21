import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";

export default class PPScreen extends Component {
  render() {
    return (
      <View style={styles.body}>

      <body>
        <div id="main">
          <br />
          <center>
            <img src={require("../assets/xyz-logo-1.png")} />
            <br />
            <h1>Pourushap's Platoon</h1>
            <br />
            <img src={require("../assets/PP.png")} />
            <br />
              XYZ’s Advisory Council is also known as Pourushasp’s Platoon. It comprises of
              luminaries of the community who take time out of their busy schedule to meet and
              discuss the activities of XYZ and the way forward. Each individual who is a part of
              the council gives their own expertise in the fields or religion, philanthropy, law,
              education, motivation, health, finance and community development.
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
    <h1>Pourushap's Platoon</h1>
    <br />
    <Image src="../assets/PP.png">
    <br />
    XYZ’s Advisory Council is also known as Pourushasp’s Platoon. It comprises of
    luminaries of the community who take time out of their busy schedule to meet and
    discuss the activities of XYZ and the way forward. Each individual who is a part of
    the council gives their own expertise in the fields or religion, philanthropy, law,
    education, motivation, health, finance and community development.
  </center>
</div>
*/