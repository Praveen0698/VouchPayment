import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase } from "firebase/database";

// export const firebaseConfig = {
//   apiKey: "AIzaSyCgc1Hg05f_CVWQL7tDvDXdMGTzx9VbWi0",
//   authDomain: "vouch-payment-814eb.firebaseapp.com",
//   projectId: "vouch-payment-814eb",
//   storageBucket: "vouch-payment-814eb.appspot.com",
//   messagingSenderId: "474450961307",
//   appId: "1:474450961307:web:835b96f9260f27eb8e373e",
//   measurementId: "G-1K278XXGZB",
// };

export const firebaseConfig = {
  apiKey: "AIzaSyCgc1Hg05f_CVWQL7tDvDXdMGTzx9VbWi0",
  authDomain: "vouch-payment-814eb.firebaseapp.com",
  databaseURL: "https://vouch-payment-814eb-default-rtdb.firebaseio.com",
  projectId: "vouch-payment-814eb",
  storageBucket: "vouch-payment-814eb.appspot.com",
  messagingSenderId: "474450961307",
  appId: "1:474450961307:web:835b96f9260f27eb8e373e",
  measurementId: "G-1K278XXGZB",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = getDatabase();
