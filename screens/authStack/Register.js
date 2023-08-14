import React, { useState } from "react";
import { db } from "../../config";
import { ref, set } from "firebase/database";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Register = ({ navigation }) => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [referral, setReferral] = useState("");

  const pressHandler = () => {
    set(ref(db, "posts/" + username), {
      fName: fName,
      lName: lName,
      username: username,
      email: email,
      mobile: mobile,
      referral: referral,
    });
    setFname("");
    setLname("");
    setUsername("");
    setEmail("");
    setMobile("");
    setReferral("");

    navigation.navigate("Verify", { mobile });
  };
  return (
    <View
      styles={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Text style={styles.sign}>Sign up!</Text>
      <View style={styles.container}>
        <View style={styles.inputCont}>
          <Text style={styles.text}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first Name"
            value={fName}
            onChangeText={(text) => setFname(text)}
          />
        </View>
        <View style={styles.inputCont}>
          <Text style={styles.text}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last Name"
            value={lName}
            onChangeText={(text) => setLname(text)}
          />
        </View>
        <View style={styles.inputCont}>
          <Text style={styles.text}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your unique username(max 30 char)"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputCont}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email id"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputCont}>
          <Text style={styles.text}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="For ex: 9898989898"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={(text) => setMobile(text)}
          />
        </View>
        <View style={styles.inputCont}>
          <Text style={styles.text}>Referral Code (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="For ex: NEWUSER"
            value={referral}
            onChangeText={(text) => setReferral(text)}
          />
        </View>

        <TouchableOpacity style={styles.paymentBtn} onPress={pressHandler}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  sign: {
    color: "#3a0ca3",
    textAlign: "left",
    fontSize: 35,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 80,
    fontWeight: "500",
  },
  inputCont: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 10,
  },
  input: {
    width: 330,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 15,
    borderColor: "#e3d5ca",
  },
  text: {
    fontSize: 20,
    marginLeft: 15,
    marginBottom: 3,
    color: "#4a4e69",
  },
  paymentBtn: {
    width: 250,
    height: 50,
    backgroundColor: "#3a0ca3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 15,
  },
});

export default Register;
