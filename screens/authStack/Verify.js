import React, { useState, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../config";
import firebase from "firebase/compat/app";

const Verify = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recapatchaVerifier = useRef(null);

  const route = useRoute();
  const num = route.params?.mobile;

  const sendVerification = () => {
    if (phoneNumber == num) {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(`+91${phoneNumber}`, recapatchaVerifier.current)
        .then(setVerificationId);
      setPhoneNumber("");
    } else {
      Alert.alert("Phone Number did not match!!!");
    }
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
      })
      .catch((err) => {
        alert(err);
      });
    navigation.navigate("Home");
  };

  return (
    <View style={styles.main}>
      <Text style={styles.sign}>OTP Verification</Text>
      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recapatchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <Text style={styles.otpText}>Confirm Mobile Number</Text>
        <TextInput
          placeholder="For ex: 9898989898"
          keyboardType="phone-pad"
          autoCompleteType="tel"
          onChangeText={setPhoneNumber}
          style={styles.textInput}
        />

        <TouchableOpacity
          style={styles.sendVerification}
          onPress={sendVerification}
        >
          <Text style={styles.buttonText}>Send Verification</Text>
        </TouchableOpacity>
        <View style={styles.finalBtn}>
          <TextInput
            placeholder="Enter the OTP recieved"
            onChangeText={setCode}
            keyboardType="number-pad"
            style={styles.textInput}
          />

          <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
            <Text style={styles.buttonText}>Confirm Verification</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Verify;

const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  sign: {
    color: "#3a0ca3",
    fontSize: 35,
    marginBottom: 50,
    paddingLeft: 40,
    fontWeight: "500",
  },
  textInput: {
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    fontSize: 16,
    borderBottomColor: "#4a4e69",
    borderWidth: 1,
    borderColor: "#9f86c0",
    marginBottom: 20,
    textAlign: "center",
    color: "#4a4e69",
    justifyContent: "center",
    alignItems: "center",
  },
  sendVerification: {
    padding: 15,
    backgroundColor: "#3a0ca3",
    borderRadius: 10,
  },
  sendCode: {
    padding: 10,
    backgroundColor: "#3a0ca3",
    borderRadius: 10,
  },
  finalBtn: {
    marginTop: 100,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  otpText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a4e69",
    margin: 10,
  },
});
