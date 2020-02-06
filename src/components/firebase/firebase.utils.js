import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyC907U1xMcFgvDclqP4JeBAUDqFUaGPAwY",
  authDomain: "clothstore-2fa7b.firebaseapp.com",
  databaseURL: "https://clothstore-2fa7b.firebaseio.com",
  projectId: "clothstore-2fa7b",
  storageBucket: "clothstore-2fa7b.appspot.com",
  messagingSenderId: "410874825955",
  appId: "1:410874825955:web:7ee82a08adf44022ab89d6",
  measurementId: "G-C9Y1E2QX11"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
