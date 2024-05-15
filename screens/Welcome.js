import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import hook useNavigation
import styles from '../App.styles'
const Welcome = () => {
  const navigation = useNavigation(); // Lấy đối tượng navigation từ hook useNavigation

  useEffect(() => {
    const timer = setTimeout(() => {
      // Điều hướng đến màn hình 'Login' sau 5 giây
      navigation.navigate('Login');
    }, 5000);

    return () => clearTimeout(timer); // Xóa bỏ hẹn giờ khi component unmount
  }, [navigation]); // Đảm bảo rằng navigation là một phần của dependencies của useEffect

  return (
    <View style={[styles.container, localStyles.container]}>
      <Text style={localStyles.text}>Welcome</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default Welcome;
