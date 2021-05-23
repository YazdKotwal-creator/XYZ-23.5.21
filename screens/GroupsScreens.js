import React, { Component } from "react";
import { View, Font, Text, StyleSheet, Image, Pressable } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";


export default class GroupsScreens extends Component {
    render() {
    return (
        <div id="main">
            <br />
            <center><img
                src={require("../assets/xyz-logo-1.png")} />
                <br />
                <TouchableOpacity onPress={() => props.navigation.navigate("GroupBB")}>
                    <Text style={{ color: "#ff0000" }}>Behram's Battalion</Text>
                </TouchableOpacity>
                <br /><br />
                <TouchableOpacity onPress={() => props.navigation.navigate("GroupCS")}>
                    <Text style={{ color: "#f2d600" }}>Cyrus’ Superstars</Text>
                </TouchableOpacity><br /><br />
                <TouchableOpacity onPress={() => props.navigation.navigate("GroupDD")}>
                    <Text style={{ color: "#000ff" }}>Daraius’ Daredevils</Text>
                </TouchableOpacity><br /><br />
                <TouchableOpacity onPress={() => props.navigation.navigate("GroupJG")}>
                    <Text style={{ color: "#00bb00" }}>Jamshed's Giants</Text>
                </TouchableOpacity><br /><br />
                <TouchableOpacity onPress={() => props.navigation.navigate("GroupKC")}>
                    <Text style={{ color: "#ffc0cb" }}>Ketayun’s Conquerors</Text>
                </TouchableOpacity><br /><br />
                <TouchableOpacity onPress={() => props.navigation.navigate("GroupNK")}>
                    <Text style={{ color: "#800080" }}>Noshirwan’s Knights</Text>
                </TouchableOpacity><br /><br />
                <TouchableOpacity onPress={() => props.navigation.navigate("GroupRR")}>
                    <Text style={{ color: "#767676" }}>Rustom’s Rockstars</Text>
                </TouchableOpacity><br /><br />
                <TouchableOpacity onPress={() => props.navigation.navigate("GroupTT")}>
                    <Text style={{ color: "#ffa500" }}>Tehmurasp’s Titans</Text>
                </TouchableOpacity><br /><br />
            </center>
        </div>
    )
}}

/*
export function BBScreen(props) {
    return (
        <body>
            <div id="main">
                <br />
                <center>
                    <Image src={require('../assets/xyz-logo-1.png')} />
                    <br />
                    <h1>Behram's Battalion</h1>
                    <br />
                    <Image src={require("../assets/BB.jpg")} />
                    <br />
Behram's Battalion is based out
of Dadar, Wadala and Parel. The
kids of BB like to be innovative
in their fundays and try to
make each activity a lasting
memory for all members. They
have made a life size Znakes
and Zadders and introduced the
concept of BB Badges to
engage the members in XYZ
related activities to basically have
a lot of fun.
</center>
            </div>
        </body>
    )
}

export function CSScreen(props) {
    return (
        <body>
            <div id="main">
                <br />
                <center>
                    <Image src={require('../assets/xyz-logo-1.png')} />
                    <br />
                    <h1>Cyrus’ Superstars</h1>
                    <br />
                    <Image src={require("../assets/CS.jpg")} />
                    <br />
            The Cyrus’ Superstars are kids
      from Godrej Baug, Kharegat
      Colony and the Tardeo area.
      Singing and creating songs is
      their forte. Their fundays are
      novel and fun-filled which
      include fusion Parsi food,
      enjoying Gujarati theatre,    
      visiting the Theobroma factory,
      Glass painting with seniors,
      dance sessions with parents.
  </center>
            </div>
        </body>
    )
}

export function DDScreen(props) {
    return (
        <body>
            <div id="main">
                <br />
                <center>
                    <Image src={require('../assets/xyz-logo-1.png')} />
                    <br />
                    <h1>Daraius’ Daredevils</h1>
                    <br />
                    <Image src={require("../assets/DD.jpg")} />
                    <br />
            The Daraius’ Daredevils are based in Cusrow
      Baug and cater to the colony kids along with
      children in and around Colaba and Fort.
      While the kids take part in all the activities,
      literary arts, nature, religion, social service,
      outdoor games and sporting activities are
      enjoyed the most. All in all the
      Daredevils are a fun loving bunch of kids.
  </center>
            </div>
        </body>
    )
}

export function JGScreen(props) {
    return (
        <body>
            <div id="main">
                <br />
                <center>
                    <Image src={require('../assets/xyz-logo-1.png')} />
                    <br />
                    <h1>Jamshed's Giants</h1>
                    <br />
                    <Image src={require("../assets/JG.jpg")} />
                    <br />
            Jamshed's Giants are an integral
      part of XYZ situated in the heart
      of Byculla. They are a bunch of
      happy go lucky kids who
      believe in having loads of fun
      and putting in their best
      foot forward. The children are
      extremely creative and have
      loads of fun at all events.
          </center>
            </div>
        </body>
    )
}

export function KCScreen(props) {
    return (
        <body>
            <div id="main">
                <br />
                <center>
                    <Image src={require('../assets/xyz-logo-1.png')} />
                    <br />
                    <h1>Ketayun’s Conquerors</h1>
                    <br />
                    <Image src={require("../assets/KC.jpg")} />
                    <br />
            Ketayun’s Conquerors is made
      up the girls from the boarding
      section of the Bai Ava Bai
      Framji Petit School. An
      extremely energized and hands
      on group with a competitive
      spirit. They have been winners
      of the Best XYZ Group Award
      twice in the last 5 years. Being
      boarders, most of the activities
      happen within the premises of
      the school. The girls themselves
      take care of pets, do gardening,
      come up with amazing
      entrepreneurial ideas such
      as mehendi, painting canvas,
      dancing for a show etc.
      They learn Gujarati and Prayers
      from their teachers and also
      learn a lot about the
      Zoroastrian religion from
      our Mobeds.
          </center>
            </div>
        </body>
    )
}

export function NKScreen(props) {
    return (
        <body>
            <div id="main">
                <br />
                <center>
                    <Image src={require('../assets/xyz-logo-1.png')} />
                    <br />
                    <h1>Noshirwan’s Knights</h1>
                    <br />
                    <Image src={require("../assets/NK.jpg")} />
                    <br />
            The Noshirwan’s Knights from
      Thana are a small but a super
      charged group. They just
      completed 3 years and are
      proud to be part of XYZ. They
      have never missed doing a
      funday from the time of
      inception. Their brilliant fundays
      have been an educational
      where the kids learn composting
      and organic farming. They
      have also made rakhis and
      photo frames and are brilliant
      at creating innovative games
      for getting their parents and
      seniors to enjoy. The
      Noshirwan’s Knights work
      towards raising funds,
      collecting food grains and
      donating the same and serving
      the hungry.
  </center>
            </div>
        </body>
    )
}

export function RRScreen(props) {
    return (
        <body>
            <div id="main">

                <br />
                <center>
                    <Image src={require('../assets/xyz-logo-1.png')} />
                    <br />
                    <h1>Rustom’s Rockstars</h1>
                    <br />
                    <Image src={require("../assets/RR.jpg")} />
                    <br />
            The Rustom’s Rockstars group
      caters to children located in the
      Bandra-Mahim vicinity. This team
      of super enthusiastic and ambitious
      Rockstars have totally lived up to
      two significant values - “make a
      difference” and “fun while you
      learn”.They take pride in learning
      Gujarati, holding Humbandagis and
      partake in Parsi customs. They love
      exploring their adventurous side
      amidst nature and animals. Above
      all, they spread cheer through acts
      of kindness and community service.
  </center>
            </div>
        </body>
    )
}

export function TTScreen(props) {
    return (
        <body>
            <div id="main">

                <br />
                <center>
                    <Image src={require('../assets/xyz-logo-1.png')} />
                    <br />
                    <h1>Tehmurasp’s Titans</h1>
                    <br />
                    <Image src={require("../assets/TT.jpg")} />
                    <br />
            The Tehmurasp’s Titans are
      from the Andheri area with kids
      from Salsette, Behram Baug,
      PanthakyBaug, etc. These kids
      are masters at indoor games
      and have won the XYZ Indoor
      Mania trophy thrice. It's a fun
      group who has done really well
      at Social Service activities in
      the past 5 years. They have
      raised funds to feed children
      the mid-day meals and collected
      numerous story books with the
      help of all the XYZ groups and
      donated the same to set up
      libraries in Anganwadis in Karjat.
  </center>
            </div>
        </body>
    )
}
*/