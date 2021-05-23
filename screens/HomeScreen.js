import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, Pressable, Body } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.Body}>
        <Body>
          <View id="main">
            <center>
              <img src={require('../assets/xyz-logo-1.png')} />
              <br />
              <br />
              <View style={{ flexDirection: "row" }} >
                <a href="https://www.xyzfoundation.net/xyz-registration-form.js"><img src={require('../assets/form.png')} width="100px" height="100px" /></a>
                <View style={{ height: "100px", width: "100px" }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Members')}>
                    <img src={require('../assets/Member.png')} width="100px" height="100px" />
                  </TouchableOpacity>
                </View>
                <a href="https://www.facebook.com/xyzfoundation.net/"><img src={require("../assets/Facebook.png")} width="100px" height="100px" /></a>
              </View>
              <br />
              <View style={{ flexDirection: "row" }} >
                <View style={{ height: "100px", width: "100px" }} >
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Volunteers')}>
                    <img src={require('../assets/Volunteers.png')} width="100px" height="100px" />
                  </TouchableOpacity>
                </View>
                <View style={{ height: "100px", width: "100px" }} >
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Donor')}>
                    <img src={require('../assets/Donor.png')} width="100px" height="100px" />
                  </TouchableOpacity>
                </View>
                <a href="https://www.instagram.com/xyzfoundation/"><img src={require("../assets/Insta.png")} width="100px" height="100px" /></a>
              </View>
              <br />
              <View style={{ flexDirection: "row" }} >
                <View style={{ height: "100px", width: "100px" }} >
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("Pourushap's Platoon")}>

                    <img src={require('../assets/PPlogo.png')} width="100px" height="100px" />
                  </TouchableOpacity>
                </View>

                <View style={{ height: "100px", width: "100px" }} >
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("Artaxerxes’ Army")}>

                    <img src={require('../assets/AAlogo.png')} width="100px" height="100px" />
                  </TouchableOpacity>
                </View>
                <a href="https://m.youtube.com/channel/UCZoewoIEkkAa8QAONueEuRg"><img src={require("../assets/YT.png")} width="100px" height="100px" /></a>
                <br />
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Seniors")}>
                <img src={require('../assets/Senior.png')} width="243px" height="107px" />
              </TouchableOpacity>

            </center>
          </View>
        </Body>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    alignItems: "center",
    margin: "auto"
  },

  styleImage: {
    flex: 0,
    padding: 0
  }
})

/*

  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  <div id="mySidebar" class="sidebar">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
        </div>

  <style>

  main-of
body {
  font-family: "Lato", sans-serif;
}

.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f1f1f1;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #000000;
  display: block;
  transition: 0.3s;
}


.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #ffffff;
  color: Black;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #f1f1f1;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}
*/

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
/*
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
*/

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


<div id="main">

<br/>
<center><Image src="../assets/xyz-logo-1.png"/>
<br/>
<br/>
<a href="https://www.xyzfoundation.net/xyz-registration-form.js"><Image src="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\assets\form.png" width="100px" height="100px"/></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\MembersScreen.js"><Image src="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\assets\Member.png" width="100px" height="100px"/></a>
<a href="https://www.facebook.com/xyzfoundation.net/"><Image src="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\assets\Facebook.png" width="100px" height="100px"/></a>
<br/>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\VolunteersScreen.js "><Image src="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\assets\Volunteers.png" width="100px" height="100px"/></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\DonorScreen.js"><Image src="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\assets\Donor.png" width="100px" height="100px"/></a>
<a href="https://www.instagram.com/xyzfoundation/"><Image src="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\assets\Insta.png" width="100px" height="100px"/></a>
<br/>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\PPScreen.js"><Image src="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\assets\PPlogo.png" width="100px" height="100px"/></a>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\AAScreen.js"><Image src="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\assets\AAlogo.png" width="100px" height="100px"/></a>
<a href="https://m.youtube.com/channel/UCZoewoIEkkAa8QAONueEuRg"><Image src="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\assets\YT.png" width="100px" height="100px"/></a>
<br/>
<a href="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\screens\SeniorsScreen.js"><Image src="C:\Users\asus\Documents\XYZ\XYZ Application\XYZ_application\assets\Senior.png" width="243px" height="107px"/></a>
</center>
</div>

<script>
function openNav() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}

export default HomeScreen;
</script>
</body>
</html>

*/