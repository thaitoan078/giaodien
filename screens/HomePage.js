import React, { useState } from "react";
import InputBox from "../components/Form/InputBox";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import styles from "../App.styles";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList
  } from "react-native";
  const Home = ({ navigation }) => {
  const loginImage = require("../assets/otohub.png");
  const bannerImage = require("../assets/banner.jpg")
  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    
  ];
  const Item = ({title}) => (
    <View style={styles.item}>
      <Image source={bannerImage} style={styles.bannerimg} />
    </View>
  );
    return(
    <View style={styles.homecontainer}>

        <Header/>

        <View>
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        horizontal={true}
       />
        </View>
      <View>
      <Text style={styles.textgarage}>
         Garage phổ biến hiện nay:
      </Text>
      </View>
      
      <Footer/>
      
    </View>
  );
};
 export default Home
   