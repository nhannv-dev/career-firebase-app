import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_WoiaVS265s7mbEIuJeYQH_3FVzNdocQ",
  authDomain: "career-firebase-app-419b6.firebaseapp.com",
  projectId: "career-firebase-app-419b6",
  storageBucket: "career-firebase-app-419b6.appspot.com",
  messagingSenderId: "333723930992",
  appId: "1:333723930992:web:93abb042b383a7aaaa3fb5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { firebase, auth, provider, db, storage };
