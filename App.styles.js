import { StyleSheet } from "react-native";
import color from "./contains/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B2C6EE",
    height: "100%",
    justifyContent: "center",
  },
  homecontainer: {
    flex: 1,
    backgroundColor: "#B2C6EE",
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
  input: {
    width: "80%",
    backgroundColor: "#ffffff",
    height: 40,
    paddingLeft: 10,
    borderRadius: 10,
    color: "#000000",
    borderWidth: 1,
    borderColor: "gray",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#B2C6EE",

    position: "absolute",
    bottom: 0,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  ficonContainer: {
    alignItems: "center",
  },
  iconText: {
    fontSize: 12,
    color: "#093371",
    marginTop: 5,
  },

  headerContainer: {
    width: "100%",
    backgroundColor: "#B2C6EE",
    paddingBottom: 5,
    paddingTop: 40,
    position: "absolute",
    top: 0,
    zIndex: 999,
  },
  himage: {
    height: 60,
    width: 60,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom : 5,
    marginHorizontal: 20, // Khoảng cách giữa thanh tìm kiếm và lề trái phải
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10, // Đảm bảo padding ở bên phải để chứa icon
  },
  searchInput: {
    flex: 1,
    paddingVertical: 0,
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  iconContainer: {
    paddingRight: 20,
  },

  item: {
    borderRadius: 20,
    paddingTop: 20,
    marginVertical: 6,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 20,
  },
  garage: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  textgarage: {
    paddingLeft: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  bannerimg: {
    paddingTop: 20,
    width: 400,
    height: 300,
    borderRadius: 5
  },
  
});

export default styles;
