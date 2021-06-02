import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0_trsBcK7LLqei9f4opZSD9FS-qItz8M",
  authDomain: "react-todo-c2a44.firebaseapp.com",
  projectId: "react-todo-c2a44",
  storageBucket: "react-todo-c2a44.appspot.com",
  messagingSenderId: "844042964767",
  appId: "1:844042964767:web:f1e5e971340210956eaa2a",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
