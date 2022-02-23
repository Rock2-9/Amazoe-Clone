import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmhvN-d6gDEf0iBq01tpJURB2EZ5WaBIk",
  authDomain: "clone-d34b8.firebaseapp.com",
  projectId: "clone-d34b8",
  storageBucket: "clone-d34b8.appspot.com",
  messagingSenderId: "21043016802",
  appId: "1:21043016802:web:c0aa363f58b66eef570d3b",
  measurementId: "G-77WXF0HYHY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//Use these for db &
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
