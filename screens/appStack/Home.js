import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Platform,
  TextInput,
} from "react-native";

const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={{ padding: 0, margin: 0 }}>
      <ImageBackground
        source={require("../assets/backImage.png")}
        style={styles.background}
      >
        <TouchableOpacity style={styles.roundButton1} onPress={pressHandler}>
          <Text style={styles.btn}>P</Text>
        </TouchableOpacity>
        <View style={styles.payCont}>
          <Text
            style={{
              fontSize: 26,
              paddingTop: 10,
              color: "#3a0ca3",
              fontWeight: "600",
            }}
          >
            Your Protected Payments
          </Text>
          <Text
            style={{
              fontSize: 18,
              width: "70%",
              fontWeight: "300",
              paddingTop: 10,
              color: "#4a4e69",
              textAlign: "center",
            }}
          >
            We are excited for you to protect your first payment!!
          </Text>
        </View>
      </ImageBackground>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Find people who are vouched"
        />
      </View>
      <View
        style={{
          marginTop: 10,
          borderTopWidth: 0.6,
          borderLeftWidth: 0.6,
          borderRightWidth: 0.6,
          borderColor: "#4a4e69",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              marginTop: 15,
              borderTopWidth: 4,
              width: 30,
              borderColor: "#4a4e69",
            }}
          ></Text>
        </View>
        <Text
          style={{
            fontSize: 24,
            color: "#4a4e69",
            marginLeft: 40,
            marginTop: 10,
          }}
        >
          Recent
        </Text>
        <View style={styles.btnCombo}>
          <View style={styles.btnCont}>
            <View style={styles.buttons}>
              <Image
                source={require("../assets/all.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <Text style={styles.btnText}>All {"\n"}Notifications</Text>
          </View>
          <View style={styles.btnCont}>
            <View style={styles.buttons}>
              <Image
                source={require("../assets/who.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <Text style={styles.btnText}>Who is {"\n"}Using</Text>
          </View>
          <View style={styles.btnCont}>
            <View style={styles.buttons}>
              <Image
                source={require("../assets/help.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <Text style={styles.btnText}>Help{"\n"}Bot</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <TouchableOpacity style={styles.paymentBtn}>
          <Text
            style={{
              fontSize: 30,
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontWeight: "300",
            }}
          >
            +
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 30,
              color: "#fff",
              fontWeight: "500",
            }}
          >
            New Payments
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "auto",
    paddingBottom: 25,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  roundButton1: {
    marginLeft: "80%",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "grey",
  },
  btn: {
    color: "white",
    fontWeight: "900",
  },
  payCont: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 65,
    margin: 12,
    borderWidth: 1,
    borderRadius: 50,
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    color: "#4a4e69",
  },
  btnCombo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10,
  },
  buttons: {
    backgroundColor: "#3a0ca3",
    display: "flex",
    padding: 20,
    margin: 10,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  btnCont: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "#4a4e69",
  },
  paymentBtn: {
    width: 250,
    height: 50,
    backgroundColor: "#3a0ca3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    flexDirection: "row",
  },
});

export default Home;
