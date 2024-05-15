import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../App.styles';
const Header = ({ navigation }) => {
  const headerImage = require("../../assets/otohub.png");

  // Hàm xử lý sự kiện khi người dùng nhấn nút tìm kiếm
  const handleSearch = () => {
    // Thực hiện các hành động tìm kiếm ở đây
    console.log('Tìm kiếm...');
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.icon}>
        <Image source={headerImage} style={styles.himage} />
        <TouchableOpacity 
          style={styles.iconContainer} 
          onPress={() => navigation.navigate('Notifications')}
        >
          <Icon name="bell" size={24} color="#093371" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm"
        />
        <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}>
          <Icon name="search" size={20} color="#093371" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
