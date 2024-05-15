import React, { useState } from "react";
import InputBox from "../components/Form/InputBox";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const Login = ({ navigation }) => {
  const loginImage = require("../assets/otohub.png");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please add email or password");
    }
    alert("Login Successfully");
    navigation.navigate("HomePage");
  };

  const handleRegisterNavigation = () => {
    navigation.navigate("Register");
  };

  const handleResetPasswordNavigation = () => {
    navigation.navigate("Resetpassword"); // Điều hướng đến trang đổi mật khẩu
  };

  return (
    <View style={styles.container}>
      <Image source={loginImage} style={styles.image} />
      <Text style={styles.text}>Đăng nhập</Text>
      <InputBox
        placeholder={"Tên đăng nhập"}
        value={email}
        setValue={setEmail}
        autoComplete={"email"}
      />
      <InputBox
        value={password}
        setValue={setPassword}
        placeholder={"Mật khẩu"}
        secureTextEntry={true}
      />
      <View style={styles.btnContainer}>
      <Text style={styles.btnContainer}>
        Quên mật khẩu?{"  "}
        <Text
          style={styles.link}
          onPress={handleResetPasswordNavigation} // Gọi hàm điều hướng khi nhấn vào nút "Đổi mật khẩu"
        >
          Đổi mật khẩu
        </Text>
      </Text>    
      </View>
      
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Đăng nhập</Text>
        </TouchableOpacity>
        <Text>
          Bạn chưa có tài khoản?{"  "}
          <Text
            style={styles.link}
            onPress={handleRegisterNavigation}
          >
            Đăng ký
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B2C6EE",
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
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Login;
