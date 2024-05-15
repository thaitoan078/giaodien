import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../App.styles';
const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('HomePage')}>
        <Icon name="home" size={24} color="#093371" />
        <Text style={styles.iconText}>Trang chủ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('TrafficMap')}>
        <Icon name="car" size={24} color="#093371" />
        <Text style={styles.iconText}>Giao thông</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Notifications')}>
        <Icon name="list" size={24} color="#093371" />
        <Text style={styles.iconText}>Đơn hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Account')}>
        <Icon name="user" size={24} color="#093371" />
        <Text style={styles.iconText}>Tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Footer;
