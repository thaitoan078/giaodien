import React, { useState } from "react";
import InputBox from "../components/Form/InputBox";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const Resetpassword = ({ navigation }) => {
  const loginImage = require("../assets/otohub.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetpassword = () => {
    if (!email || !password) {
      return alert("Please add email or password");
    }
    alert("Thay đổi thành công");
    navigation.navigate("Login"); // Điều hướng đến trang đăng nhập khi thay đổi mật khẩu thành công
  };

  const backtologin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={loginImage} style={styles.image} />
      <Text style={styles.text}>Đổi mật khẩu</Text>
      <InputBox
        placeholder={"Tên đăng nhập"}
        value={email}
        setValue={setEmail}
        autoComplete={"email"}
      />

      <InputBox
        value={password}
        placeholder={"Mật khẩu mới"}
        secureTextEntry={true}
      />

      <InputBox
        value={password}
        placeholder={"Mã xác nhận"}
        secureTextEntry={true}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={resetpassword}>
          <Text style={styles.loginBtnText}>Lưu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={backtologin}>
          <Text style={styles.loginBtnText}>Trở về đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B2C6EE',
    // alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
  text :{
    textAlign: 'center',
    fontSize : 30,
    fontWeight: 'bold'
  }
});

export default Resetpassword;
