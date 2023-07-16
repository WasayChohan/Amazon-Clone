// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/compat/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6SHivAxcOy3A4fvOGfSCETe3u4_ITt5U",
  authDomain: "clone-d8b6a.firebaseapp.com",
  projectId: "clone-d8b6a",
  storageBucket: "clone-d8b6a.appspot.com",
  messagingSenderId: "721561587193",
  appId: "1:721561587193:web:973435ca82fc9357a24128",
  measurementId: "G-XRC3HZCP76",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
