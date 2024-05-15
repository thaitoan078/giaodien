import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputBox from "../components/Form/InputBox";

const Register = ({ navigation }) => {
  const loginImage = require("../assets/otohub.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // login function
  const handleRegister = () => {
    // validation
    if (!name || !password || !email || !phone) {
      return alert("Vui lòng nhập thông tin");
    }
    const formData = {
      name,
      password,
      email,
      phone,
    };
  };

  return (
    <View style={styles.container}>
      <Image source={loginImage} style={styles.image} />
      <Text style={styles.text}>Đăng ký</Text>
      <InputBox
        placeholder={"Tên đăng nhập"}
        value={name}
        setValue={setName}
        autoComplete={"name"}
      />

      <InputBox
        value={password}
        setValue={setPassword}
        placeholder={"Mật khẩu"}
        secureTextEntry={true}
      />

      <InputBox
        placeholder={"Email"}
        value={email}
        setValue={setEmail}
        autoComplete={"email"}
      />

      <InputBox
        placeholder={"Số điện thoại"}
        value={phone}
        setValue={setPhone}
        autoComplete={"name"}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Đăng ký</Text>
        </TouchableOpacity>
        <Text>
          Bạn đã có tài khoản ?{"  "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            Đăng nhập
          </Text>
        </Text>
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
export default Register;
